<script>
    import { onMount, onDestroy } from "svelte"
    import { useCurrentRoute } from "svelte-easyroute"
    import { parseDOTNetwork, Network } from './vis-network.min.js'

    let canvasHolder, name, url

    const unsubscribe = useCurrentRoute((currentRoute) => {
        const {params, meta} = currentRoute
        const person = meta.get(params.id)
        name = person.name
        url = person.canonicalurl
    })

    onMount(() => {
        fetch('data/akhmatova.dot')
            .then(res => res.text())
            .then(data => new Network(canvasHolder, parseDOTNetwork(data)))
    })

    onDestroy(unsubscribe)

</script>

<figure>
    <div class="canvas-holder" bind:this={canvasHolder}></div>
    <figcaption><a target="_blank" href={url}>{name} в Википедии</figcaption>
</figure>
