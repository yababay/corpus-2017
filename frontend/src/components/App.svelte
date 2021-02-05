<script>

  import { EasyrouteProvider, RouterOutlet } from 'svelte-easyroute'
  import { router } from './router'
  import Header from './Header.svelte'
  import Main   from './Main.svelte'
  import Aside  from './Aside.svelte'
  import Footer from './Footer.svelte'
  import Donate from './Donate.svelte'

</script>

<EasyrouteProvider {router}>
    <Header />
    <!-- Aside / -->
    <Main />
    <!-- Donate / -->
    <Footer />
</EasyrouteProvider>
