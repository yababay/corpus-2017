import Router from 'svelte-easyroute'
import Index  from './Index.svelte'
import About  from './About.svelte'
import Person from './Person.svelte'
import Premium from './Premium.svelte'
import Contacts from './Contacts.svelte'

export const getRouter = meta => new Router({
    mode: "hash", // "hash", "history" или "silent"
    omitTrailingSlash: true, // нужно ли удалять последний слэш в пути, 
                             // например "/my/path/" => "/my/path"
    routes:[
        {
            path: '/person/:id',
            component: Person,
            name: 'Person',
            meta
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
