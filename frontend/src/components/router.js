import Router   from 'svelte-easyroute'
import Index    from './Index.svelte'
import About    from './About.svelte'
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
            component: About,
            name: 'About me'
        },
        {
            path: '/premium',
            component: Premium,
            name: 'About me'
        },
        {
            path: '/contacts',
            component: Contacts,
            name: 'About me'
        },
    ]
})
