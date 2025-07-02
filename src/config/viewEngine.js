const express = require('express');
const path = require('path');

function configViewEngine(app) {
    // phục vụ static files từ thư mục /src/public
    app.use(express.static(path.join(__dirname, '../public')));
    // thiết lập EJS làm view engine
    app.set('view engine', 'ejs');
    // đặt folder chứa các file .ejs
    app.set('views', path.join(__dirname, '../views'));
}

module.exports = configViewEngine;
