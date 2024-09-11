const express = require('express');
const router = express.Router();
const { Arquivos, Eventos, AreaConhecimentos, TipoArquivos } = require("../../model/db");
const path = require('path');

// Rota para visualizar o artigo com informações adicionais
router.get('/:idArquivo/detalhes', async (req, res) => {
    try {
        const { idArquivo } = req.params;

        // Buscar o arquivo no banco de dados, incluindo o evento, área de conhecimento e tipo de arquivo
        const arquivo = await Arquivos.findByPk(idArquivo, {
            include: [
                { model: Eventos }, // Inclui o evento relacionado
                { model: AreaConhecimentos, as: 'areaConhecimento' }, // Inclui a área de conhecimento
                { model: TipoArquivos, as: 'tipoArquivo' } // Inclui o tipo de arquivo
            ]
        });

        if (!arquivo) {
            return res.status(404).json({ message: 'Artigo não encontrado' });
        }

        // Retornar as informações do artigo, tipo de arquivo, e área de conhecimento
        const artigoInfo = {
            titulo: arquivo.tipoArquivo ? arquivo.tipoArquivo.nome : null,
            resumo: arquivo.resumo,
            //abstract: arquivo.abstract,
            palavrasChaves: arquivo.areaConhecimento ? arquivo.areaConhecimento.nome : null,
            //grandeAreas: arquivo.grandeAreas,
            tipoArquivo: arquivo.tipoArquivo ? arquivo.tipoArquivo.nome : null,  // Nome do tipo de arquivo
            caminhoArquivo: path.resolve(__dirname, '..', '..', 'uploads', arquivo.idEvento.toString(), 'arquivos', arquivo.modeloArquivos)  // Caminho do arquivo
        };

        res.json(artigoInfo);

    } catch (error) {
        console.error('Erro ao buscar o artigo:', error);
        res.status(500).json({ message: 'Erro ao buscar o artigo' });
    }
});

module.exports = router;
