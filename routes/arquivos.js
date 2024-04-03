const express = require('express');
const router = express.Router();
const arquivos = require('../models/arquivos')
/*
router.get('/', async (req, res) => {
    const eve = await arquivos.findAll();
    res.json(eve)
});
*/
router.post("/arquivos", async (req, res) => {
    //const sql = "INSERT INTO professor (`tipo_arquivo`, `data_ini_sub`,`data_final_sub`, `data_ini_ava`, `data_final_ava`, `normas`, `tipo_usuario`, `area`, `mod_arquivo`, `mod_apresentacao`, `random`) VALUES (?)";
    /*
    # tipo de usuario deve ser alterado possivelmente para a tabela dedicada a hierarquias,
    # necessito de explicação sobre 'cadastrar mais'
    # para adicionar arquivos tentei utilizar o field Blob
    # chamei de plusArquivo pq nn tenho criatividade pra nomes
    */
    const values = [
        req.body.tipoArquivo,
        req.body.dataIniSub,
        req.body.dataFinalSub,
        req.body.dataIniAva,
        req.body.dataFinalAva,
        req.body.normas,
        req.body.tipoUsuario,  
        req.body.area,
        req.body.modArquivo,
        req.body.modApresentacao,
        req.body.plusArquivo
    ]
    try {
        const novo = await arquivos.create(values)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar arquivos '+ error.message });
    }
});

module.exports = router;
