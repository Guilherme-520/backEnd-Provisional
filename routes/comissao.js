const express = require('express')
const router = express.Router()
const comissao = require('../models/comissao');


router.get('/', async(req, res)=>{
    const com = await comissao.findAll();
    res.json(com)
})


router.get('/:id', async(req, res)=>{
  const id = req.params.id;
  const com = await comissao.findByPk(id);
  res.json(com)
})

router.post("/", async(req, res)=>{
    const novo = req.body

    try {
        const novocomissao = await comissao.create(novo)
        res.json(novocomissao)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar comissao '+ error.message });
    }
})


router.put("/:id", async(req, res)=>{
    const id = req.params.id;
  const novosDados = req.body;

  try {
    const comissaoAtualizado = await comissao.update(novosDados, {
      where: {
        id: id,
      },
    });

    if (comissaoAtualizado[0] === 1) {
      res.json({ message: 'comissao atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'comissao não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar comissao ' + error.message });
  }
})


module.exports = router;
