'use strict';

var fs = require('fs');
var path = require('path');

exports.account = function (args, res, next) {
  /**
   * Finds Pets by params
   * Multiple status values can be provided with comma separated strings
   *
   * api_key String API KEY
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [{
    "firstName": "aeiou",
    "lastName": "aeiou",
    "password": "aeiou",
    "userStatus": 6,
    "phone": "aeiou",
    "id": 0,
    "email": "aeiou",
    "username": "aeiou"
  }];

  console.log('>>>>  /account');

  //if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    //res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));

    //res.end(fs.readFileSync(path.join(__dirname, 'db/account.json'), 'utf8'));
    res.end(fs.readFileSync(path.join(__dirname, 'db/account2.json'), 'utf8'));

  //} else {
  //  res.end();
  //}
}

exports.dashboard = function (args, res, next) {
  /**
   * Finds Pets by tags
   * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
   *
   * api_key String API KEY
   * returns List
   **/
  console.log('>>>>  /dashboard');

  //if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    //res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    //res.end(JSON.stringify([{ "id": 1, "code": "1", "name": "Consultas Gerenciais", "shortName": "CG", "description": "Módulo de Consultas Gerenciais", "link": "/consultas_gerenciais", "order": 1, "iconName": "fa fa-university", "iconStyle": "bg-green", "backgroundStyle": "#f7f7f7" }, { "id": 2, "code": "2", "name": "Consultas de Empenhos*", "shortName": "Empenhos", "description": "Módulo de Consultas de Empenhos", "link": "/consultas_gerenciais", "order": 2, "iconName": "fa fa-handshake-o", "iconStyle": "bg-gray-light", "backgroundStyle": "#f7f7f7" }, { "id": 3, "code": "3", "name": "Cosultas de PRDs*", "shortName": "PRD", "description": "Módulo de Cosultas de PRDs", "link": "/consultas_gerenciais", "order": 3, "iconName": "fa fa-times", "iconStyle": "bg-green", "backgroundStyle": "#f7f7f7" }, { "id": 5, "code": "5", "name": "Manutenção de Quitações*", "shortName": "Quitações", "description": "Módulo de Manutenção de Quitações", "link": "/consultas_gerenciais", "order": 5, "iconName": "fa fa-id-card-o", "iconStyle": "bg-green", "backgroundStyle": "#f7f7f7" }]));
    res.end(fs.readFileSync(path.join(__dirname, 'db/dashboard.json'), 'utf8'));
  //} else {
  //  res.end();
  //}
}

exports.profileInfo = function (args, res, next) {
  /**
   * Finds Pets by status
   * Multiple status values can be provided with comma separated strings
   *
   * api_key String API KEY
   * returns List
   **/

  console.log('>>>>  /profileInfo');

  //if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    //res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));

    res.end(JSON.stringify({ "activeProfiles": ["swagger", "dev"], "ribbonEnv": "dev" }));
  //} else {
  //  res.end();
 // }
}

exports.profileImage = function (args, res, next) {
  /**
   * Finds Pets by status
   * Multiple status values can be provided with comma separated strings
   *
   * api_key String API KEY
   * returns List
   **/

  console.log('>>>>  /profileImage' + JSON.stringify(args));

  //if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'image/jpeg');
    
    fs.readFile(path.join(__dirname, 'image/avatar.png'), function(err, data) {
      if (err) throw err; // Fail if the file can't be read.

      res.end(data); // Send the file data to the browser.

    });

  //} else {
  //  res.end();
  //}
}