<script>
  import { RouterOutlet } from 'svelte-easyroute'
</script>

<main>
  <RouterOutlet />
</main>

<style>
    main {
        min-height: var(--main-min-height);
        display: flex;
    }
</style>
