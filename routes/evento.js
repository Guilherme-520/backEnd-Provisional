const express = require('express');
const router = express.Router();
const Eventos = require('../models/evento')

router.get('/', async (req, res) => {
    const eve = await Eventos.findAll();
    res.json(eve)
});

router.post("/", async (req, res) => {
    const eve = req.body;
    try {
        const novo = await Eventos.create(eve)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Eventos '+ error.message });
    }
});

module.exports = router;
