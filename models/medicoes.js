'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Medicoes.init({
    data_medicoes: DataTypes.DATEONLY,
    valor_medicoes: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Medicoes',
  });
  return Medicoes;
};