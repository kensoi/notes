const express = require('express')
const serveStatic = require('serve-static')

const app = express()
const resolve = require('path').resolve

app.use(
    serveStatic(
        resolve('./build')
    )
)
app.get(
    '/cart-calc', 
    (_req, res) => res.sendFile(resolve('./build/cart-calc/.html'))
)
app.get(
    '/cart-calc/settings', 
    (_req, res) => res.sendFile(resolve('./build/cart-calc/settings.html'))
)

app.listen(
    3000, 
    () => console.log('Started on PORT 3000')
)