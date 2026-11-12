// Orchestrator script to generate the 30-page MBA Business Plan Development report
// Soumalya Ghorai (Paper 302: CineCraft Visual Media & Productions LLP)

const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const { renderPage1, renderPage2, renderPage3, renderPage4, renderPage5 } = require('./pages/pages_01_05');
const { renderPage6, renderPage7, renderPage8, renderPage9, renderPage10 } = require('./pages/pages_06_10');
const { renderPage11, renderPage12, renderPage13, renderPage14, renderPage15 } = require('./pages/pages_11_15');
const { renderPage16, renderPage17, renderPage18, renderPage19, renderPage20 } = require('./pages/pages_16_20');
const { renderPage21, renderPage22, renderPage23, renderPage24, renderPage25 } = require('./pages/pages_21_25');
const { renderPage26, renderPage27, renderPage28, renderPage29, renderPage30 } = require('./pages/pages_26_30');

const pages = [
  renderPage1, renderPage2, renderPage3, renderPage4, renderPage5,
  renderPage6, renderPage7, renderPage8, renderPage9, renderPage10,
  renderPage11, renderPage12, renderPage13, renderPage14, renderPage15,
  renderPage16, renderPage17, renderPage18, renderPage19, renderPage20,
  renderPage21, renderPage22, renderPage23, renderPage24, renderPage25,
  renderPage26, renderPage27, renderPage28, renderPage29, renderPage30
];

const outputPath = path.join(__dirname, 'CineCraft_MBA302_Business_Plan_30Pages.pdf');
console.log('Generating PDF at:', outputPath);

const doc = new PDFDocument({
  size: 'A4',
  autoFirstPage: false,
  bufferPages: true,
  margins: { top: 0, bottom: 0, left: 0, right: 0 }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

pages.forEach((pageFunc, index) => {
  const pageNum = index + 1;
  doc.addPage({
    size: 'A4',
    margins: { top: 0, bottom: 0, left: 0, right: 0 }
  });
  pageFunc(doc);
  console.log(`Rendered Page ${pageNum} of 30.`);
});

doc.end();

writeStream.on('finish', () => {
  console.log('Final PDF successfully created!');
  const stats = fs.statSync(outputPath);
  console.log(`Output: ${outputPath}`);
  console.log(`File size: ${(stats.size / 1024).toFixed(2)} KB`);
});

writeStream.on('error', (err) => {
  console.error('Error generating PDF:', err);
});
