<script>
    import Persons from './Persons.svelte'

</script>

<aside>
    <Persons />
</aside>

<style>
    aside {display: none;}

    @media (min-width: 720px) {
        aside {
            display: block;
            height: var(--main-min-height);
            overflow: auto;
            max-width: 360px;
        }
    }

</style>
