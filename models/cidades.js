'use strict';
const {
  Model
} = require('sequelize');
const estados = require('./estados');
module.exports = (sequelize, DataTypes) => {
  class Cidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cidades.hasMany(models.Estados, {
        foreignKey: 'id_estado'
      })
      Cidades.belongsTo(models.Clientes, {
        foreignKey: 'cidade_cliente'
      })
    }
  }
  Cidades.init({
    nome_cidade: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Cidades',
  });
  return Cidades;
};