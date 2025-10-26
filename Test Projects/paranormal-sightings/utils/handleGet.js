import { getData } from './getData.js'
import { sendResponse } from './sendResponse.js'

export const handleGet = async (res) => {
        const data = await getData()
        const payload = JSON.stringify(data)
        sendResponse(res, 200, 'application/json', payload)
}