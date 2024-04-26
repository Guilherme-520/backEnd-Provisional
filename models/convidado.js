const db = require("./index")

const convidado = db.sequelize.define("convidado", {
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    },
    CPF:{
        type: db.Sequelize.STRING
    },
    funcao:{
        type: db.Sequelize.STRING
    }
})


module.exports = convidado