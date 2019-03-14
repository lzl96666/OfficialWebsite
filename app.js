var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));


//ip&port
var hostName = '192.168.0.133';
var port = 3000;

//设置需要渲染的目录下模板文件
app.set("views", "public");
app.set("view engine", "ejs");
//静态资源
app.use(express.static('public'));
//动态资源
var rootRouter = require('./routes/root');
// var rootRouter = require('./routes/mock');

app.use('/', rootRouter);

app.listen(port, hostName, function() {

    console.log(`服务器运行在http://${hostName}:${port}`);

});