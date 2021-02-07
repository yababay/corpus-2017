const dotenv = require('dotenv').config({path: '../../backend/wiki-parser/.env'})
const Persons = require('../../backend/wiki-parser/persons.js')
const fs = require('fs')

;(async () => {
    try{
        await Persons.then(arr => arr.map(el => {
            const {id, name, canonicalurl} = el
            return [id, {name, canonicalurl}]
        }))
        .then(arr => {
            fs.writeFileSync( '../src/components/persons.js', 'export default new Map(')
            fs.appendFileSync('../src/components/persons.js', JSON.stringify(arr) + ')')
        })
    }
    catch(err){console.log(err)}
})()
