import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs/promises'
import { serveStatic } from './utils/serveStatic.js'
import { handleGet, handlePost } from './utils/handleRouters.js'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    if(req.url === '/api/sightings' && req.method === 'GET'){
        return await handleGet(res)
    } else if(req.url === '/api/upload-sightings' && req.method === 'POST'){
        return await handlePost(req, res)
    }
    if(!req.url.startsWith('/api')){
        return await serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => console.log(`server connected and listening in port: ${PORT}`))