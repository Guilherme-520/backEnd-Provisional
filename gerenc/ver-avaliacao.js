const express = require('express');
const router = express.Router();
const { Avaliacoes } = require("../../model/db");


router.get('/avaliacoes/:arquivoId', async (req, res) => {
    const { arquivoId } = req.params;
    try {
      const avaliacoes = await Avaliacoes.findAll({
        where: { idArquivosSubmetidos: arquivoId },
        include: [{ model: RespostasAvaliacoes, where: { idArquivosSubmetidos: arquivoId }, required: false }]
      });
  
      res.json(avaliacoes.slice(0, 3));
    } catch (error) {
      res.status(500).json({ message: 'Erro ao visualizar avaliações', error: error.message });
    }
  });
  