const db = require("./index")

const Presencial = db.sequelize.define("Presencial", {
    Cep:{
        type: db.Sequelize.STRING
    },
    Estado:{
        type: db.Sequelize.STRING
    },
    Local:{
        type: db.Sequelize.STRING
    },
    Cidade:{
        type: db.Sequelize.STRING
    },
    idEvento:{
        type: db.Sequelize.STRING
    }
})


module.exports = Presencial