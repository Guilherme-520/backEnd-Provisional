const db = require("./index")

const GrandeAreas = db.sequelize.define("GrandeAreas",{
    idGrandeAreas:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    /*GrandeArea:{
        type: db.Sequelize.STRING
    }
    */
    Nome:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.STRING
    }

});


module.exports = GrandeAreas;
