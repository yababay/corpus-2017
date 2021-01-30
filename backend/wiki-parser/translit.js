const CyrillicToTranslit = require('cyrillic-to-translit-js')
const fs = require('fs')
const cyrillicToTranslit = new CyrillicToTranslit()

const data = fs.readFileSync('persons.txt', 'UTF-8')
const lines = data.split(/\r?\n/).filter(line => line && line.trim()).map(line => line.trim()).map(line => {
    return line + ' | ' + cyrillicToTranslit.transform(line, '_').toLowerCase()
}).forEach(line => console.log(line))

