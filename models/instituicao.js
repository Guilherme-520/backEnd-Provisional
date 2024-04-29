const db = require("./index")

const Instituicoes = db.sequelize.define("Instituicoes", {
    idInstituicao :{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    Nome:{
        type: db.Sequelize.STRING
    },
    CNPJID:{
        type: db.Sequelize.STRING
    }
})


module.exports = Instituicoes