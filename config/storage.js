const multer = require("multer")

function renameImage(file) {

    return `${file.split('.')[0]}.jpg`
}

module.exports = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "uploads/")
    }, filename: (req, file, cb) => {
        cb(null, renameImage(file.originalname))
    }
})