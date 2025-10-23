import http from 'node:http'
import {getDataFromDB} from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()    

    // The below line creates a URL object so that we can access few methods and get some properties of the URL
    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    // The below line converts the query params in a Object format
    const queryObj = Object.fromEntries(urlObj.searchParams)

    if(urlObj.pathname === '/api' && req.method === 'GET'){
        console.log(queryObj)
        sendJSONResponse(res,200,destinations)
    } else if(req.url.startsWith('/api/continent') && req.method === 'GET'){
        const continent = req.url.split('/').pop()
        const filteredData = getDataByPathParams(destinations,'continent',continent)
        sendJSONResponse(res,200,filteredData)
    } else if(req.url.startsWith('/api/country') && req.method === 'GET'){
        const country = req.url.split('/').pop()
        const filteredData = getDataByPathParams(destinations,'country',country)
        sendJSONResponse(res,200,filteredData)
    }
    else{
        sendJSONResponse(res,404,{error: 'Not Found', message: 'The Requested path does not Exist'})
    }

})

server.listen(PORT, () => console.log(`server is running on ${PORT}`))