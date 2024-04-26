const express = require('express')
const router = express.Router()
const usuario = require('../models/usuario');


router.get('/', async (req, res) => {
  const usuarios = await usuario.findAll();
  res.json(usuarios)
})


router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const usuarios = await usuario.findByPk(id);
  res.json(usuarios)
})

router.post("/", async (req, res) => {
  const novo = req.body

  try {
    const novoUsuario = await usuario.create(novo)
    res.json(novoUsuario)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar usuario ' + error.message });
  }
})


router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const novosDados = req.body;

  try {
    const usuarioAtualizado = await usuario.update(novosDados, {
      where: {
        id: id,
      },
    });

    
    if (usuarioAtualizado[0] === 1) {
      res.json({ message: 'Usuario atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Usuario não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar usuario ' + error.message });
  }
})


module.exports = router;