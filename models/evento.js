const { FOREIGNKEYS } = require('sequelize/lib/query-types');
const db = require('./index');

const Eventos = db.sequelize.define("Eventos",{
    idEvento:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    Nome:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.STRING
    },
    AsuntoPrincipal:{
        type: db.Sequelize.STRING
    },
    EmailEventos:{
        type: db.Sequelize.STRING
    },
    Datainicio :{
        type: db.Sequelize.STRING
    },
    DataFinal :{
        type: db.Sequelize.STRING
    },
    HorarioInicio :{
        type: db.Sequelize.STRING
    },
    HorarioFinal :{
        type: db.Sequelize.STRING
    },
    Manha:{
        type: db.Sequelize.BOOLEAN
    },
    Tarde:{  
        type: db.Sequelize.BOOLEAN
    },
    Noite:{
        type: db.Sequelize.BOOLEAN
    },
    Status :{
        type: db.Sequelize.STRING
    },
    Publico :{
        type: db.Sequelize.BOOLEAN
    },
    Formato :{
        type: db.Sequelize.STRING
    },
    Proceedings :{
        type: db.Sequelize.BOOLEAN
    },
    Certificados :{
        type: db.Sequelize.BOOLEAN
    },
    Logo :{
        type: db.Sequelize.STRING
    },
    idEditorChefe:{
        type: db.Sequelize.INTEGER
    }
})

module.exports = Eventos;