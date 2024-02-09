module.exports = (sequelize, DataTypes) =>{
    const alias = "Pelicula"
    const cols = {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: false,
            primaryKey:true,
            unsigned:true
        },
        title:{
            type: DataTypes.STRING(500),
            allowNull:false
        },
        rating:{
            type: DataTypes.DECIMAL(3,1),
            allowNull: false,
            unsigned:true
        },
        awards:{
            type: DataTypes.INTEGER,
            allowNull:false,
            unsigned:true,
            defaultValue:"0"
        },
        release_date:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        length:{
            type:DataTypes.INTEGER,
            allowNull:true,
            unsigned:true
        },
        createdAt:{
            type:DataTypes.DATE
        },
        updatedAt:{
            type:DataTypes.DATE
        }
        
    };
    const config={
        tableName:"movies",
        timestamp:true
    };
    const Pelicula = sequelize.define(alias,cols,config)
    return Pelicula;
}