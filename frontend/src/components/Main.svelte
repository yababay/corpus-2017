<script>
  import { RouterOutlet } from 'svelte-easyroute'
</script>

<main>
  <RouterOutlet />
</main>

<style>
    main {
        display: block;
        padding: var(--main-padding);
    }

    @media (min-width: 720px) {
        main {
            height: var(--main-min-height);
            overflow: auto;
        }
    }
</style>
