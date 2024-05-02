const db = require("./index")

const TipoAtividades = db.sequelize.define("TipoAtividades", {
    nome:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    }
})

module.exports = TipoAtividades