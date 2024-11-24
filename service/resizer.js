const gm = require("gm")
async function resizeImage(filePath) {
    await new Promise((resolve, reject) => {
        gm(filePath)
            .resize(800, 800)
            .write(filePath, async function (err) {
                if (err) return reject(err)
                console.log("Imagem redimensionada com sucesso: ", filePath)
                resolve()
            })
    })
}

module.exports = resizeImage