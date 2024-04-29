const db = require('./index');

const Eventos = db.sequelize.define("Eventos",{
    nomeADM:{
        type: db.Sequelize.STRING
    },
    emailADM:{
        type: db.Sequelize.STRING
    },
    
    nomeEventos:{
        type: db.Sequelize.STRING
    },
    emailEventos:{
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
        //Eventos publico ou privado
        type: db.Sequelize.STRING
    },
    anais:{
        type: db.Sequelize.STRING
    },
    certificados:{
        type: db.Sequelize.STRING
    },
    rhp:{
        //tipo do Eventos: remoto, hibrido ou presencial
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
        //data de inicio do Eventos
        type: db.Sequelize.DATE
    },
    dataFim :{
        //data do fim do Eventos
        type: db.Sequelize.DATE
    },
    horarioIni :{
        //horario de inicio do Eventos
        type: db.Sequelize.TIME
    },
    horarioFim :{
        //horario do fim do Eventos
        type: db.Sequelize.TIME
    },
    periodo :{
        //periodo do Eventos: manhã, tarde ou noite
        type: db.Sequelize.STRING
    }
})

module.exports = Eventos;