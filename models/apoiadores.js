const db = require("./index")

const apoiadores = db.sequelize.define("Apoiadores",{
    Nome:{
       
        type: db.Sequelize.STRING
    },
  
})

module.exports = apoiadores;