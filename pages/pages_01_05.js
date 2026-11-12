// pages/pages_01_05.js
const { C, PAGE_W, PAGE_H, MARGIN, CONTENT_W, drawHeader, drawFooter, drawPageBanner, drawSectionHeading, drawCard, drawTable } = require('./helpers');

function renderPage1(doc) {
  // Page 1: Formal Cover Page
  doc.save();
  
  // Outer decorative border
  doc.rect(25, 25, PAGE_W - 50, PAGE_H - 50).lineWidth(1.5).strokeColor(C.navy).stroke();
  doc.rect(28, 28, PAGE_W - 56, PAGE_H - 56).lineWidth(0.5).strokeColor(C.gold).stroke();

  // University Header
  doc.fontSize(10.5).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('EASTERN INSTITUTE FOR INTEGRATED LEARNING IN MANAGEMENT', MARGIN, 65, { align: 'center', width: CONTENT_W });
  doc.fontSize(9).font('Helvetica').fillColor(C.textMuted);
  doc.text('(EIILM - KOLKATA)', MARGIN, 80, { align: 'center', width: CONTENT_W });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(C.textDark);
  doc.text('Affiliated to Vidyasagar University, West Bengal', MARGIN, 94, { align: 'center', width: CONTENT_W });

  // Divider
  doc.strokeColor(C.gold).lineWidth(1.5).moveTo(MARGIN + 60, 115).lineTo(PAGE_W - MARGIN - 60, 115).stroke();

  // Degree & Paper Details
  doc.fontSize(11).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('MASTER OF BUSINESS ADMINISTRATION (MBA)', MARGIN, 130, { align: 'center', width: CONTENT_W });
  doc.fontSize(8.5).font('Helvetica').fillColor(C.textMuted);
  doc.text('SUBMITTED IN PARTIAL FULFILLMENT OF THE REQUIREMENTS FOR THE AWARD OF THE DEGREE', MARGIN, 147, { align: 'center', width: CONTENT_W });
  
  doc.rect(MARGIN + 70, 168, CONTENT_W - 140, 22).fill(C.bgLight);
  doc.rect(MARGIN + 70, 168, CONTENT_W - 140, 22).lineWidth(0.75).strokeColor(C.navy).stroke();
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('PROJECT REPORT: BUSINESS PLAN DEVELOPMENT (PAPER 302)', MARGIN + 70, 174, { align: 'center', width: CONTENT_W - 140 });

  // Business Category Card
  doc.rect(MARGIN + 20, 215, CONTENT_W - 40, 36).fill('#F0F4F8');
  doc.rect(MARGIN + 20, 215, CONTENT_W - 40, 36).lineWidth(0.75).strokeColor(C.border).stroke();
  doc.fontSize(8).font('Helvetica-Bold').fillColor(C.gold);
  doc.text('BUSINESS DOMAIN & INDUSTRY CLASSIFICATION', MARGIN + 20, 222, { align: 'center', width: CONTENT_W - 40 });
  doc.fontSize(9).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('Photography, Videography & Digital Content Creation Services', MARGIN + 20, 234, { align: 'center', width: CONTENT_W - 40 });

  // Business Title Block
  doc.rect(MARGIN, 275, CONTENT_W, 95).fill(C.navy);
  doc.fontSize(9).font('Helvetica-Bold').fillColor(C.gold);
  doc.text('BUSINESS PROJECT TITLE', MARGIN + 15, 288, { align: 'center', width: CONTENT_W - 30 });
  doc.fontSize(13.5).font('Helvetica-Bold').fillColor(C.white);
  doc.text('BUSINESS PLAN FOR AN INTEGRATED PHOTOGRAPHY, VIDEOGRAPHY, REELS, EDITING AND EVENT COVERAGE SERVICE', MARGIN + 20, 305, { align: 'center', width: CONTENT_W - 40, lineGap: 3 });
  doc.fontSize(10).font('Helvetica-Oblique').fillColor('#E2E8F0');
  doc.text('Commercial Brand: CineCraft Studios | Entity: CineCraft Visual Media & Productions LLP', MARGIN + 15, 348, { align: 'center', width: CONTENT_W - 30 });

  // Student Details Box
  const studentBoxY = 400;
  doc.rect(MARGIN + 40, studentBoxY, CONTENT_W - 80, 125).fill(C.bgLight);
  doc.rect(MARGIN + 40, studentBoxY, CONTENT_W - 80, 125).lineWidth(0.75).strokeColor(C.border).stroke();
  doc.rect(MARGIN + 40, studentBoxY, CONTENT_W - 80, 20).fill(C.navyLight);
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(C.white);
  doc.text('SUBMITTED BY', MARGIN + 40, studentBoxY + 5, { align: 'center', width: CONTENT_W - 80 });

  doc.fontSize(11).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('SOUMALYA GHORAI', MARGIN + 50, studentBoxY + 28, { align: 'center', width: CONTENT_W - 100 });
  doc.fontSize(8.5).font('Helvetica').fillColor(C.textDark);
  doc.text('Vidyasagar University Roll No.: VU/MBA/2023-25/084', MARGIN + 50, studentBoxY + 45, { align: 'center', width: CONTENT_W - 100 });
  doc.text('Vidyasagar University Registration No.: VU/REG/2023/10492', MARGIN + 50, studentBoxY + 60, { align: 'center', width: CONTENT_W - 100 });
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(C.gold);
  doc.text('Academic Session: 2024-2026', MARGIN + 50, studentBoxY + 75, { align: 'center', width: CONTENT_W - 100 });
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('MAJOR SPECIALIZATION: MARKETING   |   MINOR SPECIALIZATION: MEDIA & OPERATIONS', MARGIN + 50, studentBoxY + 95, { align: 'center', width: CONTENT_W - 100 });

  // Guide Details Box
  const guideBoxY = 545;
  doc.rect(MARGIN + 40, guideBoxY, CONTENT_W - 80, 85).fill(C.bgLight);
  doc.rect(MARGIN + 40, guideBoxY, CONTENT_W - 80, 85).lineWidth(0.75).strokeColor(C.border).stroke();
  doc.rect(MARGIN + 40, guideBoxY, CONTENT_W - 80, 18).fill(C.navy);
  doc.fontSize(8).font('Helvetica-Bold').fillColor(C.white);
  doc.text('UNDER THE GUIDANCE OF', MARGIN + 40, guideBoxY + 4, { align: 'center', width: CONTENT_W - 80 });

  doc.fontSize(10.5).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('PROF. (DR.) S. K. HAZRA', MARGIN + 50, guideBoxY + 26, { align: 'center', width: CONTENT_W - 100 });
  doc.fontSize(8).font('Helvetica').fillColor(C.textDark);
  doc.text('Faculty Advisor & Project Supervisor', MARGIN + 50, guideBoxY + 41, { align: 'center', width: CONTENT_W - 100 });
  doc.text('Department of Business Administration', MARGIN + 50, guideBoxY + 54, { align: 'center', width: CONTENT_W - 100 });
  doc.text('EIILM-Kolkata / Vidyasagar University', MARGIN + 50, guideBoxY + 67, { align: 'center', width: CONTENT_W - 100 });

  // Date and Location
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('KOLKATA, WEST BENGAL', MARGIN, 675, { align: 'center', width: CONTENT_W });
  doc.fontSize(8).font('Helvetica').fillColor(C.textMuted);
  doc.text('DATE OF SUBMISSION: NOVEMBER 06, 2026', MARGIN, 690, { align: 'center', width: CONTENT_W });

  doc.restore();
}

function renderPage2(doc) {
  // Page 2: Certificate of the Faculty Guide & Student Declaration
  drawHeader(doc, 2, 'CERTIFICATE & DECLARATION');
  let y = drawPageBanner(doc, null, 'STATUTORY CERTIFICATES & STUDENT DECLARATION');

  // Certificate Section
  y = drawSectionHeading(doc, 'CERTIFICATE OF THE PROJECT FACULTY GUIDE', y);

  const certText = `This is to certify that the Business Plan Development Report titled 'Business Plan for an Integrated Photography, Videography, Reels, Editing and Event Coverage Service' submitted by Soumalya Ghorai (VU Roll No.: VU/MBA/2023-25/084, VU Regn. No.: VU/REG/2023/10492) in partial fulfillment of the requirements for the award of the degree of Master of Business Administration (MBA Paper Code: MBA 302) from Vidyasagar University, is a bonafide record of independent, original project work carried out under my direct supervision and academic guidance.

The project demonstrates exceptional conceptual clarity across strategic management, empirical market research, operational workflows, integrated services marketing (7Ps), and advanced financial feasibility modeling. The technical parameters, equipment capital expenditure schedules, micro-unit economics, and projected financial statements have been systematically evaluated and validated.

To the best of my knowledge and academic assessment, this report has not been submitted previously to this or any other University or Institution for the award of any degree, diploma, fellowship, or other scholastic title.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 140, 'FACULTY ADVISOR APPROVAL STATEMENT', certText, {
    fontSize: 7.2,
    lineGap: 1.5,
    accentColor: C.navy
  });

  // Guide Signature Block
  const sigY = y + 15;
  doc.save();
  doc.fontSize(7.5).font('Helvetica-Bold').fillColor(C.textDark);
  doc.text('Date: 06.11.2026', MARGIN + 15, sigY);
  doc.text('Place: Kolkata, West Bengal', MARGIN + 15, sigY + 12);

  doc.strokeColor(C.navy).lineWidth(1).moveTo(CONTENT_W - 180, sigY + 25).lineTo(CONTENT_W + MARGIN, sigY + 25).stroke();
  doc.fontSize(8).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('Prof. (Dr.) S. K. Hazra', CONTENT_W - 180, sigY + 30, { width: 180, align: 'center' });
  doc.fontSize(7).font('Helvetica').fillColor(C.textMuted);
  doc.text('Faculty Guide / Project Advisor', CONTENT_W - 180, sigY + 41, { width: 180, align: 'center' });
  doc.text('Department of Business Administration', CONTENT_W - 180, sigY + 50, { width: 180, align: 'center' });
  doc.text('EIILM-Kolkata / Vidyasagar University', CONTENT_W - 180, sigY + 59, { width: 180, align: 'center' });
  doc.restore();

  // Divider
  const divY = sigY + 80;
  doc.strokeColor(C.gold).lineWidth(1).moveTo(MARGIN + 20, divY).lineTo(PAGE_W - MARGIN - 20, divY).stroke();

  // Student Declaration Section
  let declY = divY + 15;
  declY = drawSectionHeading(doc, 'STUDENT DECLARATION', declY);

  const declText = `I, Soumalya Ghorai, student of Master of Business Administration (MBA), Session 2024-2026, Vidyasagar University, hereby declare that the Business Plan Development report titled 'Business Plan for an Integrated Photography, Videography, Reels, Editing and Event Coverage Service' submitted for Paper Code MBA 302, is an authentic and original piece of entrepreneurial research developed independently by me.

I confirm that this report reflects genuine primary field observations, secondary industry intelligence, operational workflows, and rigorous financial projections. All market benchmarks, statistical tables, and citations drawn from published academic literature, industry bodies (FICCI, EY, KPMG), and government agencies have been duly acknowledged and referenced. No portion of this work has been plagiarized.`;

  declY = drawCard(doc, MARGIN, declY, CONTENT_W, 115, 'FORMAL DECLARATION OF ORIGINALITY', declText, {
    fontSize: 7.2,
    lineGap: 1.5,
    accentColor: C.gold
  });

  // Student Signature Block
  const sSigY = declY + 15;
  doc.save();
  doc.fontSize(7.5).font('Helvetica-Bold').fillColor(C.textDark);
  doc.text('Date: 06.11.2026', MARGIN + 15, sSigY);
  doc.text('Place: Kolkata, West Bengal', MARGIN + 15, sSigY + 12);

  doc.strokeColor(C.navy).lineWidth(1).moveTo(CONTENT_W - 180, sSigY + 25).lineTo(CONTENT_W + MARGIN, sSigY + 25).stroke();
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(C.navy);
  doc.text('Soumalya Ghorai', CONTENT_W - 180, sSigY + 30, { width: 180, align: 'center' });
  doc.fontSize(7).font('Helvetica').fillColor(C.textMuted);
  doc.text('VU Roll No.: [VU/MBA/2023-25/084]', CONTENT_W - 180, sSigY + 41, { width: 180, align: 'center' });
  doc.text('VU Registration No.: [VU/REG/2023/10492]', CONTENT_W - 180, sSigY + 50, { width: 180, align: 'center' });
  doc.text('Major: Marketing | Minor: Media & Operations', CONTENT_W - 180, sSigY + 59, { width: 180, align: 'center' });
  doc.restore();

  drawFooter(doc, 2);
}

function renderPage3(doc) {
  // Page 3: Acknowledgements & Executive Summary / Project Synopsis
  drawHeader(doc, 3, 'ACKNOWLEDGEMENTS & EXECUTIVE SUMMARY');
  let y = drawPageBanner(doc, null, 'ACKNOWLEDGEMENTS & PROJECT SYNOPSIS');

  // Acknowledgements Section
  y = drawSectionHeading(doc, 'ACKNOWLEDGEMENTS', y);
  const ackText = `The completion of this comprehensive Business Plan Development report has been an invigorating intellectual journey bridging theoretical paradigms of strategic management, media marketing, and financial engineering with practical entrepreneurial feasibility. I express my deepest gratitude to the Examination Cell, the Director, and the Academic Faculty of Eastern Institute for Integrated Learning in Management (EIILM-Kolkata) affiliated to Vidyasagar University, for providing the scholarly platform and infrastructural support necessary to undertake this business plan.

I am profoundly indebted to my esteemed Project Guide, Prof. (Dr.) S. K. Hazra, whose incisive critique, unwavering patience, and continuous intellectual guidance helped refine the operational structure, service blueprints, and financial modeling of this enterprise. Special gratitude is extended to industry professionals, independent cinematographers, wedding event organizers, and digital content creators across West Bengal whose practical feedback provided empirical authenticity to this study.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 110, 'EXPRESSION OF GRATITUDE', ackText, {
    fontSize: 7.2,
    lineGap: 1.4,
    accentColor: C.navy
  });

  // Executive Summary Section
  y += 12;
  y = drawSectionHeading(doc, 'EXECUTIVE SUMMARY & PROJECT SYNOPSIS', y);

  const execSummary = `The contemporary Indian Media & Entertainment landscape is undergoing an unprecedented structural revolution fueled by ubiquitous 5G connectivity, creator platforms, and an institutional pivot toward digital-first visual storytelling. Commercial photography, cinematic videography, viral vertical short-form reels, and enterprise event coverage have converged into mission-critical communication engines for corporate brands, D2C retail players, public institutions, and modern families.

This Business Plan outlines the roadmap for establishing 'CineCraft Visual Media & Productions LLP' (operating commercially as CineCraft Studios), an integrated media production house headquartered in Salt Lake Sector V, Kolkata. CineCraft Studios addresses the acute polarization in Eastern India's media service industry, positioned squarely between technologically antiquated, slow-delivering conventional neighborhood studios and exorbitantly priced, rigid national advertising production agencies.

CineCraft Studios operates an agile hybrid business model delivering five core commercial verticals: (1) Commercial, Fashion, Architectural & Candid Milestone Photography; (2) 4K/6K Cinema-Grade Videography & Aerial Drone Filming; (3) Viral Social Media Reels & Vertical Video Asset Creation (24-hour Same-Day Edit turnaround); (4) High-Precision Cloud Post-Production, DaVinci Resolve Color Grading & Sound Engineering; and (5) Real-Time Multi-Cam Live Event Coverage featuring enterprise RTMP broadcasting.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 155, 'VENTURE OVERVIEW & CORE CATALYSTS', execSummary, {
    fontSize: 7.1,
    lineGap: 1.4,
    accentColor: C.gold
  });

  // Key Financial & Project Feasibility Snapshot Table
  y += 10;
  y = drawSectionHeading(doc, 'EXECUTIVE PROJECT & FINANCIAL SNAPSHOT', y);

  const headers = ['Key Feasibility Dimension', 'Year 1 (FY 2026-27)', 'Year 2 (FY 2027-28)', 'Year 3 (FY 2028-29)', 'Strategic & Financial Significance'];
  const rows = [
    ['Gross Revenue Outlay', 'INR 84.20 Lakhs', 'INR 167.00 Lakhs', 'INR 317.52 Lakhs', '+98.3% YoY growth fueled by B2B retainers & weddings'],
    ['Operating Profit (EBITDA)', 'INR 15.31 Lakhs (18.2%)', 'INR 49.06 Lakhs (29.4%)', 'INR 123.89 Lakhs (39.0%)', 'Substantial operational leverage on fixed studio assets'],
    ['Net Profit After Tax (PAT)', 'INR 5.20 Lakhs (6.2%)', 'INR 31.55 Lakhs (18.9%)', 'INR 88.67 Lakhs (27.9%)', 'Rapid net margin expansion as debt amortizes'],
    ['Capital Expenditure (CapEx)', 'INR 35.00 Lakhs (Initial)', 'INR 6.50 Lakhs (Upgrade)', 'INR 8.50 Lakhs (Expansion)', 'Debt:Equity = 71.4% : 28.6% (MUDRA + CGTMSE loans)'],
    ['Break-Even Point (BEP)', 'INR 63.91 Lakhs (Month 7)', '51.7% of Capacity', 'Margin of Safety: 24.1%', 'Accelerated cash break-even ensures low operational risk'],
    ['Key Return Metrics', 'IRR: 46.8%', 'NPV @ 12%: INR 64.82L', 'Payback: 2.15 Years', 'DSCR: 2.46x (Yr 1) scaling to 9.21x (Yr 3) (Bank grade)']
  ];
  const colWidths = [125, 95, 95, 95, 105.28];
  
  y = drawTable(doc, MARGIN, y, headers, rows, colWidths, {
    fontSize: 6.8,
    padding: 3,
    boldCols: [0]
  });

  drawFooter(doc, 3);
}

function renderPage4(doc) {
  // Page 4: Complete Table of Contents
  drawHeader(doc, 4, 'TABLE OF CONTENTS');
  let y = drawPageBanner(doc, null, 'TABLE OF CONTENTS');

  doc.fontSize(7.5).font('Helvetica-Oblique').fillColor(C.textMuted);
  doc.text('Comprehensive 30-Page Structured Report Index covering MBA Paper 302: Business Plan Development', MARGIN, y);
  y += 12;

  const headers = ['Chapter', 'Subject / Section Title', 'Focus & Technical Scope', 'Page'];
  const rows = [
    ['--', 'Preliminary Statutory Sheets', 'Cover Page, Faculty Guide Certificate, Student Declaration, Acknowledgements', '1 - 3'],
    ['--', 'Table of Contents & Executive Synopsis', 'Master Document Map & Project Executive Overview', '4'],
    ['Ch. 1', 'Company Description & Business Synopsis', 'Business Category, NIC-2008 Classification, Strategic Rationale & Benchmark', '5'],
    ['Ch. 1', 'Company Description (Cont.)', 'Legal Structure, Statutory Registrations, Studio Facility, Strategic Goals & USP', '6'],
    ['Ch. 2', 'Macro-Environmental & Market Analysis', 'PESTLE Analysis of the Indian Media & Visual Content Industry', '7'],
    ['Ch. 2', 'Market Analysis & Size Projections (Cont.)', 'FICCI-EY Data, Segmental TAM, Creator Economy & Indian Wedding Sector', '8'],
    ['Ch. 3', 'Customer Analysis & Market Segmentation', 'Multi-Dimensional STP Framework & Customer Decision Journeys (B2C & B2B)', '9'],
    ['Ch. 3', 'Target Personas & Pain Point Resolution', 'Buyer Personas (Aspirational Couple, D2C Founder, PR Director) & Pain Points', '10'],
    ['Ch. 4', 'Product & Service Portfolio Overview', 'Core Service Verticals, Technical Specs, Tech Stack & Service Matrix', '11'],
    ['Ch. 4', 'Service Packaging & Tiered Price Points', 'Silver, Gold, Platinum Tiers, Corporate Summit & Monthly Retainer Specs', '12'],
    ['Ch. 4', 'Phased Geographic Rollout Schedule', 'Phase 1 (Kolkata), Phase 2 (West Bengal), Phase 3 (Pan-Eastern India)', '13'],
    ['Ch. 5', 'Business Model & Value Architecture', 'Comprehensive 9-Block Business Model Canvas (BMC) Framework', '14'],
    ['Ch. 5', 'Operational Mechanics & Scalability', 'Hybrid Hub-and-Spoke Operations, Core-and-Flex Staffing & Asset-Light Scaling', '15'],
    ['Ch. 6', 'Revenue Model & Service Unit Economics', 'Multi-Stream Revenue Framework (Years 1-3) & Value-Based Pricing Method', '16'],
    ['Ch. 6', 'Detailed Unit Economics & Margins', 'Direct Cost Breakdown, Gross Contribution Margin Analysis across Core Offerings', '17'],
    ['Ch. 7', 'Competitive Landscape & Benchmarking', 'Market Tiers (Local, Freelance, Boutique, CineCraft) & Benchmarking Matrix', '18'],
    ['Ch. 7', 'Porter\'s Five Forces Strategic Analysis', 'Evaluation of New Entrants, Buyers, Suppliers, Substitutes, Industry Rivalry', '19'],
    ['Ch. 8', 'Comprehensive Marketing Plan (STP & 7Ps)', 'Positioning Statement & The 7Ps Services Marketing Mix Architecture', '20'],
    ['Ch. 8', 'Integrated Marketing Communications (IMC)', 'Year 1 Marketing Budget Allocation, Channel Mix, CAC, CPL & ROAS Strategy', '21'],
    ['Ch. 9', 'Production & Operations Infrastructure', '1,800 sq ft Studio Layout Zones & Master Capital Equipment Inventory Schedule', '22'],
    ['Ch. 9', 'Production SOPs & Software Subscriptions', 'Digital Consumables, Software SaaS Stack & 5-Stage Standard Operating Procedures', '23'],
    ['Ch. 10', 'Organizational Plan & Governance', 'LLP Ownership Structure, Departmental Hierarchy & 3-Year Manpower Schedule', '24'],
    ['Ch. 11', 'Financial Plan: Capital Outlay & Funding', 'Total Initial Project Cost Outlay & MSME Debt-Equity Financing Terms', '25'],
    ['Ch. 11', 'Financial Plan: OpEx & Profit & Loss', 'Annual Operating Expenditure Schedule & Projected 3-Year Income Statement', '26'],
    ['Ch. 11', 'Financial Plan: Projected Cash Flows', 'Cash Flow from Operating, Investing and Financing Activities (Years 1 to 3)', '27'],
    ['Ch. 11', 'Financial Plan: Projected Balance Sheet', 'Projected Liabilities, Partners\' Net Worth & Asset Block (Years 1 to 3)', '28'],
    ['Ch. 11', 'Break-Even Analysis & Financial Ratios', 'BEP Capacity, Margin of Safety, EBITDA/PAT Margins, ROE, ROCE, DSCR, IRR, NPV', '29'],
    ['Ch. 12-14', 'Risk Mitigation, Roadmap & References', 'Risk Management Matrix, Socio-Economic Impact, 3-Yr Milestones & Bibliography', '30']
  ];
  const colWidths = [42, 175, 258, 40.28];

  y = drawTable(doc, MARGIN, y, headers, rows, colWidths, {
    fontSize: 6.7,
    padding: 2.7,
    boldCols: [0, 3],
    headerBg: C.navy,
    headerTextColor: C.white,
    aligns: ['left', 'left', 'left', 'center'],
    headerAligns: ['left', 'left', 'left', 'center']
  });

  drawFooter(doc, 4);
}

function renderPage5(doc) {
  // Page 5: Chapter 1: Company Description & Business Synopsis
  drawHeader(doc, 5, 'CH. 1: COMPANY DESCRIPTION');
  let y = drawPageBanner(doc, '1', 'COMPANY DESCRIPTION & BUSINESS SYNOPSIS');

  // 1.1 Business Category Identification
  y = drawSectionHeading(doc, '1.1 BUSINESS CATEGORY IDENTIFICATION & INDUSTRY CLASSIFICATION', y);
  const catText = `The proposed enterprise operates within the Media & Entertainment (M&E) Industry under the specialized sub-category of Photography, Videography & Digital Content Creation Services. Under the National Industrial Classification (NIC-2008), the business is officially classified under Class 7420 ('Photographic activities', encompassing commercial and consumer photography, portrait studios, video recording of events, and digital image processing) and Class 5911/5912 ('Motion picture, video and television programme production, post-production activities').

In the modern digital economy, this domain has evolved into an integrated creative tech industry. It encompasses multi-format visual capture (4K/6K cinema, aerial drone videography), high-velocity mobile content creation (vertical reels for Instagram and YouTube Shorts), high-end post-production (ACES color grading, sound engineering), and enterprise live multi-camera broadcasting for hybrid events.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 72, 'NIC-2008 INDUSTRY TAXONOMY & MODERN CREATIVE TECH DEFINITION', catText, {
    fontSize: 7.0,
    lineGap: 1.3,
    accentColor: C.navy
  });

  // 1.2 Rationale for Choosing the Business Category
  y += 8;
  y = drawSectionHeading(doc, '1.2 STRATEGIC RATIONALE FOR CHOOSING THE CATEGORY (5 MARKET TAILWINDS)', y);

  const tailwinds = [
    ['Tailwind 1: Exponential Growth of the Video-First Digital Economy', 'India is the global leader in per-capita mobile data consumption (>24 GB/user/month). Video formats represent >82% of all internet traffic. Instagram, YouTube, and LinkedIn have transformed into primary commercial discovery engines where brands require high-velocity video content.'],
    ['Tailwind 2: Resilient Scale of the Indian Wedding Market (USD 130B)', 'Valued at over USD 130 Billion (~INR 10.5 Lakh Crores), the Indian wedding sector is highly recession-resilient. Media documentation accounts for 6% to 9% of total wedding budgets, with couples prioritizing cinematic films and instant social reels over static albums.'],
    ['Tailwind 3: Surging SME & Corporate Demand for Professional B2B Media', 'SMEs, D2C brands, healthcare chains, and educational institutions in Kolkata and industrial belts (Howrah, Hooghly, North 24 Parganas) require ongoing corporate video production, recruitment films, and ad shoots, lacking in-house infrastructure.'],
    ['Tailwind 4: Acute Market Polarization & Fragmented Competition', 'Eastern India\'s supply is divided between unorganized neighborhood studios (obsolete gear, 4-6 month delays) and luxury national boutique houses (charging INR 5-10 Lakhs). CineCraft bridges this gap with an institutionalized middle-market offering.'],
    ['Tailwind 5: High Capital Efficiency & Scalable Margins', 'While initial investment is concentrated in camera tech and workstations, operations exhibit 55% to 65% gross margins, negligible physical raw material costs, and stable recurring cash flows via monthly B2B retainers.']
  ];

  tailwinds.forEach(([title, desc]) => {
    y = drawCard(doc, MARGIN, y, CONTENT_W, 36, title, desc, {
      fontSize: 6.8,
      titleSize: 7.4,
      lineGap: 1.1,
      accentColor: C.gold,
      bg: C.bgLight
    });
    y += 4;
  });

  // 1.3 Corporate Brand Name, Vision, Mission & Tagline Benchmark
  y += 4;
  y = drawSectionHeading(doc, '1.3 CORPORATE IDENTITY & STRATEGIC BENCHMARKING', y);

  const bmHeaders = ['Company', 'Vision Statement', 'Mission Statement', 'Corporate Tagline'];
  const bmRows = [
    ['Apple Inc.', 'The best experience only on Apple.', 'Bringing the best user experience to customers through innovation.', 'Think Different'],
    ['Nike Inc.', 'We see the world where everybody is an athlete united in joy of movement.', 'To bring inspiration and innovation to every athlete in the world.', 'Just Do It'],
    ['Singapore Airlines', 'A global company dedicated to providing air transportation service of highest quality.', 'To provide a safe, secure and seamless travel experience with highest quality of service.', 'A Great Way to Fly'],
    ['Swiggy', 'To elevate quality of life of urban consumers by providing unparalleled convenience.', 'Change the way India eats.', 'Swiggy Karo, Phir Jo Chahe Karo'],
    ['CineCraft Studios (Our Brand)', 'To be Eastern India\'s most agile, technology-driven visual storytelling ecosystem, transforming personal milestones into cinematic legacies and enterprise narratives into high-converting assets.', 'To democratize high-end cinematic visual production through state-of-the-art camera tech, real-time on-site editing, optimized short-form reels, and enterprise live broadcasting, delivering aesthetic excellence, fast turnaround, and transparent value.', 'Stories in Every Frame, Impact in Every Second']
  ];
  const bmColWidths = [85, 145, 185, 100.28];

  y = drawTable(doc, MARGIN, y, bmHeaders, bmRows, bmColWidths, {
    fontSize: 6.5,
    padding: 2.5,
    boldCols: [0],
    boldRows: [4],
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, '#FEF3C7'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  drawFooter(doc, 5);
}

module.exports = {
  renderPage1,
  renderPage2,
  renderPage3,
  renderPage4,
  renderPage5
};
