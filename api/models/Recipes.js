const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "Recipe", {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            title:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: [5, 30],
                        msg: "El título debe deter entre 5 y 30 caracteres"
                    }
                }
            },
            image:{
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    isURL: true
                }
            },
            summary:{
                type: DataTypes.STRING,
                allowNull: true,
            },
            healthScore:{
                type: DataTypes.STRING,
                allowNull: true,
                validate: {
                    min: 0,
                    max: 100,
                },              
            },
            steps:{
                type: DataTypes.TEXT,
                allowNull: false,
            },
            created: { //Para validar si la receta se creó por el cliente o proviene de la API
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },{freezeTableName: true, timestamps: false}
    )
}