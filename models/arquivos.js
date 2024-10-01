const db = require('./index');

const evento = db.sequelize.define("arquivos",{
    tipoArquivo:{
        type: db.Sequelize.STRING
    },
    dataIniSub:{
        type: db.Sequelize.DATE
    },
    
    dataFinSub:{
        type: db.Sequelize.DATE
    },
    dataIniAva:{
        type: db.Sequelize.DATE
    },
    dataFinAva:{
        type: db.Sequelize.DATE
    },
    normas:{
        type: db.Sequelize.TEXT
    },
    tipoUsuario:{
        type: db.Sequelize.STRING
    },
    area:{
        type: db.Sequelize.STRING
    },
    modArquivo:{
        type: db.Sequelize.BLOB
    },
    modApresentacao:{
        type: db.Sequelize.BLOB
    },
    plusArquivo:{
        type: db.Sequelize.BLOB
    },
    notaTema:{
        type: db.Sequelize.INTEGER
    },
    notaObjetivo:{
        type: db.Sequelize.INTEGER
    },
    notaRevisao:{
        type: db.Sequelize.INTEGER
    },
    notaConsistencia:{
        type: db.Sequelize.INTEGER
    },
    notaMetodo:{
        type: db.Sequelize.INTEGER
    },
    notaAnalise:{
        type: db.Sequelize.INTEGER
    },
    notaConclusao:{
        type: db.Sequelize.INTEGER
    },
    notaContribuicao:{
        type: db.Sequelize.INTEGER
    },
    notaOrganizacao:{
        type: db.Sequelize.INTEGER
    },
    comentarioOrganizador:{
        type: db.Sequelize.STRING
    },
    comentarioAutor:{
        type: db.Sequelize.STRING
    },
    

})

module.exports = arquivos;
