const db = require("./index")

const TipoAtividades = db.sequelize.define("TipoAtividades", {
    Nome:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.STRING
    }
})

module.exports = TipoAtividades