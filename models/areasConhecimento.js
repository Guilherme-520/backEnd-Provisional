const db = require("./index")

const AreaConhecimentos = db.sequelize.define("AreaConhecimentos",{
    idAreaConhecimentos:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idGrandeAreas:{
        type: db.Sequelize.INTEGER
    },
    Nome:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.STRING
    },

});


module.exports = AreaConhecimentos;
