import express = require("express")
const app: express.Application = express()

app.get('/', (req, res, next) => {
    console.log('index')
    res.send('index')
})

app.listen(3000, () => {
    console.log('3000 listening')
})