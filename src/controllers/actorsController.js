const db = require('../database/models');

const actorsController ={
    list:(req,res)=>{
        db.Actor.findAll()
        .then(function(actors){
            res.render("actorsList",{actors:actors})
        }).catch(error =>{
            res.send(error)
        })
    },
    detail:(req,res)=>{
        db.Actor.findByPk(req.params.id)
        .then(function(actor){
            res.render("actorsDetail", {actor:actor})
        }).catch(error =>{
            res.send(error)
        })
    },
}

module.exports = actorsController;