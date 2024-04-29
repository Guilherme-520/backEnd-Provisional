
const db = require("./index")

const Ouvintes = db.sequelize.define("Ouvintes", {
    Curso:{
        type: db.Sequelize.STRING
    },
    Curso:{
        type: db.Sequelize.STRING
    },
    Presenca:{
        type: db.Sequelize.INTEGER
    },
    idUserProfile:{
        type: db.Sequelize.INTEGER
    },
    idInstituicao:{
        type: db.Sequelize.INTEGER
    }
})


module.exports = Ouvintes