// src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const configViewEngine = require('./config/viewEngine');
const initWebRoutes = require('./route/web');
const connectDB = require('./config/connectDB');
require('dotenv').config();

const app = express();

// Cấu hình view engine & static
configViewEngine(app);

// Phân tích body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình router
initWebRoutes(app);

connectDB();

// Khởi server
const port = process.env.PORT || 6969;
app.listen(port, () =>
    console.log(`Backend NodeJs is running on port ${port}`)
);
