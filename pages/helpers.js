// pages/helpers.js
const C = {
  navy: '#0F2C59',
  navyLight: '#1E3A8A',
  gold: '#B45309',
  accent: '#0284C7',
  textDark: '#1E293B',
  textMuted: '#475569',
  bgLight: '#F8FAFC',
  bgAlt: '#F1F5F9',
  border: '#CBD5E1',
  white: '#FFFFFF'
};

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 40;
const CONTENT_W = PAGE_W - (MARGIN * 2); // 515.28

function drawHeader(doc, pageNum, chapterTitle) {
  if (pageNum === 1) return;
  doc.save();
  doc.fontSize(7.5).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('CINECRAFT STUDIOS', MARGIN, 22, { continued: true });
  doc.font('Helvetica').fillColor(C.textMuted);
  doc.text(' | MBA Paper 302: Business Plan Development', { continued: true });
  doc.font('Helvetica-Bold').fillColor(C.gold);
  doc.text(`   [${chapterTitle}]`, { align: 'right' });
  doc.strokeColor(C.border).lineWidth(0.75).moveTo(MARGIN, 33).lineTo(PAGE_W - MARGIN, 33).stroke();
  doc.restore();
}

function drawFooter(doc, pageNum) {
  if (pageNum === 1) return;
  doc.save();
  doc.strokeColor(C.border).lineWidth(0.75).moveTo(MARGIN, PAGE_H - 30).lineTo(PAGE_W - MARGIN, PAGE_H - 30).stroke();
  doc.fontSize(7.5).font('Helvetica').fillColor(C.textMuted);
  doc.text('EIILM-Kolkata | Vidyasagar University | MBA (2024-2026)', MARGIN, PAGE_H - 22, { continued: true });
  doc.font('Helvetica-Bold').fillColor(C.navy);
  doc.text(`Page ${pageNum} of 30`, { align: 'right' });
  doc.restore();
}

function drawPageBanner(doc, chapterNum, chapterTitle, startY = 40) {
  doc.save();
  doc.rect(MARGIN, startY, CONTENT_W, 22).fill(C.navy);
  doc.fontSize(9).font('Helvetica-Bold').fillColor(C.white);
  const text = chapterNum ? `CHAPTER ${chapterNum}: ${chapterTitle.toUpperCase()}` : chapterTitle.toUpperCase();
  doc.text(text, MARGIN + 8, startY + 6);
  doc.restore();
  return startY + 28;
}

function drawSectionHeading(doc, title, y, icon = '■') {
  doc.save();
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(C.navy);
  doc.text(`${icon}  ${title}`, MARGIN, y);
  doc.strokeColor(C.gold).lineWidth(1).moveTo(MARGIN, y + 11).lineTo(MARGIN + 40, y + 11).stroke();
  doc.restore();
  return y + 16;
}

function drawCard(doc, x, y, w, h, title, content, opts = {}) {
  doc.save();
  const bg = opts.bg || C.bgLight;
  const borderColor = opts.borderColor || C.border;
  const accentColor = opts.accentColor || C.navy;
  
  doc.rect(x, y, w, h).fill(bg);
  doc.rect(x, y, w, h).lineWidth(0.75).strokeColor(borderColor).stroke();
  doc.rect(x, y, 3.5, h).fill(accentColor);
  
  if (title) {
    doc.fontSize(opts.titleSize || 8).font('Helvetica-Bold').fillColor(accentColor);
    doc.text(title, x + 8, y + 5, { width: w - 14 });
  }
  if (content) {
    doc.fontSize(opts.fontSize || 7.2).font(opts.font || 'Helvetica').fillColor(C.textDark);
    doc.text(content, x + 8, y + (title ? 17 : 5), { width: w - 14, lineGap: opts.lineGap || 1.2 });
  }
  doc.restore();
  return y + h;
}

function drawTable(doc, startX, startY, headers, rows, colWidths, options = {}) {
  const headerBg = options.headerBg || C.navy;
  const headerTextColor = options.headerTextColor || C.white;
  const fontSize = options.fontSize || 7.0;
  const headerFontSize = options.headerFontSize || 7.2;
  const padding = options.padding || 3.0;
  const totalW = colWidths.reduce((a, b) => a + b, 0);
  let currentY = startY;

  // Header
  doc.save();
  doc.fontSize(headerFontSize).font('Helvetica-Bold');
  let headerMaxH = 0;
  headers.forEach((h, i) => {
    const hH = doc.heightOfString(h, { width: colWidths[i] - padding * 2 });
    if (hH > headerMaxH) headerMaxH = hH;
  });
  headerMaxH += padding * 2;

  doc.rect(startX, currentY, totalW, headerMaxH).fill(headerBg);
  doc.fillColor(headerTextColor);
  let curX = startX;
  headers.forEach((h, i) => {
    doc.text(h, curX + padding, currentY + padding, {
      width: colWidths[i] - padding * 2,
      align: options.headerAligns ? options.headerAligns[i] : 'left'
    });
    curX += colWidths[i];
  });
  currentY += headerMaxH;

  // Rows
  doc.font('Helvetica');
  rows.forEach((row, rIdx) => {
    let rowMaxH = 0;
    doc.fontSize(fontSize);
    row.forEach((cell, i) => {
      const text = String(cell);
      const isBold = (options.boldCols && options.boldCols.includes(i)) || (options.boldRows && options.boldRows.includes(rIdx));
      doc.font(isBold ? 'Helvetica-Bold' : 'Helvetica');
      const cH = doc.heightOfString(text, { width: colWidths[i] - padding * 2 });
      if (cH > rowMaxH) rowMaxH = cH;
    });
    rowMaxH += padding * 2;

    const rowBg = options.rowBgs ? options.rowBgs[rIdx] : (rIdx % 2 === 0 ? C.white : C.bgLight);
    doc.rect(startX, currentY, totalW, rowMaxH).fill(rowBg);
    doc.rect(startX, currentY, totalW, rowMaxH).lineWidth(0.5).strokeColor(C.border).stroke();

    let cX = startX;
    row.forEach((cell, i) => {
      const text = String(cell);
      const isBold = (options.boldCols && options.boldCols.includes(i)) || (options.boldRows && options.boldRows.includes(rIdx));
      doc.font(isBold ? 'Helvetica-Bold' : 'Helvetica');
      doc.fillColor(options.cellColors ? (options.cellColors[rIdx] ? options.cellColors[rIdx][i] || C.textDark : C.textDark) : C.textDark);
      doc.text(text, cX + padding, currentY + padding, {
        width: colWidths[i] - padding * 2,
        align: options.aligns ? options.aligns[i] : 'left'
      });
      doc.rect(cX, currentY, colWidths[i], rowMaxH).lineWidth(0.5).strokeColor(C.border).stroke();
      cX += colWidths[i];
    });
    currentY += rowMaxH;
  });
  doc.restore();
  return currentY;
}

module.exports = {
  C,
  PAGE_W,
  PAGE_H,
  MARGIN,
  CONTENT_W,
  drawHeader,
  drawFooter,
  drawPageBanner,
  drawSectionHeading,
  drawCard,
  drawTable
};
