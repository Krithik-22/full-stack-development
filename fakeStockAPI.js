const fakeStockAPI = () => {
    let date = new Date()
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    return {
        name: 'QTechAI',
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2),
        date: `${h}:${m}:${s}`
    }
}


const checkStock = () => {
    let oldPrice = 0;
    setInterval(() => {
        console.clear()
        const {name: stockName, sym: stockSymbol, price: stockPrice, date: timestamp} = fakeStockAPI()
        const priceMsg = stockPrice > oldPrice ? `${stockPrice}💹`: stockPrice < oldPrice ? `${stockPrice}🔻` : `${stockPrice}▶`
        oldPrice = stockPrice
        const message = `New Stock Price\nName: ${stockName}\nSymbol: ${stockSymbol}\nprice: ${priceMsg}\nTime: ${timestamp}`
        console.log(message)
    },1500)
}

checkStock()