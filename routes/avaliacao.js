const express  = require('express');
const router   = express.Router();
const arquivos = require('../models/arquivos');
function slugify(string) {
    return string
        .trim()
}
const multer   = require('multer');
const storage  = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const newFile = {
            originalname: slugify(file.originalname) 
        }
        cb(null, Date.now()+"-"+newFile.originalname)
    }
})
const upload = multer({ dest: 'uploads/', storage: storage })
router.get('/', async (req, res) => {
    const arquivo = await arquivos.findAll();
    res.json(arquivo)
});

router.post('/:idEvento', upload.fields([
    { name: 'ModeloArquivos'},
    { name: 'ModeloApresentacao'} //to pra entender isso e ver oq mandar, mas ta tudo pronto TEORICAMENTE
]),async (req,res)=>{
    const data = {
        ComentarioOrg:        req.body.ComentarioOrg,
        ComentarioAluno:      req.body.ComentarioAluno,
        reenvio:              req.body.reenvio,
        dataAvaliacao:        req.body.dataAvaliacao,
        media:                req.body.media,
        notaTema:             req.body.notaTema,
        notaObjetivos:        req.body.notaObjetivos,
        notaRevisao:          req.body.notaRevisao,
        notaConsistencia:     req.body.notaConsistencia,
        notaMetodo:           req.body.notaMetodo,
        notaAnalise:          req.body.notaAnalise,
        notaConclusao:        req.body.notaConclusao,
        notaContribuicao:     req.body.notaContribuicao,
        notaOrganizacao:      req.body.notaOrganizacao,
        comentarioOrganizador: req.body.comentarioOrganizador,
        comentarioAutor:      req.body.comentarioAutor
    };
    

    res.json(data)


    try {
        const novo = await avaliacao.create(data)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Arquivo '+ error.message });
    }
    
})

module.exports = router;