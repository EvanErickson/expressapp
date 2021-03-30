const express = require("express");
const app = express();
const port = 3000
const Products = require('./products.js');

app.get('/', (req, res) => {
    console.log(res)
    res.send('Hello World')
})

app.get('/products/:id', (req, res) => {
    console.log(req)
    res.json(req.params)
    res.json(Products.find((product) => {
        return req.params.id === product.id
    }))
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
