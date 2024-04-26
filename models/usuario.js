const db = require("./index")

const usuario = db.sequelize.define("usuario", {
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
    instituicao:{
        type: db.Sequelize.STRING
    },
    periodo:{
        type: db.Sequelize.STRING
    },
    curso:{
        type: db.Sequelize.STRING
    },
})


module.exports = usuario