const express = require('express');
const router = express.Router();
const { Eventos, Arquivos, Avaliadores, AutorArquivos, Autores, AvaliadorSubAreas, SubAreas, Especialidades, ArquivoEspecialidades} = require("../../model/db");

router.post('/:nomeURL/distribuir', (req, res) => {

    try{
        // Busca o evento pelo nomeURL
        const event = await Eventos.findOne(req.params.nomeURL)

        // Caso o evento não exista
        if(!event){
            return res.status(404).send('Evento não encontrado')
        }

        // Armazenando informações em arrays
        const arq = await Arquivos.findAll()
        const avali = await Avaliadores.findAll()

        // Filtros para fazer a distribuição
        /*
        const arqAvali = arq.filter(elements => avali.includes(elements))
        const userAvali = users.filter(item1, avali.some(item2 => item2.idUserProfile === item1.idUserProfile && item2.idInstituicao === item1.idInstituicao))
        */

        for(i = 0; i < 2; i++){
            // Percorre todos os arquivos do evento
            for(u= 0; u < arq.length;){

                // Seleciona um avaliador aletório do Evento 
                const avaliRandom = Math.floor(Math.random() * avali.length);

                // Acha o autor do Arquivo selecionado
                const autorArq = await AutorArquivos.find(item1 => item1.idArquivo === arq[u].idArquivo)
                const autor = await Autores.find(item => item.idAutor === autorArq.idAutor)

                // Achando a especialidade do Avaliador
                const autorSub = await AvaliadorSubAreas.find(item => item.idAvaliadores === avali[avaliRandom].idAvaliadores)

                // Achando a especialidade do Arquivo
                const arqEspe = await ArquivoEspecialidades.find(item => item.idArquivo === arq[u].idArquivo)
                const espec = await Especialidades.find(item => item.idEspecialidades === arqEspe.idEspecialidades)
                const subAreas = await SubAreas.find(item => item.idSubArea === espec.idSubArea)
                const subArq = await AvaliadorSubAreas.find(item => item.idSubArea === subAreas.idSubArea)

                // Condições para que o arquivo seja ou não eniado
                if(autor.idUserProfiles === avali[avaliRandom].idUserProfiles || autor.idInstituicoes === avali[avaliRandom].idInstituicoes || subArq.idSubArea === autorSub.idSubArea || arq[u].historyAvali === avali[avaliRandom].idAvaliadores){

                }else{
                    arq[u].historyAvali = avali[avaliRandom].idAvaliadores
                    u++
                }
            }
        }
    }

})