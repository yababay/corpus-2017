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

:root {
    --persons-padding: .5rem;
/*    --persons-height: calc(var(--main-min-height) - var(--aside-padding) * 2); */
}

.persons {
    padding: var(--persons-padding);
}

@media (min-width: 720px) {
    aside {
        max-width: 320px;
    }
}

.persons a {
  display: block;
  color: black;
  padding: .5rem;
  text-align: center;
  text-decoration: none;
}

.persons a.active {
  background-color: #4CAF50;
  color: white;
}

.persons a:hover:not(.active) {
  background-color: #555;
  color: white;
}
</style>
