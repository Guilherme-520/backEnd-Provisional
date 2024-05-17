const db = require("./index")

const Especialidades = db.sequelize.define("Especialidades", {
    idEspecialidades:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idSubAreas:{
        type: db.Sequelize.INTEGER
    },
    /*
    idGrandeArea:{
        type: db.Sequelize.INTEGER
    },
    idArea:{
        type: db.Sequelize.INTEGER
    },
    */
    Nome:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.STRING
    }
})


module.exports = Especialidades
