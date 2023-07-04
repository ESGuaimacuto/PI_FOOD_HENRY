const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define(
        "Diet", {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                //Cantidad de caracteres
            }
       }, {timestamps: false, freezeTableName: true}

   )
}