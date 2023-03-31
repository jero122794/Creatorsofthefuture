module.exports = (sequelize, DataTypes) =>{
    let alias = "categorias";
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        categoria: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }
    let config = {
        tableName: 'categorias',
        timestamps: false
    }

    const categorias = sequelize.define(alias, cols, config);

    categorias.associate = function(models) {
        categorias.hasMany(models.habilidades, {
            as: "categorias",
            foreignKey: "id_categoria"
        })
    }
}