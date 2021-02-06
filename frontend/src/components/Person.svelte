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

<style>

:root {
    --figure-margin:  0px;
    --figure-border:  0px;
    --figure-padding: .5rem;
    --figcaption-height: 2rem;
    --figure-height: calc(var(--main-min-height) - (var(--figure-border) + var(--figure-margin) + var(--figure-padding)) * 2);
    --canvas-height: calc(var(--figure-height) - var(--figcaption-height));
}

figure {
    border: var(--figure-border) solid #ddd;
    margin: var(--figure-margin) auto  var(--figure-margin) auto;
    padding: var(--figure-padding);
    height: var(--figure-height);
    display: flex;
    flex-direction: column;
}

figcaption {
    text-align: center;
    height: var(--figcaption-height);
    line-height: var(--figcaption-height);
    margin: 0;
    padding: 0;

}

.graph-holder, .graph-error {
    width: 100%;
    height: var(--canvas-height);
}

/*
.graph-holder canvas{
    background-color: #eee;
}

.graph-error {
    line-height: var(--canvas-height);
    color: red;
    text-align: center;
}
*/
</style>
