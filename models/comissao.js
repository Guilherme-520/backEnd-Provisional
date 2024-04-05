const db = require('./index');

const comissao = db.sequelize.define("comissao",{
    nome:{
        //nome da comissao
        type: db.Sequelize.STRING
    },
    email:{
        //email da comissao
        type: db.Sequelize.STRING
    },
    //emailADM:{
        //email do Adminstrador
    //    type: db.Sequelize.STRING
    //},
    //senhaADM:{
        //senha do Adminstrador
    //    type: db.Sequelize.STRING
    //},
    cpf:{
        //cpf da comissao
        type: db.Sequelize.STRING
    },
    instituicao:{
        //instituicao da comissao
        type: db.Sequelize.STRING
    },
    areaConhecimento:{
        //aréas de conhecimento da comissao
        type: db.Sequelize.STRING
    },
    turno:{
        type: db.Sequelize.STRING
    },
    linkLattes:{
        //link de curriculo
        type: db.Sequelize.STRING
    },
    funcao:{
        //funcao da comissao: chair, organizador ou avaliador
        type: db.Sequelize.STRING
    },
})

module.exports = comissao;