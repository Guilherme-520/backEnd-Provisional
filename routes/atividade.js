const express = require('express');
const router = express.Router();
const atividade = require('../models/atividade')

router.get('/', async (req, res) => {
    const ati = await atividade.findAll();
    res.json(ati)
});

router.post("/", async (req, res) => {
    const ati = req.body;
    try {
        const novo = await atividade.create(ati)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar atividade '+ error.message });
    }
});

module.exports = router;
