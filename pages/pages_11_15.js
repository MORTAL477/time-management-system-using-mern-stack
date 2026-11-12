// pages/pages_11_15.js
const { C, PAGE_W, PAGE_H, MARGIN, CONTENT_W, drawHeader, drawFooter, drawPageBanner, drawSectionHeading, drawCard, drawTable } = require('./helpers');

function renderPage11(doc) {
  // Page 11: Chapter 4: Product & Service Portfolio Overview
  drawHeader(doc, 11, 'CH. 4: SERVICE PORTFOLIO');
  let y = drawPageBanner(doc, '4', 'PRODUCT & SERVICE PORTFOLIO: INTEGRATED CORE VERTICALS');

  // 4.1 Integrated Core Service Verticals
  y = drawSectionHeading(doc, '4.1 FIVE INTEGRATED CORE SERVICE VERTICALS & TECHNICAL DELIVERABLES', y);

  const introText = `CineCraft Studios operates five complementary, high-synergy commercial verticals engineered to eliminate client vendor fragmentation and maximize equipment utilization across both seasonal weekend wedding peaks and steady weekday B2B corporate demand:
1. Professional Photography Suite: Candid documentary wedding photography, e-commerce fashion catalogues, ghost-mannequin product shoots, architectural HDR real estate interior captures, and studio-lit C-suite executive headshots.
2. Cinematic Videography & Aerial Cinematography: 4K/6K full-frame cinematography utilizing Sony FX6 and FX3 cinema cameras with 10-bit 4:2:2 color depth, DJI Mavic 3 Pro Cine aerial filming, high-speed indoor FPV drone fly-throughs, and scripted pre-wedding music films.
3. Viral Social Reels & Vertical Video Asset Creation: High-velocity 9:16 vertical video production featuring the signature 24-hour Same-Day Edit (SDE) wedding reel protocol, turnkey monthly B2B content retainers, and executive thought-leadership snippets.
4. Advanced Post-Production, Color Grading & Sound Engineering: Hollywood-grade DaVinci Resolve ACES color mastering, AI neural speech dialogue cleanup, licensed sound design, and 2D/3D motion graphics typography.
5. Live Event Coverage & Broadcast Multi-Cam Streaming: Portable multi-camera live production switching via Blackmagic ATEM Mini Extreme ISO and redundant bonded cellular RTMP streaming to YouTube, Facebook, and corporate portals.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 102, 'FULL-STACK INTEGRATED VISUAL PRODUCTION ARCHITECTURE', introText, {
    fontSize: 6.8,
    lineGap: 1.2,
    accentColor: C.navy
  });

  // Master Technical Deliverables Matrix Table
  y += 10;
  y = drawSectionHeading(doc, 'MASTER SERVICE DELIVERABLES, TURNAROUND & TECH STACK MATRIX', y);

  const sHeaders = ['Service Vertical', 'Primary Tangible Deliverables', 'Turnaround SLA', 'Primary Hardware & Software Tech Stack', 'Primary Target Market'];
  const sRows = [
    [
      'Candid & Traditional\nWedding Photography',
      '• 800-1,500 color-graded high-res photos\n• 1 Luxury Handcrafted Leatherette Album (40 sheets / 80 pgs)\n• Redundant cloud digital gallery (1-yr access)',
      '• Highlights: 72 Hrs\n• Full Gallery: 14 Days\n• Album: 21 Days',
      'Sony A7SIII & FX3, G-Master 24-70mm f/2.8 II, 70-200mm f/2.8 OSS II, Godox AD600Pro flashes, Adobe Lightroom Classic',
      'Weddings, Sangeets, Receptions, Anniversaries, Milestone Birthdays'
    ],
    [
      'Cinematic 4K Wedding\n& Event Films',
      '• 3-5 min Cinematic Teaser Trailer\n• 25-40 min Extended Documentary Feature Film\n• Full raw footage archive provided on SSD',
      '• Teaser Trailer: 7 Days\n• Full Feature Film: 20 Days',
      'Sony FX6 & FX3 Cinema Cameras, 35mm & 50mm f/1.4 GM lenses, DJI Ronin RS3 Pro gimbal, DaVinci Resolve Studio',
      'Aspirational couples, Destination Weddings, Galas, Award Shows'
    ],
    [
      'Drone & Aerial\nCinematography',
      '• 4K/60fps master aerial venue & crowd footage\n• Master drone highlight reel & establishing sequences',
      'Integrated with master film timeline',
      'DJI Mavic 3 Pro Cine (Triple lens Hasselblad), DJI Avata 2 FPV drone, DGCA Digital Sky UIN certified',
      'Weddings, Real Estate Developers, Resorts, Industrial Plants'
    ],
    [
      'Viral Social Media\nReels & Shorts',
      '• 3 to 5 Vertical Reels (9:16 format)\n• Licensed trending music scoring\n• Dynamic kinetic subtitles and sound effects',
      '• SDE Reels: 12-24 Hours\n• B2B Retainers: Weekly batch delivery',
      'Apple iPad Pro M2 mobile edit station, DaVinci Resolve Studio, CapCut Pro Desktop, Frame.io cloud portal',
      'Social-first couples, D2C retail brands, Influencers, Cafes, Clinics'
    ],
    [
      'B2B Corporate Video\n& Commercial Shoots',
      '• Corporate Profile Film (2-3 min)\n• Executive Headshots & Facility Showcase Photos\n• Product demonstration video ads for web & social',
      '• Initial Cuts: 5 Days\n• Final Revisions: 10 Days',
      'Sony FX6, Aputure 600d Pro / 300x studio LEDs, Sennheiser MKH 416 boom mic, Adobe Premiere Pro & After Effects',
      'Mid-market corporate enterprises, IT MNCs, Hospitals, Universities'
    ],
    [
      'Multi-Cam Live Event\nStreaming & Broadcast',
      '• Full HD 1080p60 multi-cam live broadcast stream\n• Uncompressed master ISO recording of all camera feeds',
      'Real-time live broadcast; ISO master files next day',
      'Blackmagic ATEM Mini Extreme ISO, LiveU bonded cellular modem, Hollyland Cosmo C1 wireless video',
      'Corporate AGMs, Academic Summits, Sports Tournaments, Hybrid Weddings'
    ]
  ];
  const sColWidths = [95, 145, 75, 115, 85.28];

  y = drawTable(doc, MARGIN, y, sHeaders, sRows, sColWidths, {
    fontSize: 6.2,
    padding: 2.2,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, C.bgLight, C.white, C.bgLight, C.white, C.bgLight]
  });

  drawFooter(doc, 11);
}

function renderPage12(doc) {
  // Page 12: Chapter 4 (Cont.): Service Packaging & Tiered Price Points
  drawHeader(doc, 12, 'CH. 4: SERVICE PACKAGING');
  let y = drawPageBanner(doc, '4', 'SERVICE PACKAGING, TIERED PRICING ARCHITECTURE & DELIVERABLES');

  // 4.2 Comprehensive Service Packaging
  y = drawSectionHeading(doc, '4.2 STRUCTURED SERVICE TIERS & COMPREHENSIVE DELIVERABLE SCOPE', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('To capture maximum consumer surplus and service diverse budget spectrums across consumer and corporate segments, CineCraft implements a structured tiered pricing architecture:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const pkgHeaders = ['Service Package Tier', 'Included Crew Deployment & Scope', 'Included Deliverables & Technical Assets', 'Standard Price Point (INR)', 'Target Client Segment'];
  const pkgRows = [
    [
      'Silver Elegance\n(B2C Starter Event)',
      '• 1 Candid Lead Photographer\n• 1 Cinematic Videographer\n• Full-day 8-hour single event coverage',
      '• 400+ Color-graded high-res digital images\n• 1 Cinematic Highlight Film (3-5 mins)\n• 1 Same-Day Viral Reel (24-hr delivery)\n• High-resolution private cloud gallery',
      'INR 55,000 to\nINR 75,000\nper event',
      'Engagement, Ring Ceremony, Pre-wedding, Anniversary, Birthday Galas'
    ],
    [
      'Gold Cinematic\n(B2C Wedding Benchmark)',
      '• 2 Candid Photographers\n• 2 Cinematic Videographers\n• 1 Dedicated Drone Cinematographer\n• 2-Day Coverage (e.g. Sangeet/Haldi + Wedding)',
      '• 800+ Master edited photos\n• 1 Premium Wedding Teaser (3-4 mins)\n• 1 Full Cinematic Wedding Film (30 mins)\n• 3 Same-Day Viral Reels (24-hr delivery)\n• 1 Handcrafted Canvera/Photostop Leather Album',
      'INR 1,35,000 to\nINR 1,65,000\n(Flagship)',
      'Upper-Middle Class Weddings in Kolkata & Suburbs (Core Revenue Engine)'
    ],
    [
      'Platinum Royal Heritage\n(B2C Luxury Bespoke)',
      '• Full Cinema Crew: 2 Senior Photographers, 3 Cinema Camera Operators, 1 Drone Pilot, 1 On-site Mobile Editor\n• 3-Day Multi-Event Coverage (Mehendi, Sangeet, Wedding, Reception)',
      '• 1,500+ Master edited photos\n• 1 Concept Pre-Wedding Cinematic Film\n• 1 Cinematic Wedding Trailer (4K)\n• 1 Extended Documentary Film (45 mins)\n• 6 Viral Reels (Same-Day Edits)\n• 2 Handcrafted Premium Flush-Mount Albums\n• Raw footage archive on 2TB external SSD',
      'INR 2,25,000 to\nINR 3,10,000\nper wedding',
      'High-Net-Worth Individuals (HNIs), Luxury Destination Weddings (Raichak, Bawali, Vedic Village)'
    ],
    [
      'Corporate Event /\nSummit Package',
      '• 1 Commercial Photographer\n• 2 Cinema Videographers\n• Multi-cam live streaming engineering setup\n• 1-day 8-hour continuous coverage',
      '• 300+ Edited high-res corporate photos\n• Full-length seminar / keynote master recording\n• 1 Executive Summary Reel (60 secs)\n• Redundant RTMP Multi-Cam Live Stream',
      'INR 75,000 to\nINR 1,10,000\nper day',
      'Corporate Annual AGMs, Medical Conferences, Product Launches, Startup Pitch Summits'
    ],
    [
      'Monthly B2B Retainer\n(Basic Content Tier)',
      '• 1 Studio shoot day per month (4 hours)\n• 1 Commercial Photographer & 1 Reel Creator\n• Full studio lighting and audio setup',
      '• 8 High-Impact Vertical Reels (scripted)\n• 25 E-commerce product photos\n• Trending sound licensing and subtitles\n• Monthly performance review call',
      'INR 28,000 to\nINR 35,000\nper month',
      'Emerging D2C brands, Cafes, Boutiques, Doctors, Aesthetic Clinics'
    ],
    [
      'Monthly B2B Retainer\n(Growth Content Tier)',
      '• 2 Shoot days per month (8 hours total)\n• Full commercial crew (Camera, Director, Sound)\n• On-location & in-studio dual shoots',
      '• 16 Scripted Vertical Reels\n• 50 Product / Brand photos\n• 1 Brand Story / Customer Testimonial Video\n• Performance ad hook variants',
      'INR 45,000 to\nINR 60,000\nper month',
      'Established retail brands, Jewelry houses, Real estate developers, Hospital networks'
    ]
  ];
  const pkgColWidths = [95, 135, 145, 65, 75.28];

  y = drawTable(doc, MARGIN, y, pkgHeaders, pkgRows, pkgColWidths, {
    fontSize: 6.2,
    padding: 2.2,
    boldCols: [0, 3],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, '#FEF3C7', C.white, C.bgLight, C.white, C.bgLight]
  });

  // Value Pricing & Payment Terms
  y += 8;
  y = drawSectionHeading(doc, 'TRANSPARENT CLIENT CONTRACTUAL TERMS & MILESTONE SCHEDULE', y);
  const termsText = `• Transparent Milestone Billing: 25% non-refundable advance upon contract signing to lock dates; 50% on the day of production; and 25% upon final digital gallery delivery.
• Zero Hidden Charges: All packages explicitly include professional travel within Kolkata Metropole, equipment transit insurance, basic drone clearances, and music licensing.
• Revisions & Feedback Guarantee: Maximum 2 client feedback rounds managed transparently through Frame.io cloud timecode review, completed within 48 hours.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 46, 'CLIENT-CENTRIC CONTRACTUAL ASSURANCE', termsText, {
    fontSize: 6.8,
    lineGap: 1.2,
    accentColor: C.gold
  });

  drawFooter(doc, 12);
}

function renderPage13(doc) {
  // Page 13: Chapter 4 (Cont.): Phased Geographic Rollout Schedule
  drawHeader(doc, 13, 'CH. 4: GEOGRAPHIC ROLLOUT');
  let y = drawPageBanner(doc, '4', 'PHASED GEOGRAPHIC ROLLOUT & MARKET PENETRATION SCHEDULE');

  // 4.3 Phased Geographic Rollout Schedule
  y = drawSectionHeading(doc, '4.3 THREE-PHASE STRATEGIC MARKET EXPANSION ROADMAP', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('To ensure rigorous operational quality control, protect brand prestige, and maintain healthy logistical margins, CineCraft implements a disciplined three-phase geographic expansion:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const rollHeaders = ['Expansion Phase', 'Geographic Territory & Target Zones', 'Annual Target Customer Volume', 'Key Operational & Strategic Milestones'];
  const rollRows = [
    [
      'PHASE 1:\nFOUNDATION\n(Year 1)',
      '• Kolkata Metropolitan Area:\n  - Salt Lake City & New Town\n  - Rajarhat & EM Bypass Corridor\n  - South Kolkata (Alipore, Ballygunge, Park Street)\n• Industrial Belts:\n  - Sector V IT Hub\n  - North 24 Parganas (Dum Dum, Barasat, Barrackpore)',
      '• 18 High-tier full weddings\n• 22 Pre-wedding shoots\n• 8 Monthly B2B retainers\n• 14 Corporate summits / AGMs\n• 20 Commercial product shoots',
      '• Establish Salt Lake flagship 1,800 sq ft studio & edit bays\n• Empanel with top 5 luxury banquet venues & hotel chains\n• Standardize 24-hr Same-Day Edit reel pipeline\n• Achieve operational cash break-even by Month 7\n• Reach Gross Revenue of INR 84.20 Lakhs'
    ],
    [
      'PHASE 2:\nREGIONAL\nEXPANSION\n(Year 2)',
      '• Extended West Bengal:\n  - South 24 Parganas\n  - Howrah & Hooghly industrial belts\n  - Burdwan, Durgapur, Asansol industrial corridor\n  - Siliguri & North Bengal commercial hub\n• Regional Destination Hubs:\n  - Raichak on Ganges, Mandarmoni, Rajbari Bawali, Bolpur-Santiniketan',
      '• 28 Full-service weddings\n• 32 Pre-wedding films\n• 16 Monthly B2B retainers\n• 24 Corporate summits\n• 35 Commercial shoots',
      '• Commission second mobile multi-cam production unit\n• Acquire DJI Avata 2 indoor FPV drone fleet\n• Launch dedicated remote post-production outsourcing desk\n• Secure empanelment with 15 corporate event planners\n• Reach Gross Revenue of INR 1.67 Crores (PAT: INR 31.55L)'
    ],
    [
      'PHASE 3:\nEASTERN INDIA\nDOMINANCE\n(Year 3)',
      '• Pan-Eastern India Expansion:\n  - Odisha: Bhubaneswar & Puri destination corridor\n  - Jharkhand: Ranchi & Jamshedpur industrial belts\n  - Bihar: Patna commercial center\n  - Assam: Guwahati Northeast gateway\n• Remote Global Post-Production:\n  - National & international video editing outsourcing',
      '• 42 Luxury destination weddings\n• 45 Pre-wedding films\n• 26 Monthly B2B retainers\n• 38 Corporate summits\n• 50+ Post-production contracts',
      '• Open regional liaison office in Bhubaneswar\n• Launch CineCraft Academy for vocational editor training\n• Commission third mobile production unit\n• Surpass Gross Revenue of INR 3.17 Crores (PAT: INR 88.67L)\n• Solidify ranking as Top-3 wedding cinema brand in East India'
    ]
  ];
  const rollColWidths = [80, 145, 120, 170.28];

  y = drawTable(doc, MARGIN, y, rollHeaders, rollRows, rollColWidths, {
    fontSize: 6.3,
    padding: 2.3,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, C.bgLight, C.white]
  });

  // Strategic Alliances & Venue Empanelment Model
  y += 10;
  y = drawSectionHeading(doc, 'STRATEGIC VENUE EMPANELMENT & PARTNERSHIP ECONOMICS', y);
  const allyText = `• Banquet & Luxury Hotel Panels: Formal empanelment with premier Kolkata venues (ITC Royal Bengal, JW Marriott, Hyatt Regency, Taj City Centre, Eco Park Banquet). CineCraft offers venue managers a structured 8% to 10% referral honorarium upon completed contract signings, generating 6 guaranteed high-tier wedding bookings in Year 1.
• Equipment Surge Partnerships: Strategic SLA with authorized rental houses in Kolkata (Sony India, Godox, Aputure regional partners) enabling CineCraft to scale equipment capacity during auspicious wedding peak dates without adding fixed capital costs.
• Cloud Collaboration: Frame.io and Amazon S3 infrastructure ensuring seamless remote review for non-resident Bengali couples and outstation corporate headquarters.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 64, 'B2B ALLIANCES & ASSET-LIGHT OPERATING LEVERAGE', allyText, {
    fontSize: 6.8,
    lineGap: 1.2,
    accentColor: C.gold
  });

  drawFooter(doc, 13);
}

function renderPage14(doc) {
  // Page 14: Chapter 5: Business Model & Strategic Value Architecture (9-Block BMC)
  drawHeader(doc, 14, 'CH. 5: BUSINESS MODEL CANVAS');
  let y = drawPageBanner(doc, '5', 'BUSINESS MODEL CANVAS (BMC) ARCHITECTURE');

  // 5.1 Business Model Canvas Architecture
  y = drawSectionHeading(doc, '5.1 THE NINE BUILDING BLOCKS OF THE CINECRAFT BUSINESS MODEL CANVAS', y);

  doc.fontSize(7.5).font('Helvetica').fillColor(C.textDark);
  doc.text('CineCraft Studios operates an integrated hybrid B2B/B2C service business model designed to combine creative visual artistry with industrialized operational discipline. The nine building blocks of the Business Model Canvas are structured below:', MARGIN, y, { width: CONTENT_W });
  y += 14;

  const bmcHeaders = ['BMC Building Block', 'Operational Strategy & Strategic Elements for CineCraft Studios'];
  const bmcRows = [
    [
      'KEY PARTNERS',
      '• Luxury banquet halls, 5-star hotel banquet managers (JW Marriott, ITC, Hyatt), and wedding planners across Kolkata.\n• Equipment rental agencies & authorized distributors (Sony India, Godox, Aputure, DJI authorized dealers) for surge capacity.\n• Cloud infrastructure providers: Frame.io, Amazon Web Services (AWS S3) for redundant long-term archival storage.\n• Commercial music licensing platforms: Artlist and Epidemic Sound ensuring 100% legal copyright compliance.\n• High-end photobook manufacturing labs: Canvera and Photostop for handcrafted flush-mount leather albums.'
    ],
    [
      'KEY ACTIVITIES',
      '• Pre-Production: Creative briefing, mood board curation, call sheet scheduling, scriptwriting, and location scouting.\n• Field Production: Multi-camera 4K filming, certified drone aerial filming, portrait photography, live switching.\n• Post-Production: Checksum data offload, multi-cam sync, DaVinci Resolve color grading, audio denoising, motion graphics.\n• Same-Day Reel Editing: High-speed mobile cutting and delivery of 9:16 vertical Instagram Reels within 12-24 hours.\n• Business Development: Outbound B2B corporate prospecting, client portfolio consultations, social media ad management.'
    ],
    [
      'KEY RESOURCES',
      '• Physical Assets: Leased 1,800 sq ft production studio, infinity cyclorama wall, soundproof color grading suite, client lounge.\n• Production Hardware: Sony FX6 & FX3 cinema cameras, G-Master lenses, DJI Mavic 3 Cine & Avata FPV drones, Aputure lighting.\n• Computing Infrastructure: Apple Mac Studio M2 Max workstations, Synology 64TB 10GbE NAS RAID 6 server.\n• Human Capital: Creative Director, Senior Cinematographers, Certified Drone Pilots, Lead Colorists, Sound Designers.\n• Intellectual Property: Proprietary editing LUT presets, standardized operational SOP manuals, client contracts.'
    ],
    [
      'VALUE PROPOSITIONS',
      '• For Wedding Clients: Hollywood-grade 4K cinematic storytelling with guaranteed 24-hour Same-Day Social Reels and 14-day master delivery, permanently eliminating the dreaded 4-to-6 month industry delay.\n• For B2B Brands: Consistent, high-conversion monthly vertical video assets engineered to drive algorithmic reach and sales, backed by professional SLA guarantees and GST tax invoicing.\n• For Corporate Events: Seamless multi-cam live broadcasting, executive-grade photography, and instant press highlight reels.'
    ],
    [
      'CUSTOMER\nRELATIONSHIPS',
      '• Dedicated Project Manager serving as a single, empathetic point of contact throughout the event lifecycle.\n• Collaborative cloud review via Frame.io, allowing clients to leave time-stamped video comments.\n• Post-event VIP referral rewards, milestone anniversary greetings, and corporate loyalty discounts.'
    ],
    [
      'CHANNELS',
      '• Inbound Digital: Highly curated Instagram feed & reels showcase, YouTube 4K portfolio channel, SEO-optimized website.\n• Outbound B2B: Direct corporate pitch meetings, LinkedIn executive networking, cold email RFP submissions.\n• Strategic Alliances: Banquet vendor panels, wedding planner commissions, event management agency empanelment.\n• Physical Channel: Walk-ins and private screening sessions at the flagship Salt Lake Sector V studio lounge.'
    ],
    [
      'CUSTOMER\nSEGMENTS',
      '• High-Aspiration Wedding Couples & Families (Upper-Middle Class to HNI; INR 12L to 50L+ annual household income).\n• Emerging D2C Retail, Fashion, Jewelry & Lifestyle Brands seeking high-conversion performance video marketing.\n• Corporate Enterprises, IT Multinationals, Educational Institutions, and Healthcare Networks requiring professional B2B media.\n• Independent Creators, Doctors, Lawyers, and C-Suite Executives requiring personal branding content.'
    ],
    [
      'COST STRUCTURE',
      '• Fixed Overheads: Studio lease rental (INR 45,000/mo), core staff salaries, software SaaS subscriptions, equipment insurance.\n• Semi-Variable Costs: Utilities (electricity, 10Gbps fiber internet), Meta/Google ad spend, studio maintenance.\n• Direct Variable Costs: Freelance crew honorariums during event surges, travel logistics, album printing, client hospitality.'
    ],
    [
      'REVENUE STREAMS',
      '• B2C Wedding & Milestone Celebration Packages (Gold & Platinum Tiers: INR 1.35L to 3.10L per project).\n• Pre-Wedding & Concept Music Video Shoots (INR 45,000 to 65,000 per project).\n• B2B Monthly Social Media Content Retainers (INR 28,000 to 60,000/month recurring contracts).\n• Corporate Summits, Conferences & Commercial Shoots (INR 75,000 to 1,50,000 per project).\n• Multi-Cam Live Streaming & Remote Post-Production Outsourcing Contracts.'
    ]
  ];
  const bmcColWidths = [95, 420.28];

  y = drawTable(doc, MARGIN, y, bmcHeaders, bmcRows, bmcColWidths, {
    fontSize: 5.9,
    padding: 1.8,
    boldCols: [0],
    headerBg: C.navy,
    headerTextColor: C.white,
    rowBgs: [C.white, C.bgLight, C.white, '#FEF3C7', C.white, C.bgLight, C.white, C.bgLight, '#ECFDF5']
  });

  drawFooter(doc, 14);
}

function renderPage15(doc) {
  // Page 15: Chapter 5 (Cont.): Operational Mechanics & Scalability Drivers
  drawHeader(doc, 15, 'CH. 5: OPERATIONS & SCALABILITY');
  let y = drawPageBanner(doc, '5', 'HYBRID OPERATIONS, STAFFING ARCHITECTURE & SCALABILITY DRIVERS');

  // 5.2 Hybrid Service Delivery Architecture
  y = drawSectionHeading(doc, '5.2 HYBRID "HUB-AND-SPOKE" SERVICE DELIVERY ARCHITECTURE', y);

  const hubText = `To maximize capital efficiency and navigate seasonal demand fluctuations, CineCraft deploys an agile 'Hub-and-Spoke' operational architecture:
• Centralized Creative Hub (Salt Lake Sector V): The 1,800 sq ft flagship facility houses primary post-production editing workstations, calibrated DaVinci Resolve color grading suites, equipment storage vaults, client preview lounge, and executive administration.
• Agile Mobile Production Spokes: Field units equipped with modular, shockproof Pelican flight cases deploy to banquet halls, corporate summits, and destination wedding locations across Eastern India.
• Cloud Synchronization: On-location DIT units offload raw footage to portable NVMe arrays, while low-resolution proxy files and Same-Day Edit reels are synchronized to the Salt Lake NAS server via 5G bonded modems for immediate studio post-production.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 76, 'CENTRALIZED STUDIO HUB & DEPLOYABLE MOBILE UNITS', hubText, {
    fontSize: 6.8,
    lineGap: 1.3,
    accentColor: C.navy
  });

  // 5.3 Core-and-Flex Staffing Strategy
  y += 8;
  y = drawSectionHeading(doc, '5.3 CORE-AND-FLEX HUMAN RESOURCE DEPLOYMENT MODEL', y);

  const flexText = `The traditional studio model is plagued by either exorbitant fixed payroll burdens during off-seasons or chaotic reliance on unvetted freelancers during peak dates. CineCraft implements an optimal Core-and-Flex human resource framework:
• Permanent Core Team (7 Professionals in Year 1): Comprises the Managing Partner (Strategy/Marketing), Creative Director (Cinematography Lead), Senior Cinematographer, Lead Video Editor/Colorist, Assistant Reel Editor/DIT, Business Development Executive, and Studio Assistant. This core preserves brand identity, controls artistic quality, and manages client communications.
• Vetted Freelance Roster (15+ On-Call Specialists): Rigorously audited roster of secondary camera operators, drone pilots, and lighting assistants contracted on per-diem honorariums during auspicious wedding dates.
• Off-Season Fixed Overhead Insulation: During the monsoon and summer non-wedding months, the permanent core team shifts 80% of operational capacity toward servicing B2B monthly social media retainers, commercial ad shoots, and corporate videos, ensuring uninterrupted profitability.`;

  y = drawCard(doc, MARGIN, y, CONTENT_W, 84, 'BALANCED PERMANENT CORE & FLEXIBLE FREELANCE POOL', flexText, {
    fontSize: 6.8,
    lineGap: 1.3,
    accentColor: C.gold
  });

  // 5.4 Scalability Drivers & Operating Leverage
  y += 8;
  y = drawSectionHeading(doc, '5.4 STRATEGIC SCALABILITY DRIVERS & ASSET-LIGHT OPERATING MECHANICS', y);

  const scaleDrivers = [
    ['Counter-Cyclical Asset Utilization', 'Expensive cinema camera bodies and lighting equipment are deployed for high-ticket weddings on weekends and utilized for corporate brand shoots and B2B social retainers on weekdays, maximizing annual asset turnover.'],
    ['Proprietary Post-Production LUTs & Presets', 'Standardized color profiles and editing timelines reduce master video turnaround from the industry standard of 60-90 days down to 14 days, tripling editor throughput without sacrificing artistic quality.'],
    ['Cloud Client Collaboration (Frame.io)', 'Eliminates repetitive physical client review meetings. Timecode-based commenting shortens revision feedback cycles from weeks to 48 hours, reducing administrative overhead by 60%.'],
    ['Scalable Multi-Crew Architecture', 'Standardized Pelican gear kits and SOP manuals allow CineCraft to dispatch up to three independent production crews simultaneously on peak auspicious wedding dates without quality drift.']
  ];

  scaleDrivers.forEach(([title, desc]) => {
    y = drawCard(doc, MARGIN, y, CONTENT_W, 34, title, desc, {
      fontSize: 6.7,
      titleSize: 7.3,
      lineGap: 1.1,
      accentColor: C.accent,
      bg: C.bgLight
    });
    y += 4;
  });

  drawFooter(doc, 15);
}

module.exports = {
  renderPage11,
  renderPage12,
  renderPage13,
  renderPage14,
  renderPage15
};
