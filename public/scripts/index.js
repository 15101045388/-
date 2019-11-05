var express = require('express');
var app = express();
app.get('/index', function(){
   console.log(req.params.sss);
});

app.post('/', function(){
   console.log(res);
});

app.listen(8081, function(){
   console.log('接口已经启动');
});