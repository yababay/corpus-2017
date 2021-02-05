import Router   from 'svelte-easyroute'
import Intro    from './Intro.svelte'
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
        },
        {
            path: '/',
            component: Intro,
        },
        {
            path: '/about',
            component: Intro,
        },
        {
            path: '/premium',
            component: Premium,
        },
        {
            path: '/contacts',
            component: Contacts,
        },
    ]
})
