const db = require("./index")

const tipoArquivos = db.sequelize.define("TipoArquivos", {
    idTipoArquivos:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    Nome:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.TEXT
    }
})


module.exports = tipoArquivos;