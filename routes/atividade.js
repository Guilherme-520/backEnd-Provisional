const express = require('express');
const router = express.Router();
const atividades = require('../models/atividades')

router.get('/', async (req, res) => {
    const ati = await atividades.findAll();
    res.json(ati)
});

router.post("/", async (req, res) => {
    const ati = req.body;
    try {
        const novo = await atividades.create(ati)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar atividades '+ error.message });
    }
});

module.exports = router;
