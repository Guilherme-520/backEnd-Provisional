const express = require('express')
const router = express.Router()
const comadmissaoADM = require('../models/comadmissaoADM');


router.get('/', async(req, res)=>{
    const comadm = await comadmissaoADM.findAll();
    res.json(comadm)
})


router.get('/:id', async(req, res)=>{
  const id = req.params.id;
  const comadm = await comadmissaoADM.findByPk(id);
  res.json(comadm)
})

router.post("/", async(req, res)=>{
    const novo = req.body

    try {
        const novocomadmissaoADM = await comadmissaoADM.create(novo)
        res.json(novocomadmissaoADM)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar comadmissaoADM '+ error.message });
    }
})


router.put("/:id", async(req, res)=>{
    const id = req.params.id;
  const novosDados = req.body;

  try {
    const comadmissaoADMAtualizado = await comadmissaoADM.update(novosDados, {
      where: {
        id: id,
      },
    });

    if (comadmissaoADMAtualizado[0] === 1) {
      res.json({ message: 'comadmissaoADM atualizado comadm sucesso.' });
    } else {
      res.status(404).json({ error: 'comadmissaoADM não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar comadmissaoADM ' + error.message });
  }
})


module.exports = router;
