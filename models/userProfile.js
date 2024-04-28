const db = require("./index")

const UserProfile = db.sequelize.define("UserProfile", {
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


module.exports = UserProfile