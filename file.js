var fs = require('fs');
fs.open('test.txt', 'r', function(err, fd) {
    fs.fstat(fd, function(err, stats) {

        var bufferSize=stats.size  ,
            chunkSize=512,
            buffer=new Buffer(bufferSize),
            bytesRead = 0;

        while (bytesRead < bufferSize) {
            if ((bytesRead + chunkSize) > bufferSize) {
                chunkSize = (bufferSize - bytesRead);
            }

            fs.read(fd, buffer, bytesRead, chunkSize, bytesRead, testCallback);
            bytesRead += chunkSize;
        }
        console.log(buffer.toString('utf8'));
        fs.close(fd);
    });
});

var testCallback = function(err, bytesRead, buffer){
    console.log('err : ' +  err);
};