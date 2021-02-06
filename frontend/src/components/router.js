import Router   from 'svelte-easyroute'
import Intro    from './Intro.svelte'
import Person   from './Person.svelte'
import Persons  from './Persons.svelte'
import Premium  from './Premium.svelte'
import Contacts from './Contacts.svelte'

export const router = new Router({
    mode: "hash",
    omitTrailingSlash: true,
    routes:[
        {
            path: '/persons',
            component: Persons,
        },
        {
            path: '/person/:id',
            component: Person,
        },
        {
            path: '/',
            component: Intro,
        },
        {
            path: '/intro',
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
