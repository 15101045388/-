var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var urlencodedParser =
//     bodyParser.urlencoded({ extended: false});
// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/views/' + 'index.html');
    // res.send('Hello Node');
});
app.post('/index', function (req, res) {
    console.log(req.body.username + '-------233423');
    // console.log(req.body.password);
    res.redirect('http://www.baidu.com');
    // res.send(1234);
});
// console.log(app);
// request用户传递过来的信息  response服务端返回到用户的信息
// req                      res

// 最常用的一些方法
// res.send   res.json  res.render


app.get('/index/:id', function (req, res) {
    // res.send('Hello，' + req.query.username);
    // res.send('Hello，' + req.params.id);
    // console.log(req.query.username);
    // console.log(req.params.id);
    res.json({
        id: req.params.id
    });
});
app.listen(3000, function () {
    console.log('启动成功');
});
// supervisor app.js  每次修改会自动启动程序
// npm install supervisor -g 全局安装
// 中间件引入
// use: [Function: use],
// 路由导航
// route: [Function: route],

// 1、安装引入express  npm install express --save
// 2、app.listen启动一个端口，启动一个后台服务
// 3、设置基础路由
// 4、直接在浏览器上写的请求都是get
// 5、get post put delete    $.ajax->put
// 6、举例
// app.get('/test/:id', function (req, res) {
//     console.log(req.query.username);
//     res.send(req.params.id);
// });
// app.post('/test', function () {
//
// });



