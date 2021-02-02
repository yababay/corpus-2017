<script>

    import { onMount, onDestroy } from "svelte"
    import { parseDOTNetwork, Network } from 'vis-network/esnext'

    export let data
    
    let graphHolder, graph

    onMount(()=> {
        graph = new Network(graphHolder, parseDOTNetwork(data), {autoResize: false})
    })

    onDestroy(()=> {
        graph.destroy()
    })

</script>
<div class="graph-holder" bind:this={graphHolder}></div>

