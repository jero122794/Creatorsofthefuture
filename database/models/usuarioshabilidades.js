module.exports = (sequelize, dataTypes) => {
    let alias = "usuarioshabilidades"
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primarykey: true,
            autoIncrement: true,
            allowNull: true,
            unique: true
        },
        id_usuario: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        id_habilidad: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tableName: 'usuarioshabilidades',
        timestamps: false
    }

    const usuarioshabilidades = sequelize.define(alias, cols, config);

    usuarioshabilidades.associate = function(models) {
        usuarioshabilidades.belongsTo(models.usuarios, {
            as: "usuarios", //nombre de la relacion con tabla usuarios
            foreignKey: "id_usuario"
        }),
	 usuarioshabilidades.belongsTo(models.habilidades, {
            as: "habilidades", //nombre de la relacion con tabla habilidades
            foreignKey: "id_habilidad"
        })
    }
    return usuarioshabilidades;
}