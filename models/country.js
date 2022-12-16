'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    static associate(models) {

    }
  }
  country.init({
    CountryName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'country',
  });
  return country;
};