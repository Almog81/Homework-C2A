const fs = require("fs");
const path = require('path');
const pdf = require('pdf-parse');

const readPdf = (pathToPdf) => {
    return new Promise((resolve) => {
        const pdfPath = path.resolve(pathToPdf);
        let dataBuffer = fs.readFileSync(pdfPath);
        pdf(dataBuffer).then(function ({ text }) {
            resolve(text);
        });
    });
}

module.exports = { readPdf };
