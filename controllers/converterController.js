const { resizeImage } = require('../service/resizer')
const fs = require('fs')
const path = require('path')
const Zip = require('adm-zip')

async function converter(req, res) {
  const files = req.files;
  const processingResults = await Promise.all(
    files.map(async (f) => {
      await resizeImage(f.path);
      return { processedFile: f };
    })
  );
  res.redirect('/download')
}
async function downloader(req, res) {
  const files = fs.readdirSync('./uploads/')
  const p = path.join(__dirname, '..', 'uploads/')

  const zip = new Zip()

  for (const f of files) {
    const fp = p + f;
    zip.addLocalFile(fp)
  }

  const zipData = zip.toBuffer();
  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', 'attachment; filename=fotos.zip');
  return res.send(zipData);
}
module.exports = { converter, downloader }