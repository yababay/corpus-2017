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

:root {
    --aside-padding: .5rem;
    --aside-height: calc(var(--main-min-height) - var(--aside-padding) * 2);
}

aside {
    max-width: 320px;
    overflow: auto;
    height: var(--aside-height);
}

</style>
