<script>
    import { RouterLink } from 'svelte-easyroute'
    import { sorted } from './stores'

    let persons

    const setActive = e => {
        Array.from(persons.querySelectorAll('a')).forEach(el => el.classList.remove('active'))
        e.target.classList.add('active')
    }

</script>

<div class="persons" bind:this={persons}>
    {#each $sorted as pers}
          <a href={'#/person/' + pers[0]} on:click={setActive}>{pers[1]}</a>
    {/each}
</div>

<style>

.persons {
    padding: .5rem;
}

@media (min-width: 720px) {
    aside {
        max-width: 320px;
    }
}

a {
  display: block;
  color: black;
  padding: .5rem;
  text-align: center;
  text-decoration: none;
}
</style>
