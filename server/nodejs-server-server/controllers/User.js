'use strict';

var url = require('url');

var User = require('./UserService');

module.exports.createUser = function createUser (req, res, next) {
  User.createUser(req.swagger.params, res, next);
};

module.exports.createUsersWithArrayInput = function createUsersWithArrayInput (req, res, next) {
  User.createUsersWithArrayInput(req.swagger.params, res, next);
};
