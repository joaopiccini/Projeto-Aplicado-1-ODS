'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clientes.hasMany(models.Cidades, {
        foreignKey: 'cidade_cliente'
      })
      Clientes.hasMany(models.Estados, {
        foreignKey: 'estado_cliente'
      })
      Clientes.belongsTo(models.Consumos, {
        foreignKey: 'id_cliente'
      })
      Clientes.belongsTo(models.Medidores, {
        foreignKey: 'id_cliente'
      })
    }
  }
  Clientes.init({
    nome_cliente: DataTypes.STRING,
    doc_cliente: DataTypes.STRING,
    status_cliente: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Clientes',
  });
  return Clientes;
};