'use strict'

var fs = require('fs');

fs.readFile(process.argv[2], function callback(error, data){
    if (error){
        return error;
    }
    var lines = data.toString().split('\n').length - 1;
    console.log(lines);
});





