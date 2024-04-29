const db = require('./index');

const Arquivos = db.sequelize.define("Arquivos",{
    idArquivo:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idTipoArquivo:{
        type: db.Sequelize.INTEGER
    },
    idEvento:{
        type: db.Sequelize.INTEGER
    },
    InicioSubmisao :{
        type: db.Sequelize.STRING
    },
    FinalSubmisao :{
        type: db.Sequelize.STRING
    },
    InicioAvaliacao :{
        type: db.Sequelize.STRING
    },
    FinalAvaliacao :{
        type: db.Sequelize.STRING
    },
    NormasPublicacao :{
        type: db.Sequelize.STRING
    },
     ModeloArquivos:{
        type: db.Sequelize.STRING
    },
    ModeloApresentacao:{
        type: db.Sequelize.STRING
    },
    Apresentacao:{
        type: db.Sequelize.BOOLEAN

    }
})

module.exports = Arquivos;