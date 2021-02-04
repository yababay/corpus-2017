import Router   from 'svelte-easyroute'
import Index    from './Index.svelte'
//import About    from './About.svelte'
import Person   from './Person.svelte'
import Premium  from './Premium.svelte'
import Contacts from './Contacts.svelte'

export const router = new Router({
    mode: "hash",
    omitTrailingSlash: true,
    routes:[
        {
            path: '/person/:id',
            component: Person,
            name: 'Person',
        },
        {
            path: '/',
            component: Index,
            name: 'Index'
        },
        {
            path: '/about',
            component: Index,
            name: 'About'
        },
        {
            path: '/premium',
            component: Premium,
            name: 'Premium'
        },
        {
            path: '/contacts',
            component: Contacts,
            name: 'Contacts'
        },
    ]
})
