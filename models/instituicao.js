const db = require("./index")

const Instituicoes = db.sequelize.define("Instituicoes", {
    Nome:{
        type: db.Sequelize.STRING
    },
    CNPJID:{
        type: db.Sequelize.STRING
    }
})


module.exports = Instituicoes