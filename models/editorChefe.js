const db = require("./index")

const editorchefe = db.sequelize.define("EditorChefe", {
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    },
    instituicao:{
        type: db.Sequelize.STRING
    },
    linksLattes:{
        type: db.Sequelize.STRING
    },
    status:{
        type: db.Sequelize.STRING
    }
})


module.exports = editorchefe