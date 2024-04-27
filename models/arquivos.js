const db = require('./index');

const arquivos = db.sequelize.define("Arquivo",{
    
    InicioSubmissao:{
        type: db.Sequelize.DATE
    },
    
    FinalSubmissao:{
        type: db.Sequelize.DATE
    },
    InicioAvaliacao:{
        type: db.Sequelize.DATE
    },
    FinalAvaliacao:{
        type: db.Sequelize.DATE
    },
    NormasPublicacao:{
        type: db.Sequelize.STRING
    },
    ModeloArquivo:{
        type: db.Sequelize.BLOB
    },
    ModeloApresentacao:{
        type: db.Sequelize.BLOB
    },
    Apresentacao:{
        type: db.Sequelize.Boolean
    }
})

module.exports = Arquivo;
