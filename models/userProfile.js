const db = require("./index")

const UserProfiles = db.sequelize.define("UserProfiles", {
    idUserProfile:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    Nome:{
        type: db.Sequelize.STRING
    },
    Email:{
        type: db.Sequelize.STRING
    },
    Senha:{
        type: db.Sequelize.STRING
    },
    Cargo:{
        type: db.Sequelize.STRING
    }
})


module.exports = UserProfiles