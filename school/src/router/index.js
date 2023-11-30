/* Automatically mount Router middleware */
const fs = require('fs');
const path = require('path');
const readRouters = function () {
  // Get route file list
  fs.readdirSync(__dirname).forEach((fileName) => {
    // Skip mounting if current file is encountered
    if (fileName === 'index.js') return;
    // Splicing routing paths
    const filePath = path.join(__dirname, fileName);
    //Get routing page
    const router = require(filePath);
    //Mount route
    this.use(router.routes());
    //Intercepting 404 errors
    this.use(router.allowedMethods());
  });
};
module.exports = readRouters;
