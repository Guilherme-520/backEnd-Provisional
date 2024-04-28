const db = require("./index")

const areaConhecimento = db.sequelize.define("AreaConhecimento",{
    Nome:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.STRING
    },

});


module.exports = areaConhecimento;