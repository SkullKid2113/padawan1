var fs = require('fs');
var fileBuffer = Buffer.from(file);
var file = ('test.txt');
fs.readFile(file,function(err,buffer){
    console.log(buffer);
});