const express = require('express')
const router = express.Router()
const convidado = require('../models/convidado');


router.get('/', async (req, res) => {
  const convidados = await convidado.findAll();
  res.json(convidados)
})


router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const convidados = await convidado.findByPk(id);
  res.json(convidados)
})

router.post("/", async (req, res) => {
  const novo = req.body

  try {
    const novoConvidado = await convidado.create(novo)
    res.json(novoConvidado)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar convidado ' + error.message });
  }
})


router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const novosDados = req.body;

  try {
    const convidadoAtualizado = await convidado.update(novosDados, {
      where: {
        id: id,
      },
    });

    
    if (convidadoAtualizado[0] === 1) {
      res.json({ message: 'Convidado atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Convidado não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar convidado ' + error.message });
  }
})


module.exports = router;