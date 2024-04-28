const db = require('./index');

<<<<<<< HEAD
const arquivos = db.sequelize.define("Arquivos",{
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
=======
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
>>>>>>> e6a7e32269bf2f9a3bd95790bd0ad2805cc0f48a
    }
})

module.exports = Arquivo;
