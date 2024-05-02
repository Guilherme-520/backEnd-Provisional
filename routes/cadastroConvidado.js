const express = require('express');
const router = express.Router();
const UserProfiles = require('../models/userProfile')
const Convidados = require('../models/convidado')

router.get('/', async (req, res) => {
    const nusrpfl = await UserProfiles.findAll();
    const ncom = await Convidados.findAll();
    res.json(nusrpfl, ncom)
});

router.post("/", async (req, res) => {
    const Nome = req.body.Nome
    const Email = req.body.Email
    const Senha = req.body.Senha
    const TempoNecesario = req.body.TempoNecesario
    const Periodo = req.body.Periodo
    const Funcao = req.body.Funcao

    try {
        const nusrpfl = await UserProfiles.create(Nome, Email, Senha);
        if (nusrpfl != null) {
            const ncom = await Convidados.create(TempoNecesario, Periodo, Funcao)
            res.json(nusrpfl, ncom)
        }else{
            console.error(error)
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar o convidado '+ error.message });
    }
});

module.exports = router;
