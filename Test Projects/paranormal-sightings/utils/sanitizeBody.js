import sanitizeHtml from 'sanitize-html'

export const sanitizeBody = (data) => {
    const sanitizedData = {}

    for(const [key, value] of Object.entries(data)){
        if(typeof value === 'string'){
            sanitizedData[key] = sanitizeHtml(value)
        } else{
            sanitizedData[key] = value
        }
    }
}