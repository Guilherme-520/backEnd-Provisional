const express = require('express');
const router = express.Router();
const { ArquivoSubmetidos } = require("../../model/db");

router.get('/arquivos', async (req, res) => {
    try {
      const arquivos = await ArquivoSubmetidos.findAll({ where: { idEventos: req.query.eventoId } });
      res.json(arquivos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao visualizar arquivos', error: error.message });
    }
  });
  