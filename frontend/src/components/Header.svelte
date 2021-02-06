<script>
    import Nav from './Nav.svelte'
</script>

<header>
    <img class="image-without-link" src="img/logo.svg" alt="Лица эпохи">
    <a href="#/persons" class="image-with-link"><img src="img/logo.svg" alt="Лица эпохи"></a>
    <Nav />
</header>

<style>

    header {
        height: var(--header-height);
        border-bottom: var(--header-border) solid silver;
        padding-bottom: var(--header-padding); 
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header img {
        height: calc(var(--header-height) * .6);
        padding: calc(var(--header-height) * .1) 0 0 0;
    }

    header .image-without-link {
        display: none;
    }

    @media (min-width: 720px) {
        header {
            justify-content: space-between;
        }
        header .image-without-link {
            display: block;
            margin-left: 1rem;
        }
        header .image-with-link {
            display: none;
        }
    }

</style>
