const db = require("./index")

const SubAreas = db.sequelize.define("SubAreas", {
    idAreaConhecimento:{
        type: db.Sequelize.INTEGER
    },
    idAvaliador:{
        type: db.Sequelize.INTEGER
    }
})


module.exports = SubAreas