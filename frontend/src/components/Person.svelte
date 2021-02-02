<script>
    import { onMount, onDestroy } from "svelte"
    import { person, dot } from './stores'
    import { parseDOTNetwork, Network } from 'vis-network/esnext'

    export let outlet, router, currentRoute

    let holder, name = '', url = '', graph

    onMount(() => {
        person.subscribe(pers => {
            if(!pers) return
            url = pers.canonicalurl
            name = pers.name
        })
        dot.subscribe(data => {
            if(!data) return
            if(data.error) {
                holder.textContent = data.error
                return
            }
            if(graph) graph.destroy()
            graph = new Network(holder, parseDOTNetwork(data), {autoResize: false})
        })
    })

    onDestroy(() => {
        if(graph) graph.destroy()
        //person.unsubscribe()
        //dot.unsubscribe()
    })

</script>

<figure>
    <div class="graph-holder" bind:this={holder}></div>
    <figcaption>
            <a target="_blank" href={url}>{name} в Википедии</a>
    </figcaption>
</figure>
