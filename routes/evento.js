const express = require('express');
const router = express.Router();
const Eventos = require('../models/evento')

router.get('/', async (req, res) => {
    const eve = await Eventos.findAll();
    res.json(eve)
});

/*modificação recente, ainda é necessario testar 
router.post('/:idEvento/aceitar', async (req, res) => {
    try {
        const evento = await Eventos.findByPk(req.params.idEvento);
        if (!evento) {
            return res.status(404).json({ error: 'Evento não encontrado' });
        }
        evento.aceito = true;
        await evento.save();
        res.json(evento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao aceitar evento ' + error.message });
    }
});

router.post('/:idEvento/recusar', async (req, res) => {
    try {
        const evento = await Eventos.findByPk(req.params.idEvento);
        if (!evento) {
            return res.status(404).json({ error: 'Evento não encontrado' });
        }
        evento.aceito = false;
        await evento.save();
        res.json(evento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao recusar evento ' + error.message });
    }
});

router.get('/:idEvento/artigos', async (req, res) => {
    try {
        const evento = await Eventos.findByPk(req.params.idEvento);
        if (!evento) {
            return res.status(404).json({ error: 'Evento não encontrado' });
        }
        if (!evento.aceito) {
            return res.status(400).json({ error: 'Evento não aceito' });
        }

        const artigosCompatíveis = await Arquivos.findAll({
            where: {
                idEventos: req.params.idEvento,
                // meter filtros aq 
            }
        });

        res.json(artigosCompatíveis);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar artigos compatíveis ' + error.message });
    }
});
*/

router.post("/", async (req, res) => {
    const eve = req.body;
    try {
        const novo = await Eventos.create(eve)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Eventos '+ error.message });
    }
});

router.put('/:idEvento', async (req, res) => {
    const { idEvento } = req.params;
    const { 
        inicioSubmissao, 
        finalSubmissao, 
        limiteArquivosAutores, 
        limiteAutores, 
        limiteAvaliadores, 
        modeloApresentacao 
    } = req.body;

    try {
        const evento = await Eventos.findByPk(idEvento);

        if (!evento) {
            return res.status(404).json({ error: 'Evento não encontrado' });
        }

        await evento.update({
            inicioSubmissao,
            finalSubmissao,
            limiteArquivosAutores,
            limiteAutores,
            limiteAvaliadores,
            modeloApresentacao
        });

        res.json(evento);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar Evento: ' + error.message });
    }
});

module.exports = router;
