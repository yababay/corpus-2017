<script>
    import { onMount, onDestroy } from "svelte"
    import { useCurrentRoute } from "svelte-easyroute"
    import { parseDOTNetwork, Network } from './vis-network.min.js'

    let canvasHolder, dotNetwork

    const clearCanvasHolder = () => {
        while(canvasHolder.firstChild) canvasHolder.remove(canvasHolder.firstChild)
        return true
    }

    const unsubscribe = useCurrentRoute((currentRoute) => {
        const { params, meta } = currentRoute
        const person = meta.get(params.id)
        const { name, canonicalurl } = person
        dotNetwork = 
            fetch(`data/${params.id}.dot`)
                .then(res => res.status == 200 && res.text() || clearCanvasHolder() && Promise.reject('Данные для построения графа не найдены.'))
                .then(data => new Network(canvasHolder, parseDOTNetwork(data)) && Promise.resolve({name, canonicalurl}))
    })


    onDestroy(unsubscribe)

</script>

<figure>
    <div class="canvas-holder" bind:this={canvasHolder}></div>
    <figcaption>
        {#await dotNetwork}
            <span>Ожидаются данные...</span>
        {:then data}
            <a target="_blank" href={data.canonicalurl}>{data.name} в Википедии</a>
        {:catch error}
            <span style="color: red">{error}</span>
        {/await}
    </figcaption>
</figure>
