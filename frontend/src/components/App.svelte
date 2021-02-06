<script>

  import { EasyrouteProvider, RouterOutlet } from 'svelte-easyroute'
  import { router } from './router'
  import Header from './Header.svelte'
  import Aside  from './Aside.svelte'
  import Main   from './Main.svelte'
  import Donate from './Donate.svelte'
  import Footer from './Footer.svelte'

</script>

<EasyrouteProvider {router}>
    <Header />
    <Aside />
    <Main />
    <Donate />
    <Footer />
</EasyrouteProvider>
