// Base URL: 'https://apis.scrimba.com/jsonplaceholder'
// Endpoint: '/posts' 

const fetchData = async () => {
    try {
        const response = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',
            {
                method: 'POST',
                body: JSON.stringify({
                    title: 'Holiday Nightmares',
                    body: 'When I was kidnapped in Scotland...',
                    userId: 22,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok){
            throw new Error('Got an error while fetching data!!!')
        }
        const data = await response.json()
        console.log(data)
    } catch(err){
        console.log(err)
    } finally {
        console.log('Fetching Data Operation completed!!!')
    }
}

fetchData()