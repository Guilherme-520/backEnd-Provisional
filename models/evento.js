const db = require('./index');

const evento = db.sequelize.define("evento",{
    nomeADM:{
        type: db.Sequelize.STRING
    },
    emailADM:{
        type: db.Sequelize.STRING
    },
    
    nomeEvento:{
        type: db.Sequelize.STRING
    },
    emailEvento:{
        type: db.Sequelize.STRING
    },
    assunto:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    },
    apoiador:{
        //Lista de apoiadores
        type: db.Sequelize.STRING
    },
    visibilidade:{
        //Evento publico ou privado
        type: db.Sequelize.STRING
    },
    anais:{
        type: db.Sequelize.STRING
    },
    certificados:{
        type: db.Sequelize.STRING
    },
    rhp:{
        //tipo do evento: remoto, hibrido ou presencial
        type: db.Sequelize.STRING
    },
    cep :{
        type: db.Sequelize.STRING
    },
    cidade :{
        type: db.Sequelize.STRING
    },
    estado :{
        type: db.Sequelize.STRING
    },
    local :{
        type: db.Sequelize.STRING
    },
    dataIni :{
        //data de inicio do evento
        type: db.Sequelize.DATE
    },
    dataFim :{
        //data do fim do evento
        type: db.Sequelize.DATE
    },
    horarioIni :{
        //horario de inicio do evento
        type: db.Sequelize.TIME
    },
    horarioFim :{
        //horario do fim do evento
        type: db.Sequelize.TIME
    },
    periodo :{
        //periodo do evento: manhã, tarde ou noite
        type: db.Sequelize.STRING
    }
})

module.exports = evento;