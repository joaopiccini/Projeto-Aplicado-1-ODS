'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medidores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Medidores.init({
    nome_medidor: DataTypes.STRING,
    cod_medidor: DataTypes.STRING,
    status_medidor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medidores',
  });
  return Medidores;
};