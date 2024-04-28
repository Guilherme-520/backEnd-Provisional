const db = require("./index")

const atividade = db.sequelize.define("Atividade", {
    titulo:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    },
    tipo:{
        type: db.Sequelize.STRING
    },
    dia:{
        type: db.Sequelize.STRING
    },
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    horario:{
        type: db.Sequelize.STRING
    }  
})

module.exports = atividade