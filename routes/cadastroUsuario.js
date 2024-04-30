const express = require('express');
const router = express.Router();
const UserProfiles = require('../models/userProfile')
const Instituicoes = require('../models/instituicao')
const Ouvinte = require('../models/ouvinte')

router.get('/', async (req, res) => {
    const uspfl = await UserProfiles.findAll();
    res.json(uspfl)
});



// Falta mexer ainda

// router.post("/", async (req, res) => {
//     const uspfl = req.body;
//     const Nome = req.body.Nome
//     const Email = req.body.Email
//     const Senha = req.body.Senha
//     const Instituicao = req.body.Instituicao
//     const Curso = req.body.Curso
//     const Periodo = req.body.Periodo

//     try {

//         const novoinst = await Instituicao.create(ninsti)




//         const novo = await UserProfiles.create(uspfl)
//         res.json(novo);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Erro ao criar UserProfiles '+ error.message });
//     }
// });

module.exports = router;
