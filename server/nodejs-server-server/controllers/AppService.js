'use strict';

var fs = require('fs');
var path = require('path');


exports.getI18n = function (args, res, next) {
  /**
   * Find pet by ID
   * Returns a single pet
   *
   * resourceId Long ID of pet to return
   * returns inline_response_200_3
   **/

  console.log('>>>>  /getI18n');

  //if (Object.keys(examples).length > 0) {
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

  //} else {
  //  res.end();
  //}
}

exports.getDepartments = function (args, res, next) {
  /**
   * Finds Pets by status
   * Multiple status values can be provided with comma separated strings
   *
   * api_key String API KEY
   * returns List
   **/

  console.log('>>>>  /getDepartments');

  var max = 0;
  max = Number(args.size.value) * Number(args.page.value);

  console.log(args.page.value + '  ' + args.size.value + '  '  + max);

  //if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    //res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));

    var arr = [];
    for (var index = 0; index < Number(args.size.value); index++) {  

      arr[index] = { "id": (max + index), "departmentName": "Teste " + index };
      
    }

    res.setHeader('Link','</api/departments?page=0&size=20>; rel="last",</api/departments?page=0&size=20>; rel="first"');
    res.setHeader('X-Total-Count','2');
    res.setHeader('X-XSS-Protection', 'mode=block')

    res.end(JSON.stringify(arr));
  //} else {
  //  res.end();
 // }
}
