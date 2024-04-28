const express = require('express');
const router = express.Router();
const EventApoiador = require('../models/EventApoiador')

router.get('/', async (req, res) => {
    const evapd = await EventApoiador.findAll();
    res.json(evapd)
});

router.post("/", async (req, res) => {
    const evapd = req.body;
    try {
        const novo = await EventApoiador.create(evapd)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar o apoiador do evento '+ error.message });
    }
});

module.exports = router;
