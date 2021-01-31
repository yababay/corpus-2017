<script>
    export let persons;
    const showPerson = (e, pers) => {
        e.preventDefault()
        alert(pers)
    }
</script>

<ul>
    {#each persons as pers}
        <li><a href='#' on:click={e => showPerson(e, pers[0])}>{pers[1]}</a></li>   
    {/each}
</ul>
