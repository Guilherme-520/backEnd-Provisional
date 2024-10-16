const express = require('express');
const router = express.Router();
const { Avaliacoes } = require("../../model/db");


router.get('/avaliacoes', async (req, res) => {
    try {
      const avaliacoes = await Avaliacoes.findAll();
      res.json(avaliacoes);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao visualizar avaliações', error: error.message });
    }
  });
  