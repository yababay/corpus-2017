<script>
    import { RouterLink } from 'svelte-easyroute'
    export let persons;
</script>

<aside>
    <ul>
        {#each persons as pers}
            <li>
                  <RouterLink to={'/person/' + pers[0]}>{pers[1]}</RouterLink>
            </li>   
        {/each}
    </ul>
</aside>
