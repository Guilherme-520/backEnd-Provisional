const db = require("./index")

const SubAreas = db.sequelize.define("SubAreas", {
    idSubArea:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idArea:{
        type: db.Sequelize.INTEGER
    },
    Nome:{
        type: db.Sequelize.STRING
    },
    Descricao:{
        type: db.Sequelize.STRING
    }
    //idAvaliador:{
      //  type: db.Sequelize.INTEGER
    //}
})


module.exports = SubAreas
