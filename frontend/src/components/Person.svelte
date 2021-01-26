<script>
    import {onMount} from 'svelte'
    import {parseDOTNetwork, Network} from './vis-network.min.js'

    let canvasHolder 

    onMount(() => {
        fetch('data/akhmatova.dot')
            .then(res => res.text())
            .then(data => new Network(canvasHolder, parseDOTNetwork(data)))
    })


</script>

<figure>
    <div class="canvas-holder" bind:this={canvasHolder}></div>
    <figcaption>Get browser details using.</figcaption>
</figure>
