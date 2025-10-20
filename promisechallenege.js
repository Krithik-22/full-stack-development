function preLoadImg(url){
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.alt = 'A beautiful image'
        img.addEventListener('load',() => resolve(img))
        img.addEventListener('error',() => reject('Error while loading image')) 
    })
}