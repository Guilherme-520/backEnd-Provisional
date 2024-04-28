const db = require("./index")

const editorchefe = db.sequelize.define("editorchefe", {
    idEvento:{
        type: db.Sequelize.STRING
    },
    idApoiador:{
        type: db.Sequelize.STRING
    }
})


module.exports = editorchefe