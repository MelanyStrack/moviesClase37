const db = require('../database/models');

const moviesController={
    list:(req,res)=>{
        db.Pelicula.findAll()
        .then(function(peliculas){
            res.render("moviesList",{movies:peliculas})
        })
        .catch(error =>{
            res.send(error)
        })
    },
    detail:(req,res)=>{
        db.Pelicula.findByPk(req.params.id)
        .then(function(pelicula){
            res.render("moviesDetail", {movie:pelicula})
        }).catch(error =>{
            res.send(error)
        })
    },
    new:(req,res)=>{
        db.Pelicula.findAll({
            order:[["release_date", "DESC"]]
        })
        .then(function(peliculas){
            res.render("newestMovies",{movies:peliculas})
        }).catch(error =>{
            res.send(error)
        })
    },
    recomended:(req,res)=>{
        db.Pelicula.findAll({
            order:[["rating", "DESC"], ["release_date", "DESC"]],
            limit:5
        })
        .then(function(peliculas){
            res.render("recommendedMovies",{movies:peliculas})
        }).catch(error =>{
            res.send(error)
        })
    }

}

module.exports = moviesController;