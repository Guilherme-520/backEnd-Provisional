const db = require("./index")

const tipoArquivo = db.sequelize.define("TipoArquivos", {
    Nome:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.TEXT
    }
})


module.exports = tipoArquivo;