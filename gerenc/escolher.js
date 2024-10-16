const express = require('express');
const router = express.Router();
const { Eventos } = require("../../model/db");

// Escolher evento - Listar eventos
router.get('/eventos', async (req, res) => {
    try {
      const eventos = await Eventos.findAll();
      res.json(eventos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar eventos', error: error.message });
    }
  });
  
  // Escolher evento - Selecionar evento
  router.post('/eventos/:id/selecionar', async (req, res) => {
    const { id } = req.params;
    try {
      const evento = await Eventos.findByPk(id);
      if (!evento) {
        return res.status(404).json({ message: 'Evento não encontrado' });
      }
  
      // Associa o evento ao avaliador
      await EventoAvaliadores.create({ idAvaliadores: req.user.id, idEventos: id });
      res.json({ message: 'Evento selecionado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao selecionar evento', error: error.message });
    }
  });
  