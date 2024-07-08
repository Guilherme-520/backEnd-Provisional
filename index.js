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
const arquivos = require('./routes/assetsFiles/arquivos')
app.use("/arquivos", arquivos)

// Sem Rota
// const tipoArquivo = require('./routes/tipoArquivo')
// app.use("/tipoArquivo", tipoArquivo)

const atividades = require('./routes/especifications/atividade')
app.use("/atividade", atividades)

const evento = require('./routes/evento')
app.use("/evento", evento)
app.use("/evento:idEvento", evento)

const eventApoiador = require('./routes/correlation/eventApoiador')
app.use("/eventApoiador", eventApoiador)

const ouvinte = require('./routes/users/ouvinte')
app.use("/ouvinte", ouvinte)
app.use("/ouvinte/:idOuvinte", ouvinte)

const comissao = require('./routes/users/comissao')
app.use("/comissao", comissao)
app.use("/comissao/:idComissao", comissao)

const corpoEditoriais = require('./routes/users/corpoEditoriais')
app.use("/corpoEditoriais", corpoEditoriais)
app.use("/corpoEditoriais/:idCorpoEditoriais", corpoEditoriais)

// Sem rota
// const CorpoEditorialEventos = require('./routes/corpoEditoriaisEventos')
// app.use("/CorpoEditoriaisEventos", CorpoEditorialEventos)
// app.use("/CorpoEditoriaisEventos/:id", CorpoEditorialEventos)

const editorChefe = require('./routes/users/editorChefe')
app.use("/editorChefe", editorChefe)
app.use("/editorChefe/:idEditorChefe", editorChefe)

const convidado = require('./routes/users/cadastroConvidado')
app.use("/convidado", convidado)
app.use("/convidado/:idConvidado", convidado)

const instituicao = require('./routes/especifications/instuicao')
app.use("/instituicao", instituicao)

const presencial = require('./routes/especifications/presencial')
app.use("/presencial", presencial)

const subAreas = require('./routes/especifications/subAreas')
app.use("/subAreas", subAreas)

const userProfile = require('./routes/users/userProfile')
app.use("/userProfile", userProfile)

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Server running on port 3001")
    })
})

