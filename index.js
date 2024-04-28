const express = require('express')
const app     = express()
const db      = require('./models')
const cors    = require('cors')
const path    = require('path');

app.use(express.json())
app.use(cors())

app.use("/uploads", express.static('uploads'));

// http://localhost:3001/public/dall-e-2.webp


//Rotas
const org = require('./routes/organizador')
app.use("/organizador",org)

const arquivos = require('./routes/arquivos')
app.use("/arquivos", arquivos)

const atividades = require('./routes/atividade')
app.use("/atividade", atividades)

const evento = require('./routes/evento')
app.use("/evento", evento)

const ouvinte = require('./routes/ouvinte')
app.use("/ouvinte", ouvinte)
app.use("/ouvinte/:id", ouvinte)

const comissao = require('./routes/comissao')
app.use("/comissao", comissao)
app.use("/comissao/:id", comissao)

const comissaoADM = require('./routes/comissaoADM')
app.use("/comissaoADM", comissaoADM)
app.use("/comissaoADM/:id", comissaoADM)

const editorChefe = require('./routes/editorChefe')
app.use("/editorChefe", editorChefe)
app.use("/editorChefe/:id", editorChefe)

const convidado = require('./routes/convidado')
app.use("/convidado", convidado)
app.use("/convidado/:id", convidado)

const usuario = require('./routes/usuario')
app.use("/usuario", usuario)
app.use("/usuario/:id", usuario)


db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Server running on port 3001")
    })
})

