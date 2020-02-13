const fs = require("fs");

function readFile(path) {
  return fs.readFileSync(path, "utf-8");
}

function getFileName(type) {
  const regex = `.*(\.${type})`;
  const regex_fileType = new RegExp(regex, "g");
  const result = fs.readdirSync(process.cwd(), (e, files, list) => files);
  const fileName = result.filter(name => regex_fileType.exec(name))[0];
  return fileName;
}

module.exports = {
  readFile,
  getFileName
};
