<script>

    import { onMount, onDestroy } from "svelte"
    import { parseDOTNetwork, Network } from 'vis-network/esnext'

    export let data
    
    let graphHolder

    onMount(()=> {
        let graph = new Network(graphHolder, parseDOTNetwork(data), {autoResize: false})
    })

</script>
<div class="graph-holder" bind:this={graphHolder}></div>

