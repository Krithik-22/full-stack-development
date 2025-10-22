export const sendJSONResponse = (res, statusCode, payload) => {
    res.setHeader('Content-type','application/json')
    res.statusCode = statusCode
    res.write(JSON.stringify(payload))
    res.end()
}