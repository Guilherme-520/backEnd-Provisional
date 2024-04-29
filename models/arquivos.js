const db = require('./index');

const Arquivos = db.sequelize.define("Arquivos",{
    idTipoArquivo:{
        type: db.Sequelize.INTEGER
    },
    idEvento:{
        type: db.Sequelize.INTEGER
    },
    InicioSubmissao :{
        type: db.Sequelize.STRING
    },
    FinalSubmissao :{
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
    FinalSubmissao :{
        type: db.Sequelize.STRING
    },
    
    ModeloArquivo:{
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