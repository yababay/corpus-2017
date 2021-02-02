<script>
  import { EasyrouteProvider } from 'svelte-easyroute'
  import { getRouter } from './router.js'
  import Header from './Header.svelte'
  import Main from './Main.svelte'
  import Aside from './Aside.svelte'
  import Footer from './Footer.svelte'
  import persons  from './persons'

  const router = getRouter(persons)

  const sorted = Array.from(persons.entries()).map(([id, pers]) => [id, pers.name]).sort((a, b) => {
        let aName = a[1].split(' ')
        let bName = b[1].split(' ')
        aName = aName.length > 1 ? aName[1] : aName[0]
        bName = bName.length > 1 ? bName[1] : bName[0]
        return aName.localeCompare(bName)
  })

</script>

<EasyrouteProvider {router}>
    <Header />
    <Main />
    <Aside persons={sorted} />
    <Footer />
</EasyrouteProvider>
