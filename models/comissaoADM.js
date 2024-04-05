const db = require('./index');

const comissaoAdm = db.sequelize.define("comissaoAdm",{
    nome:{
        type: db.Sequelize.STRING
    },
    email :{
        type: db.Sequelize.STRING
    },
    senha :{
        type: db.Sequelize.STRING
    },
    cpf:{
        type: db.Sequelize.STRING
    },
    instituicao:{
        type: db.Sequelize.STRING
    },
    areaCon:{
        type: db.Sequelize.STRING
    },
    turno:{
        type: db.Sequelize.STRING
    },
    linkLattes:{
        //Lista de apoiadores
        type: db.Sequelize.STRING
    },
    funcao:{
        //Evento publico ou privado
        type: db.Sequelize.STRING
    },
})

module.exports = comissaoAdm;