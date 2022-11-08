'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consumos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Consumos.init({
    data_consumo: DataTypes.DATEONLY,
    media_consumo: DataTypes.FLOAT,
    fatura_consumo: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Consumos',
  });
  return Consumos;
};