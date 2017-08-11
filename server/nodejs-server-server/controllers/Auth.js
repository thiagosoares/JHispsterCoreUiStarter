'use strict';

var url = require('url');

var Auth = require('./AuthService');

module.exports.account = function account (req, res, next) {
  Auth.account(req.swagger.params, res, next);
};

module.exports.dashboard = function dashboard (req, res, next) {
  Auth.dashboard(req.swagger.params, res, next);
};

module.exports.profileInfo = function profileInfo (req, res, next) {
  Auth.profileInfo(req.swagger.params, res, next);
};

module.exports.profileImage = function profileImage (req, res, next) {
  Auth.profileImage(req.swagger.params, res, next);
};

module.exports.getI18n = function getI18n (req, res, next) {
  Auth.getI18n(req.swagger.params, res, next);
};
