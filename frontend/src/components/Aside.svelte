<script>
    import { RouterLink } from 'svelte-easyroute'
    import { sorted } from './stores'

</script>

<aside>
    {#each $sorted as pers}
          <RouterLink to={'/person/' + pers[0]}>{pers[1]}</RouterLink>
    {/each}
</aside>
