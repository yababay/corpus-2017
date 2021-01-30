const dotenv = require('dotenv').config()
const axios = require('axios')
const fs = require('fs')
const CyrillicToTranslit = require('cyrillic-to-translit-js')
const c2t = new CyrillicToTranslit()
/*
const redis = require('redis')
const bluebird = require('bluebird')
bluebird.promisifyAll(redis)
const creds = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
}

const redisc = redis.createClient(creds)
*/

const redisc = require('./redisc.js')

const wikiApiUrl = 'https://ru.wikipedia.org/w/api.php'

function fetchPerson(person) {
    return axios.get(wikiApiUrl, {
        params: {
            format: 'json',
            list: 'search',
            action: 'query',
            srsearch: person
        }
    })
    .then(function (response) {
        const {data} = response
        if(!data) return Promise.reject('Data are not found.')
        const {query} = data
        if(!query) return Promise.reject('Query is not found.')
        const {search} = query
        if(!search || !search.length) return Promise.reject('Search array is not found.')
        return Promise.resolve(search[0].pageid)
    })
}

function fetchPageProps(pageId) {
    return axios.get(wikiApiUrl, {
        params: {
            format: 'json',
            action: 'query',
            prop: 'info',
            pageids: pageId,
            inprop: 'url'
        }
    })
    .then(function (response) {
        const {data} = response
        if(!data) return Promise.reject('Data are not found.')
        const {query} = data
        if(!query) return Promise.reject('Query is not found.')
        const {pages} = query
        if(!pages) return Promise.reject('Pages are not found.')
        const page = pages['' + pageId]
        if(!page) return Promise.reject('Page is not found.')
        const {pageid, canonicalurl, title} = page
        return Promise.resolve({pageid, canonicalurl, title})
    })
}


(async function(){
    try {
        const data = fs.readFileSync('persons.txt', 'UTF-8');
        const lines = data.split(/\r?\n/).filter(line => line && line.trim())
        await Promise.all(lines.map(line => line.trim()).map(line => {
            return fetchPerson(line)
                .then(fetchPageProps)
                .then(props => {
                    //const {pageid, canonicalurl, title} = props
                    //console.log(`персона(id_${pageid}, "${line}", "${title}", "${canonicalurl}"). % `)
                    props.name = line
                    const fn = c2t.transform(line, '_').toLowerCase()
                    const key = `wiki:person:${fn}`
                    return redisc.hmsetAsync(key, props)
                })
        }))
    }
    catch(err){
        console.log(err)
    }
    finally{
        redisc.quit()
    }
})()
