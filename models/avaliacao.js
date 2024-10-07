const db = require('./index');

const evento = db.sequelize.define("avaliacao",{
    ComentarioOrg:{
        type: db.Sequelize.STRING
    },
    ComentarioAluno:{
        type: db.Sequelize.DATE
    },
    
    reenvio:{
        type: db.Sequelize.BOOLEAN
    },
    dataAvaliacao:{
        type: db.Sequelize.DATE
    },
    media:{
        type: db.Sequelize.FLOAT
    },
    notaTema:{
        type: db.Sequelize.INTEGER
    },
    notaObjetivos:{
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
