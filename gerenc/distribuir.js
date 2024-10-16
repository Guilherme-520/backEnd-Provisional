const express = require('express');
const router = express.Router();
const { AutorArquivos} = require("../../model/db");
const {ArquivoSubmetidos} = require("../../model/db");

router.post('/distribuir-avaliacoes', async (req, res) => {
    const { eventoId, status } = req.body; // Recebe o status do frontend (aprovado ou recusado)
  
    try {
      const arquivos = await ArquivoSubmetidos.findAll({ where: { idEventos: eventoId } });
  
      for (let arquivo of arquivos) {
        await arquivo.update({ status }); // Atualiza o status diretamente com o valor recebido
  
        // Notifica autores associados ao arquivo
        const autorArquivos = await AutorArquivos.findAll({ where: { idArquivo: arquivo.id } });
        //for (let autorArquivo of autorArquivos) {
          // notifica por email? por msg ?
          //}
      }
  
      res.json({ message: 'Avaliações distribuídas com sucesso', status });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao distribuir avaliações', error: error.message });
    }
  });
  