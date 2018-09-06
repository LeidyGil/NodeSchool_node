'use strict'

var fs = require('fs');
var lis = ('file.txt','file2.csv', 'oto.txt');

fs.readdir(path, function callback(error,lis){
    if (error){
        return error;
    }
    var lista = lis
    console.log(lista);
});