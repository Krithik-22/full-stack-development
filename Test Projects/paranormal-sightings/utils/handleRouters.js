import { getData, updateData } from './getData.js'
import { sendResponse } from './sendResponse.js'
import { parseJSONBody } from './parseJSONBody.js'

export const handleGet = async (res) => {
        const data = await getData()
        const payload = JSON.stringify(data)
        sendResponse(res, 200, 'application/json', payload)
}

export const handlePost = async (req, res) => {
        console.log("handling POST Request......");
        const parsedBody = await parseJSONBody(req)
        updateData(parsedBody)
        sendResponse(res, 200, 'application/json', JSON.stringify(parsedBody))
}