/**
 * Created by tangfw on 2017/5/14.
 */
var express = require('express');

var PORT  = 1234;

//start web server
var app = express();
app.use(express.static('public'));
app.all('*', function (req, res){
    //handle icon request
    if(req.path == '/favicon.ico'){
        res.end();
        return;
    }

    //retrieve service name
    var serviceName = req.get('Service-Name');
    console.log('Service-Name: %s', serviceName);
    if(!serviceName){
        console.log('Service-Name request header is not exist');
        res.end();
        return;
    }
    //TODO
});

app.listen(PORT, function(){
   console.log('server is running at $d', PORT);
});


