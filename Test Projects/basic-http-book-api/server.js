import http from 'node:http'

const PORT = 4000

const server = http.createServer((req, res) => {

})

server.listen(PORT, () => `server is started and running on port ${PORT}`)