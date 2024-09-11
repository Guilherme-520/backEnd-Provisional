// recusarAvaliacao.js
const express = require('express');
const router = express.Router();
const { Eventos } = require("../../model/db");
//necessito saber qual status na tabela deve ser alterado
// Rota para o avaliador recusar o evento
router.post('/:idEventos/recusar', async (req, res) => {
    try {
        const { idEventos } = req.params;

        // Buscar o evento e definir o campo 'aceito' como falso (0)
        const evento = await Eventos.findByPk(idEventos);

        if (!evento) {
            return res.status(404).json({ message: 'Evento não encontrado' });
        }

        evento.aceito = 0; // Definindo o evento como não aceito
        await evento.save();

        res.json({ message: 'Evento recusado com sucesso!' });

    } catch (error) {
        console.error('Erro ao recusar o evento:', error);
        res.status(500).json({ message: 'Erro ao recusar o evento' });
    }
});

module.exports = router;
