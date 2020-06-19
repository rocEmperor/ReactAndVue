const express = require('express');
let path  = require('path');
let fs = require("fs");

const app = express();

// 静态文件
app.use('/react', express.static('dist'))
app.use('/vue', express.static('dist'))
app.use('/static', express.static('static'))

// 响应由react请求的页面
app.use('/react/*', function (req, res, next) {
    fs.readFile('./dist/index.react.html', (err, data) => {
        if (err) { return console.error(err) }

        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end(data)
    })
})

// 响应由vue请求的页面
app.use('/vue/*', function (req, res, next) {
    fs.readFile('./dist/index.vue.html', (err, data) => {
        if (err) { return console.error(err) }

        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end(data)
    })
})

// 响应由vue请求的页面
app.use('*', function (req, res, next) {
    fs.readFile('./views/404.html', (err, data) => {
        if (err) { return console.error(err) }

        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end(data)
    })
})

app.listen(9999, () => {
    console.log('server start at 127.0.0.1:9999')
})