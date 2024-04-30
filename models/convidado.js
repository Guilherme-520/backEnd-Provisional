const db = require("./index")

const Convidados = db.sequelize.define("Convidados", {
    idConvidado:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    Funcao:{
        type: db.Sequelize.STRING
    },
    idUserProfile:{
        type: db.Sequelize.INTEGER
    },
    TempoNecesario:{
        type: db.Sequelize.STRING
    },
    Periodo:{
        type: db.Sequelize.STRING
    }
})


module.exports = Convidados