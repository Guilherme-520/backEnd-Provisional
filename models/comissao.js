const db = require('./index');

const Comissoes = db.sequelize.define("Comissoes", {
    LinkLattes: {
        //nome da Comissoes
        type: db.Sequelize.STRING
    },
    Periodo: {
        //email da Comissoes
        type: db.Sequelize.STRING
    },
    Status: {
        //instituicao da Comissoes
        type: db.Sequelize.STRING
    },
    Organizador: {
        //aréas de conhecimento da Comissoes
        type: db.Sequelize.INTEGER
    },
    Chair: {
        type: db.Sequelize.INTEGER
    },
    idUserProfile: {
        //link de curriculo
        type: db.Sequelize.INTEGER
    },
    idEvento: {
        //funcao da Comissoes: chair, organizador ou avaliador
        type: db.Sequelize.INTEGER
    },
    idInstituicao: {
        type: db.Sequelize.INTEGER
    }
})

module.exports = Comissoes;