const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, 'images');

fs.readdirSync(directoryPath).forEach(file => {
  console.log(file);
});