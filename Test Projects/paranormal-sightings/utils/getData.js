import path from 'node:path'
import fs from 'node:fs/promises'
import { sanitizeBody } from './sanitizeBody.js'

const dataPath = path.join('data','sightings.json')

export const getData = async () => {
    try {
            const data = await fs.readFile(dataPath, 'utf-8')
            const jsonData = JSON.parse(data)
            return jsonData
        } catch (err) {
            console.log(err)
            return []
        }
}


export const updateData = async (parsedBody) => {
    try{
        const data = await getData()
        const sanitizedData = sanitizeBody(parsedBody)
        data.push(sanitizedData)
        fs.writeFile(dataPath, JSON.stringify(data), 'utf-8')
    } catch(err){
        console.log(err)
    }
}