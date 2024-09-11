const express = require('express');
const router = express.Router();
const { Avaliadores } = require("../../model/db");

// Rota para o avaliador aceitar e iniciar a avaliação de um artigo
router.post('/:idAvaliador/avaliar/:idArquivo', async (req, res) => {
    try {
        const { idAvaliador, idArquivo } = req.params;

         // Busca o registro de avaliação do avaliador para o artigo específico pelo ID do arquivo
        const avaliador = await Avaliadores.findOne({ where: { id: idAvaliador, idArquivos: idArquivo } });

        if (!avaliador) {
            return res.status(404).json({ message: 'Avaliação não encontrada' });
        }

        // Atualizar o status da avaliação para "Em Avaliação", isso modifica o status de Avaliador 
        avaliador.status = 'Em Avaliação';
        await avaliador.save();

        res.json({ message: 'Avaliação iniciada com sucesso!' });

    } catch (error) {
        console.error('Erro ao iniciar a avaliação:', error);
        res.status(500).json({ message: 'Erro ao iniciar a avaliação' });
    }
});

module.exports = router;
