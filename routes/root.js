var express = require('express');
var path=require('path');
var router = express.Router();
router.all('/*', function(req, res, next) {
    next();
});

//主页
router.get("/", function(req, res, next) {
    var deviceAgent = req.headers["user-agent"].toLowerCase();
    var reg=/(iphone|ipod|ipad|android)/;
    var isMobile = reg.test(deviceAgent);
    if (isMobile) {
        return res.sendFile(path.join(__dirname,'../public/mobile-index.html'));
    } else {
        return res.sendFile(path.join(__dirname,'../public/web-index.html'));
    }
})

//get
router.get("/*", function(req, res, next) {
    console.log("get请求：", req.url)
    next();
})

//post未测试
router.post("/*", function(req, res, next) {
    console.log("post请求：", req.url)
    console.log("post请求body：", req.body)
    next();
})

//put
router.put("/*", function(req, res, next) {
    console.log("put请求：", req.url)
    console.log("put请求body：", req.body)
    next();
})

//delete未测试
router.delete("/*", function(req, res, next) {
    console.log("delete请求：", req.url)
    next();
})

module.exports = router;