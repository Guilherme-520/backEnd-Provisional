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
    { name: 'ModeloArquivo'},
    { name: 'ModeloApresentacao'}
]),async (req,res)=>{
    const tipo = {
        NomeTipoArquivos:    req.body.NomeTipoArquivos,
        DescricaoArquivo:   req.body.DescricaoArquivo,
    }


    try {

        const verificarTipo = await tipoArquivos.findAll({
            where:{
                Nome:{
                    [Op.like]: `%${req.body.NomeTipoArquivos}%`
                }
            }
        })

        return verificarTipo;

        
        const novoTipo = await tipoArquivos.create(tipo)

        
    } catch (error) {
        
    }
    const data = {
        
        idEvento:           req.body.idEvento,
        idTipoArquivos:      req.body.idTipoArquivos,
        InicioSubmissao:    req.body.InicioSubmissao,
        FinalSubmissao:     req.body.FinalSubmissao,
        InicioAvaliacao:    req.body.InicioAvaliacao,
        FinalAvaliacao:     req.body.FinalAvaliacao,
        NormasPublicacao:   req.body.NormasPublicacao,
        ModeloArquivo:      req.files.ModeloArquivo[0].path,
        ModeloApresentacao: req.files.ModeloApresentacao[0].path,
        Apresentacao:       req.body.Apresentacao,
    }

    try {
        console.log(data)
        const novo = await arquivos.create(data)

        console.log(novo)

        res.status(200).json("ok")
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar arquivos '+ error.message });
    }
})

// router.post("/", async (req, res) => {
//     const arquivo = req.body;
//     res.json(req.body)
//     console.log(req)
//     // try {
//     //     const novo = await arquivos.create(arquivo)
//     //     res.json(arquivo);
//     // } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ error: 'Erro ao criar arquivos '+ error.message });
//     // }
// });

module.exports = router;
