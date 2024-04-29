const db = require("./index")

const AreaConhecimentos = db.sequelize.define("AreaConhecimentos",{
    Nome:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.STRING
    },

});


module.exports = AreaConhecimentos;