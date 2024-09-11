const express = require('express');
const router = express.Router();
const { Avaliadores } = require("../../model/db");

// Rota para o avaliador recusar a avaliação de um artigo
router.post('/:idAvaliador/recusar/:idArquivo', async (req, res) => {
    try {
        const { idAvaliador, idArquivo } = req.params;

        // Buscar o registro de avaliação do avaliador para o artigo pelo ID
        const avaliador = await Avaliadores.findOne({ where: { id: idAvaliador, idArquivos: idArquivo } });

        if (!avaliador) {
            return res.status(404).json({ message: 'Avaliação não encontrada' });
        }

        // Atualizar o status da avaliação para "Recusado", afeta os status de Avaliador
        avaliador.status = 'Recusado';
        await avaliador.save();

        res.json({ message: 'Avaliação recusada com sucesso!' });

    } catch (error) {
        console.error('Erro ao recusar a avaliação:', error);
        res.status(500).json({ message: 'Erro ao recusar a avaliação' });
    }
});

module.exports = router;
