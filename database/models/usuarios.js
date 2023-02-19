module.exports = (sequelize, dataTypes) => {
    let alias = 'usuarios';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        apellidos:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        celular:{
            type: dataTypes.STRING(10),
            allowNull: false
        },
        rol:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        descripcion:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        image_url:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        academia:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        linkedin_url:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        cv_url:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        views_count:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        last_viewed:{
            type: dataTypes.DATE,
            allowNull: false
        },
        activo:{
            type: dataTypes.TINYINT(1),
            allowNull: false
        },

    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    }
    const usuarios = sequelize.define(alias,cols,config);

    return usuarios
};