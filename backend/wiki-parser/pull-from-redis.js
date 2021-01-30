const fs = require('fs')
const redisc = require('./redisc.js');
const CyrillicToTranslit = require('cyrillic-to-translit-js')
const c2t = new CyrillicToTranslit()

;(async function(){
    try {
        const keys = await redisc.keysAsync('wiki:*')
        const persons = await Promise.all(keys.map(key => {
            return redisc.hgetallAsync(key)
        }))
        const path = `../prolog/persons-1917/facts/persons.pl`
        if(fs.existsSync(path)) fs.unlinkSync(path)
        persons.forEach(person => {
            const {name} = person
            const id = c2t.transform(name, '_').toLowerCase()
            fs.appendFileSync(path, `персона(${id}, "${name}", "м").\n`)
        })
    }
    catch(err){
        console.log(err)
    }
    finally{
        redisc.quit()
    }
})()
