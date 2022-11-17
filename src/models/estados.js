'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Estados.belongsTo(models.Cidades, {
        foreignKey: 'id_estado'
      })
      Estados.belongsTo(models.Clientes, {
        foreignKey: 'estado_cliente'
      })
    }
  }
  Estados.init({
    nome_estado: DataTypes.STRING,
    uf_estado: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Estados',
  });
  return Estados;
};