const db = require("./index")

const Apoiadores = db.sequelize.define("Apoiadores",{
    Nome:{
       
        type: db.Sequelize.STRING
    },
  
})

module.exports = Apoiadores;