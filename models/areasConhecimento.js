const db = require("./index")

const AreaConhecimentos = db.sequelize.define("AreaConhecimentos",{
    nome:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    },

});


module.exports = AreaConhecimentos;