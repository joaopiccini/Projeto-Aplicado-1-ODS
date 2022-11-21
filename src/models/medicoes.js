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
      Medicoes.hasMany(models.Medidores, {
        foreignKey: 'id_medidor'
      })
    }
  }
  Medicoes.init({
    data_medicoes: DataTypes.DATEONLY,
    valor_medicoes: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Medicoes',
  });
  return Medicoes;
};