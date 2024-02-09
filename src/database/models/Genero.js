module.exports = (sequelize, DataTypes) =>{
    const alias = "Genero"
    const cols = {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: false,
            primaryKey:true,
            unsigned:true
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull:false
        },
        ranking:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unsigned:true,
            unique:true
        },
        active:{
            type: DataTypes.TINYINT(1),
            allowNull:false,
            defaultValue:"1"
        },
        createdAt:{
            type:DataTypes.TIME
        },
        updatedAt:{
            type:DataTypes.TIME
        }
    };
    const config={
        tableName:"genres",
        timestamp:true
    };
    const Genero = sequelize.define(alias,cols,config)
    return Genero;
}