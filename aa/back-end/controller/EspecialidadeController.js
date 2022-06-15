const express = require('express');

const Especialidade = require('../model/Especialidade');

/** CONFIGURAÇÃO DAS ROTAS **/
const router = express.Router();

router.post(
    '/especialidade/cadastrarEspecialidade',
    (req, res)=>{
       
        
        let { nome_especialidade } = req.body;

        Especialidade.create(
            {nome_especialidade}
        ).then(
            ()=>{
                res.send('DADOS DE ESPECIALIDADE INSERIDOS COM SUCESSO!');
            }
        );

    }
);

/* ROTA DE LISTAGEM GERAL DE CATEGORIA (VERBO HTTP: GET)*/
router.get(
    '/especialidade/listarEspecialidade',
    (req, res)=>{
        Especialidade.findAll()
                 .then(
                     (especialidades)=>{
                        res.send(especialidades);
                     }
                 );
    }
);

/* ROTA DE LISTAGEM POR ID DE CATEGORIA (VERBO HTTP: GET)*/
router.get( '/especialidade/listarEspecialidade/:id', (req, res)=>{

    let {id} = req.params;
    Especialidade.findByPk(id)
             .then(
                 (especialidade)=>{
                    res.send(especialidade);
                }
    );

});

/* ROTA DE ALTERAÇÃO DE CATEGORIA (VERBO HTTP: PUT)*/
router.put(
    '/Especialidade/alterarEspecialidade',
    (req, res)=>{

    
        let {id, nome_especialidade} = req.body;

        Especialidade.update(
                {nome_especialidade},
                {where: {id}}
        ).then(
            ()=>{
                res.send('DADOS DE ESPECIALIDADE ALTERADOS COM SUCESSO!');
            }
        );

    }
);
/* ROTA DE EXCLUSÃO DE CATEGORIA (VERBO HTTP: DELETE)*/
router.delete(
    '/especialidade/excluirEspecialidade',
    (req, res)=>{

        let {id} = req.body;

        Especialidade.destroy(
            {where: {id}}
        ).then(

            ()=>{
                res.send('Especialidade EXCLUÍDO COM SUCESSO!');
            }

        );

    }
);

module.exports = router;