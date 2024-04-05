const db = require("./index")

const atividades = db.sequelize.define("atividades", {
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

module.exports = atividades