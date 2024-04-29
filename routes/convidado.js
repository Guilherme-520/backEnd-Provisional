const express = require('express')
const router = express.Router()
const Convidados = require('../models/convidado');


router.get('/', async (req, res) => {
  const Convidadoss = await Convidados.findAll();
  res.json(Convidadoss)
})


router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const Convidadoss = await Convidados.findByPk(id);
  res.json(Convidadoss)
})

router.post("/", async (req, res) => {
  const novo = req.body

  try {
    const novoConvidados = await Convidados.create(novo)
    res.json(novoConvidados)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar Convidados ' + error.message });
  }
})


router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const novosDados = req.body;

  try {
    const ConvidadosAtualizado = await Convidados.update(novosDados, {
      where: {
        id: id,
      },
    });

    
    if (ConvidadosAtualizado[0] === 1) {
      res.json({ message: 'Convidados atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Convidados não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Convidados ' + error.message });
  }
})


module.exports = router;