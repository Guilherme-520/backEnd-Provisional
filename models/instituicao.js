const db = require("./index")

const Instituicao = db.sequelize.define("Instituicao", {
    Nome:{
        type: db.Sequelize.STRING
    },
    CNPJID:{
        type: db.Sequelize.STRING
    }
})


module.exports = Instituicao