// pages/pages_21_25.js
const { C, PAGE_W, PAGE_H, MARGIN, CONTENT_W, drawHeader, drawFooter, drawPageBanner, drawSectionHeading, drawCard, drawTable } = require('./helpers');

function renderPage21(doc) {
  // Page 21: Chapter 8 (Cont.): IMC Marketing Budget & Multi-Channel ROI Strategy
  drawHeader(doc, 21, 'CH. 8: IMC MARKETING BUDGET');
  let y = drawPageBanner(doc, '8', 'INTEGRATED MARKETING COMMUNICATIONS (IMC) BUDGET & ROI METRICS');

  // 8.3 Integrated Marketing Communications Budget & Channels
  y = drawSectionHeading(doc, '8.3 YEAR 1 MARKETING BUDGET ALLOCATION & CHANNEL PERFORMANCE KPIS', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('During Year 1, CineCraft allocates a strategic marketing budget of INR 5,80,000 (~6.89% of projected gross turnover), distributed across high-conversion digital, institutional, and experiential promotional channels:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const imcHeaders = ['Promotional Channel', 'Annual Budget Allocation', 'Monthly Budget Outlay', 'Target ROI Metrics & Key Performance Indicators (KPIs)'];
  const imcRows = [
    [
      'Meta Ads\n(Instagram & Facebook Reels)',
      'INR 2,40,000\n(41.4%)',
      'INR 20,000 /\nmonth',
      '• 1.2M targeted local impressions in Kolkata Metropole\n• 850 qualified wedding & brand inquiries\n• Cost Per Lead (CPL): <INR 285\n• Directly generates 60% of all Year 1 B2C wedding bookings'
    ],
    [
      'Google Search Ads &\nLocal SEO (GMB Optim.)',
      'INR 1,20,000\n(20.7%)',
      'INR 10,000 /\nmonth',
      '• Rank in Top 3 for high-intent search keywords:\n  "Wedding Cinematographer Kolkata", "Corporate Video Salt Lake"\n• High inquiry-to-consultation conversion rate of 15%'
    ],
    [
      'Venue & Wedding\nPlanner Referral Fees',
      'INR 1,00,000\n(17.2%)',
      'Variable\n(~INR 8,333/mo)',
      '• 8% to 10% referral honorarium paid to banquet sales managers upon completed client signing\n• Directly generates 6 guaranteed high-tier wedding contracts'
    ],
    [
      'Bridal & Luxury\nLifestyle Exhibitions',
      'INR 70,000\n(12.1%)',
      'Bi-annual\nevents',
      '• Physical experiential lounge at Royal Bengal Wedding Expo & Sananda Fair\n• Direct face-to-face capture of 250 high-intent bridal leads\n• Showcase 4K cinema showreels on 75-inch OLED'
    ],
    [
      'Website Hosting, AWS\nCDN & Print Collaterals',
      'INR 50,000\n(8.6%)',
      'INR 4,166 /\nmonth',
      '• Ultra-fast 4K video portfolio website hosted on AWS CloudFront CDN\n• Luxury embossed presentation brochure boxes, foil business cards, and client proposal pitch decks'
    ],
    [
      'Total Consolidated\nMarketing Outlay (Yr 1)',
      'INR 5,80,000\n(100.0%)',
      'INR 48,333 /\nmonth',
      '• Projected Attributable Revenue: INR 84.20 Lakhs\n• Blended Return on Ad Spend (ROAS): 14.5x Gross Revenue / Spend\n• Customer Acquisition Cost (CAC): INR 5,200 per wedding client'
    ]
  ];
  const imcColWidths = [120, 95, 80, 220.28];

  y = drawTable(doc, MARGIN, y, imcHeaders, imcRows, imcColWidths, {
    fontSize: 6.5,
    padding: 2.5,
    boldCols: [0],
    boldRows: [5],
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white, '#FEF3C7'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  // Outbound B2B Corporate Outreach Engine
  y += 10;
  y = drawSectionHeading(doc, 'OUTBOUND B2B CORPORATE & RETAIL PROSPECTING STRATEGY', y);
  const b2bText = `• Direct Executive Outreach: Head of Business Development systematically identifies scaling D2C consumer brands, private hospitals, jewelry retail chains, and corporate enterprises across Salt Lake Sector V and New Town.
• Cold Pitch Audits & Mood Boards: Rather than sending generic sales pitches, CineCraft delivers personalized 60-second video audits evaluating the prospect's current social video deficits alongside a tailored 30-day content calendar prototype.
• The "Pilot Shoot" Conversion Mechanism: Prospective corporate retainer clients are offered an introductory half-day pilot shoot (2 reels + 10 product images) at a subsidized rate of INR 12,000, which converts to long-term monthly retainers in over 70% of trials.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 70, 'CORPORATE RETAINER ACQUISITION FUNNEL', b2bText, {
    fontSize: 6.8,
    lineGap: 1.3,
    accentColor: C.gold
  });

  drawFooter(doc, 21);
}

function renderPage22(doc) {
  // Page 22: Chapter 9: Production & Operations Plan (Studio Layout & Master Equipment Inventory)
  drawHeader(doc, 22, 'CH. 9: OPERATIONS & EQUIPMENT');
  let y = drawPageBanner(doc, '9', 'PRODUCTION & OPERATIONS PLAN: INFRASTRUCTURE & MASTER EQUIPMENT');

  // 9.1 Studio Infrastructure & Spatial Layout Design
  y = drawSectionHeading(doc, '9.1 STUDIO INFRASTRUCTURE & SPATIAL LAYOUT DESIGN (1,800 SQ FT)', y);

  const studioHeaders = ['Functional Studio Zone', 'Floor Area', 'Technical Acoustic & Lighting Specifications', 'Primary Operational Purpose'];
  const studioRows = [
    [
      'Main Cyclorama &\nShoot Floor',
      '750 sq ft\n(41.7%)',
      '• 14 ft ceiling with ceiling pantograph lighting grid\n• 24 ft seamless white infinity cyclorama wall\n• Motorized chroma-key backdrop; NRC 0.85 acoustic panels',
      'Commercial product photography, e-commerce fashion catalogues, podcast shoots, executive interviews, and creative vertical reels.'
    ],
    [
      'Color Grading & Sound\nMastering Suite',
      '300 sq ft\n(16.7%)',
      '• Class-A soundproofing (double-stud acoustic drywall)\n• 100% blackout with D65 neutral grey ambient bias lighting\n• Calibrated 32-inch 4K HDR monitor; 5.1 Yamaha HS8 audio',
      'High-precision DaVinci Resolve color grading, dialogue audio denoising, sound design, and master feature film final assembly.'
    ],
    [
      'Rapid SDE & Reel\nCutting Bay',
      '250 sq ft\n(13.9%)',
      '• High-speed dual-screen edit stations with 10GbE network\n• Direct fiber link to centralized Synology NAS server\n• Ergonomic standing desks and high-speed NVMe card readers',
      'Rapid turnaround of 24-hour Same-Day Social Reels, social media retainer batch cutting, and real-time client revision processing.'
    ],
    [
      'Client Screening &\nPreview Lounge',
      '300 sq ft\n(16.7%)',
      '• Plush executive seating with hospitality beverage bar\n• 75-inch calibrated Sony Bravia XR 4K OLED display\n• Dolby Atmos spatial audio soundbar system',
      'Client consultation meetings, pre-wedding mood board reviews, and cinematic wedding feature film premiere screenings.'
    ],
    [
      'Equipment Vault &\nCharging Hub',
      '200 sq ft\n(11.1%)',
      '• Fireproof steel shelving with custom Pelican foam cutouts\n• Climate-controlled dehumidifier cabinet (RH <45%)\n• 24-channel surge-protected battery charging bank',
      'Secure custody of cameras, cine glass, gimbals, drones; pre-shoot technical checklist verification and gear maintenance.'
    ]
  ];
  const studioColWidths = [105, 55, 175, 180.28];

  y = drawTable(doc, MARGIN, y, studioHeaders, studioRows, studioColWidths, {
    fontSize: 6.2,
    padding: 2.1,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white]
  });

  // 9.2 Master Capital Equipment Inventory Schedule
  y += 8;
  y = drawSectionHeading(doc, '9.2 MASTER CAPITAL EQUIPMENT INVENTORY & TECHNICAL SPECIFICATIONS', y);

  const eqHeaders = ['Equipment Category', 'Make, Model & Technical Specifications', 'Qty', 'Unit Cost (INR)', 'Total Outlay (INR)', 'Operational Deployment Role'];
  const eqRows = [
    ['Primary Cinema Camera', 'Sony FX6 Cinema Line (4K 120p, Dual Base ISO 800/12800, Variable ND)', '1', '5,20,000', '5,20,000', 'A-Cam for high-end wedding films & corporate TVCs'],
    ['Secondary Cinema Cameras', 'Sony FX3 Cinema Line (4K 120p 10-bit 4:2:2, Active Fan, XLR Handle)', '2', '3,10,000', '6,20,000', 'B-Cam & C-Cam for multi-angle weddings & gimbal shoots'],
    ['Commercial Photo Camera', 'Sony A7SIII / A7R V (61MP High-Res, AI AF, 8K/4K capture)', '1', '2,80,000', '2,80,000', 'Lead camera for candid wedding photos & fashion lookbooks'],
    ['Professional Lens Fleet', 'Sony G-Master: 16-35 f/2.8, 24-70 f/2.8 II, 70-200 f/2.8 II, 35 & 85 f/1.4', '1 Kit', '6,20,000', '6,20,000', 'Complete focal coverage with prime sharpness & f/1.4 bokeh'],
    ['Cinema Aerial Drone', 'DJI Mavic 3 Pro Cine (Triple lens Hasselblad, ProRes 422 HQ)', '1', '3,40,000', '3,40,000', 'Master aerial venue establishing shots & baraat processions'],
    ['High-Speed FPV Drone', 'DJI Avata 2 Fly More Combo (Indoor prop-guarded, 4K ultrawide)', '1', '1,40,000', '1,40,000', 'Dynamic indoor venue fly-throughs & dance floor fly-overs'],
    ['Gimbal & Motion Support', 'DJI RS3 Pro Combo (Carbon fiber motorized 3-axis) + Heavy Tripods', '2 Kits', '80,000', '1,60,000', 'Silky smooth cinematic tracking shots & ceremony stability'],
    ['Studio & Field Lighting', 'Aputure 600d Pro, 2x 300x Bi-color, Amaran RGB tubes, Godox AD600Pro', '1 Kit', '2,60,000', '2,60,000', 'Studio cyclorama lighting, stage wash, and dark hall fills'],
    ['Broadcast Audio Suite', 'Sennheiser EW-DP wireless lavs, Rode Wireless PRO 32-bit, Zoom F6', '1 Kit', '1,90,000', '1,90,000', 'Pristine dialogue isolation & fail-safe 32-bit float audio'],
    ['Post-Production Workstations', 'Apple Mac Studio M2 Max (12-core, 38-core GPU, 64GB RAM) + Dual 4K', '2', '2,60,000', '5,20,000', 'Real-time 4K/6K timeline editing & rapid DaVinci rendering'],
    ['High-Capacity Storage NAS', 'Synology DS1621+ 6-Bay NAS (64TB RAID 6, 10GbE card, NVMe cache)', '1', '2,20,000', '2,20,000', 'Centralized high-speed collaborative server with cloud sync'],
    ['Total Production Equipment', 'Consolidated Production & Post-Production Hardware Infrastructure', '--', '--', '28,70,000', 'Enterprise-grade broadcast asset infrastructure']
  ];
  const eqColWidths = [95, 160, 25, 55, 60, 120.28];

  y = drawTable(doc, MARGIN, y, eqHeaders, eqRows, eqColWidths, {
    fontSize: 5.8,
    padding: 1.8,
    boldCols: [0],
    boldRows: [11],
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, C.white, '#FEF3C7'],
    aligns: ['left', 'left', 'center', 'right', 'right', 'left'],
    headerAligns: ['left', 'left', 'center', 'right', 'right', 'left'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  drawFooter(doc, 22);
}

function renderPage23(doc) {
  // Page 23: Chapter 9 (Cont.): Consumables, Software SaaS Stack & Production SOPs
  drawHeader(doc, 23, 'CH. 9: SOPS & SOFTWARE');
  let y = drawPageBanner(doc, '9', 'DIGITAL INPUTS, SOFTWARE SAAS STACK & OPERATIONAL SOPS');

  // 9.3 Raw Material Inputs, Storage Media & Software Subscriptions
  y = drawSectionHeading(doc, '9.3 DIGITAL CONSUMABLES, STORAGE MEDIA & SOFTWARE LICENSING', y);

  const saasText = `Unlike manufacturing units consuming physical raw materials, CineCraft consumes digital storage media and software subscriptions:
• High-Speed Camera Media: Sony Tough CFexpress Type A cards (160GB & 320GB) and ProGrade V90 SDXC cards, ensuring zero buffer bottlenecks during continuous 4K 120fps recording (Initial inventory outlay: INR 1,80,000).
• Long-Term Client Deliverable Media: Custom-engraved walnut wood USB 3.2 64GB/128GB flash drives packaged in embossed keepsake boxes for wedding clients (Unit cost: INR 750).
• Professional Software Stack (Annual Subscriptions):
  - DaVinci Resolve Studio: Perpetual hardware dongle licenses for grading suites (INR 58,000 one-time).
  - Adobe Creative Cloud All Apps Team Plan: Premiere Pro, After Effects, Photoshop, Lightroom (INR 72,000/year).
  - Frame.io Enterprise Team Storage: Collaborative client review & timecode commenting portal (INR 36,000/year).
  - Artlist & Epidemic Sound: Commercial multi-seat music licensing ensuring 100% legal clearance (INR 32,000/year).`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 76, 'DIGITAL CONSUMABLES & SAAS INFRASTRUCTURE', saasText, {
    fontSize: 6.8,
    lineGap: 1.2,
    accentColor: C.navy
  });

  // 9.4 Production Standard Operating Procedures (SOPs) Table
  y += 8;
  y = drawSectionHeading(doc, '9.4 FIVE-STAGE PRODUCTION STANDARD OPERATING PROCEDURES (SOPS)', y);

  const sopHeaders = ['Workflow Stage & Timeline', 'Standard Operating Procedure (SOP) Action Items', 'Quality Control & Redundancy Protocol'];
  const sopRows = [
    [
      'Stage 1: Pre-Production\n& Client Briefing\n(T-14 to T-2 Days)',
      '• Detailed client onboarding questionnaire capturing VIP family members, cultural rituals, and schedule.\n• Technical venue recce inspecting ambient lighting, electrical phase loads, and ceiling heights.\n• Generation of detailed Call Sheet designating crew arrival times, camera angles, and gear checklists.',
      '• Mandatory shot-list signoff with client.\n• Verification of DGCA drone flying permissions for outdoor venue zones.\n• Battery charging and sensor cleaning verified 24h prior.'
    ],
    [
      'Stage 2: Production Day\nExecution\n(Event Day: T-0)',
      '• Crew arrives on location 90 minutes prior to scheduled start.\n• Dual-slot simultaneous recording enabled on all camera bodies (Slot 1 & Slot 2 mirroring).\n• Dedicated sound engineer mic\'ing key podiums, groom, and bride with 32-bit float backup transmitters.\n• Drone pilot captures outdoor architectural establishing shots during golden hour.',
      '• Zero-loss protocol: memory cards are NEVER formatted on set under any circumstance.\n• Backup Sony camera body and spare DJI RS3 Pro gimbal maintained on standby in production van.\n• Sound levels continuously monitored via closed-back headphones.'
    ],
    [
      'Stage 3: Data Ingestion\n& Dual Backup\n(T+2 Hours Post-Event)',
      '• On-site Digital Imaging Technician (DIT) ingests raw footage using MD5 checksum verification (ShotPut Pro).\n• Master Copy 1 placed on high-speed NVMe editing drive.\n• Master Copy 2 mirrored to localized Synology RAID 6 NAS array.\n• Master Copy 3 offloaded to encrypted external SSD stored in fireproof vault.',
      '• Triple-redundant 3-2-1 backup protocol verified before camera memory cards are cleared for subsequent shoot.\n• Immediate cloud upload of audio WAV files to prevent loss.'
    ],
    [
      'Stage 4: Same-Day Edit\n(SDE) Reel Delivery\n(T+12 to 24 Hours)',
      '• Dedicated on-site mobile editor selects hero emotional moments, syncs with trending licensed music track, applies signature CineCraft LUT, and renders 9:16 vertical video.\n• Creative Director reviews color grade and audio mix on calibrated iPad Pro.\n• Reel uploaded directly to client WhatsApp and private link for instant Instagram posting.',
      '• 100% on-time delivery SLA guarantee backed by contractual refund clause.\n• Subtitles dynamically animated and checked for grammatical accuracy.'
    ],
    [
      'Stage 5: Final Post-Production\n& Master Handover\n(T+7 to 14 Days)',
      '• Senior Editor executes assembly cut; Lead Colorist applies ACES color grading in DaVinci Resolve.\n• Sound Designer performs dialogue denoising, ambient sound reconstruction, and soundtrack mixing.\n• Draft cut shared via Frame.io for client feedback (max 2 review rounds completed within 48 hours).\n• Upon approval, high-res files delivered via private cloud; handcrafted album dispatched.',
      '• Master archival video files preserved on cloud for 365 days.\n• High-resolution uncompressed master copy archived permanently on Synology NAS RAID 6.'
    ]
  ];
  const sopColWidths = [105, 230, 180.28];

  y = drawTable(doc, MARGIN, y, sopHeaders, sopRows, sopColWidths, {
    fontSize: 6.2,
    padding: 2.1,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, C.bgLight, C.white, '#FEF3C7', C.white]
  });

  drawFooter(doc, 23);
}

function renderPage24(doc) {
  // Page 24: Chapter 10: Organizational Plan & Governance
  drawHeader(doc, 24, 'CH. 10: ORGANIZATIONAL PLAN');
  let y = drawPageBanner(doc, '10', 'ORGANIZATIONAL PLAN, GOVERNANCE & HUMAN RESOURCE DEPLOYMENT');

  // 10.1 Form of Ownership & Governance
  y = drawSectionHeading(doc, '10.1 CORPORATE GOVERNANCE & LIMITED LIABILITY PARTNERSHIP (LLP)', y);

  const ownText = `CineCraft Studios is incorporated as a Limited Liability Partnership (LLP) under the Limited Liability Partnership Act, 2008 through the Ministry of Corporate Affairs (MCA), Government of India. The LLP structure provides the optimal blend of operational flexibility, pass-through taxation, limited personal liability, and formal corporate recognition required for institutional vendor empanelment and bank credit.
Equity & Capital Contribution: Governed by a registered Partnership Deed establishing equal equity holding between the Designated Partners:
• Soumalya Ghorai (50% Equity, Designated Partner - Strategic Marketing & Business Operations): MBA candidate, leading corporate strategy, B2B sales outreach, financial planning, investor relations, and integrated marketing.
• Creative Technical Co-Founder (50% Equity, Designated Partner - Production Direction & Visual Aesthetics): Media graduate, leading camera technology, cinematography direction, post-production pipelines, and creative crew supervision.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 68, 'EQUITY ALLOCATION & EXECUTIVE PARTNERSHIP DEED', ownText, {
    fontSize: 6.8,
    lineGap: 1.2,
    accentColor: C.navy
  });

  // 10.2 Departmental Hierarchy
  y += 6;
  y = drawSectionHeading(doc, '10.2 DEPARTMENTAL VERTICALS & FUNCTIONAL REPORTING HIERARCHY', y);

  const depts = [
    ['Dept. I: Creative Direction & Field Production', 'Governs all on-location shooting, cinematography, camera framing, lighting design, and drone operations. Headed by Creative Director.'],
    ['Dept. II: Post-Production & Digital Mastering', 'Oversees video editing, DaVinci Resolve color grading, sound engineering, motion graphics, and rapid Same-Day Edit reel delivery. Headed by Lead Editor.'],
    ['Dept. III: Business Development & Client Relations', 'Manages inbound lead conversion, client portfolio consultations, social media advertising, banquet vendor alliances, and corporate B2B contracts.'],
    ['Dept. IV: Finance, Logistics & Studio Administration', 'Manages statutory GST/tax compliance, equipment inventory custody, studio facility maintenance, vendor disbursements, and client invoicing.']
  ];

  depts.forEach(([title, desc]) => {
    y = drawCard(doc, MARGIN, y, CONTENT_W, 26, title, desc, {
      fontSize: 6.6,
      titleSize: 7.2,
      lineGap: 1.0,
      accentColor: C.accent,
      bg: C.bgLight
    });
    y += 3;
  });

  // 10.3 3-Year Manpower Scheduling & Compensation Table
  y += 4;
  y = drawSectionHeading(doc, '10.3 THREE-YEAR MANPOWER SCHEDULING & COMPENSATION BUDGET', y);

  const mpHeaders = ['Role / Organizational Designation', 'Year 1 Headcount', 'Year 2 Headcount', 'Year 3 Headcount', 'Monthly Pay (Yr 1)', 'Annual Cost (Yr 1)', 'Primary Core Responsibilities'];
  const mpRows = [
    ['Managing Partner (Marketing & Strategy)', '1', '1', '1', 'INR 45,000', 'INR 5,40,000', 'Corporate governance, B2B sales, financial oversight, vendor alliances'],
    ['Creative Director (Cinematography Lead)', '1', '1', '1', 'INR 45,000', 'INR 5,40,000', 'Aesthetic vision, A-Cam filming, lighting design, creative direction'],
    ['Senior Cinematographer & Drone Pilot', '1', '2', '3', 'INR 30,000', 'INR 3,60,000', 'B-Cam operation, DGCA-certified drone filming, gimbal camera tracking'],
    ['Lead Video Editor & Colorist', '1', '2', '3', 'INR 28,000', 'INR 3,36,000', 'Master documentary editing, DaVinci Resolve ACES color grading, audio'],
    ['Assistant Reel Editor & DIT', '1', '2', '3', 'INR 18,000', 'INR 2,16,000', '24-hour Same-Day Edit reels, data checksum backup, proxy generation'],
    ['Business Development & Client Exec', '1', '1', '2', 'INR 20,000', 'INR 2,40,000', 'Client consultation meetings, lead qualification, social ad management'],
    ['Studio Assistant & Gear Technician', '1', '2', '2', 'INR 12,000', 'INR 1,44,000', 'Studio setup, equipment inventory custody, battery charging, shoot assistance'],
    ['Total Employed Full-Time Headcount', '7', '11', '15', '--', 'INR 23,76,000', 'Core payroll (scaled to INR 34.80L in Yr 2 and INR 52.20L in Yr 3)'],
    ['Contractual Freelance Crew Roster', '15 On-Call', '25 On-Call', '35 On-Call', 'Per-diem honorarium', 'Budgeted in OpEx', 'Flexible surge capacity during peak auspicious wedding dates']
  ];
  const mpColWidths = [140, 42, 42, 42, 60, 65, 124.28];

  y = drawTable(doc, MARGIN, y, mpHeaders, mpRows, mpColWidths, {
    fontSize: 5.9,
    padding: 1.8,
    boldCols: [0],
    boldRows: [7],
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, C.white, '#FEF3C7', C.bgAlt],
    aligns: ['left', 'center', 'center', 'center', 'right', 'right', 'left'],
    headerAligns: ['left', 'center', 'center', 'center', 'right', 'right', 'left'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  drawFooter(doc, 24);
}

function renderPage25(doc) {
  // Page 25: Chapter 11: Financial Plan & Comprehensive Projections (CapEx & Funding Structure)
  drawHeader(doc, 25, 'CH. 11: CAPEX & FUNDING');
  let y = drawPageBanner(doc, '11', 'FINANCIAL PLAN: CAPITAL OUTLAY & MSME FINANCING STRUCTURE');

  // 11.1 Total Capital Requirement & Initial Project Cost Outlay
  y = drawSectionHeading(doc, '11.1 TOTAL CAPITAL EXPENDITURE (CAPEX) & PROJECT COST OUTLAY', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('To establish CineCraft Studios as an enterprise-grade visual media production facility, an initial total project capital investment of INR 35,00,000 (INR 35.00 Lakhs) is committed across physical studio fit-out, cinema camera fleet, computing, and working capital:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const capexHeaders = ['Project Investment Component', 'Detailed Technical Asset Description', 'Amount (INR)', 'Share (%)', 'Operational Significance'];
  const capexRows = [
    ['Studio Fit-Out & Acoustic Design', 'Acoustic drywalling, infinity cyclorama wall, ceiling lighting grid, wiring, client lounge', '4,50,000', '12.86%', 'Flagship 1,800 sq ft facility build-out in Salt Lake Sector V'],
    ['Cinema Cameras & Lens Glass', 'Sony FX6 (1), Sony FX3 (2), Sony A7SIII (1), Sony G-Master lens fleet (16-35, 24-70, 70-200, 35, 85)', '14,20,000', '40.57%', 'Primary 4K/6K cinema-grade visual acquisition hardware'],
    ['Drones, Gimbals & Motion Support', 'DJI Mavic 3 Pro Cine, DJI Avata 2 FPV drone, 2x DJI RS3 Pro gimbals, heavy carbon tripods', '4,80,000', '13.71%', 'Aerial cinematography and stabilized camera movement'],
    ['Lighting, Grips & Power Systems', 'Aputure 600d Pro, 2x Aputure 300x, Amaran RGB tubes, Godox AD600Pro flashes, C-stands', '2,60,000', '7.43%', 'Studio cyclorama and high-output dark banquet hall illumination'],
    ['Professional Audio Suite', 'Sennheiser EW-DP wireless lavs, Rode Wireless PRO 32-bit float kits, Zoom F6 recorder', '1,90,000', '5.43%', 'Broadcast-grade dialogue isolation and fail-safe sound recording'],
    ['Computing, Storage & Networking', '2x Apple Mac Studio M2 Max, Dual 4K BenQ displays, 64TB Synology 10GbE NAS RAID 6', '5,20,000', '14.86%', 'High-speed post-production editing, color grading, and storage server'],
    ['Working Capital Contingency', 'Initial 3-month operational liquidity reserve (lease deposit, insurance, marketing launch)', '1,80,000', '5.14%', 'Liquidity cushion ensuring solvency prior to commercial break-even'],
    ['Total Initial Project Cost Outlay', 'Complete Turnkey Enterprise Setup & Commercial Launch Capital', '35,00,000', '100.00%', 'Optimal capital budget delivering complete operational readiness']
  ];
  const capexColWidths = [120, 165, 60, 50, 120.28];

  y = drawTable(doc, MARGIN, y, capexHeaders, capexRows, capexColWidths, {
    fontSize: 6.3,
    padding: 2.3,
    boldCols: [0],
    boldRows: [7],
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight, C.white, '#FEF3C7'],
    aligns: ['left', 'left', 'right', 'center', 'left'],
    headerAligns: ['left', 'left', 'right', 'center', 'left'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  // 11.2 Capital Funding Structure & Financing Terms
  y += 10;
  y = drawSectionHeading(doc, '11.2 CAPITAL FUNDING STRUCTURE & GOVERNMENT MSME FINANCING TERMS', y);

  const fundHeaders = ['Funding Source', 'Financing Scheme & Lending Agency', 'Amount (INR)', 'Share (%)', 'Tenure / Repayment Terms', 'Interest Rate'];
  const fundRows = [
    [
      'Promoters\' Equity\nCapital',
      'Personal capital contribution by the two Designated Partners (INR 5.0 Lakhs each)',
      '10,00,000',
      '28.57%',
      'Permanent Equity Capital (Subordinated)',
      'Return on Equity\n(PAT Dividends)'
    ],
    [
      'Government Initiative\n(PMMY MUDRA)',
      'Pradhan Mantri MUDRA Yojana (PMMY) - Tarun Scheme through State Bank of India (SBI)',
      '10,00,000',
      '28.57%',
      '5 Years (60 Months tenure, including 6-Month principal moratorium)',
      '9.50% p.a.\n(Reducing balance)'
    ],
    [
      'Financial Institution\nTerm Loan (MSME)',
      'Collateral-free MSME Term Loan under CGTMSE Scheme via Punjab National Bank / SIDBI',
      '15,00,000',
      '42.86%',
      '5 Years (60 Months tenure, including 6-Month principal moratorium)',
      '10.50% p.a.\n(Reducing balance)'
    ],
    [
      'Total Project Capital\nMobilized',
      'Consolidated Enterprise Financing Structure (Debt:Equity = 71.4% : 28.6%)',
      '35,00,000',
      '100.00%',
      'Blended Debt Tenure: 5 Years with 6-month initial moratorium',
      'Weighted Avg Cost\nof Debt: 10.10%'
    ]
  ];
  const fundColWidths = [95, 150, 60, 50, 95, 65.28];

  y = drawTable(doc, MARGIN, y, fundHeaders, fundRows, fundColWidths, {
    fontSize: 6.2,
    padding: 2.2,
    boldCols: [0],
    boldRows: [3],
    rowBgs: [C.white, C.bgLight, C.white, '#E0F2FE'],
    aligns: ['left', 'left', 'right', 'center', 'left', 'center'],
    headerAligns: ['left', 'left', 'right', 'center', 'left', 'center'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  drawFooter(doc, 25);
}

module.exports = {
  renderPage21,
  renderPage22,
  renderPage23,
  renderPage24,
  renderPage25
};
