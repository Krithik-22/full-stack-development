import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
    res.end("Heyy!! I have created my first server.")
})

server.listen(PORT, () => console.log(`server is running on ${PORT}`))