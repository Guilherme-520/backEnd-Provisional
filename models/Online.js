const db = require("./index")

const Onlines = db.sequelize.define("Onlines", {
    Link:{
        type: db.Sequelize.STRING
    },
    idEvento:{
        type: db.Sequelize.INTEGER
    }
})


module.exports = Onlines