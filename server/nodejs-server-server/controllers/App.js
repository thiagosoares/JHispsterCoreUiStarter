'use strict';

var url = require('url');

var Auth = require('./AppService');

module.exports.getI18n = function getI18n (req, res, next) {
  Auth.getI18n(req.swagger.params, res, next);
};

module.exports.getDepartments = function getDepartments (req, res, next) {
  Auth.getDepartments(req.swagger.params, res, next);
};

module.exports.getDepartmentsById = function getDepartmentsById (req, res, next) {
  Auth.getDepartmentsById(req.swagger.params, res, next);
};
