import { readable, writable, derived } from 'svelte/store'
import persons from './persons'

export const sorted = readable(Array.from(persons.entries()).map(([id, pers]) => [id, pers.name]).sort((a, b) => {
        let aName = a[1].split(' ')
        let bName = b[1].split(' ')
        aName = aName.length > 1 ? aName[1] : aName[0]
        bName = bName.length > 1 ? bName[1] : bName[0]
        return aName.localeCompare(bName)
}))

const dotError = {error: 'Не удалось получить данные для построения графа.'}

export const id = writable(null)

export const dot = writable(null)

export const person = derived(id, $id => persons.get($id))

const onHashChange = () => { 
    const arr = /^\#\/person\/([a-z_]+)$/.exec(window.location.hash)
    if(!arr || !arr[1]) return
    id.set(arr[1])
    fetch(`/data/${arr[1]}.dot`)
        .then(res => res.status == 200 && res.text() || Promise.reject(dotError))
        .then(txt => dot.set(txt))
        .catch(err => dot.set(err))
}

window.onhashchange = onHashChange

onHashChange()
