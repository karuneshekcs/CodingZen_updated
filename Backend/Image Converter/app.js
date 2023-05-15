var Jimp = require("jimp");

// open a file called "abcd.jpg"
Jimp.read("abcd.jpg", (err, lenna) => {
  if (err) throw err;
  lenna
    .resize(400, 256) // resize
    .quality(60) // set JPEG quality
    .grayscale() // set greyscale
    .write("resize-karunesh2.jpg"); // save
});