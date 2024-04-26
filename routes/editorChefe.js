const express = require('express')
const router = express.Router()
const editorChefe = require('../models/editorChefe');


router.get('/', async(req, res)=>{
    const com = await editorChefe.findAll();
    res.json(com)
})


router.get('/:id', async(req, res)=>{
  const id = req.params.id;
  const com = await editorChefe.findByPk(id);
  res.json(com)
})

router.post("/", async(req, res)=>{
    const novo = req.body

    try {
        const edtc = await editorChefe.create(novo)
        res.json(edtc)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar editorChefe '+ error.message });
    }
})


router.put("/:id", async(req, res)=>{
    const id = req.params.id;
  const novosDados = req.body;

  try {
    const edct = await editorChefe.update(novosDados, {
      where: {
        id: id,
      },
    });

    if (edct[0] === 1) {
      res.json({ message: 'editorChefe atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'editorChefe não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar editorChefe ' + error.message });
  }
})


module.exports = router;
