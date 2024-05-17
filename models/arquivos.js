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
    inicioSubmissao :{
        type: db.Sequelize.STRING
    },
    finalSubmissao :{
        type: db.Sequelize.STRING
    },
    inicioAvaliacao :{
        type: db.Sequelize.STRING
    },
    finalAvaliacao :{
        type: db.Sequelize.STRING
    },
    normasPublicacao :{
        type: db.Sequelize.STRING
    },
     modeloArquivos:{
        type: db.Sequelize.STRING
    },
    modeloApresentacao:{
        type: db.Sequelize.STRING
    },
    apresentacao:{
        type: db.Sequelize.BOOLEAN

    }
})

module.exports = Arquivos;