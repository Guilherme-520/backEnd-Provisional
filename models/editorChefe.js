const db = require("./index")

const Editorchefes = db.sequelize.define("EditorChefes", {
    LinkLattes:{
        type: db.Sequelize.STRING
    },
    Status:{
        type: db.Sequelize.STRING
    },
    idInstituicao:{
        type: db.Sequelize.INTEGER
    },
    idUserProfile:{
        type: db.Sequelize.INTEGER
    }
})


module.exports = Editorchefes