const db = require('./index');

const comissaoAdm = db.sequelize.define("CorpoEditorial",{
    idCorpoEditorial:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    Nome :{
        type: db.Sequelize.VARCHAR
    },
    Email :{
        type: db.Sequelize.VARCHAR
    },
    Senha :{
        type: db.Sequelize.VARCHAR
    },
    AreaConhecimento :{
        type: db.Sequelize.VARCHAR
    },
    SubAreas :{
        type: db.Sequelize.VARCHAR
    },
    cpf :{
        type: db.Sequelize.VARCHAR
    },
    linkLattes :{
        type: db.Sequelize.VARCHAR
    },
    funcao :{
        type: db.Sequelize.VARCHAR
    },
    periodo :{
        type: db.Sequelize.VARCHAR
    },
    instituicao :{
        type: db.Sequelize.VARCHAR
    },
    
})

module.exports = comissaoAdm;