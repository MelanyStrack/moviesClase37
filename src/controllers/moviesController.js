const db = require('../database/models');

const moviesController={
    list:(req,res)=>{
        db.Pelicula.findAll()
        .then(function(peliculas){
            res.render("moviesList",{movies:peliculas})
        })
    },
    detail:(req,res)=>{
        db.Pelicula.findByPk(req.params.id)
        .then(function(pelicula){
            res.render("moviesDetail", {movie:pelicula})
        })
    },
    new:(req,res)=>{
        db.Pelicula.findAll({
            order:[["release_date", "DESC"]]
        })
        .then(function(peliculas){
            res.render("newestMovies",{movies:peliculas})
        })
    },
    recomended:(req,res)=>{
        db.Pelicula.findAll({
            order:[["rating", "DESC"]],
            limit:5
        })
        .then(function(peliculas){
            res.render("newestMovies",{movies:peliculas})
        })
    }

}

module.exports = moviesController;