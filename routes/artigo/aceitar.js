const express = require('express');
const router = express.Router();
const { Eventos } = require("../../model/db");

// Rota para o avaliador aceitar o evento
router.post('/:idEvento/aceitar', async (req, res) => {
    try {
        const { idEvento } = req.params;

        // Buscar o evento e definir o campo 'aceito' como verdadeiro (1)
        const evento = await Eventos.findByPk(idEvento);

        if (!evento) {
            return res.status(404).json({ message: 'Evento não encontrado' });
        }

        evento.aceito = 1; // Definindo o evento como aceito
        await evento.save();

        res.json({ message: 'Evento aceito!' });

    } catch (error) {
        console.error('Erro ao aceitar o evento:', error);
        res.status(500).json({ message: 'Erro ao aceitar o evento' });
    }
});

module.exports = router;
