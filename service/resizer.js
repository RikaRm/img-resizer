const gm = require("gm")
function resizeImage(filePath) {
    return new Promise((resolve, reject) => {
        gm(filePath)
            .resize(800, 800)
            .write(filePath, function (err) {
                if (err) return reject(err);
                resolve()
            })
    })
}
module.exports = { resizeImage }