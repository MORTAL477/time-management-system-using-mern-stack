// pages/pages_26_30.js
const { C, PAGE_W, PAGE_H, MARGIN, CONTENT_W, drawHeader, drawFooter, drawPageBanner, drawSectionHeading, drawCard, drawTable } = require('./helpers');

function renderPage26(doc) {
  // Page 26: Chapter 11 (Cont.): OpEx Schedule & Projected Profit & Loss Statement
  drawHeader(doc, 26, 'CH. 11: OPEX & P&L STATEMENT');
  let y = drawPageBanner(doc, '11', 'FINANCIAL PLAN: OPEX SCHEDULE & PROJECTED PROFIT & LOSS STATEMENT');

  // 11.3 Annual Operating Expenditure (OpEx) Schedule Table
  y = drawSectionHeading(doc, '11.3 ANNUAL OPERATING EXPENDITURE (OPEX) SCHEDULE (YEARS 1 TO 3)', y);

  const opexHeaders = ['Operating Expense Head', 'Operational Description & Cost Mechanics', 'Year 1 (INR)', 'Year 2 (INR)', 'Year 3 (INR)'];
  const opexRows = [
    ['Direct Production & Crew Costs', 'Freelance crew honorariums, travel logistics, album printing, catering on set', '31,15,000', '61,79,000', '1,14,30,000'],
    ['Permanent Core Staff Salaries', 'Salaries for 7 permanent core creative and operational staff (scaled to 11 in Yr 2, 15 in Yr 3)', '21,60,000', '34,80,000', '52,20,000'],
    ['Studio Lease Rental', 'Lease for 1,800 sq ft facility in Salt Lake Sector V (INR 45,000/mo in Yr 1, 5% annual escalation)', '5,40,000', '5,67,000', '5,95,000'],
    ['Utilities & High-Speed Internet', 'Studio electricity, AC power, 10Gbps dedicated leased line commercial fiber internet', '1,44,000', '1,68,000', '1,98,000'],
    ['Software & Cloud Subscriptions', 'Adobe Creative Cloud Team, DaVinci Resolve, Frame.io Enterprise, AWS S3 cloud archiving, Artlist', '1,80,000', '2,40,000', '3,20,000'],
    ['Sales, Marketing & Promotions', 'Meta video ads, Google search ads, wedding exhibition stalls, website hosting, client collaterals', '5,80,000', '8,20,000', '11,50,000'],
    ['Equipment Insurance & AMC', 'Comprehensive all-risk insurance covering transit/theft/damage and scheduled equipment servicing', '95,000', '1,35,000', '1,80,000'],
    ['Professional, Legal & Audit Fees', 'Chartered accountant audit fees, ROC annual filings, GST returns, legal contract advisory', '75,000', '95,000', '1,20,000'],
    ['Studio Maintenance & Consumables', 'Office supplies, cleaning, client hospitality refreshments, printing stationery, equipment expendables', '80,000', '1,10,000', '1,50,000'],
    ['Total Operating Expenditure', 'Consolidated Annual Operating Expenses (OpEx)', '68,89,000', '1,17,94,000', '1,93,63,000']
  ];
  const opexColWidths = [135, 190, 60, 65, 65.28];

  y = drawTable(doc, MARGIN, y, opexHeaders, opexRows, opexColWidths, {
    fontSize: 5.8,
    padding: 1.8,
    boldCols: [0],
    boldRows: [9],
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, C.white, '#FEF3C7'],
    aligns: ['left', 'left', 'right', 'right', 'right'],
    headerAligns: ['left', 'left', 'right', 'right', 'right'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  // 11.4 Projected Profit & Loss (Income) Statement Table
  y += 8;
  y = drawSectionHeading(doc, '11.4 PROJECTED PROFIT & LOSS (INCOME) STATEMENT (YEARS 1 TO 3)', y);

  const plHeaders = ['Financial Performance Metric', 'Year 1 (INR)', 'Year 2 (INR)', 'Year 3 (INR)', 'YoY Growth (Yr 2)', 'YoY Growth (Yr 3)'];
  const plRows = [
    ['Gross Sales Revenue', '84,20,000', '1,67,00,000', '3,17,52,000', '+98.34%', '+90.13%'],
    ['Less: Direct Production Costs', '31,15,000', '61,79,000', '1,14,30,000', '+98.36%', '+85.00%'],
    ['Gross Profit (GP)', '53,05,000', '1,05,21,000', '2,03,22,000', '+98.32%', '+93.16%'],
    ['Gross Profit Margin (%)', '63.00%', '63.00%', '64.00%', '--', '--'],
    ['Less: Operating & Admin Expenses', '11,94,000', '13,15,000', '15,63,000', '+10.13%', '+18.86%'],
    ['Less: Core Staff Salaries', '21,60,000', '34,80,000', '52,20,000', '+61.11%', '+50.00%'],
    ['Less: Sales & Marketing Outlay', '5,80,000', '8,20,000', '11,50,000', '+41.38%', '+40.24%'],
    ['Operating Profit (EBITDA)', '15,31,000', '49,06,000', '1,23,89,000', '+220.44%', '+152.53%'],
    ['EBITDA Margin (%)', '18.18%', '29.38%', '39.02%', '--', '--'],
    ['Less: Depreciation & Amortization', '5,85,000', '4,97,000', '4,22,000', '-15.04%', '-15.09%'],
    ['Operating Profit (EBIT)', '9,46,000', '44,09,000', '1,19,67,000', '+366.07%', '+171.42%'],
    ['Less: Interest on Term Debt', '2,52,500', '2,02,000', '1,45,000', '-20.00%', '-28.22%'],
    ['Profit Before Tax (PBT / EBT)', '6,93,500', '42,07,000', '1,18,22,000', '+506.63%', '+180.99%'],
    ['Less: Income Tax Provision (@25%)', '1,73,375', '10,51,750', '29,55,500', '+506.63%', '+180.99%'],
    ['Net Profit After Tax (PAT)', '5,20,125', '31,55,250', '88,66,500', '+506.63%', '+180.99%'],
    ['Net Profit Margin (PAT %)', '6.18%', '18.89%', '27.92%', '--', '--']
  ];
  const plColWidths = [155, 75, 75, 75, 65, 70.28];

  y = drawTable(doc, MARGIN, y, plHeaders, plRows, plColWidths, {
    fontSize: 5.6,
    padding: 1.6,
    boldCols: [0],
    boldRows: [0, 2, 7, 10, 12, 14],
    rowBgs: [C.white, C.bgLight, '#E0F2FE', C.white, C.bgLight, C.white, C.bgLight, '#FEF3C7', C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, '#DCFCE7', C.white],
    aligns: ['left', 'right', 'right', 'right', 'center', 'center'],
    headerAligns: ['left', 'right', 'right', 'right', 'center', 'center'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  drawFooter(doc, 26);
}

function renderPage27(doc) {
  // Page 27: Chapter 11 (Cont.): Projected Cash Flow Statement
  drawHeader(doc, 27, 'CH. 11: CASH FLOW STATEMENT');
  let y = drawPageBanner(doc, '11', 'FINANCIAL PLAN: PROJECTED CASH FLOW STATEMENT (YEARS 1 TO 3)');

  // 11.5 Projected Cash Flow Statement Table
  y = drawSectionHeading(doc, '11.5 PROJECTED THREE-YEAR CASH FLOW STATEMENT', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('The Cash Flow Statement demonstrates robust operational liquidity throughout the three-year forecast horizon, confirming that CineCraft generates substantial cumulative free cash flows to fund organic expansion and service debt comfortably:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const cfHeaders = ['Cash Flow Activity & Accounting Head', 'Year 1 (INR)', 'Year 2 (INR)', 'Year 3 (INR)', 'Analytical & Cash Flow Significance'];
  const cfRows = [
    ['A. CASH FLOW FROM OPERATING ACTIVITIES', '', '', '', ''],
    ['Profit Before Tax (PBT)', '6,93,500', '42,07,000', '1,18,22,000', 'Strong operational earnings expansion'],
    ['Adjustment: Depreciation & Amortization', '5,85,000', '4,97,000', '4,22,000', 'Non-cash write-down of camera & studio assets'],
    ['Adjustment: Finance Interest on Term Debt', '2,52,500', '2,02,000', '1,45,000', 'Finance cost added back to operating flow'],
    ['Operating Profit Before Working Capital Changes', '15,31,000', '49,06,000', '1,23,89,000', 'True cash operating generation (EBITDA)'],
    ['Less: (Increase) / Decrease in Working Capital', '-1,20,000', '-2,80,000', '-4,50,000', 'Modest receivables from 30-day corporate accounts'],
    ['Less: Direct Corporate Income Taxes Paid', '-1,73,375', '-10,51,750', '-29,55,500', 'Tax remittances based on 25% corporate slab'],
    ['Net Cash Flow from Operating Activities (A)', '12,37,625', '35,74,250', '89,83,500', 'Exceptional cash conversion of net operating profits'],
    ['', '', '', '', ''],
    ['B. CASH FLOW FROM INVESTING ACTIVITIES', '', '', '', ''],
    ['Purchase of Capital Equipment & Studio Setup', '-33,20,000', '-6,50,000', '-8,50,000', 'Initial studio fit-out & multi-crew expansions'],
    ['Net Cash Flow Used in Investing Activities (B)', '-33,20,000', '-6,50,000', '-8,50,000', 'Disciplined CapEx funded via debt & cash flow'],
    ['', '', '', '', ''],
    ['C. CASH FLOW FROM FINANCING ACTIVITIES', '', '', '', ''],
    ['Inflow from Promoters\' Equity Capital', '10,00,000', '0', '0', 'Founding partners\' permanent subordinated capital'],
    ['Inflow from Bank Term Loans (MUDRA & CGTMSE)', '25,00,000', '0', '0', 'Collateral-free government-backed debt disbursed'],
    ['Repayment of Term Loan Principal', '-2,50,000', '-5,00,000', '-5,00,000', 'Scheduled amortization following 6-mo moratorium'],
    ['Payment of Interest on Term Borrowings', '-2,52,500', '-2,02,000', '-1,45,000', 'Debt service interest across reducing balance'],
    ['Net Cash Flow from Financing Activities (C)', '29,97,500', '-7,02,000', '-6,45,000', 'Initial debt mobilization, followed by rapid deleveraging'],
    ['', '', '', '', ''],
    ['NET INCREASE / (DECREASE) IN CASH (A + B + C)', '9,15,125', '22,22,250', '74,88,500', 'Net positive cash generation across all three years'],
    ['Opening Cash & Cash Equivalents Balance', '0', '9,15,125', '31,37,375', 'Beginning liquidity in current accounts'],
    ['Closing Cash & Bank Balance', '9,15,125', '31,37,375', '1,06,25,875', 'High cash accumulation providing strategic flexibility']
  ];
  const cfColWidths = [190, 70, 70, 75, 110.28];

  y = drawTable(doc, MARGIN, y, cfHeaders, cfRows, cfColWidths, {
    fontSize: 5.6,
    padding: 1.5,
    boldCols: [0],
    boldRows: [0, 4, 7, 9, 11, 13, 17, 19, 21],
    rowBgs: [
      '#0F2C59', C.white, C.bgLight, C.white, '#FEF3C7', C.white, C.bgLight, '#DCFCE7',
      C.white, '#0F2C59', C.white, '#FEE2E2',
      C.white, '#0F2C59', C.white, C.bgLight, C.white, C.bgLight, '#E0F2FE',
      C.white, '#FEF3C7', C.white, '#DCFCE7'
    ],
    aligns: ['left', 'right', 'right', 'right', 'left'],
    headerAligns: ['left', 'right', 'right', 'right', 'left'],
    headerBg: C.navy,
    headerTextColor: C.white,
    cellColors: {
      0: [C.white, C.white, C.white, C.white, C.white],
      9: [C.white, C.white, C.white, C.white, C.white],
      13: [C.white, C.white, C.white, C.white, C.white]
    }
  });

  drawFooter(doc, 27);
}

function renderPage28(doc) {
  // Page 28: Chapter 11 (Cont.): Projected Balance Sheet
  drawHeader(doc, 28, 'CH. 11: BALANCE SHEET');
  let y = drawPageBanner(doc, '11', 'FINANCIAL PLAN: PROJECTED BALANCE SHEET (YEARS 1 TO 3)');

  // 11.6 Projected Balance Sheet Table
  y = drawSectionHeading(doc, '11.6 PROJECTED THREE-YEAR STATEMENT OF FINANCIAL POSITION (BALANCE SHEET)', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('The projected Balance Sheet portrays a rapidly strengthening net worth position, aggressive deleveraging of debt, and healthy asset capitalization across the three-year operational timeframe:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const bsHeaders = ['Balance Sheet Liabilities & Assets Head', 'Year 1 (INR)', 'Year 2 (INR)', 'Year 3 (INR)', 'Accounting & Financial Interpretation'];
  const bsRows = [
    ['I. LIABILITIES & PARTNERS\' NET WORTH', '', '', '', ''],
    ['1. Partners\' Capital Accounts (Original Equity)', '10,00,000', '10,00,000', '10,00,000', 'Permanent equity capital (INR 5.0L per partner)'],
    ['2. Reserves & Surplus (Retained Earnings)', '5,20,125', '36,75,375', '1,25,41,875', 'Accumulated undistributed net profits reinvested in business'],
    ['Total Partners\' Net Worth', '15,20,125', '46,75,375', '1,35,41,875', 'Net worth multiplies 8.9x by Year 3'],
    ['', '', '', '', ''],
    ['3. Non-Current Liabilities (Long-Term Term Debt)', '', '', '', ''],
    ['• PMMY MUDRA Tarun Scheme Loan (@ 9.5% p.a.)', '8,50,000', '6,00,000', '3,50,000', 'State Bank of India MSME term loan amortization'],
    ['• CGTMSE Collateral-Free Term Loan (@ 10.5% p.a.)', '14,00,000', '11,50,000', '9,00,000', 'Punjab National Bank MSME debt reduction schedule'],
    ['Total Long-Term Borrowings', '22,50,000', '17,50,000', '12,50,000', 'Total debt reduced by 50% from INR 25.0L to 12.5L'],
    ['', '', '', '', ''],
    ['4. Current Liabilities & Provisions', '', '', '', ''],
    ['• Trade Payables & Client Advances Received', '2,40,000', '3,80,000', '5,20,000', 'Advance booking retainers for upcoming wedding events'],
    ['• Outstanding Operational Expenses & Statutory Tax Dues', '1,15,000', '1,65,000', '2,35,000', 'Accrued studio lease, GST payable, and utilities'],
    ['Total Current Liabilities', '3,55,000', '5,45,000', '7,55,000', 'Short-term obligations comfortably backed by liquid cash'],
    ['TOTAL CAPITAL & LIABILITIES', '41,25,125', '69,70,375', '1,55,46,875', 'Consolidated Capital Employed and Financial Obligations'],
    ['', '', '', '', ''],
    ['II. ASSETS EMPLOYED', '', '', '', ''],
    ['1. Non-Current / Fixed Tangible Assets', '', '', '', ''],
    ['• Gross Fixed Assets (Studio Fit-Out, Camera Fleet, Compute)', '33,20,000', '39,70,000', '48,20,000', 'Accumulated capital assets at original acquisition cost'],
    ['• Less: Accumulated Depreciation & Amortization', '-5,85,000', '-10,82,000', '-15,04,000', 'Straight-line depreciation of hardware assets over useful life'],
    ['Net Fixed Assets (Net Block)', '27,35,000', '28,88,000', '33,16,000', 'Book value of enterprise production infrastructure'],
    ['', '', '', '', ''],
    ['2. Current Assets, Loans & Advances', '', '', '', ''],
    ['• Trade Receivables (Corporate Retainers & Events)', '2,85,000', '5,65,000', '9,85,000', 'Outstanding corporate B2B invoices (average 25 days DSO)'],
    ['• Consumables & Digital Storage Media Inventory', '1,10,000', '1,80,000', '2,70,000', 'Stock of CFexpress cards, keepsake USBs, album supplies'],
    ['• Security Deposits (Studio Facility Lease & Utilities)', '80,000', '2,00,000', '3,50,000', 'Refundable commercial property and electricity deposits'],
    ['• Cash & Cash Equivalents (Bank Current Accounts)', '9,15,125', '31,37,375', '1,06,25,875', 'Liquid cash reserves held with scheduled commercial banks'],
    ['Total Current Assets', '13,90,125', '40,82,375', '1,22,30,875', 'Highly liquid asset pool exceeding current dues by 16.2x'],
    ['TOTAL ASSETS EMPLOYED', '41,25,125', '69,70,375', '1,55,46,875', 'Balance Sheet Perfectly Reconciled & Balanced']
  ];
  const bsColWidths = [190, 70, 70, 75, 110.28];

  y = drawTable(doc, MARGIN, y, bsHeaders, bsRows, bsColWidths, {
    fontSize: 5.5,
    padding: 1.4,
    boldCols: [0],
    boldRows: [0, 3, 5, 8, 10, 12, 13, 15, 16, 19, 21, 25, 26],
    rowBgs: [
      '#0F2C59', C.white, C.bgLight, '#E0F2FE', C.white,
      C.bgAlt, C.white, C.bgLight, '#FEF3C7', C.white,
      C.bgAlt, C.white, C.bgLight, C.white, '#0F2C59',
      C.white, '#0F2C59', C.white, C.bgLight, '#E0F2FE', C.white,
      C.bgAlt, C.white, C.bgLight, C.white, '#FEF3C7', '#DCFCE7'
    ],
    aligns: ['left', 'right', 'right', 'right', 'left'],
    headerAligns: ['left', 'right', 'right', 'right', 'left'],
    headerBg: C.navy,
    headerTextColor: C.white,
    cellColors: {
      0: [C.white, C.white, C.white, C.white, C.white],
      14: [C.white, C.white, C.white, C.white, C.white],
      16: [C.white, C.white, C.white, C.white, C.white]
    }
  });

  drawFooter(doc, 28);
}

function renderPage29(doc) {
  // Page 29: Chapter 11 (Cont.): Break-Even Analysis & Comprehensive Financial Ratios
  drawHeader(doc, 29, 'CH. 11: BEP & FINANCIAL RATIOS');
  let y = drawPageBanner(doc, '11', 'BREAK-EVEN ANALYSIS & COMPREHENSIVE FINANCIAL VIABILITY RATIOS');

  // 11.7 Break-Even Analysis (BEP)
  y = drawSectionHeading(doc, '11.7 BREAK-EVEN POINT (BEP) ANALYSIS & MARGIN OF SAFETY', y);

  const bepFormulaText = `Break-Even Point (BEP) determines the minimum operational turnover required to fully recover all fixed facility overheads, permanent salaries, software subscriptions, insurance, loan interest, and asset depreciation:
• Year 1 Fixed Overhead Costs: Total Fixed Overheads (Studio lease INR 5.40L + Core salaries INR 21.60L + SaaS INR 1.80L + Marketing INR 5.80L + Utilities/AMC/Legal INR 3.19L + Loan Interest INR 2.525L) = INR 40,26,500.
• Contribution Margin Ratio (PV Ratio): Gross Contribution Margin % = 63.00% (or 0.6300).
• Break-Even Sales Turnover (BEP Value): Fixed Costs / PV Ratio = INR 40,26,500 / 0.6300 = INR 63,91,270 (~INR 63.91 Lakhs).
• Capacity Utilization at Break-Even: 75.9% of Year 1 projected turnover (achieved during Month 7 of commercial operations).
• Margin of Safety (Year 1): Projected Revenue (INR 84.20L) - BEP Turnover (INR 63.91L) = INR 20.29 Lakhs (24.1% Margin of Safety).
• Expanding Safety Margins: Margin of Safety dramatically widens to 68.5% in Year 2 and reaches 82.4% in Year 3 as corporate retainers scale.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 76, 'BREAK-EVEN FORMULATION & MONTH 7 COMMERCIAL SOLVENCY', bepFormulaText, {
    fontSize: 6.8,
    lineGap: 1.2,
    accentColor: C.gold
  });

  // 11.8 Comprehensive Financial Viability Ratios Table
  y += 8;
  y = drawSectionHeading(doc, '11.8 COMPREHENSIVE FINANCIAL VIABILITY & INVESTOR RETURN RATIOS', y);

  const rHeaders = ['Financial Ratio / Metric', 'Year 1 Benchmark', 'Year 2 Benchmark', 'Year 3 Benchmark', 'Standard Industry Norm', 'Analytical Interpretation & Feasibility Assessment'];
  const rRows = [
    ['Gross Profit Margin (%)', '63.00%', '63.00%', '64.00%', '> 50.0%', 'Superior direct production cost control and value pricing power'],
    ['EBITDA Margin (%)', '18.18%', '29.38%', '39.02%', '> 15.0%', 'Substantial operating leverage across fixed studio and camera assets'],
    ['Net Profit Margin (PAT %)', '6.18%', '18.89%', '27.92%', '> 8.0%', 'Rapid net profit expansion as interest expense falls and revenues scale'],
    ['Return on Equity (ROE %)', '34.22%', '67.49%', '65.48%', '> 20.0%', 'Exceptional capital multiplication for the founding designated partners'],
    ['Return on Capital Employed (ROCE)', '25.09%', '68.61%', '80.90%', '> 18.0%', 'Highly efficient productive utilization of total equity and debt capital'],
    ['Current Ratio', '3.89x', '7.49x', '16.32x', '> 1.5x', 'Impeccable short-term liquidity; zero insolvency or payment default risk'],
    ['Debt-to-Equity Ratio', '1.48x', '0.37x', '0.09x', '< 2.0x', 'Aggressive deleveraging trajectory; virtually debt-free by end of Year 3'],
    ['Debt Service Coverage Ratio (DSCR)', '2.46x', '4.98x', '9.21x', '> 1.5x', 'Comfortably exceeds commercial bank lending benchmarks across all years'],
    ['Discounted Payback Period', '2.15 Years', '--', '--', '< 3.0 Years', 'Full capital outlay of INR 35.0 Lakhs recovered within 26 months'],
    ['Net Present Value (NPV @ 12%)', 'INR 64.82 Lakhs', '--', '--', 'Positive (> 0)', 'Substantial enterprise value creation well above cost of capital (WACC 10.1%)'],
    ['Internal Rate of Return (IRR)', '46.80%', '--', '--', '> 25.0%', 'Exceptional project yield confirming unambiguous commercial viability']
  ];
  const rColWidths = [120, 65, 65, 65, 65, 135.28];

  y = drawTable(doc, MARGIN, y, rHeaders, rRows, rColWidths, {
    fontSize: 6.2,
    padding: 2.1,
    boldCols: [0],
    boldRows: [0, 1, 2, 3, 4, 7, 8, 9, 10],
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, '#FEF3C7', '#E0F2FE', '#DCFCE7'],
    aligns: ['left', 'center', 'center', 'center', 'center', 'left'],
    headerAligns: ['left', 'center', 'center', 'center', 'center', 'left'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  drawFooter(doc, 29);
}

function renderPage30(doc) {
  // Page 30: Chapters 12, 13 & 14: Risk Assessment, Implementation Roadmap & References
  drawHeader(doc, 30, 'CH. 12-14: RISKS, ROADMAP & REFS');
  let y = drawPageBanner(doc, null, 'RISK ASSESSMENT, IMPLEMENTATION ROADMAP & ACADEMIC REFERENCES');

  // Chapter 12: Risk Mitigation Matrix
  y = drawSectionHeading(doc, 'CHAPTER 12: COMPREHENSIVE RISK ASSESSMENT & MITIGATION MATRIX', y);

  const riskHeaders = ['Risk Category', 'Specific Risk Vector', 'Probability / Impact', 'Systematic Enterprise Mitigation Protocol'];
  const riskRows = [
    ['Operational & Technical', 'Camera sensor failure on set; data write corruption; drone crash', 'Prob: Low\nImpact: Critical', 'Mandatory dual-body Sony shooting; dual-slot memory mirroring; on-site DIT 3-2-1 backup; DJI Care Refresh insurance with standby backup drone.'],
    ['Market & Seasonality', 'Revenue drop during non-wedding Hindu months (monsoon/summer)', 'Prob: High\nImpact: Moderate', 'Multi-stream diversification: year-round monthly B2B content retainers (INR 35K-60K/mo) completely insulate cash flows during wedding off-seasons.'],
    ['Financial & Credit', 'Delayed client payments or cancellations; corporate default', 'Prob: Moderate\nImpact: Moderate', 'Strict milestone policy: 25% non-refundable advance, 50% on shoot day, 25% pre-delivery; corporate MSAs with 15-day terms and interest penalties.'],
    ['Legal & Regulatory', 'DGCA drone flying restrictions; music copyright strikes', 'Prob: Moderate\nImpact: Moderate', '100% DGCA Digital Sky certified pilots with UINs; exclusive commercial soundtrack licensing via Artlist; contracts limiting revisions to 2 cycles.']
  ];
  const riskColWidths = [90, 125, 70, 230.28];

  y = drawTable(doc, MARGIN, y, riskHeaders, riskRows, riskColWidths, {
    fontSize: 5.8,
    padding: 1.8,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight]
  });

  // Chapter 13: 3-Year Implementation Roadmap
  y += 6;
  y = drawSectionHeading(doc, 'CHAPTER 13: 3-YEAR STRATEGIC IMPLEMENTATION ROADMAP', y);

  const roadHeaders = ['Timeline Milestone', 'Operational & Commercial Execution Targets', 'Financial Target', 'Key Tangible Deliverables'];
  const roadRows = [
    ['Months 1 - 2', 'LLP incorporation, MSME Udyam, GST, BMC Trade License; lease 1,800 sq ft studio in Salt Lake; cyclorama construction', 'Disbursement of MUDRA (10L) & CGTMSE (15L) debt', 'Completed studio facility & statutory compliance'],
    ['Months 3 - 4', 'Procurement of Sony FX cameras, DJI drones, Mac Studio M2; recruit core creative team; website & portfolio launch', 'CapEx deployment of INR 33.20 Lakhs', 'Functional production studio & pilot test shoots'],
    ['Months 5 - 12', 'Commercial launch across Kolkata; execute 18 weddings, 22 pre-weddings, 14 corporate events; onboard 8 B2B retainers', 'Turnover: INR 84.20L; Attain Break-Even (Month 7)', 'Established brand visibility & positive monthly cash flow'],
    ['Months 13 - 24', 'Commission second mobile crew; expand into Durgapur, Siliguri, destination hubs; scale to 16 B2B retainers, 28 weddings', 'Turnover: INR 1.67 Cr; PAT: INR 31.55 Lakhs', 'Top-3 wedding cinema brand rank in Kolkata'],
    ['Months 25 - 36', 'Bhubaneswar liaison desk; launch CineCraft Academy for editor training; scale to 26 retainers, 42 luxury weddings', 'Turnover: INR 3.18 Cr; PAT: INR 88.67 Lakhs', 'Regional industry leadership across Eastern India']
  ];
  const roadColWidths = [70, 195, 115, 135.28];

  y = drawTable(doc, MARGIN, y, roadHeaders, roadRows, roadColWidths, {
    fontSize: 5.7,
    padding: 1.6,
    boldCols: [0],
    boldRows: [2, 3, 4],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, C.bgLight, '#FEF3C7', C.white, '#DCFCE7']
  });

  // Chapter 14: Academic References & Bibliography
  y += 6;
  y = drawSectionHeading(doc, 'CHAPTER 14: ACADEMIC REFERENCES & BIBLIOGRAPHY', y);

  const biblioText = `• Batra, R., Myers, J. G., & Aaker, D. A. (2021). Advertising Management (5th ed.). Pearson Education India.
• Chaffey, D., & Ellis-Chadwick, F. (2019). Digital Marketing: Strategy, Implementation and Practice (7th ed.). Pearson UK.
• Directorate General of Civil Aviation (DGCA). (2021). Drone Rules 2021 & Digital Sky Guidelines. Ministry of Civil Aviation, Govt. of India.
• EY & FICCI. (2024). #Reinvent: India's Media & Entertainment Sector is Innovating for the Future. FICCI and Ernst & Young LLP.
• Government of India. (2015). Pradhan Mantri MUDRA Yojana (PMMY) Operational Guidelines. Ministry of Finance.
• Government of India. (2006). Micro, Small and Medium Enterprises Development (MSMED) Act, 2006. Ministry of Law and Justice.
• Kaplan, A. M., & Haenlein, M. (2010). 'Users of the world, unite! Challenges and opportunities of Social Media'. Business Horizons, 53(1), 59-68.
• Kotler, P., Keller, K. L., Chernev, A., Koshy, A., & Jha, M. (2022). Marketing Management (16th Global Edition). Pearson Education.
• KPMG India. (2023). The Big Leap: Media and Entertainment Industry Report. KPMG Advisory Services.
• Lovelock, C., Wirtz, J., & Chatterjee, J. (2020). Services Marketing: People, Technology, Strategy (8th ed.). Pearson Education India.
• Ministry of Corporate Affairs (MCA). (2008). The Limited Liability Partnership Act, 2008. Government of India.
• Osterwalder, A., & Pigneur, Y. (2010). Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers. John Wiley & Sons.
• Porter, M. E. (2008). 'The Five Competitive Forces That Shape Strategy'. Harvard Business Review, 86(1), 78-93.
• Vidyasagar University. (2022). Master of Business Administration (MBA) Curriculum and Regulations (Paper 302: Business Plan Development).`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 85, 'SCHOLARLY & STATUTORY CITATIONS', biblioText, {
    fontSize: 5.6,
    lineGap: 0.9,
    accentColor: C.navy
  });

  drawFooter(doc, 30);
}

module.exports = {
  renderPage26,
  renderPage27,
  renderPage28,
  renderPage29,
  renderPage30
};
