const db = require('../database/models');

const genresController ={
    list:(req,res)=>{
        db.Genero.findAll()
        .then(function(generos){
            res.render("genresList",{genres:generos})
        }).catch(error =>{
            res.send(error)
        })
    },
    detail:(req,res)=>{
        db.Genero.findByPk(req.params.id)
        .then(function(genero){
            res.render("genresDetail", {genre:genero})
        }).catch(error =>{
            res.send(error)
        })
    },
}

module.exports = genresController;