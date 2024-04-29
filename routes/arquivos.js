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
    { name: 'ModeloArquivos'},
    { name: 'ModeloApresentacao'}
]),async (req,res)=>{
    const dados = req.body
    const data = {
        
        idEvento:           req.body.idEvento,
        idTipoArquivos:      req.body.idTipoArquivos,
        InicioSubmisao:    req.body.InicioSubmisao,
        FinalSubmisao:     req.body.FinalSubmisao,
        InicioAvaliacao:    req.body.InicioAvaliacao,
        FinalAvaliacao:     req.body.FinalAvaliacao,
        NormasPublicacao:   req.body.NormasPublicacao,
        ModeloArquivos:      req.files.ModeloArquivos[0].path,
        ModeloApresentacao: req.files.ModeloApresentacao[0].path,
        Apresentacao:       req.body.Apresentacao,
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
