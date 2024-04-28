const db = require("./index")

const Atividades = db.sequelize.define("Atividades", {
    Titulo:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.STRING
    },
    Dia:{
        type: db.Sequelize.STRING
    },
    Horario:{
        type: db.Sequelize.STRING
    }  
})

module.exports = Atividades