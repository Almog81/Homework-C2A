const fs = require("fs");
const path = require('path');
const pdf = require('pdf-parse');


/*
Method Name: readPdf
Method Description: Reads the content of a PDF file and resolves with the extracted text.
Method Parameters: pathToPdf - The path to the PDF file.
Method Return: A Promise that resolves with the extracted text from the PDF.
*/
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
