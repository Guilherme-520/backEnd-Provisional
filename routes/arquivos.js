const express  = require('express');
const router   = express.Router();
const arquivos = require('../models/arquivos');
const { json, where, Op } = require('sequelize');
const tipoArquivos = require('../models/tipoArquivo')

function slugify(string) {
    return string
        .trim()
}

const multer   = require('multer');
const storage  = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const newFile = {
            originalname: slugify(file.originalname) 
        }
        cb(null, Date.now()+"-"+newFile.originalname)
    }
})

const upload = multer({ dest: 'uploads/', storage: storage })

router.get('/', async (req, res) => {
    const arquivo = await arquivos.findAll();
    res.json(arquivo)
});

router.post('/', upload.fields([
    { name: 'modeloArquivos'},
    { name: 'modeloApresentacao'}
]),async (req,res)=>{
    const dados = req.body
    const data = {
        
        idEvento:           req.body.idEvento,
        idTipoArquivos:      req.body.idTipoArquivos,
        inicioSubmissao:    req.body.inicioSubmissao,
        finalSubmissao:     req.body.finalSubmissao,
        inicioAvaliacao:    req.body.inicioAvaliacao,
        finalAvaliacao:     req.body.finalAvaliacao,
        normasPublicacao:   req.body.normasPublicacao,
        modeloArquivos:      req.files.modeloArquivos[0].path,
        modeloApresentacao: req.files.modeloApresentacao[0].path,
        apresentacao:       req.body.apresentacao,
    }

    res.json(data)

    // try {
    //     console.log(data)
    //     const novo = await arquivos.create(data)

    //     console.log(novo)

    //     res.status(200).json("ok")
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Erro ao criar arquivos '+ error.message });
    // }
})

module.exports = router;
