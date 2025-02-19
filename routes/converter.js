var express = require('express');
var router = express.Router();
const multer = require("multer")
const storage = require("../config/storage");
const { converter, downloader } = require('../controllers/converterController');
const upload = multer({ storage })

router.get('/', (req, res, next) => {
    return res.render('home', {});
});
router.get('/download', downloader)
router.post('/', upload.array('file'), converter);

module.exports = router;
