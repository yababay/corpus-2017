<script>
    import { RouterLink } from 'svelte-easyroute'
    import { sorted } from './stores'

</script>

<aside>
    {#each $sorted as pers}
          <RouterLink to={'/person/' + pers[0]}>{pers[1]}</RouterLink>
    {/each}
</aside>

<style>

aside {
    max-width: 320px;
}
aside a {
  display: block;
  color: black;
  padding:.7rem .5rem .7rem 2rem;
  text-decoration: none;
}

aside a.active {
  background-color: #4CAF50;
  color: white;
}

aside a:hover:not(.active) {
  background-color: #555;
  color: white;
}

</style>
