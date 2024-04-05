const express = require('express')
const router = express.Router()
const comissaoADM = require('../models/comissaoADM');


router.get('/', async(req, res)=>{
    const comadm = await comissaoADM.findAll();
    res.json(comadm)
})


router.get('/:id', async(req, res)=>{
  const id = req.params.id;
  const comadm = await comissaoADM.findByPk(id);
  res.json(comadm)
})

router.post("/", async(req, res)=>{
    const novo = req.body

    try {
        const novocomissaoADM = await comissaoADM.create(novo)
        res.json(novocomissaoADM)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar comissaoADM '+ error.message });
    }
})


router.put("/:id", async(req, res)=>{
    const id = req.params.id;
  const novosDados = req.body;

  try {
    const comissaoADMAtualizado = await comissaoADM.update(novosDados, {
      where: {
        id: id,
      },
    });

    if (comissaoADMAtualizado[0] === 1) {
      res.json({ message: 'comissaoADM atualizado comadm sucesso.' });
    } else {
      res.status(404).json({ error: 'comissaoADM não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar comissaoADM ' + error.message });
  }
})


module.exports = router;
