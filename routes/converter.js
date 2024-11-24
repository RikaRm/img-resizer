var express = require('express');
var router = express.Router();
const multer = require("multer")
const storage = require("../config/storage");
const { converter } = require('../controllers/converterController');
const upload = multer({ storage })

router.get('/', (req, res, next) => {
    return res.render('home', {});
});

router.post('/', upload.array('file'), converter);

module.exports = router;
