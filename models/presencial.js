const db = require("./index")

const Presenciais = db.sequelize.define("Presenciais", {
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


module.exports = Presenciais