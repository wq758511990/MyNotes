const express = require('express')
const app = express()

app.get('/api/info', (req, res) => {
  res.json({
    hello: 'express'
  })
})

app.listen(3000, () => {
  console.log('running on 3000...')
})