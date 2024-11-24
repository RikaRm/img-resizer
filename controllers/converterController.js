const resizeImage = require('../service/resizer')

async function converter(req, res) {
    await resizeImage(req.files[0].path)
    return res.render('files', {});
}

module.exports = { converter }