const express = require('express');
const router = express.Router();
const arquivos = require('../models/arquivos')

router.get('/', async (req, res) => {
    const arquivo = await arquivos.findAll();
    res.json(arquivo)
});

router.post("/", async (req, res) => {
    const arquivo = req.body;
    try {
        const novo = await arquivos.create(arquivo)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar arquivos '+ error.message });
    }
});

module.exports = router;
