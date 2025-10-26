import path from 'node:path'
import fs from 'node:fs/promises'

export const getData = async () => {
    try {
            const dataPath = path.join('data','sightings.json')
            const data = await fs.readFile(dataPath, 'utf-8')
            const jsonData = JSON.parse(data)
            return jsonData
        } catch (err) {
            console.log(err)
            return []
        }
}