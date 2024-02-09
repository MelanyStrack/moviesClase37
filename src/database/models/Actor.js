module.exports = (sequelize, DataTypes) =>{
    const alias = "Actor"
    const cols = {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: false,
            primaryKey:true,
            unsigned:true
        },
        first_name:{
            type: DataTypes.STRING(100),
            allowNull:false
        },
        last_name:{
            type: DataTypes.STRING(100),
            allowNull:false
        },
        rating:{
            type: DataTypes.DECIMAL(3,1),
            allowNull: true
        },
        createdAt:{
            type:DataTypes.TIME
        },
        updatedAt:{
            type:DataTypes.TIME
        }
        
    };
    const config={
        tableName:"actors",
        timestamp:true
    };
    const Genero = sequelize.define(alias,cols,config)
    return Genero;
}