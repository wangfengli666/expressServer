/**
 * Created by fengli.wang on 2016/12/8.
 */
var express = require('express');
var path = require('path');
var app = express();
var nav = require('./service/nav');

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running");
});

//静态文件存放目录
app.use(express.static(path.join(__dirname, 'public')));
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200); /让options请求快速返回/
    }
    else {
        next();
    }
});

//路由
app.get('/getNavPics',function (req, res) {
    res.send(nav.pics);
});

app.get('',function (req, res) {
    res.send("hello world");
});