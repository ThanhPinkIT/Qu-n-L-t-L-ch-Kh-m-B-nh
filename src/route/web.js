const express = require('express');
const router = express.Router();
import homeController from "../controllers/homecontroller";

//const homeController = require('../controllers/homecontroller');

function initWebRoutes(app) {
    // cấu hình route gốc
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    router.get('/thanhpinkit', (req, res) => {
        res.send('Hello world with ThanhPink');
    });

    // gắn lên app
    return app.use('/', router);
}

module.exports = initWebRoutes;
