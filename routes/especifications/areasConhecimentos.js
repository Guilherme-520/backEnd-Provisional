const express = require('express');
const router = express.Router();
const AreasConhecimentos = require('../../models/especifications/areas')

router.get('/', async (req, res) => {
    const arsConhecimento = await AreasConhecimentos.findAll();
    res.json(arsConhecimento)
});

router.post("/", async (req, res) => {
    const arsConhecimento = req.body;
    try {
        const novo = await AreasConhecimentos.create(arsConhecimento)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar AreasConhecimentos '+ error.message });
    }
});

module.exports = router;
