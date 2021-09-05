const porta = 3003
const { urlencoded } = require('body-parser')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
    
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
    
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome, 
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})