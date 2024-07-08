const db = require("../index")

const GrandeAreas = db.sequelize.define("GrandeAreas",{
    idGrandeAreas:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    nome:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    }

});


module.exports = GrandeAreas;
