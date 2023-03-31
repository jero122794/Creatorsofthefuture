module.exports = (sequelize, dataTypes) => {
    let alias = "habilidades"
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        habilidad: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_categoria: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tableName: 'habilidades',
        timestamps: false
    }

    const habilidades = sequelize.define(alias, cols, config);

    habilidades.associate = function (models) {
        habilidades.belongsTo(models.categorias, { 
            as: "categorias",
            foreignKey: "id_categoria"
        }),
	habilidades.hasMany(models.usuarioshabilidades, { 
            as: "habilidades",
            foreignKey: "id_habilidad"
        })
    }
}