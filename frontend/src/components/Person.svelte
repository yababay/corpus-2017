<script>
    import { onMount, onDestroy } from "svelte"
    import { person, dot } from './stores'
    import { parseDOTNetwork, Network } from 'vis-network/esnext'

    let holder, name = '', url = '', graph

    export let router
    export let outlet
    export let currentRoute

    onMount(() => {
        
        person.subscribe(pers => {
            if(!pers) return
            url = pers.canonicalurl
            name = pers.name
        })
        dot.subscribe(data => {
            if(!data || !holder) return
            if(data.error) {
                holder.innerHTML = `<p class="graph-error">${data.error}</p>`
                return
            }
            if(graph) graph.destroy()
            graph = new Network(holder, parseDOTNetwork(data), {autoResize: false})
            graph.on('click', e => {
                if(e.nodes.length != 1) return
                router.push(`/person/${e.nodes[0]}`)
            })
        })
    })

    onDestroy(() => {
        if(graph) graph.destroy()
    })

</script>

<figure>
    <figcaption>
        {name}&nbsp;<a target="_blank" href={url}>(см. в Википедии)</a>
    </figcaption>
    <div class="graph-holder" bind:this={holder}></div>
</figure>
