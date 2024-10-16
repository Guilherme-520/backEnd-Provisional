const express = require('express');
const router = express.Router();
const { EventoAvaliadores } = require("../../model/db");

//
router.post('/avaliar-evento/:eventoId', async (req, res) => {
    const { eventoId } = req.params;
    const { aceitar } = req.body; // 'aceitar' deve ser um booleano, true para aceitar, false para recusar
  
    try {
      // Verifica se o avaliador já está vinculado ao evento
      const avaliadorEvento = await EventoAvaliadores.findOne({
        where: { idAvaliadores: req.user.id, idEventos: eventoId }
      });
  
      if (!avaliadorEvento) {
        return res.status(404).json({ message: 'Avaliação de evento não encontrada' });
      }
  
    
        // Verifica se o arquivo existe
        const arquivo = await ArquivosSubmetidos.findByPk(arquivoId);
        if (!arquivo) {
          return res.status(404).json({ message: 'Arquivo não encontrado' });
        }
    
        // Atualiza o status do arquivo para aprovado ou recusado
        await arquivo.update({ status: aceitar ? 'aprovado' : 'recusado' });
  
      res.json({ message: 'Resposta de avaliação atualizada com sucesso', aceito: aceitar });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao responder avaliação de evento', error: error.message });
    }
  });
  