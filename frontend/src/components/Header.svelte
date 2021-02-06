<script>
    import Nav from './Nav.svelte'
</script>

<header>
    <img class="no-link" src="img/logo.svg" alt="Лица эпохи">
    <a href="#/persons"><img src="img/logo.svg" alt="Лица эпохи"></a>
    <Nav />
</header>

<style>

    header {
        height: var(--header-height);
        line-height: var(--header-height);
        border-bottom: var(--header-border) solid silver;
        padding-bottom: var(--header-padding); 
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header img {
        height: calc(var(--header-height) * .5);
        margin: 12px 0 0 1rem;
        padding: 0;
    }

    header .no-link {
        display: none;
    }

/*
    header ul {
        margin-right: 1rem; 
    }

    header li {
        display: inline-block;
        text-align: right;
        margin-left: 1rem; 
    }
    */

</style>
