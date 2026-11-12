// pages/pages_06_10.js
const { C, PAGE_W, PAGE_H, MARGIN, CONTENT_W, drawHeader, drawFooter, drawPageBanner, drawSectionHeading, drawCard, drawTable } = require('./helpers');

function renderPage6(doc) {
  // Page 6: Chapter 1 (Cont.): Legal Structure, Studio Location, Strategic Goals & USP
  drawHeader(doc, 6, 'CH. 1: LEGAL, GOALS & USP');
  let y = drawPageBanner(doc, '1', 'LEGAL STRUCTURE, STUDIO INFRASTRUCTURE, STRATEGIC GOALS & USP');

  // 1.4 Legal Structure & Statutory Registrations
  y = drawSectionHeading(doc, '1.4 CORPORATE LEGAL STRUCTURE & STATUTORY COMPLIANCE REGISTRATIONS', y);
  const legalText = `Form of Entity: Limited Liability Partnership (LLP) incorporated under the Limited Liability Partnership Act, 2008 through the Ministry of Corporate Affairs (MCA), Government of India. Operating Name: CineCraft Studios.
Statutory Registrations & Compliance Portfolio:
• MSME / Udyam Registration: Ministry of MSME, qualifying for priority sector bank lending, MUDRA schemes, and interest subsidies.
• Goods and Services Tax (GST): Dual classification under SAC 9983 (Professional/technical services) and SAC 9996 (Recreational/cultural services).
• Municipal Trade License: Bidhannagar Municipal Corporation (BMC), Salt Lake Sector V, Kolkata.
• Professional Tax (P-Tax) & Shops Act: Enrolled with Directorate of Commercial Taxes, West Bengal, and Shops & Commercial Establishments Act.
• DGCA Digital Sky Drone Compliance: Pilot certifications & Unique Identification Numbers (UIN) for commercial aerial cinematography.
• Intellectual Property (IP): Trademark filed under Class 41 (Video production, photography) and Class 35 (Advertising, digital media).`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 82, 'LIMITED LIABILITY PARTNERSHIP & STATUTORY LICENSING', legalText, {
    fontSize: 6.8,
    lineGap: 1.2,
    accentColor: C.navy
  });

  // 1.5 Studio Location & Phasing
  y += 6;
  y = drawSectionHeading(doc, '1.5 STUDIO INFRASTRUCTURE & STRATEGIC GEOGRAPHIC LOCATION', y);
  const locText = `Flagship Production Facility: 1,800 sq ft leased commercial studio in Salt Lake Sector V / New Town, Kolkata (Pin: 700091). Proximity to Eastern India's IT and corporate corridor, premier luxury banquet venues (ITC Royal Bengal, JW Marriott, Eco Park, Biswa Bangla Convention Centre), and arterial airport expressway.
Operational Phasing: Phase 1 (Yr 1): Kolkata Metropole & industrial belts (Howrah, North 24 Parganas); Phase 2 (Yr 2): Expanded West Bengal & destination wedding hubs (Raichak, Mandarmoni, Bawali, Bolpur); Phase 3 (Yr 3): Pan-Eastern India (Bhubaneswar, Puri, Patna, Ranchi, Guwahati).`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 46, 'SALT LAKE SECTOR V FLAGSHIP HUB & REGIONAL DEPLOYMENT', locText, {
    fontSize: 6.8,
    lineGap: 1.2,
    accentColor: C.accent
  });

  // 1.6 Strategic Business Goals Table
  y += 6;
  y = drawSectionHeading(doc, '1.6 STRATEGIC BUSINESS GOALS (SHORT, MEDIUM & LONG-TERM HORIZONS)', y);

  const goalHeaders = ['Strategic Horizon', 'Operational & Commercial Targets', 'Financial Target Milestones', 'Strategic Brand Benchmarks'];
  const goalRows = [
    [
      'Short-Term\n(Year 1)',
      '• Commission 1,800 sq ft studio & edit bays\n• Execute 18 full-service wedding projects\n• Onboard 8 monthly B2B social retainers\n• Deliver 14 corporate event coverages\n• Standardize 24-hr Same-Day Edit (SDE) reels',
      '• Gross Turnover: INR 84.20 Lakhs\n• EBITDA: INR 15.31 Lakhs (18.2%)\n• Net Profit (PAT): INR 5.20 Lakhs\n• Break-Even achieved by Month 7\n• Positive monthly operating cash flow',
      '• 100% on-time SLA delivery\n• Formal tie-ups with 5 luxury banquet venues\n• 5.0-star Google verified rating\n• Organic Instagram following >25K'
    ],
    [
      'Medium-Term\n(Years 2-3)',
      '• Expand to 3 mobile multi-cam crews\n• Scale to 42 premium weddings per year\n• Expand B2B monthly retainers to 26 clients\n• Deploy high-speed FPV cinema drone shoots\n• Launch dedicated remote post-production desk',
      '• Year 2 Turnover: INR 1.67 Crores\n• Year 3 Turnover: INR 3.18 Crores\n• Year 3 PAT: INR 88.67 Lakhs (27.9%)\n• Return on Equity (ROE): >65%\n• Full liquidation of MUDRA debt',
      '• Rank among Top 3 wedding cinema brands in Eastern India\n• Empanelment with 15 corporate event planners\n• 40% revenue via repeat/referral B2B'
    ],
    [
      'Long-Term\n(Years 4-5)',
      '• Secondary production hub in Bhubaneswar/Guwahati\n• Launch CineCraft Academy for vocational editor training\n• Produce digital OTT web-series and commercials',
      '• Group Turnover: INR 7.50+ Crores\n• PAT Margin: >22.0%\n• Evaluate private equity seed investment / JV',
      '• Default media production partner for Eastern India\'s top 50 consumer brands'
    ]
  ];
  const goalColWidths = [65, 160, 145, 145.28];

  y = drawTable(doc, MARGIN, y, goalHeaders, goalRows, goalColWidths, {
    fontSize: 6.4,
    padding: 2.2,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  // 1.7 Unique Selling Proposition (USP)
  y += 6;
  y = drawSectionHeading(doc, '1.7 UNIQUE SELLING PROPOSITION (USP) & 4 PILLARS OF COMPETITIVE ADVANTAGE', y);
  
  const uspCard = `'Cinema-Grade 4K Visuals with Real-Time Same-Day Social Reels & 14-Day Final Delivery at Transparent, Value-Driven Middle-Market Pricing.'
1. 24-Hour Same-Day Edit (SDE) Reel Protocol: On-site mobile editor delivers broadcast-quality 9:16 Instagram Reels within 12-24 hours for instant viral reach.
2. Integrated Full-Stack Architecture: Unified creative crew eliminates the aesthetic discord and coordination friction of hiring separate photo/video vendors.
3. Accessible High-End Cinema Tech: Sony FX full-frame cinema cameras, cine primes, and Hollywood DaVinci Resolve color pipelines at sensible pricing.
4. Transparent Corporate SLAs & Cloud Digital Portals: Milestone-linked contracts, GST invoicing, Frame.io cloud review, and zero hidden charges.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 68, 'CORE COMPETITIVE DIFFERENTIATION ARCHITECTURE', uspCard, {
    fontSize: 6.8,
    lineGap: 1.2,
    accentColor: C.gold
  });

  drawFooter(doc, 6);
}

function renderPage7(doc) {
  // Page 7: Chapter 2: Macro-Environmental & In-Depth Market Analysis (PESTLE Analysis)
  drawHeader(doc, 7, 'CH. 2: PESTLE ANALYSIS');
  let y = drawPageBanner(doc, '2', 'MACRO-ENVIRONMENTAL & IN-DEPTH MARKET ANALYSIS (PESTLE FRAMEWORK)');

  y = drawSectionHeading(doc, '2.1 PESTLE ANALYSIS OF THE INDIAN MEDIA & VISUAL CONTENT CREATION INDUSTRY', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('To evaluate macroeconomic drivers, technological disruptions, and regulatory parameters governing the digital media production ecosystem in India, a comprehensive PESTLE analysis was executed:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const pestleHeaders = ['PESTLE Dimension', 'Macro Trends & Industry Operating Realities', 'Strategic Implications & Operational Directives for CineCraft Studios'];
  const pestleRows = [
    [
      'POLITICAL\nFACTORS',
      '• Digital India flagship mission driving ubiquitous broadband and creator economy infrastructure.\n• Ministry of Information & Broadcasting incentives for domestic audio-visual content creation.\n• Aggressive government MSME lending mandates under PMMY MUDRA, PMEGP, and CGTMSE schemes promoting creative startups.',
      '• Seamless institutional access to low-interest, collateral-free debt capital (INR 25.00 Lakhs combined debt).\n• Direct eligibility for state/central government digital media tenders, public tourism campaigns, and PSU corporate films.\n• Supportive regulatory climate minimizing administrative frictions for creative LLP startups.'
    ],
    [
      'ECONOMIC\nFACTORS',
      '• Surging disposable incomes across urban middle-class and affluent double-income households in West Bengal.\n• Massive boom in Direct-to-Consumer (D2C) retail brands and localized e-commerce requiring constant product video marketing.\n• Inflationary pressures and import tariffs on high-end camera hardware and optical lenses.',
      '• Elevated willingness to spend on luxury wedding cinematography (INR 1.35L to 2.50L ticket size).\n• Recurring monthly marketing retainer budgets from retail businesses (INR 35,000 to INR 60,000/mo).\n• Imperative to hedge hardware depreciation via multi-stream utilization (weddings on weekends, corporate retainers on weekdays).'
    ],
    [
      'SOCIAL\nFACTORS',
      '• Pervasive "Instagram Culture" where weddings and personal milestones are produced for social audiences.\n• Strong aspiration for celebrity-style cinematic wedding films and pre-wedding concept videos.\n• High demand for instant digital gratification and same-day social media assets.',
      '• Direct market validation for CineCraft\'s specialized "Viral Social Reels" core vertical.\n• High price tolerance for guaranteed 24-hour Same-Day Edit (SDE) reel turnaround.\n• Expansion of target demographic to include millennial couples, Gen-Z creators, and digital-first business founders.'
    ],
    [
      'TECHNOLOGICAL\nFACTORS',
      '• Rapid nationwide 5G mobile network penetration enabling frictionless 4K video streaming and uploads.\n• Proliferation of AI post-production tools (Adobe Sensei, Topaz Video AI, neural speech denoising).\n• Transition from legacy DSLRs to dedicated 10-bit 4:2:2 cinema sensors (Sony FX series with Dual Native ISO).',
      '• Dramatic compression in post-production rendering and client review cycles via cloud workflows (Frame.io).\n• Ability to broadcast multi-cam live streams directly to YouTube/Facebook via portable bonded 5G modems.\n• Imperative for continuous technical upskilling in color science and LUT design.'
    ],
    [
      'LEGAL &\nREGULATORY',
      '• Directorate General of Civil Aviation (DGCA) Drone Rules mandating pilot licenses and UIN registrations.\n• Stringent Indian Copyright Act enforcement regarding commercial music licensing on digital platforms.\n• Formal GST compliance (Class 9983/9996) required for corporate empanelment and invoice input tax credit.',
      '• Zero-tolerance compliance: 100% certified drone pilots, eliminating venue/police friction during outdoor shoots.\n• Commercial soundtrack licensing via Artlist/Epidemic Sound libraries protecting client assets from copyright strikes.\n• Formal LLP contracts providing a competitive moat over informal, cash-only freelancers.'
    ],
    [
      'ENVIRONMENTAL\nFACTORS',
      '• Consumer shift away from non-biodegradable physical photo albums and toxic chemical photo-lab processing.\n• Increasing focus on power efficiency and carbon footprint reduction during extended on-location event shoots.',
      '• Strategic transition toward cloud galleries (Frame.io, AWS S3) and digital keepsake delivery.\n• Exclusive deployment of high-efficiency, cool-running COB LED lights (Aputure/Godox) reducing power draw by 75% compared to legacy tungsten halogen lamps.'
    ]
  ];
  const pestleColWidths = [80, 215, 220.28];

  y = drawTable(doc, MARGIN, y, pestleHeaders, pestleRows, pestleColWidths, {
    fontSize: 6.3,
    padding: 2.3,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight]
  });

  drawFooter(doc, 7);
}

function renderPage8(doc) {
  // Page 8: Chapter 2 (Cont.): Market Size, Creator Economy & Indian Wedding Sector
  drawHeader(doc, 8, 'CH. 2: MARKET SIZE & SEGMENTATION');
  let y = drawPageBanner(doc, '2', 'MARKET SIZE, SEGMENTAL GROWTH TRAJECTORY & INDUSTRY CATALYSTS');

  // 2.2 Current Market Size & Segmental Trajectory
  y = drawSectionHeading(doc, '2.2 INDIAN MEDIA SECTOR SIZE & TOTAL ADDRESSABLE MARKET (TAM)', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('According to the FICCI-EY Media and Entertainment Report (2024), the Indian M&E sector stood at INR 2.32 Trillion (~USD 27.9 Billion) in 2023, expanding at a CAGR of 10.2% to cross INR 3.08 Trillion (~USD 37.1 Billion) by 2026. The Digital Media vertical represents the fastest-growing core, compounding at 16.5% annually. Within this macro environment, the commercial photography, videography, and social content creation market represents an addressable market exceeding INR 18,500 Crores nationwide:', MARGIN, y, { width: CONTENT_W });
  y += 24;

  const tamHeaders = ['Industry Segment', 'National Market Size (2024)', 'CAGR (2024-2030)', 'Eastern India TAM', 'Key Growth Catalysts & Market Realities'];
  const tamRows = [
    ['Wedding & Milestone Social Event Media', 'INR 9,200 Cr (~$1.11B)', '14.2%', 'INR 950 Cr', 'Rising wedding budgets, luxury destination shoots, multi-day celebrations, candid cinema demand'],
    ['Short-Form Social Content & Creator Reels', 'INR 3,400 Cr (~$410M)', '28.5%', 'INR 310 Cr', 'Explosion of Instagram Reels, YouTube Shorts, D2C brand performance ads, influencer campaigns'],
    ['Corporate, Commercial & Industrial Video', 'INR 4,100 Cr (~$495M)', '12.8%', 'INR 420 Cr', 'Corporate summits, recruitment & HR branding films, factory facility showcases, e-learning video'],
    ['Live Event Broadcasting & Streaming', 'INR 1,800 Cr (~$217M)', '18.0%', 'INR 180 Cr', 'Hybrid corporate AGMs, academic conferences, cultural concerts, sports tournaments, remote weddings'],
    ['Total Addressable Market (TAM)', 'INR 18,500 Cr (~$2.23B)', '16.1%', 'INR 1,860 Cr', 'Convergence of 5G, digital lifestyle, D2C retail boom, and enterprise visual marketing transformation']
  ];
  const tamColWidths = [120, 95, 65, 80, 155.28];

  y = drawTable(doc, MARGIN, y, tamHeaders, tamRows, tamColWidths, {
    fontSize: 6.7,
    padding: 2.8,
    boldCols: [0],
    boldRows: [4],
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, '#FEF3C7'],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  // 2.3 The Indian Creator Economy & Short-Form Boom
  y += 8;
  y = drawSectionHeading(doc, '2.3 THE INDIAN CREATOR ECONOMY & SHORT-FORM VIDEO BOOM', y);
  const creatorText = `• Scale of Vertical Video Consumption: India hosts the world's largest consumer base for Instagram Reels and YouTube Shorts (>350 million active monthly users). Average mobile screen time on vertical short-form video exceeds 44 minutes per day.
• Collapse of Static Imagery: Organic engagement for static image posts has declined by 62% since 2021 across major platforms, while vertical video reels generate 3.4x higher organic reach and 2.8x higher commercial conversion rates for retail brands.
• Shift in Small Business Ad Budgets: Regional businesses in Kolkata (fashion boutiques, jewelers, hospitality, aesthetic clinics) have reallocated 60% to 80% of total advertising spend away from traditional print/hoardings into sponsored Reels and performance video ads.
• The Production Deficit: Over 90% of business owners lack the cinema cameras, optical lenses, lighting, gimbal stabilization, and sound design needed to produce algorithmic-grade content internally. CineCraft's recurring monthly retainers directly service this deficit.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 76, 'ALGORITHMIC SHORT-FORM VIDEO REVOLUTION', creatorText, {
    fontSize: 6.8,
    lineGap: 1.3,
    accentColor: C.gold
  });

  // 2.4 The USD 130B Indian Wedding & Social Event Sector
  y += 6;
  y = drawSectionHeading(doc, '2.4 THE USD 130B INDIAN WEDDING SECTOR & REGIONAL DYNAMICS', y);
  const weddingText = `• Structural Scale: The Indian wedding market generates an estimated 10 to 12 million weddings annually, driving >USD 130 Billion in economic activity. In West Bengal alone, approximately 800,000 weddings take place every year across multi-day celebrations (Aashirwad, Mehendi, Sangeet, Haldi, Varmala, Reception).
• Shift from Archival to Cinematic Filmmaking: Contemporary couples reject 4-hour chronological tripod recordings, demanding 3-5 minute cinematic teaser trailers, cinematic color palettes (S-Log3/ACES), and documentary-style candid photography.
• Aerial Cinematography as Standard: Drone aerial capture is now expected in >65% of mid-to-high tier weddings to capture outdoor venues, baraat processions, and scenic heritage properties (Rajbari Bawali, Raichak, Vedic Village).
• The 24-Hour Social Gratification Window: Delivering photos and viral reels within 24 hours creates immense social currency for couples during the wedding event itself, representing CineCraft's decisive competitive advantage over legacy studios.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 76, 'STRUCTURAL DYNAMICS IN WEDDING & MILESTONE MEDIA', weddingText, {
    fontSize: 6.8,
    lineGap: 1.3,
    accentColor: C.navy
  });

  drawFooter(doc, 8);
}

function renderPage9(doc) {
  // Page 9: Chapter 3: Customer Analysis & Target Market Segmentation (STP Framework)
  drawHeader(doc, 9, 'CH. 3: STP SEGMENTATION');
  let y = drawPageBanner(doc, '3', 'CUSTOMER ANALYSIS & TARGET MARKET SEGMENTATION (STP FRAMEWORK)');

  y = drawSectionHeading(doc, '3.1 MULTI-DIMENSIONAL MARKET SEGMENTATION MATRIX (STP)', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('To optimize marketing customer acquisition costs (CAC) and deliver tailored production workflows, CineCraft categorizes its total addressable market across demographic, geographic, psychographic, and behavioral vectors:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const stpHeaders = ['Segmentation Base', 'B2C Consumer Segments (Weddings & Lifestyle)', 'B2B Enterprise Segments (Corporate & Brands)'];
  const stpRows = [
    [
      'DEMOGRAPHIC\nSEGMENTATION',
      '• Age Group: 24 to 38 years (Millennials and Gen-Z).\n• Decision Influencers: Joint decisions; 65% driven by brides.\n• Household Income: Upper-middle class to HNI (INR 12L to 50L+ p.a.).\n• Occupation: Tech professionals, corporate executives, doctors, entrepreneurs.',
      '• Enterprise Scale: Mid-market SMEs, D2C retail brands, Startups, Hospital networks, Educational institutions, Real estate firms.\n• Key Decision Makers: Founders, CMOs, Marketing Directors, Brand Managers, HR Heads.\n• Annual Turnover: INR 5 Crores to INR 150 Crores.'
    ],
    [
      'GEOGRAPHIC\nSEGMENTATION',
      '• Primary Market: Kolkata Metropole (Salt Lake, New Town, Alipore, Ballygunge, Park Street, Behala, Dum Dum).\n• Secondary: Howrah, Hooghly, North/South 24 Parganas.\n• Destination Hubs: Raichak, Mandarmoni, Bawali, Bolpur, Puri.',
      '• Primary IT & Corporate Hubs: Salt Lake Sector V, New Town Financial Hub, Central Kolkata CBD.\n• Industrial Corridors: Howrah, Barasat, Durgapur-Asansol belt.\n• Pan-India Remote: D2C e-commerce brands shipping products to Kolkata studio.'
    ],
    [
      'PSYCHOGRAPHIC\nSEGMENTATION',
      '• High aesthetic aspiration; highly active on Instagram and Pinterest.\n• Perceive wedding media as permanent artistic heirlooms and digital social prestige.\n• Value genuine emotional candid storytelling over rigid poses.',
      '• Modern, brand-conscious, digital-first growth mindset.\n• Focus on marketing ROI, customer acquisition cost (CAC), and reel conversion.\n• Highly sensitive to corporate professionalism, punctuality, and brand aesthetics.'
    ],
    [
      'BEHAVIORAL\nSEGMENTATION',
      '• Purchase Planning Window: 4 to 12 months in advance.\n• Research Channels: Instagram reels, Google reviews, banquet recommendations.\n• Price Sensitivity: Value-conscious but willing to pay for speed & quality.\n• Expectation: Same-day social reels and transparent delivery timelines.',
      '• Purchase Pattern: Monthly recurring retainers and event-based milestones (AGMs, summits, launches).\n• Strict requirements: Formal SLA contracts, GST-compliant tax invoices, cloud security, and raw data backup redundancy.'
    ]
  ];
  const stpColWidths = [90, 212, 213.28];

  y = drawTable(doc, MARGIN, y, stpHeaders, stpRows, stpColWidths, {
    fontSize: 6.5,
    padding: 2.5,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white
  });

  // 3.3 Customer Decision-Making Journey & Purchase Psychology
  y += 10;
  y = drawSectionHeading(doc, '3.2 CUSTOMER DECISION-MAKING JOURNEY & PURCHASE PSYCHOLOGY', y);

  const b2cJourney = `Phase 1: Algorithmic Discovery (Weeks 1-2): Couple discovers CineCraft via viral Instagram reels or banquet venue recommendations. Reviews website portfolio and 4K showreels.
Phase 2: Consultation & Personal Chemistry (Weeks 3-4): Studio meeting at Salt Lake lounge or video call with Creative Director. Physical leather album inspection, customized shot-list planning, and 24-hr Same-Day Edit demonstration.
Phase 3: Conversion & Date Securing (Weeks 4-6): Milestone contract execution with 25% non-refundable booking advance. Dedicated WhatsApp coordination channel launched.`;

  const b2bJourney = `Phase 1: Inbound & Outbound Prospecting (Weeks 1-2): B2B lead generation via LinkedIn networking, CEO cold outreach, or inbound website inquiries for brand shoots/events.
Phase 2: Creative Audit & Pitch Deck (Weeks 2-3): CineCraft conducts brand aesthetic audit, presents monthly content calendar roadmap, sample mood boards, and transparent retainer pricing.
Phase 3: Contracting & Pilot Onboarding (Weeks 3-4): Execution of formal Master Service Agreement (MSA) with 30-day cancellation clause, GST billing, and immediate pilot shoot commencement.`;

  y = drawCard(doc, MARGIN, y, (CONTENT_W / 2) - 4, 115, 'B2C WEDDING DECISION JOURNEY (3 TO 8 WEEKS)', b2cJourney, {
    fontSize: 6.6,
    lineGap: 1.2,
    accentColor: C.gold
  });

  drawCard(doc, MARGIN + (CONTENT_W / 2) + 4, y - 115, (CONTENT_W / 2) - 4, 115, 'B2B CORPORATE DECISION JOURNEY (2 TO 4 WEEKS)', b2bJourney, {
    fontSize: 6.6,
    lineGap: 1.2,
    accentColor: C.navy
  });

  drawFooter(doc, 9);
}

function renderPage10(doc) {
  // Page 10: Chapter 3 (Cont.): Target Customer Personas & Pain Point Resolution
  drawHeader(doc, 10, 'CH. 3: PERSONAS & PAIN POINTS');
  let y = drawPageBanner(doc, '3', 'DETAILED BUYER PERSONAS & STRATEGIC PAIN POINT RESOLUTION');

  // 3.2 Detailed Target Customer Personas Table
  y = drawSectionHeading(doc, '3.3 DETAILED TARGET BUYER PERSONAS (B2C CONSUMER & B2B ENTERPRISE)', y);

  const personaHeaders = ['Persona Dimension', 'Persona A: The Modern Aspirational Couple', 'Persona B: The D2C / Regional Brand Founder', 'Persona C: The Corporate Event & PR Director'];
  const personaRows = [
    [
      'Target Segment',
      'B2C Luxury & Candid Wedding',
      'B2B Monthly Social Media Retainer',
      'B2B Commercial & Corporate Event'
    ],
    [
      'Demographic Profile',
      'Pritam (29, Senior Software Engineer) & Ananya (27, PR Executive), New Town, Kolkata. Joint income: INR 26 Lakhs/year.',
      'Rohit Banerjee (34), Founder & CEO of a rapidly scaling ethnic retail & jewellery brand based in Salt Lake Sector V.',
      'Debashis Sen (46), Vice President - Corporate Communications, Regional Banking & Financial Services Group.'
    ],
    [
      'Budget & Ticket Size',
      'INR 1,50,000 to INR 2,50,000 for a 3-day wedding celebration package.',
      'INR 35,000 to INR 50,000 per month (Annual Contract Value: INR 4.2L to 6.0L).',
      'INR 80,000 to INR 1,50,000 per multi-cam corporate conference / annual AGM.'
    ],
    [
      'Core Aspirations & Motivations',
      'Wants a timeless, cinematic film, emotional candid portraits, and instant reels to post on Instagram while on honeymoon.',
      'Requires 12 to 16 high-conversion video reels and crisp 4K product photos monthly to drive Meta ad campaigns and sales.',
      'Requires flawless multi-camera live streaming, crisp executive interviews, and immediate post-event press highlight reels.'
    ],
    [
      'Pain Points with Existing Vendors',
      '• Traditional studios take 4-6 months to deliver.\n• Photographers demand awkward staged poses.\n• Poor audio quality during vows and speeches.\n• Hidden charges for drones and edits.',
      '• Freelancers are erratic and miss ad deadlines.\n• Lack cinema gear for crisp product texture.\n• Freelancers cannot issue legal GST tax invoices.\n• Inconsistent brand visual aesthetics.',
      '• Audio echoes and stream lag during hybrid AGMs.\n• Unprofessional crew appearance and conduct.\n• Lack of data security and delayed footage transfer.\n• Inability to handle redundant multi-cam setups.'
    ],
    [
      'CineCraft Studios Value Solution',
      '• Guaranteed 24-hr Same-Day Edit viral reels.\n• Cinematic Sony FX6/FX3 shallow depth-of-field.\n• 32-bit float broadcast audio redundancy.\n• 14-day master video and album delivery SLA.',
      '• Structured monthly retainer with fixed delivery dates.\n• Turnkey studio shoots with professional lighting.\n• 100% GST-compliant tax invoicing.\n• Scripting, hook optimization, and trend scoring.',
      '• Redundant bonded cellular live RTMP streaming.\n• Uniformed, corporate-trained production crew.\n• Synology 10GbE NAS secure cloud data management.\n• On-site live video switching (ATEM Extreme).'
    ]
  ];
  const personaColWidths = [85, 143, 143, 144.28];

  y = drawTable(doc, MARGIN, y, personaHeaders, personaRows, personaColWidths, {
    fontSize: 6.2,
    padding: 2.2,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.bgAlt, C.white, C.bgLight, C.white, '#FEF2F2', '#ECFDF5']
  });

  // 3.4 Systematic Market Pain Point Resolution Framework
  y += 8;
  y = drawSectionHeading(doc, '3.4 SYSTEMATIC RESOLUTION OF EASTERN INDIA MEDIA INDUSTRY DEFICITS', y);

  const painPoints = [
    ['The "Delivery Black Hole" Deficit', 'Traditional regional studios take 90 to 180 days to deliver albums and videos, destroying the emotional relevance of wedding media. CineCraft guarantees Same-Day Edit Reels within 24 hours and final master films within 14 days, codified into formal contracts with late-delivery penalty clauses.'],
    ['The "Informal Freelancer Risk" Deficit', 'Freelancers offer cheap rates but carry zero backup gear, fall sick during events, and lack GST registration. CineCraft provides institutional reliability: permanent staff cinematographers, backup camera bodies, and 100% tax-compliant corporate invoicing.'],
    ['The "Technical Stagnation" Deficit', 'Conventional studios still operate 8-bit DSLR cameras with harsh on-camera flash. CineCraft deploys Hollywood-grade Sony cinema line systems, 10-bit 4:2:2 color profiles, calibrated DaVinci Resolve color grading suites, and licensed soundtrack scoring.']
  ];

  painPoints.forEach(([title, desc]) => {
    y = drawCard(doc, MARGIN, y, CONTENT_W, 32, title, desc, {
      fontSize: 6.7,
      titleSize: 7.3,
      lineGap: 1.1,
      accentColor: C.navy,
      bg: C.bgLight
    });
    y += 4;
  });

  drawFooter(doc, 10);
}

module.exports = {
  renderPage6,
  renderPage7,
  renderPage8,
  renderPage9,
  renderPage10
};
