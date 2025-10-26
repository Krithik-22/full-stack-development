import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs/promises'

const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {
    
})

server.listen(PORT, () => console.log(`server connected and listening in port: ${PORT}`))