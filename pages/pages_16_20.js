// pages/pages_16_20.js
const { C, PAGE_W, PAGE_H, MARGIN, CONTENT_W, drawHeader, drawFooter, drawPageBanner, drawSectionHeading, drawCard, drawTable } = require('./helpers');

function renderPage16(doc) {
  // Page 16: Chapter 6: Revenue Model & Service Unit Economics
  drawHeader(doc, 16, 'CH. 6: REVENUE MODEL');
  let y = drawPageBanner(doc, '6', 'REVENUE MODEL & MULTI-STREAM REVENUE PROJECTIONS');

  // 6.1 Multi-Stream Revenue Generation Framework
  y = drawSectionHeading(doc, '6.1 MULTI-STREAM REVENUE ARCHITECTURE & COUNTER-CYCLICAL PORTFOLIO', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('CineCraft synthesizes high-ticket seasonal event contracts with stable recurring monthly corporate retainers. This counter-cyclical structure eliminates the severe winter seasonal cash crunches that cripple traditional photography studios:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const revHeaders = ['Revenue Stream Vertical', 'Contractual Revenue Nature', 'Year 1 (INR Lakhs)', 'Year 2 (INR Lakhs)', 'Year 3 (INR Lakhs)', 'Revenue Share (Yr 3)'];
  const revRows = [
    ['B2C Wedding & Milestone Celebrations', 'Seasonal / High-ticket Milestone Contracts', '25.20', '46.20', '88.20', '27.8%'],
    ['Pre-Wedding & Concept Music Love Stories', 'Seasonal / Semi-regular Milestone', '9.90', '16.00', '27.00', '8.5%'],
    ['B2B Corporate Summits & AGMs', 'Regular / Quarterly Institutional Contracts', '11.90', '22.80', '43.70', '13.8%'],
    ['Monthly B2B Social Reel Retainers', 'Contractual Monthly Recurring Revenue (MRR)', '25.20', '57.60', '112.32', '35.4%'],
    ['Commercial Ad Shoots & Product Catalogues', 'Project-based / E-commerce Brands', '7.80', '16.00', '30.80', '9.7%'],
    ['Post-Production & Remote Editing Outsourcing', 'Contractual / Hourly Service Desk', '4.20', '8.40', '15.50', '4.9%'],
    ['Total Consolidated Gross Sales Revenue', 'Diversified Enterprise Annual Turnover', '84.20', '167.00', '317.52', '100.0%']
  ];
  const revColWidths = [155, 130, 60, 60, 60, 50.28];

  y = drawTable(doc, MARGIN, y, revHeaders, revRows, revColWidths, {
    fontSize: 6.8,
    padding: 2.8,
    boldCols: [0],
    boldRows: [6],
    rowBgs: [C.white, C.bgLight, C.white, '#FEF3C7', C.white, C.bgLight, '#E0F2FE'],
    aligns: ['left', 'left', 'right', 'right', 'right', 'right'],
    headerAligns: ['left', 'left', 'right', 'right', 'right', 'right'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  // 6.2 Mark-up & Value-Based Pricing Methodology
  y += 10;
  y = drawSectionHeading(doc, '6.2 PRICING METHODOLOGY: COST-PLUS FLOOR & VALUE-BASED PREMIUM TIERING', y);

  const priceText = `CineCraft applies a hybrid pricing methodology combining Cost-Plus Mark-Up with Strategic Value-Based Pricing:
1. Baseline Cost-Plus Mark-up: Every project's direct production cost (crew honorariums, gear depreciation, travel, data storage, album manufacturing, software licensing) is computed rigorously. A standardized target gross profit margin of 55% to 65% is applied to establish the non-negotiable floor price.
2. Value-Based Premium Tiering: For high-stakes luxury weddings and brand commercial campaigns where emotional involvement and client business risk are paramount, pricing reflects perceived artistic exclusivity, guaranteed 24-hour Same-Day Edit turnaround speed, and the brand prestige of CineCraft's cinema-grade output.
3. Recurring Retainer Volume Discounting: B2B clients committing to 6-month or 12-month retainer contracts receive volume discounts (10% to 15% reduction against per-reel ad-hoc rates), locking in long-term predictable cash inflows for the enterprise.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 80, 'HYBRID COST-PLUS & VALUE PRICING FRAMEWORK', priceText, {
    fontSize: 6.8,
    lineGap: 1.3,
    accentColor: C.gold
  });

  // Revenue Diversification Insights
  y += 8;
  y = drawSectionHeading(doc, 'STRATEGIC REVENUE RESILIENCE & MARGIN PROFILE', y);
  const divText = `• De-risking Seasonality: In traditional studios, 75% of revenues are squeezed into 4 winter months (Nov-Feb). At CineCraft, Monthly B2B Social Retainers expand to 35.4% of total revenue by Year 3 (INR 112.32 Lakhs), generating consistent monthly cash flow to cover studio lease and permanent core salaries year-round.
• Top-Line Growth Drivers: Gross sales expand from INR 84.20 Lakhs in Year 1 to INR 167.00 Lakhs in Year 2 (+98.3%), reaching INR 317.52 Lakhs in Year 3 (+90.1%), driven by capacity scaling from 1 to 3 mobile crews.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 50, 'PORTFOLIO DIVERSIFICATION METRICS', divText, {
    fontSize: 6.8,
    lineGap: 1.2,
    accentColor: C.navy
  });

  drawFooter(doc, 16);
}

function renderPage17(doc) {
  // Page 17: Chapter 6 (Cont.): Detailed Unit Cost Breakdown & Contribution Margin Analysis
  drawHeader(doc, 17, 'CH. 6: UNIT ECONOMICS');
  let y = drawPageBanner(doc, '6', 'SERVICE UNIT ECONOMICS & CONTRIBUTION MARGIN ANALYSIS');

  // 6.3 Detailed Unit Cost Breakdown Table
  y = drawSectionHeading(doc, '6.3 MICRO-ECONOMIC UNIT COST BREAKDOWN & CONTRIBUTION MARGINS', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('To establish micro-economic rigor, direct production costs, overhead allocations, and net contribution margins were computed for CineCraft\'s four representative commercial service offerings:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const costHeaders = ['Cost & Revenue Component', 'Gold Wedding Package\n(2 Full Days)', 'B2B Monthly Retainer\n(Growth Tier: 16 Reels)', 'Corporate Summit\n(1-Day Multi-Cam)', 'Pre-Wedding Concept Film\n(1 Full Shoot Day)'];
  const costRows = [
    ['Client Selling Price (Fee / MRP)', 'INR 1,45,000', 'INR 45,000 / month', 'INR 85,000', 'INR 45,000'],
    ['Direct Crew Honorariums', 'INR 32,000 (4 crew x 2 days)', 'INR 10,000 (2 crew x 2 days)', 'INR 18,000 (3 crew x 1 day)', 'INR 10,000 (2 crew x 1 day)'],
    ['Equipment Depreciation & Wear', 'INR 6,500', 'INR 2,200', 'INR 4,500', 'INR 2,500'],
    ['Logistics, Fuel & Travel', 'INR 4,500', 'INR 1,500', 'INR 3,000', 'INR 4,000'],
    ['Album Printing / Physical Media', 'INR 9,500 (Canvera 40 pgs)', 'INR 0 (Pure Digital)', 'INR 1,500 (Branded USB)', 'INR 0 (Pure Digital)'],
    ['Music Licensing & Cloud Storage', 'INR 1,800', 'INR 1,200', 'INR 1,200', 'INR 1,200'],
    ['On-Site Hospitality & Catering', 'INR 2,500', 'INR 800', 'INR 1,500', 'INR 1,200'],
    ['Total Direct Production Cost', 'INR 56,800', 'INR 15,700', 'INR 29,700', 'INR 18,900'],
    ['Gross Contribution Margin (INR)', 'INR 88,200', 'INR 29,300', 'INR 55,300', 'INR 26,100'],
    ['Gross Profit Margin (%)', '60.83%', '65.11%', '65.06%', '58.00%']
  ];
  const costColWidths = [145, 100, 95, 85, 90.28];

  y = drawTable(doc, MARGIN, y, costHeaders, costRows, costColWidths, {
    fontSize: 6.5,
    padding: 2.5,
    boldCols: [0],
    boldRows: [0, 7, 8, 9],
    rowBgs: [C.bgAlt, C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, '#FEE2E2', '#DCFCE7', '#FEF3C7'],
    aligns: ['left', 'center', 'center', 'center', 'center'],
    headerAligns: ['left', 'center', 'center', 'center', 'center'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  // Micro-Economic Analysis & Operational Takeaways
  y += 10;
  y = drawSectionHeading(doc, 'STRATEGIC INTERPRETATION OF SERVICE UNIT ECONOMICS', y);

  const ecoTakeaways = [
    ['Robust Gross Margins Across All Service Lines (>58% to 65%)', 'Direct production costs are strictly bounded between 34.9% and 42.0% of client selling prices. Even in asset-heavy offerings like the Gold Wedding Package (which includes luxury physical leather albums), CineCraft preserves an exceptional 60.83% gross contribution margin.'],
    ['Exceptional Margin Profile on B2B Content Retainers (65.11%)', 'The Growth Retainer generates INR 29,300 net contribution margin on a monthly fee of INR 45,000. Because digital short-form video delivery carries zero physical printing or album manufacturing costs, retainers generate immediate high-velocity cash margins.'],
    ['High-Ticket Corporate Event Efficiency (65.06%)', 'Corporate summits require no post-production album layout and rely heavily on same-day switching and live streaming, yielding INR 55,300 gross margin per single-day corporate engagement.'],
    ['Favorable Cash-Conversion Cycle', 'CineCraft collects 75% of total project revenue (25% advance + 50% shoot day) before incurring the final 25% delivery phase. This negative working capital cycle eliminates cash crunches and shields the business from bad debts.']
  ];

  ecoTakeaways.forEach(([title, desc]) => {
    y = drawCard(doc, MARGIN, y, CONTENT_W, 32, title, desc, {
      fontSize: 6.7,
      titleSize: 7.3,
      lineGap: 1.1,
      accentColor: C.navy,
      bg: C.bgLight
    });
    y += 4;
  });

  drawFooter(doc, 17);
}

function renderPage18(doc) {
  // Page 18: Chapter 7: Competitive Landscape & Strategic Benchmarking
  drawHeader(doc, 18, 'CH. 7: COMPETITIVE LANDSCAPE');
  let y = drawPageBanner(doc, '7', 'COMPETITIVE LANDSCAPE & STRATEGIC BENCHMARKING');

  // 7.1 Competitive Categorization & Market Structure
  y = drawSectionHeading(doc, '7.1 REGIONAL MARKET STRUCTURE & COMPETITIVE CATEGORIZATION', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('The commercial visual media landscape in Kolkata and Eastern India is characterized by severe fragmentation, divided into four distinct operating tiers:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const tiers = [
    ['Tier 1: Unorganized Neighborhood Photo Studios (45% Market Share)', 'Ubiquitous local print and passport shops located in residential neighborhoods (Shyambazar, Garia, Howrah). Rely on entry-level DSLRs, outdated tungsten/halogen lights, and traditional staging. Turnaround times are dismal (often 3 to 6 months for delivery), color grading is non-existent, and they possess zero capabilities in drone filming, vertical reels, or live streaming.'],
    ['Tier 2: Informal Freelance Collectives (25% Market Share)', 'Young individual photographers operating from home without permanent studios or full-time staff. While socially savvy on Instagram, they suffer from high unreliability, lack backup camera bodies, cannot issue legal GST invoices, and frequently abandon projects during exam or peak wedding dates.'],
    ['Tier 3: Established Boutique Wedding Cinema Houses (20% Market Share)', 'Premium boutique agencies (e.g. Stories by Joseph Radhik, The Wedding Filmer, elite South Kolkata boutiques). While technically proficient, their pricing is exorbitant (INR 4.50 Lakhs to 12.00 Lakhs per wedding), pricing out the vast upper-middle class, with rigid operations that refuse B2B retainer work.'],
    ['Tier 4: CineCraft Studios (The New Strategic Entrant - Proposed 10% Regional Market Share)', 'Positioned squarely in the high-value middle market, combining cinema-grade Sony full-frame technology, transparent package pricing, contractual reliability, and the industry\'s fastest turnaround (24-hour Same-Day Social Reels and 14-day master delivery).']
  ];

  tiers.forEach(([title, desc]) => {
    y = drawCard(doc, MARGIN, y, CONTENT_W, 36, title, desc, {
      fontSize: 6.7,
      titleSize: 7.3,
      lineGap: 1.1,
      accentColor: title.includes('CineCraft') ? C.gold : C.navy,
      bg: title.includes('CineCraft') ? '#FEF3C7' : C.bgLight
    });
    y += 4;
  });

  // 7.2 In-Depth Competitive Benchmarking Matrix Table
  y += 6;
  y = drawSectionHeading(doc, '7.2 IN-DEPTH COMPETITIVE BENCHMARKING MATRIX', y);

  const compHeaders = ['Competitor Category', 'Key Players / Archetypes', 'Wedding Pricing Points', 'Turnaround Time SLA', 'Tech Stack & Production Standards', 'Core Vulnerabilities & Market Gaps'];
  const compRows = [
    [
      'Traditional Local\nPhoto Studios',
      'Legacy studios in Shyambazar, Garia, Howrah, Barasat',
      'INR 30,000 to\nINR 60,000\nper wedding',
      '90 to 180 Days\n(Extremely Slow)',
      'Basic entry DSLRs, harsh on-camera flash, zero color grading',
      'Obsolete aesthetics, zero drone/reels capability, massive client dissatisfaction over delayed photo albums'
    ],
    [
      'Freelance Camera\nCollectives',
      'Individual Instagram photographers & hobbyist videographers',
      'INR 25,000 to\nINR 50,000\n(INR 15K retainers)',
      '30 to 60 Days\n(Unpredictable)',
      'Mid-tier mirrorless, single camera body, no backup gear or audio',
      'High cancellation risk, lack of GST registration, no legal contracts, zero data redundancy, high operational flake rate'
    ],
    [
      'Premium Boutique\nCinema Houses',
      'Stories by Joseph Radhik, Wedding Filmer, elite luxury boutiques',
      'INR 4,50,000 to\nINR 12,00,000+\nper wedding',
      '45 to 90 Days\n(Boutique pace)',
      'High-end RED / ARRI / Sony FX cinema, cinema primes, custom LUTs',
      'Exorbitant pricing unaffordable for 90% of addressable clients, inflexible contracts, complete refusal of B2B social retainers'
    ],
    [
      'CineCraft Studios\n(Proposed Benchmark)',
      'Integrated Media & Content Creation LLP (Salt Lake Sector V)',
      'INR 1,35,000 to\nINR 2,50,000\n(Retainers: 35K-60K)',
      '24-Hr SDE Reels;\n14-Day Master Film\n(Fastest in East)',
      'Sony FX6 & FX3 Cinema Line, DJI Mavic 3 Cine & Avata, Mac Studio M2',
      'Brand equity must be built from the ground up in Year 1 through aggressive portfolio marketing and banquet empanelment'
    ]
  ];
  const compColWidths = [80, 95, 75, 70, 95, 100.28];

  y = drawTable(doc, MARGIN, y, compHeaders, compRows, compColWidths, {
    fontSize: 6.2,
    padding: 2.2,
    boldCols: [0],
    boldRows: [3],
    rowBgs: [C.white, C.bgLight, C.white, '#FEF3C7'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  drawFooter(doc, 18);
}

function renderPage19(doc) {
  // Page 19: Chapter 7 (Cont.): Porter's Five Forces Analysis
  drawHeader(doc, 19, 'CH. 7: PORTER\'S FIVE FORCES');
  let y = drawPageBanner(doc, '7', 'PORTER\'S FIVE FORCES ANALYSIS OF THE DIGITAL MEDIA PRODUCTION INDUSTRY');

  // 7.4 Sustainable Competitive Advantage & Porter's Five Forces
  y = drawSectionHeading(doc, '7.3 STRUCTURAL INDUSTRY PROFITABILITY & PORTER\'S FIVE FORCES FRAMEWORK', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('To evaluate the competitive intensity, structural margins, and long-term economic attractiveness of the visual media industry in Eastern India, Porter\'s Five Forces model was deployed:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const pHeaders = ['Competitive Force', 'Threat Level', 'Strategic Analysis & Industry Operating Realities', 'CineCraft Studios Mitigation & Strategic Defensive Moat'];
  const pRows = [
    [
      'Threat of New\nEntrants',
      'Moderate\nto High',
      '• Low barriers to entry for low-end freelance photography (any amateur can purchase an entry-level mirrorless camera and launch an Instagram page).\n• However, capital and technical barriers to entry for integrated high-end 4K cinema production, DGCA-certified drone operations, soundproof studio infrastructure, and broadcast-grade live multi-cam streaming remain formidable.',
      '• Establish institutional brand equity and multi-year corporate retainers.\n• Deploy proprietary DaVinci Resolve color grading LUT pipelines.\n• Secure formal exclusive empanelment with top luxury banquet venues that informal new entrants cannot access.\n• Enterprise-grade capital investment (INR 35 Lakhs) creates a robust technical moat.'
    ],
    [
      'Bargaining Power\nof Buyers\n(Clients)',
      'Moderate',
      '• In the low-end budget photography tier, buyers possess immense bargaining power due to the abundance of identical freelance photographers engaging in destructive price-slashing.\n• In the mid-to-high tier, however, once an emotional and aesthetic connection is forged through high-caliber portfolio reels and personal chemistry, price elasticity declines dramatically.',
      '• Deploy transparent tiered package pricing with clear deliverable milestones.\n• Pioneer the 24-hour Same-Day Edit (SDE) viral reel guarantee, which no regional competitor matches.\n• Bundle high-value deliverables (drone filming, handcrafted leather albums, Frame.io cloud access) that maximize perceived value.'
    ],
    [
      'Bargaining Power\nof Suppliers',
      'Low to\nModerate',
      '• Key suppliers include camera manufacturers (Sony, Canon), drone makers (DJI), software vendors (Adobe, Blackmagic Design), and commercial music libraries (Artlist).\n• Hardware prices are standardized with minimal supplier customization.\n• Software operates on predictable annual SaaS subscription models.',
      '• Maintain hardware multi-sourcing and open lens mount standards (Sony E-mount).\n• Utilize permanent perpetual software licenses (DaVinci Resolve Studio one-time dongle licenses alongside Adobe CC).\n• Cultivate direct relationships with authorized national distributors to secure priority servicing and bulk discounts.'
    ],
    [
      'Threat of\nSubstitutes',
      'Low',
      '• Smartphone cameras (iPhone 16 Pro) have advanced dramatically with 4K HDR capabilities and cinematic modes, leading budget consumers to contemplate DIY photography.\n• However, smartphones cannot replicate full-frame optical shallow depth of field, high-dynamic-range low-light cinema performance, multi-track 32-bit float wireless audio, or stabilized FPV drone cinematography required for landmark events.',
      '• Educate prospective clients on the profound optical and narrative gap between amateur mobile phone footage and professional cinema-grade storytelling through side-by-side portfolio demonstrations.\n• Position CineCraft as the custodian of permanent, family-legacy heirlooms and brand-defining corporate assets.'
    ],
    [
      'Rivalry Among\nExisting\nCompetitors',
      'High (Budget)\nModerate (Mid)',
      '• Fierce, commoditized price warfare dominates the unorganized low-end market among neighborhood studios and inexperienced freelancers.\n• Conversely, the organized middle-to-upper-tier market is critically underserved, populated by sluggish legacy studios and overpriced Mumbai/Delhi boutique imports.',
      '• Strictly avoid competing in low-margin budget price wars.\n• Position CineCraft firmly as the premier "accessible luxury" media production house in Eastern India.\n• Compete aggressively on turnaround speed (24-hr reels vs 60 days), tech sophistication, and corporate professionalism.'
    ]
  ];
  const pColWidths = [85, 60, 185, 185.28];

  y = drawTable(doc, MARGIN, y, pHeaders, pRows, pColWidths, {
    fontSize: 6.2,
    padding: 2.2,
    boldCols: [0, 1],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white]
  });

  drawFooter(doc, 19);
}

function renderPage20(doc) {
  // Page 20: Chapter 8: Comprehensive Marketing Plan (STP & 7Ps Mix)
  drawHeader(doc, 20, 'CH. 8: MARKETING PLAN & 7PS');
  let y = drawPageBanner(doc, '8', 'COMPREHENSIVE MARKETING PLAN & 7PS SERVICES MARKETING MIX');

  // 8.1 Targeting & Positioning Strategy
  y = drawSectionHeading(doc, '8.1 STRATEGIC POSITIONING STATEMENT & TARGETING ARCHITECTURE', y);

  const posText = `'For ambitious consumer brands and aspirational couples seeking world-class visual storytelling without the astronomical price tags of Mumbai agencies, CineCraft Studios is the integrated media production house that delivers Hollywood-standard 4K cinematography, viral social reels within 24 hours, and transparent contractual certainty, transforming raw moments into permanent cinematic impact.'
• Consumer Space: Upper-middle-class and affluent millennial/Gen-Z couples across Kolkata and West Bengal who perceive their wedding celebrations as personal brand statements and artistic heirlooms.
• B2B Enterprise Space: Fast-scaling D2C e-commerce brands, healthcare networks, hospitality chains, and corporate enterprises seeking high-velocity, high-conversion visual marketing.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 70, 'STRATEGIC POSITIONING FORMULATION', posText, {
    fontSize: 6.8,
    lineGap: 1.3,
    accentColor: C.gold
  });

  // 8.2 The 7Ps Services Marketing Mix Architecture
  y += 8;
  y = drawSectionHeading(doc, '8.2 THE 7PS SERVICES MARKETING MIX ARCHITECTURE', y);

  const p7Headers = ['Marketing P Dimension', 'Strategic Marketing Formulation', 'Specific Operational Implementation for CineCraft Studios'];
  const p7Rows = [
    [
      'PRODUCT /\nSERVICE',
      'Full-stack integrated visual production portfolio eliminating client need for multiple uncoordinated vendors.',
      '• 5 Distinct Verticals: Photography, 4K/6K Cinema, Viral Reels, DaVinci Post, Multi-Cam Live Streaming.\n• Guaranteed Same-Day Edit (SDE) 24-hr reels.\n• Signature ACES filmic color science and 32-bit float audio.'
    ],
    [
      'PRICE',
      'Penetrative value pricing targeting the underserved middle market, backed by tiered transparency.',
      '• Gold Wedding Benchmark: INR 1,45,000 (undercutting luxury boutiques by 45% while delivering superior turnaround speed).\n• B2B Monthly Retainers: INR 35,000 to INR 60,000/mo.\n• Milestone Billing: 25% booking, 50% shoot day, 25% delivery.'
    ],
    [
      'PLACE /\nDISTRIBUTION',
      'Omnichannel client discovery coupled with rapid cloud delivery and regional field mobility.',
      '• Physical Facility: Flagship 1,800 sq ft studio & client screening lounge in Salt Lake Sector V, Kolkata.\n• Digital Cloud Delivery: Frame.io client review portal and Amazon AWS private cloud galleries.\n• Mobile Deployability: Agile field units servicing all Eastern India.'
    ],
    [
      'PROMOTION',
      'Integrated Marketing Communications (IMC) combining hyper-targeted social ads, SEO, and industry alliances.',
      '• Performance Meta & Instagram Video Ads targeting engaged couples and regional brand founders.\n• Curated YouTube 4K channel broadcasting cinematic wedding trailers and corporate case studies.\n• Strategic empanelment with top 10 Kolkata banquet venues.'
    ],
    [
      'PEOPLE',
      'Cultivating elite, highly trained creative talent combining technical mastery with empathetic hospitality.',
      '• Core leadership team holding master\'s degrees in media, film, and business management.\n• Permanent staff cinematographers trained in cinema gimbal movement, lighting design, and audio isolation.\n• Standardized crew grooming, code of conduct, and uniform attire on-set.'
    ],
    [
      'PROCESS',
      'Industrialized, six-stage Standard Operating Procedure (SOP) ensuring flawless execution.',
      '• Stage 1: Creative Briefing & Storyboarding.\n• Stage 2: Pre-production Call Sheet.\n• Stage 3: Multi-cam Production Day Execution.\n• Stage 4: Checksum Ingestion & 3-2-1 Backup.\n• Stage 5: SDE Reel Cut (24 hrs).\n• Stage 6: Cloud Review & Final Delivery.'
    ],
    [
      'PHYSICAL\nEVIDENCE',
      'Tangible cues reinforcing premium brand positioning and artistic trustworthiness.',
      '• Acoustically treated studio lounge with 75-inch Sony 4K OLED preview display.\n• Sleek, branded Pelican flight cases and black crew uniforms bearing CineCraft insignia.\n• Handcrafted Italian leatherette wedding albums in embossed wooden keepsake boxes.'
    ]
  ];
  const p7ColWidths = [85, 185, 245.28];

  y = drawTable(doc, MARGIN, y, p7Headers, p7Rows, p7ColWidths, {
    fontSize: 6.2,
    padding: 2.1,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, C.white]
  });

  drawFooter(doc, 20);
}

module.exports = {
  renderPage16,
  renderPage17,
  renderPage18,
  renderPage19,
  renderPage20
};
