const axios = require("axios");
const fs = require("fs");
const path = require("path");

async function downloadImage(imageUrl, filename = "image.jpg") {
  const downloadPath = path.join(__dirname, "..", "downloads", filename);

  const response = await axios.get(imageUrl, {
    responseType: "stream",
  });

  await new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(downloadPath);
    response.data.pipe(writer);
    writer.on("finish", resolve);
    writer.on("error", reject);
  });

  return downloadPath;
}

module.exports = downloadImage;
