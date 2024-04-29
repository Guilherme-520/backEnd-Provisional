const express = require('express');
const router = express.Router();
const tipoArquivo = require('../models/tipoArquivo')

router.get('/', async (req, res) => {
    const arq = await tipoArquivo.findAll();
    res.json(arq)
});

router.post("/", async (req, res) => {
    const arq = req.body;
    try {
        const novo = await tipoArquivo.create(arq)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar tipo de Arquivo '+ error.message });
    }
});

module.exports = router;
