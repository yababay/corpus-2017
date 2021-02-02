<script>
    import { onMount, onDestroy } from "svelte"
    import { useCurrentRoute } from "svelte-easyroute"
    import Graph from './Graph.svelte'

    let DOTLoader, name, url

    const unsubscribe = useCurrentRoute(currentRoute => {
        const { params, meta } = currentRoute
        const person = meta.get(params.id)
        name = person.name
        url  = person.canonicalurl
        DOTLoader = fetch(`data/${params.id}.dot`)
            .then(res => res.status == 200 && res.text() || Promise.reject('Данные для построения графа не найдены.'))
    })


    onDestroy(unsubscribe)

</script>

<figure>
    {#await DOTLoader}
        <p class="graph-waiter">Ожидаются данные...</p>
    {:then data}
        <Graph {data} />
    {:catch error}
        <p class="graph-error">{error}<p>
    {/await}
    <figcaption>
            <a target="_blank" href={url}>{name} в Википедии</a>
    </figcaption>
</figure>
