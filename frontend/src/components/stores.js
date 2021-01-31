import { readable, writable } from 'svelte/store'
import persons  from './persons'

const sorted = Array.from(persons.entries()).map(([id, pers]) => [id, pers.name]).sort((a, b) => {
        let aName = a[1].split(' ')
        let bName = b[1].split(' ')
        aName = aName.length > 1 ? aName[1] : aName[0]
        bName = bName.length > 1 ? bName[1] : bName[0]
        return aName.localeCompare(bName)
    })

/*
export const customPosition = writable(0)
export const fileNames = writable([])
export const currentPosition = derived([fileNames, customPosition], ([$fileNames, $customPosition])=> $customPosition || Math.floor(Math.random() * $fileNames.length))
export const currentPath = derived([fileNames, currentPosition], ([$fileNames, $currentPosition])=> !$fileNames.length && '' || $fileNames[$currentPosition])
export const currentText = writable('')
export const edited = writable([])
*/
