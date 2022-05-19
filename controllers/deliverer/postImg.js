const multer = require("multer");

function postImg(req, res) {
  const upload = multer({
    dest: "./../../static",
  });

  upload.single("file");

  console.log(req.body, req.file, "PEAEAEOAE");
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "./uploads/image.png");

  if (path.extname(req.file.originalname).toLowerCase() === ".png") {
    fs.rename(tempPath, targetPath, (err) => {
      if (err) return handleError(err, res);

      res.status(200).contentType("text/plain").end("File uploaded!");
    });
  } else {
    fs.unlink(tempPath, (err) => {
      if (err) return handleError(err, res);

      res
        .status(403)
        .contentType("text/plain")
        .end("Only .png files are allowed!");
    });
  }
}

module.exports = postImg;
