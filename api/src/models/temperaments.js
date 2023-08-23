const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('temperaments', {
        // Atributo id de tipo entero 
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        //Atributo nombre de tipo cadena  
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: false });
};