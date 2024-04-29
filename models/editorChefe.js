const db = require("./index")

const Editorchefes = db.sequelize.define("EditorChefes", {
    idEditorChefe:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
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