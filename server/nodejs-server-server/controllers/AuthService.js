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

  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    //res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));

    res.end(JSON.stringify({ "id": 3895, "login": "thiago.soares", "name": "Thiago Fernandes Soares", "orgao": { "id": 35, "codigo": "13203", "nome": "PRODEPA", "sigla": "PRODEPA" }, "naturalUserId": "u71305", "details": { "authorities": ["CONSULTARNOTAEMPENHO", "ROLE_USER", "CONSULTARNOTAEMPENHO.DETALHAR", "ROLE_ADMIN", "ADMIN", "CONSULTARNOTAEMPENHO.VISUALIZAR"], "perfis": ["148.1295"], "operations": ["148.982.3562", "148.980.3561", "148.981.3560"], "activated": true, "imageUrl": "/security_manager/api/V1/auth/profile-image?api_key=1", "imagem": "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" }, "langKey": "pt-br" }));

  } else {
    res.end();
  }
}

exports.dashboard = function (args, res, next) {
  /**
   * Finds Pets by tags
   * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
   *
   * api_key String API KEY
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [{
    "petId": 6,
    "quantity": 1,
    "id": 0,
    "shipDate": "2000-01-23T04:56:07.000+00:00",
    "complete": false,
    "status": "placed"
  }];

  console.log('>>>>  /dashboard');

  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    //res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));

    res.end(JSON.stringify([{ "id": 1, "code": "1", "name": "Consultas Gerenciais", "shortName": "CG", "description": "Módulo de Consultas Gerenciais", "link": "/consultas_gerenciais", "order": 1, "iconName": "fa fa-university", "iconStyle": "bg-green", "backgroundStyle": "#f7f7f7" }, { "id": 2, "code": "2", "name": "Consultas de Empenhos*", "shortName": "Empenhos", "description": "Módulo de Consultas de Empenhos", "link": "/consultas_gerenciais", "order": 2, "iconName": "fa fa-handshake-o", "iconStyle": "bg-gray-light", "backgroundStyle": "#f7f7f7" }, { "id": 3, "code": "3", "name": "Cosultas de PRDs*", "shortName": "PRD", "description": "Módulo de Cosultas de PRDs", "link": "/consultas_gerenciais", "order": 3, "iconName": "fa fa-times", "iconStyle": "bg-green", "backgroundStyle": "#f7f7f7" }, { "id": 5, "code": "5", "name": "Manutenção de Quitações*", "shortName": "Quitações", "description": "Módulo de Manutenção de Quitações", "link": "/consultas_gerenciais", "order": 5, "iconName": "fa fa-id-card-o", "iconStyle": "bg-green", "backgroundStyle": "#f7f7f7" }]));
  } else {
    res.end();
  }
}

exports.getI18n = function (args, res, next) {
  /**
   * Find pet by ID
   * Returns a single pet
   *
   * resourceId Long ID of pet to return
   * returns inline_response_200_3
   **/
  var examples = {};
  examples['application/json'] = {
    "name": "aeiou",
    "id": 0
  };

  console.log('>>>>  /getI18n');

  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');

    console.log(JSON.stringify(args.resourceId.value));

    if (args.resourceId.value === 'all.json') {

      console.log('OK all.json');

      var spec = fs.readFileSync(path.join(__dirname, 'db/all.json'), 'utf8');
      res.end(spec);

    } else if (args.resourceId.value === 'home.json') {

      console.log('OK home.json');

      var spec = fs.readFileSync(path.join(__dirname, 'db/home.json'), 'utf8');
      res.end(spec);

    } else {
      console.log('Ops');
      res.end();
    }

    //res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));


    //res.end(JSON.stringify());

  } else {
    res.end();
  }
}

exports.profileInfo = function (args, res, next) {
  /**
   * Finds Pets by status
   * Multiple status values can be provided with comma separated strings
   *
   * api_key String API KEY
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [{
    "name": "aeiou",
    "id": 0
  }];

  console.log('>>>>  /profileInfo');

  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    //res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));

    res.end(JSON.stringify({ "activeProfiles": ["swagger", "dev"], "ribbonEnv": "dev" }));
  } else {
    res.end();
  }
}

exports.profileImage = function (args, res, next) {
  /**
   * Finds Pets by status
   * Multiple status values can be provided with comma separated strings
   *
   * api_key String API KEY
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [{
    "name": "aeiou",
    "id": 0
  }];

  console.log('>>>>  /profileImage');

  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'image/jpeg');
    
    fs.readFile(path.join(__dirname, 'image/avatar.png'), function(err, data) {
      if (err) throw err; // Fail if the file can't be read.

      res.end(data); // Send the file data to the browser.

    });



  } else {
    res.end();
  }
}