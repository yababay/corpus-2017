<script>
    import { RouterLink } from 'svelte-easyroute'
    export let persons;
</script>

<aside>
    {#each persons as pers}
          <RouterLink to={'/person/' + pers[0]}>{pers[1]}</RouterLink>
    {/each}
</aside>
