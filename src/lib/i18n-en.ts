import type { TranslationResources } from "./i18n";
import { salesCategoryDefinitions } from "./products";
import { PRIMARY_EMAIL, SECONDARY_EMAIL, ALL_EMAILS } from "./email-config";

export const enTranslations: TranslationResources = {
  header: {
    home: "Home",
    aboutUs: "About Us",
    aboutDropdownAria: "Navigate to About Us pages",
    languageLabel: "Language",
    changeLanguageAria: "Change language (current: {language})",
    getQuote: "Get Quote",
    switchLanguageAria: {
      EN: "Switch to English",
      ID: "Switch to Bahasa Indonesia",
      ZH: "Switch to Simplified Chinese",
    },
    aboutLinks: {
      ourCompany: "Our Company",
      ourTeam: "Our Team",
      certifications: "Certifications",
      companyAwards: "Company Awards",
    },
    navigationItems: {
      services: "Services",
      products: "Products",
      ourWorks: "Our Works",
      gallery: "Gallery",
      news: "News",
      career: "Career",
      location: "Location",
      contact: "Contact Us",
    },
    productLinks: {
      forSale: "For Sale",
      forRent: "For Rent",
    },
    careerLinks: {
      employee: "Employee Positions",
      intern: "Internship Programs",
    },
  },
  serviceDetail: {
    scopeOfWork: "Scope of Work",
    specifications: "Typical Specifications",
    deliverables: { title: "Deliverables & Reports" },
    applications: { title: "Suitable Applications" },
    premiumService: "Premium Service",
    process: {
      title: "How We Work",
      steps: {
        consultation: {
          title: "Consultation",
          description: "Discuss your project needs with our team.",
        },
        planning: {
          title: "Planning",
          description: "Detailed planning, scheduling, and cost estimation.",
        },
        execution: {
          title: "Execution",
          description: "Field execution with strict quality control.",
        },
      },
    },
    faqs: {
      title: "FAQs",
      items: [
        {
          q: "What is the estimated project duration?",
          a: "Duration varies depending on scope. We'll provide a detailed schedule after the initial survey.",
        },
        {
          q: "How do you ensure quality standards?",
          a: "We adhere to national standards and international best practices with regular testing.",
        },
        {
          q: "What documents will we receive?",
          a: "You will receive method statements, schedules, daily/weekly reports, test results, photo documentation, and handover documents (as-built, BAST) as required.",
        },
        {
          q: "Can work be done on operating lanes?",
          a: "Yes, with traffic engineering, phased scheduling, and strict HSE standards to maintain operational safety.",
        },
        {
          q: "Is a quality guarantee available?",
          a: "We implement a maintenance period per contract and perform corrections if results don't meet agreed specifications.",
        },
      ],
    },
    backToServices: "Back to Services",
    sidebar: {
      title: "Discuss Your Project",
      descriptionTemplate:
        "Need {service} services? Our team is ready to help you choose the best solution.",
    },
    whyChoose: {
      title: "Why Choose Us",
      items: [
        "Experienced and certified team",
        "Continuous quality control",
        "Modern and safe equipment",
      ],
    },
    bottomCta: {
      titleTemplate: "Ready to start your {service} project?",
      description: "Free consultation and the best offer for your needs.",
      exploreServices: "Explore Services",
    },
  },
  products: {
    hero: {
      label: "Products",
      title: "Heavy Equipment & Project Support",
      description:
        "Find heavy machinery, power solutions, and project support vehicles meeting PT. Karya Halim Sampoerna quality standards.",
    },
    intro: {
      badge: "Our Products",
      description:
        "We provide comprehensive solutions including heavy equipment, power supply, and material transport. Each unit undergoes strict inspection and is ready to support 24/7 operations.",
    },
    filters: {
      title: "Product Filters",
      description: "Use search and categories to narrow down choices.",
      categoryTitle: "Categories",
      allCategories: "All Categories",
      moreCategoriesLabel: "More categories",
      viewOptions: "View options",
      exploreMore: "Explore {count} more categories",
      productNoun: "products",
      searchPlaceholder: "Search products, features, or tags...",
      sortPlaceholder: "Sort",
      reset: "Reset filters",
      activeLabel: "Active",
      salesCategoryTitle: "Sales Category",
      salesCategories: {
        all: "All Products",
        sale: "For Sale",
        rent: "Rental Products",
      },
    },
    emptyState: {
      title: "No products found",
      description: "Try a different filter or clear your search.",
    },
    status: {
      contactLabel: "Contact Us",
      descriptionTemplate: "contact: {email} or {whatsapp}",
      descriptionEmailOnly: "contact: {email}",
      descriptionDualEmail: "contact: {email} or {emailSecondary}",
    },
    pagination: {
      perPage: "Per page",
      perPageAria: "Select number of products per page",
      summaryTemplate: "Showing {start}-{end} of {total} {noun}",
    },
    detail: {
      specsTitle: "Main Specifications",
      highlights: "Highlights",
      categoryHighlights: "Category Highlights",
      availabilityStatus: "Availability Status",
      nextSteps: "Next Steps",
      nextStepsList: [
        "Discuss project needs and unit configuration.",
        "Get delivery schedule and after-sales support.",
        "Prepare supporting documents for procurement.",
      ],
      helpText:
        "Need more information? Our team is ready to help tailor the best solution.",
      whatsappButton: "Contact via WhatsApp",
      rentPrefix: "RENT",
      salePrefix: "SALE",
      locationTitle: "Location",
      locationValue: "Palangka Raya, Central Kalimantan",
    },
    productsData: {
      categories: {
        "vibratory-roller": {
          name: "Vibratory Roller",
          description:
            "Vibratory compactors for consistent granular and basecourse compaction.",
          highlight: "Variable amplitude, auto vibration, telematics",
        },
        excavator: {
          name: "Excavator",
          description:
            "Excavator fleet for mass excavation, <em>loading</em>, and heavy earthwork operations.",
          highlight: "Fuel saving, grade control, hydraulic precision",
        },
        "pad-foot-roller": {
          name: "Pad Foot Roller",
          description:
            "Compaction solution for cohesive soils delivering high pressure and maximum traction.",
          highlight: "High compaction, pad shell, <em>heavy-duty</em> axle",
        },
        aspal: {
          name: "Asphalt",
          description:
            "High-grade asphalt materials for road and infrastructure construction projects.",
          highlight: "High-grade bitumen, penetration grade, premium quality",
        },
        "ready-mix": {
          name: "Ready Mix Concrete",
          description:
            "Ready-mix concrete supplied in multiple strength grades for construction needs.",
          highlight: "K-125 to K-550, Quality Assured",
        },
        "motor-grader": {
          name: "Motor Grader",
          description:
            "Precision motor graders for road profile shaping and subgrade finishing.",
          highlight: "Slope control, AWD, precision blade control",
        },
        "wheel-loader": {
          name: "Wheel Loader",
          description:
            "Multi‑purpose wheel loaders for aggregate <em>loading</em>, <em>stockpiling</em>, and <em>material</em> <em>handling</em>.",
          highlight: "Auto weigh, traction control, high breakout force",
        },
        "peralatan-aspal": {
          name: "Asphalt Equipment",
          description: "Asphalt pavement construction equipment.",
          highlight:
            "Uniform spray distribution, Reliable heating control, Consistent surface finish",
        },
        "batching-plant": {
          name: "Batching Plant",
          description:
            "Modular batching plants for consistent ready‑mix concrete production.",
          highlight: "90-120 m³/h, twin shaft mixer, moisture sensor",
        },
        genset: {
          name: "Generator Sets",
          description:
            "Silent and open type generator sets for reliable project power supply.",
          highlight: "Prime & Standby, ATS Ready, Remote Monitoring",
        },
        "combination-roller": {
          name: "Combination Roller",
          description:
            "Combination roller for asphalt surface finishing achieving optimal density.",
          highlight: "Dual drum, pneumatic tires, auto water spray",
        },
        "tandem-roller": {
          name: "Tandem Roller",
          description:
            "Double drum rollers for even, smooth asphalt layer compaction.",
          highlight: "Oscillation, edge press, vibration control",
        },
        "pneumatic-tire-roller": {
          name: "Pneumatic Tire Roller",
          description:
            "Pneumatic tire rollers for seal finishing and interlayer bonding.",
          highlight: "Variable ballast, tire heating, even coverage",
        },
        bulldozer: {
          name: "Bulldozer",
          description:
            "Medium to heavy class bulldozers for land clearing and ripping tasks.",
          highlight: "Tier 3 Engine, PAT Blade, Ripper Ready",
        },
        "crawler-crane": {
          name: "Crawler Crane",
          description:
            "Crawler cranes for heavy structure erection and foundation works.",
          highlight:
            "Luffing jib, load moment limiter, heavy duty undercarriage",
        },
        "road-sweeper": {
          name: "Road Sweeper",
          description:
            "Road sweepers for project roadway and industrial area cleaning.",
          highlight: "High capacity hopper, water spray, vacuum assist",
        },
        "dump-truck": {
          name: "Dump Truck",
          description:
            "<em>Heavy-duty</em> dump trucks for mining and construction <em>material</em> haulage.",
          highlight: "Retarder brake, fleet telematics, heavy duty axle",
        },
        "mixer-truck": {
          name: "Mixer Truck",
          description:
            "Various capacity transit mixers with slump control and washdown system.",
          highlight: "Auto dosing, cabin comfort, easy clean drum",
        },
        "self-loader-truck": {
          name: "Self Loader Truck",
          description:
            "Self loader for transporting light to mid-size equipment with hydraulic ramps.",
          highlight: "Hydraulic goose neck, winch assist, escort kit",
        },
        "tractor-head-trailer": {
          name: "Tractor Head / Trailer",
          description:
            "Tractor head with modular trailer for heavy haul logistics.",
          highlight: "370 HP, ABS, air suspension",
        },
      },
      products: {
        "vibratory-roller-vr70": {
          name: "VR70 Vibratory Roller",
          description:
            "7-ton roller with dual vibratory drums for basecourse and subbase compaction.",
          specs: [
            "Operating weight 7 ton",
            "Centrifugal force 120 kN",
            "Drum width 1.5 m",
          ],
          tags: ["Compaction", "Dual Amplitude"],
        },
        "excavator-hx210": {
          description:
            "21-ton excavator with efficient powertrain and precision control system for heavy earthwork.",
        },
        "excavator-compact": {
          description:
            "Compact excavator for confined space operations featuring ergonomic cab and easy service access.",
        },
        "excavator-350lc": {
          description:
            "35-ton class excavator with reinforced boom for quarry and medium mining production.",
        },
        "excavator-longreach": {
          description:
            "Long reach configuration for dredging and river maintenance with 23 m working reach.",
        },
        "vibratory-roller-vr90": {
          description:
            "9-ton vibratory roller with enclosed AC cab and integrated telematics.",
        },
        "vibratory-roller-vr120": {
          description:
            "12-ton high amplitude vibratory roller for toll road and airport compaction projects.",
        },
        "pad-foot-roller-pf35": {
          description:
            "Pad foot roller with shell kit ideal for cohesive soil and embankment compaction.",
        },
        "motor-grader-mg190": {
          description:
            "19-ton motor grader with 14 ft moldboard and precise pitch & angle control.",
        },
        "motor-grader-mg240": {
          description:
            "24-ton motor grader with rear ripper and air-conditioned ROPS cab.",
        },
        "wheel-loader-l90": {
          description:
            "3 m³ wheel loader with automatic transmission and load-sensing hydraulics.",
        },
        "wheel-loader-l120": {
          description:
            "4.5 m³ wheel loader featuring onboard weighing system and boom ride control.",
        },
        "asphalt-paver-ap655": {
          description:
            "Tracked asphalt paver with vibratory screed for up to 6.5 m paving width.",
        },
        "asphalt-finisher-ap45": {
          description:
            "Wheel asphalt finisher for high mobility urban overlay works.",
        },
        "asphalt-distributor-ad6000": {
          description:
            "6,000 L asphalt distributor with automatic burner and precision spray bar.",
        },
        "batching-plant-120": {
          description:
            "120 m³/h modular batching plant equipped with twin-shaft mixer.",
        },
        "genset-400kva": {
          description:
            "400 kVA silent enclosure genset with digital control panel and built-in ATS.",
        },
        "combination-roller-combination-roller-medium-sakai-tw-500w-1": {
          specs: [
            "Dual drum",
            "Pneumatic tires",
            "Auto water spray",
            "3,5 ton class",
            "Medium level work",
          ],
        },
        "combination-roller-combination-roller-mini-sakai-tw350": {
          specs: [
            "Dual drum",
            "Pneumatic tires",
            "Auto water spray",
            "2,5 ton class",
            "Small level work",
          ],
        },
        "combination-roller-cr70": {
          description:
            "Combination drum & pneumatic tire roller for asphalt density finishing.",
        },
        "tandem-roller-tr9": {
          description:
            "9-ton double drum roller with oscillation system for urban road compaction.",
        },
        "tandem-roller-tr11": {
          description:
            "11-ton tandem roller featuring density monitor and enclosed cab.",
        },
        "pneumatic-roller-pr24": {
          description:
            "24-ton pneumatic tire roller with flexible ballast for seal coat applications.",
        },
        "pneumatic-roller-pr28": {
          description:
            "28-ton pneumatic roller for toll road & airport layers with tire heating system.",
        },
        "bulldozer-d85": {
          description:
            "28-ton dozer with PAT blade and optional ripper for land clearing works.",
        },
        "bulldozer-d155": {
          description:
            "41-ton dozer with straight blade and multi‑shank ripper for heavy ripping tasks.",
        },
        "crawler-crane-cc80": {
          description:
            "80-ton crawler crane with lattice boom and slip‑free winch system.",
        },
        "crawler-crane-cc160": {
          description:
            "160-ton crawler crane with modular luffing jib configuration.",
        },
        "road-sweeper-rs8": {
          description:
            "8 m³ road sweeper with twin fan vacuum system for project site cleaning.",
        },
        "road-sweeper-rs10": {
          description:
            "10 m³ regenerative sweeper with HEPA filtration for industrial areas.",
        },
        "dump-truck-18t": {
          description:
            "18 m³ dump truck with reinforced suspension and ergonomic AC cab.",
        },
        "dump-truck-24t": {
          description:
            "24-ton dump truck featuring Hardox body and hydraulic tail gate.",
        },
        "dump-truck-offroad-35t": {
          description:
            "35-ton articulated off-road dump truck for medium mining & quarry hauling.",
        },
        "mixer-truck-7m3": {
          description:
            "7 m³ transit mixer with abrasion‑resistant drum and automatic slump system.",
        },
        "mixer-truck-9m3": {
          description: "9 m³ mixer with smart slump control and automatic PTO.",
        },
        "self-loader-sl12": {
          description:
            "12-ton self loader with hydraulic ramp and 10-ton winch for equipment transport.",
        },
        "tractor-head-430": {
          description:
            "430 HP 6x4 tractor head with 90 mm fifth wheel and air suspension for heavy logistics.",
        },
        "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-1000b-fa": {
          name: "Asphalt Mixing Plant - BUKAKA BAMP-1000B-FA",
          description:
            "Equipment for mixing raw asphalt into Hotmix Asphalt with 60 Ton/Hour capacity.",
          specs: ["60 Ton/Hour Capacity"],
          tags: [],
        },
        "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-800p-sa": {
          name: "Asphalt Mixing Plant - BUKAKA BAMP-800P-SA",
          description:
            "Equipment for mixing raw asphalt into Hotmix Asphalt with 60 Ton/Hour capacity.",
          specs: ["60 Ton/Hour Capacity"],
          tags: [],
        },
        "peralatan-aspal-asphalt-sprayer-distributor-mitsubishi-fe-349-h": {
          name: "Asphalt Sprayer Distributor - MITSUBISHI FE 349 H",
          description: "<em>Hotmix asphalt sprayer</em> equipment",
        },
        "peralatan-aspal-asphalt-sprayer-distributor-xi-an-dagang-dgls251gls": {
          name: "Asphalt Sprayer Distributor - XI'AN DAGANG DGLS251GLS",
          description: "<em>Hotmix asphalt sprayer</em> equipment",
          specs: [
            "Uniform spray distribution",
            "Reliable heating control",
            "Consistent surface finish",
            "2.04 Meters working width",
            "0.5 mm working depths",
          ],
          tags: [],
        },
        "peralatan-aspal-soil-stabilizer-wirtgen-wr-2500-s": {
          name: "Soil Stabilizer - WIRTGEN WR 2500 S",
          description: "Equipment for the <em>Recycling</em> method",
        },
        "tandem-roller-tandem-roller-dynapac-cc2200": {
          name: "Tandem Roller - DYNAPAC CC2200",
          description:
            "Double drum tandem roller for efficient asphalt compaction",
          specs: [
            "Oscillation",
            "Edge Press",
            "Vibration Control",
            "9 ton class",
          ],
          tags: [],
        },
        "tandem-roller-tandem-roller-mini-dynapac-cc1250": {
          name: "Tandem Roller Mini - DYNAPAC CC1250",
          description: "Compact double drum roller for precise compaction work",
          specs: [
            "Oscillation",
            "Edge Press",
            "Vibration Control",
            "3 ton class",
            "small - medium work",
          ],
          tags: [],
        },
        "pneumatic-tire-roller-pneumatic-tire-roller-kotai-kp166": {
          name: "Pneumatic Tire Roller - KOTAI KP166",
          description:
            "Pneumatic tire roller for seal finishing and interlayer bonding",
          specs: [
            "Variable ballast",
            "tire heating",
            "even coverage",
            "16 ton class",
          ],
          tags: [],
        },
        "pneumatic-tire-roller-pneumatic-tire-roller-sakai-ts-200": {
          name: "Pneumatic Tire Roller - SAKAI TS 200",
          description:
            "Pneumatic tire roller for seal finishing and interlayer bonding",
          specs: [
            "Variable ballast",
            "tire heating",
            "even coverage",
            "10-15 ton class",
          ],
          tags: [],
        },
        "bulldozer-bulldozer-caterpillar-d7g": {
          name: "Bulldozer - CATERPILLAR D7G",
          description:
            "Medium to heavy class bulldozer for land clearing and ripping tasks",
          specs: [
            "20.5 ton class",
            "Tier 3 Engine",
            "PAT Blade",
            "Ripper Ready",
          ],
          tags: [],
        },
        "bulldozer-bulldozer-maximus-md85xl": {
          name: "Bulldozer - MAXIMUS MD85XL",
          description:
            "Medium to heavy class bulldozer for land clearing and ripping tasks",
          specs: [
            "20-21 ton class",
            "Tier 3 Engine",
            "PAT Blade",
            "Ripper Ready",
          ],
          tags: [],
        },
      },
      sortOptions: {},
    },
  },
  hero: {
    welcome: "Welcome",
    defaultTitle: "Building Excellence with Integrity",
    defaultDescription:
      "Your trusted partner in construction and infrastructure development",
  },

  aboutSection: {
    label: "Brief Company History",
    title: "PT. Karya Halim Sampoerna",
    description: {
      paragraph1:
        "PT. Karya Halim Sampoerna was established on January 15, 2003, as a continuation of CV. Halim Sampoerna which was founded in 1990. We are a company engaged in construction services specializing in road and highway infrastructure.",
      paragraph2:
        "With more than 35 years of experience in construction, we have completed hundreds of projects in Central Kalimantan and South Kalimantan. Our commitment to quality and innovation has made us a trusted partner for various government and private institutions.",
      paragraph3:
        "We continue to grow and develop by adopting the latest technology and best practices in the construction industry to provide optimal solutions for every project we handle.",
    },
    achievements: {
      established: "Established",
      establishedDesc: "Started as CV. Halim Sampoerna",
      yearsExperience: "Years Experience",
      yearsExperienceDesc: "As PT. since 2003",
      successfulProjects: "Successful Projects",
      successfulProjectsDesc: "Projects successfully completed",
      satisfiedClients: "Satisfied Clients",
      satisfiedClientsDesc: "Clients satisfied with our services",
    },
    values: {
      title: "Company Values",
      integrity: {
        title: "Integrity",
        description:
          "We are committed to always work with high integrity and full transparency.",
      },
      quality: {
        title: "Quality",
        description:
          "Quality is our top priority in every project we undertake.",
      },
      innovation: {
        title: "Innovation",
        description:
          "Using the latest technology and modern construction methods for the best results.",
      },
      reliability: {
        title: "Reliability",
        description:
          "Client trust is a valuable asset that we always maintain well.",
      },
    },
    learnMore: "Learn More About Us",
  },
  visionMission: {
    label: "Vision & Mission",
    title: "PT. Karya Halim Sampoerna",
    subtitle: "Work with Integrity, Deliver Excellence",
    vision: {
      title: "Our Vision",
      content:
        "To become a leading construction company in Indonesia that is trusted, innovative, and sustainable in providing quality infrastructure solutions.",
    },
    mission: {
      title: "Our Mission",
      points: [
        "Implement good corporate governance.",
        "Good human resource management and create the best conditions for employees to work and excel.",
        "Implement management systems to ensure workplace safety, health, quality, and work environment.",
        "Use and apply renewable technology for better construction.",
        "Develop construction business by creating the best company image.",
        "Participate in the development of our beloved country, the Republic of Indonesia.",
      ],
    },
  },
  servicesSection: {
    label: "Our Services",
    title: "Providing Solutions of Every Kind",
    description:
      "We provide the most complete construction solutions with the best quality and modern technology to meet your project needs.",
    viewAll: "View All Services",
    learnMore: "Learn More",
    ctaTitle: "Need a Custom Solution?",
    ctaDescription:
      "Every project has unique requirements. Our expert team is ready to help design the right construction solution for your project.",
    ctaRequestQuote: "Request Quote",
  },
  projectsSection: {
    label: "Our Portfolio",
    title: "Exceptional Projects We've Delivered",
    description:
      "Explore our portfolio of successful construction projects across Central Kalimantan and South Kalimantan, showcasing our expertise and commitment to excellence.",
    viewAll: "View All Projects",
    client: "Client",
    location: "Location",
    year: "Year",
    stats: {
      yearsExperience: "35+ Years",
      roadsBuilt: "Roads Built",
      sitesDeveloped: "Sites Developed",
      sitesDevelopedValue: "1,000+ Hectares",
      clientSatisfaction: "Client Satisfaction",
    },
    categories: {
      "Road Construction": "Road Construction",
      "Aspal Hotmix": "Hotmix Asphalt",
      Earthwork: "Earthwork",
    },
    statuses: {
      Completed: "Completed",
      Ongoing: "Ongoing",
    },
    ctaTitle: "Ready to Start Your Next Project?",
    ctaDescription:
      "Discuss your construction project with our expert team. Get a free consultation and the best offer for your needs.",
    startProject: "Start Your Project",
  },
  projectsData: {
    "pengujian-falling-weight-deflectometer-fwd": {
      title: "Falling Weight Deflectometer (FWD) Structural Testing",
      client: "PT. Adaro Indonesia, Tbk.",
      location: "Hauling Road — Kalimantan",
      year: "2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Structural pavement testing of hauling roads using an FWD to assess remaining service life and develop treatment recommendations. Delivered on a high-production corridor (~54 million tons/year) owned by PT. Adaro Indonesia, Tbk.",
    },
    "cement-treated-recycling-base-ctrb": {
      title: "Cement Treated Recycling Base (CTRB)",
      client: "Multiple Clients",
      location: "Hauling Road Network — Kalimantan",
      year: "2017–2020",
      category: "Road Construction",
      status: "Completed",
      description:
        "Rehabilitation of pavement structures by reusing in-place materials stabilized with cement/chemicals for greater strength and service life. Covered ±25 km of the 68 km hauling network in phased work between 2017–2020.",
    },
    "upgrading-jalan-hauling-pt-borneo-indobara": {
      title: "Upgrading PT. Borneo Indobara Hauling Road",
      client: "PT. Borneo Indobara",
      location: "South Kalimantan",
      year: "2021–2023",
      category: "Hotmix Asphalt",
      status: "Completed",
      description:
        "Surface improvement of the hauling road using chipseal with PG 70 modified asphalt (PT. ABS) along ±20 km. The upgrade supported production growth from 28 million tons (2019) to 48.6 million tons (2024) with a 16-month delivery.",
    },
    "hauling-road-2021-2024": {
      title: "Hauling Road Project",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Ongoing",
      description:
        "Construction and maintenance of a hauling road to support mining operations. This project includes earthwork, pavement, and routine maintenance to ensure the road remains safe and reliable for heavy equipment traffic in all weather conditions.",
    },
    "earthwork-looping-cp2a": {
      title: "Earthwork Looping CP2A",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Earthwork",
      status: "Completed",
      description:
        "Earthwork project for the construction of a looping road in the CP2A area. This project focuses on excavation, embankment formation, and compaction to prepare for the pavement construction of a mine hauling road.",
    },
    "pemasangan-patok-jalan-hauling": {
      title: "Hauling Road Stake Installation",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Installation of stakes as markers and geometric references along the mine hauling road to improve safety and orderliness.",
    },
    "lpa-dumping-km-17": {
      title: "Base Course (LPA) at Dumping Location KM 17",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Base course (LPA) work at the KM 17 dumping area to increase the bearing capacity and stability of the road surface.",
    },
    "jasa-konstruksi-hauling-road": {
      title: "Construction Hauling Road",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Ongoing",
      description:
        "Provision of comprehensive construction services for hauling roads, covering various stages from preparation to completion.",
    },
    "earthwork-looping-cp2b": {
      title: "Earthwork Looping CP2B",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Earthwork",
      status: "Completed",
      description:
        "Earthwork project for the construction of a looping road in the CP2B area, a continuation of similar work to support operational expansion.",
    },
    "preventif-jalan-kosongan": {
      title: "Preventive Maintenance for Empty-Load Road",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Preventive maintenance work on the empty-load road to maintain road conditions and prevent structural damage before it occurs.",
    },
    "earthwork-checkout-bunati": {
      title: "Earthwork for Check Out Point at Bunati Port",
      client: "Mining Company",
      location: "Bunati Port",
      year: "2021-2024",
      category: "Earthwork",
      status: "Completed",
      description:
        "Earthwork for the check-out point area at Bunati Port, preparing the foundation for port operational support facilities.",
    },
    "maintenance-cs-hauling-road": {
      title: "Chipseal Hauling Road Maintenance",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Ongoing",
      description:
        "Routine maintenance on the Chipseal surface layer of the hauling road to maintain surface quality and driving comfort.",
    },
    "rambu-reflektroized": {
      title: "Reflective Signage",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Installation of traffic signs with reflective materials to improve visibility and safety at night.",
    },
    "solar-stud-light-glass-stud-road": {
      title: "Solar and Glass Road Stud Installation",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Installation of solar road studs and glass road studs to improve visibility and safety of road markings at night or in adverse weather conditions.",
    },
    "konstruksi-rest-area-km-1-5-dan-16-5": {
      title: "Rest Area Construction at KM 1.5 (Empty) and 16.5 (Loaded)",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Earthwork",
      status: "Completed",
      description:
        "Construction of rest area facilities at KM 1.5 (empty-load lane) and KM 16.5 (loaded lane) to provide a safe and comfortable resting place for drivers.",
    },
    "maintenance-chipseal-hauling": {
      title: "Chipseal Hauling Maintenance",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Ongoing",
      description:
        "Routine maintenance work on the surface of hauling roads that use a chipseal layer to extend the road's service life.",
    },
    "pelebaran-km-14": {
      title: "KM 14 Widening",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Road widening project at KM 14 to increase road capacity and improve the flow of heavy equipment traffic.",
    },
    "persiapan-north-stockpile": {
      title: "North Stockpile Preparation Works",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Earthwork",
      status: "Completed",
      description:
        "Earthwork and land preparation for the north stockpile area, including clearing, leveling, and compaction.",
    },
    "pelebaran-km-12": {
      title: "KM 12 Widening Works",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Road widening project at KM 12 to accommodate increased traffic volume and improve safety.",
    },
    "peningkatan-antrian-truck-hauling": {
      title: "Hauling Road - Truck Queue Improvement",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Improvement of the capacity and management of the truck queuing area on the hauling road to reduce waiting times and increase efficiency.",
    },
    "upgrade-hauling-road": {
      title: "Hauling Road Upgrade",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Ongoing",
      description:
        "A comprehensive upgrade project on the hauling road, including structural repairs, surface improvements, and optimization of road geometry.",
    },
    "konstruksi-jalan-looping-cp9": {
      title: "CP 9 Looping Road Construction",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Construction of a new looping road at Check Point 9 to smooth traffic flow and minimize intersections.",
    },
    "chipseal-rest-area-km-1-5-dan-16-5": {
      title: "Chipseal Works at Rest Area KM 1.5 (Empty) & KM 16.5",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Hotmix Asphalt",
      status: "Completed",
      description:
        "Application of a chipseal layer at the rest area to improve surface quality, durability, and aesthetics.",
    },
    "additional-work-pelebaran-km-12": {
      title: "Additional Work for KM 12 Widening",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Additional work on the KM 12 widening project, including drainage adjustments and other minor works.",
    },
    "pavement-akses-jalan-aviary": {
      title: "Aviary Access Road Pavement",
      client: "Private",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Hotmix Asphalt",
      status: "Completed",
      description:
        "Paving of the access road to the Aviary to provide a smooth and durable surface.",
    },
    "peningkatan-10-ha-bunati": {
      title: "10 HA Bunati Improvement",
      client: "Port Company",
      location: "Bunati",
      year: "2021-2024",
      category: "Earthwork",
      status: "Completed",
      description:
        "A 10-hectare land improvement and preparation project in the Bunati area for the development of new facilities.",
    },
    "maintenance-road-bunati": {
      title: "Bunati Road Maintenance",
      client: "Port Company",
      location: "Bunati",
      year: "2021-2024",
      category: "Road Construction",
      status: "Ongoing",
      description:
        "Routine road maintenance work in the Bunati area to ensure road conditions remain optimal and safe.",
    },
    "maintenance-jalan-cp5": {
      title: "CP 5 Road Maintenance",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Ongoing",
      description:
        "Routine road maintenance in the Check Point 5 area to ensure smooth operations.",
    },
    "north-drainage-work": {
      title: "North Drainage Work",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Earthwork",
      status: "Completed",
      description:
        "Drainage system project in the northern area to control water flow and prevent erosion.",
    },
    "earthwork-jalan-looping-cp7": {
      title: "CP7 Looping Road Earthwork",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Earthwork",
      status: "Completed",
      description:
        "Earthwork for the construction of a looping road at Check Point 7.",
    },
    "access-charging-station-temporary": {
      title: "Temporary Charging Station Access",
      client: "Private",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Construction of a temporary access road to the charging station for electric vehicles.",
    },
    "akses-jalan-ke-charging-station": {
      title: "Access Road to Charging Station",
      client: "Private",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Construction of a permanent access road to the charging station, improving connectivity and support for electric vehicles.",
    },
    "jalan-hauling-pit-kgb-kgu": {
      title: "KGB and KGU Pit Hauling Road",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Completed",
      description:
        "Construction of a dedicated hauling road to serve the KGB and KGU pit areas, optimizing the material transport cycle.",
    },
    "chipseal-rest-area-km-1-dan-4": {
      title: "Chipseal at Rest Area KM 1 and KM 4 (Loaded Lane)",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Hotmix Asphalt",
      status: "Completed",
      description:
        "Application of chipseal at the rest areas KM 1 and KM 4 (loaded lane) to improve surface quality and durability.",
    },
    "pavement-preservation-jalur-muatan": {
      title: "Pavement Preservation for Loaded Lane",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Road Construction",
      status: "Ongoing",
      description:
        "Pavement preservation program on the loaded lane to extend the road's service life and maintain safety.",
    },
    "double-chipseal-rest-area": {
      title: "Double Chipseal Layer for Rest Area",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Hotmix Asphalt",
      status: "Completed",
      description:
        "Application of a double chipseal layer at the rest area to provide extra protection and a more durable surface.",
    },
    "double-chipseal-kosongan-km-1": {
      title: "Double Chipseal Layer at KM 1 (Empty Lane)",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Hotmix Asphalt",
      status: "Completed",
      description:
        "Application of a double chipseal layer at KM 1 of the empty-load lane to increase pavement strength and durability.",
    },
    "peningkatan-area-kosongan": {
      title: "Empty Area Improvement",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Earthwork",
      status: "Completed",
      description:
        "Improvement and arrangement project for the empty-lane area to increase traffic efficiency and safety.",
    },
    "peningkatan-akses-looping-north-stockpile": {
      title:
        "Improvement of Hauling Road Access to North Stockpile Loop (Empty Lane)",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2025",
      category: "Road Construction",
      status: "Ongoing",
      description:
        "Improvement of the hauling road access to the North Stockpile loop on the empty-load lane for smooth operations.",
    },
    "chipseal-rest-area-km-1-dan-4-2025": {
      title: "Chipseal Works at Rest Area KM 1 and KM 4",
      client: "Mining Company",
      location: "Kalimantan",
      year: "2025",
      category: "Hotmix Asphalt",
      status: "Ongoing",
      description:
        "Chipseal coating work at the rest areas KM 1 and KM 4 in 2025 for maintenance and quality improvement.",
    },
    "akses-charging-station-bib": {
      title: "BIB Charging Station Access Work",
      client: "PT. Borneo Indobara",
      location: "Kalimantan",
      year: "2025",
      category: "Road Construction",
      status: "Ongoing",
      description:
        "Construction of an access road to the charging station in the BIB area to support electric vehicle infrastructure.",
    },
    "stabilisasi-parkir-charging-station-bib": {
      title: "BIB Charging Station Parking Area Stabilization Work",
      client: "PT. Borneo Indobara",
      location: "Kalimantan",
      year: "2025",
      category: "Earthwork",
      status: "Ongoing",
      description:
        "Soil stabilization work in the BIB charging station parking area to ensure a strong and durable foundation.",
    },
    // removed translations for projects with client 'Pemerintah Daerah'
  },
  // Per-service translations (EN)
  services: {
    eatwork: {
      title: "Earthwork",
      description:
        "Comprehensive earthworks including site clearing, cut & fill, grading and compaction for robust construction foundations.",
      scope: [
        "Site clearing & stripping",
        "Cut, fill & grading",
        "Compaction & drainage",
      ],
      specs: [
        { label: "Method", value: "Standard earthmoving methods" },
        { label: "Compaction", value: "Layered compaction to spec" },
        { label: "Quality", value: "Field density & QC testing" },
      ],
      features: [
        "Site clearing & stripping",
        "Cut, fill & grading",
        "Compaction & drainage",
      ],
    },
    "upgrade-unbound": {
      title: "Upgrade Unbound",
      description:
        "Improvement of unbound aggregate base layers through material and geometry upgrades and compaction to raise bearing capacity.",
      scope: [
        "Reprofiling & reshaping",
        "Material improvement",
        "Compaction to target density",
      ],
      specs: [
        { label: "Focus", value: "Material & geometry improvement" },
        { label: "Compaction", value: "Specified density targets" },
      ],
      features: [
        "Reprofiling & reshaping",
        "Material improvement",
        "Compaction quality control",
      ],
    },
    ctrb: {
      title: "Cement Treated Recycling Base (CTRB)",
      description:
        "In-place stabilization of existing material with cement/chemicals to form a stronger recycled base layer.",
      scope: [
        "In-place recycling",
        "Cement/chemical stabilization",
        "Layered compaction & curing",
      ],
      specs: [
        { label: "Method", value: "In-place mixing with binder" },
        { label: "Curing", value: "3–7 days typical" },
      ],
      features: [
        "In-place recycling",
        "Semen/chemical stabilization",
        "Faster reopening",
      ],
    },
    ctrsb: {
      title: "Cement Treated Recycling Sub Base (CTRSB)",
      description:
        "Strengthening of subbase layers through cement stabilization to increase modulus and service life.",
      scope: [
        "Subbase improvement & stabilization",
        "Profiling, compaction & testing",
      ],
      specs: [
        { label: "Layer", value: "Subbase (foundation)" },
        { label: "Density", value: ">= 100% target (typical)" },
      ],
      features: [
        "Subbase improvement",
        "Strength & stiffness gain",
        "Optimized mix design",
      ],
    },
    chipseal: {
      title: "Chipseal",
      description:
        "Surface treatment combining binder and aggregate for protection, skid resistance and weather durability.",
      scope: [
        "Surface prep & minor repairs",
        "Binder spraying & aggregate spreading",
        "Rolling & clean-up",
      ],
      specs: [
        { label: "Type", value: "Single/Double chipseal" },
        { label: "Binder", value: "Modified bitumen or tack coat" },
      ],
      features: [
        "Single/Double chipseal",
        "Binder modification",
        "Quick turnaround",
      ],
    },
    "aspal-hotmix-modifikasi-coldmix": {
      title: "Aspal Hotmix, Modifikasi, Cold Mix",
      description:
        "Full asphalt paving services: HMA for high performance, modified binders for durability, and cold mix for quick repairs.",
      scope: [
        "Tack coat & equipment mobilization",
        "HMA placement & compaction",
        "Jointing & finishing",
      ],
      specs: [
        { label: "Mixture", value: "HMA/SMA per design" },
        { label: "PG Grade", value: "Traffic/climate dependent" },
      ],
      features: [
        "HMA & SMA",
        "Modified asphalt (PG/Polymer)",
        "Cold mix patching",
      ],
    },
    "bridge-construction-maintenance": {
      title: "Bridge Construction & Maintenance",
      description:
        "End-to-end bridge delivery and structural maintenance to keep crossings safe, reliable, and compliant over their full lifecycle.",
      scope: [
        "Superstructure & substructure construction",
        "Bearing, joint, and deck rehabilitation",
        "Protective coating and corrosion prevention",
      ],
      specs: [
        { label: "Focus", value: "Design-build, strengthening, and upkeep" },
        {
          label: "Quality",
          value: "Load testing & detailed inspection reports",
        },
      ],
      features: [
        "Superstructure & substructure works",
        "Structural inspection & rehabilitation",
        "Traffic management & safety measures",
      ],
    },
    "soil-cement-base": {
      title: "Soil-cement Base",
      description:
        "Soil stabilization with cementitious binders to produce a stronger, stiffer base layer for heavy-duty pavements.",
      scope: [
        "Subgrade evaluation & mix design",
        "Pulverizing, blending, and in-situ mixing",
        "Compaction, curing, and surface finishing",
      ],
      specs: [
        { label: "Binder", value: "Ordinary Portland cement 3–8%" },
        { label: "QC", value: "Field density, UCS, and moisture control" },
      ],
      features: [
        "In-situ mixing & stabilization",
        "Moisture & density control",
        "Curing & quality assurance",
      ],
    },
    "rigid-pavement": {
      title: "Rigid Pavement",
      description:
        "Steel-reinforced or jointed plain concrete pavement systems for long-life, heavy traffic corridors.",
      scope: [
        "Subbase preparation & dowel installation",
        "Slipform or fixed-form paving operations",
        "Joint sealing, curing, and surface texturing",
      ],
      specs: [
        { label: "Thickness", value: "200–320 mm typical" },
        { label: "Reinforcement", value: "Dowel & tie bars per design" },
      ],
      features: [
        "Design & mix optimization",
        "Slipform paving & panel placement",
        "Joint sealing & curing",
      ],
    },
    "overlay-road-method": {
      title: "Overlay Road Method",
      description:
        "Restoring pavement performance with asphalt or concrete overlays tailored to structural conditions and traffic demands.",
      scope: [
        "Condition survey & structural assessment",
        "Surface milling and bonding preparation",
        "Overlay placement, compaction & finishing",
      ],
      specs: [
        { label: "Materials", value: "Hotmix asphalt or PCC overlay" },
        { label: "Traffic", value: "Phased traffic & safety management" },
      ],
      features: [
        "Condition survey & design",
        "Surface preparation & milling",
        "Overlay placement & finishing",
      ],
    },
    "irrigation-system": {
      title: "Irrigation System",
      description:
        "Construction and rehabilitation of irrigation networks that deliver reliable water distribution to agricultural areas.",
      scope: [
        "Canal earthworks & lining installation",
        "Intake, gate, and flow control structures",
        "Commissioning, calibration, and operator training",
      ],
      specs: [
        { label: "Flow", value: "Design discharge tailored to scheme" },
        { label: "Controls", value: "Manual or automated sluice gates" },
      ],
      features: [
        "Canal & intake construction",
        "Flow control structures",
        "Operation & maintenance planning",
      ],
    },
    "pedestrian-construction-needs": {
      title: "Pedestrian Construction Needs",
      description:
        "Accessible pedestrian facilities including sidewalks, ramps, crossings, and safety elements for urban environments.",
      scope: [
        "Sidewalk, ramp, and tactile paving works",
        "Handrail, guard, and safety installations",
        "Street furniture, lighting, and landscape",
      ],
      specs: [
        { label: "Compliance", value: "SNI accessibility & universal design" },
        { label: "Finish", value: "Slip-resistant, durable surfaces" },
      ],
      features: [
        "Sidewalk & ramp execution",
        "Accessibility & safety design",
        "Street furniture integration",
      ],
    },
    "u-ditch-construction": {
      title: "U-Ditch Construction",
      description:
        "Precast U-ditch drainage installation for neat, fast, and low-maintenance open-channel solutions.",
      scope: [
        "Survey, alignment, and excavation",
        "Bedding preparation & precast placement",
        "Joint sealing, backfilling, and finishing",
      ],
      specs: [
        { label: "Size Range", value: "300–1,200 mm internal width" },
        { label: "Material", value: "Precast reinforced concrete" },
      ],
      features: [
        "Precast fabrication coordination",
        "Excavation & bedding preparation",
        "Joint sealing & finishing",
      ],
    },
    "box-culvert-construction": {
      title: "Box Culvert Construction",
      description:
        "Box culvert solutions for utilities, drainage, and road crossings using precast or cast-in-place methods.",
      scope: [
        "Hydraulic sizing and reinforcement detailing",
        "Base slab and foundation works",
        "Segment installation, joint sealing & backfill",
      ],
      specs: [
        { label: "Span", value: "1.5–4.0 m typical" },
        { label: "Construction", value: "Precast or cast-in-place" },
      ],
      features: [
        "Hydraulic design & sizing",
        "Foundation & bedding works",
        "Segment installation & grouting",
      ],
    },
    "drain-system-constructions": {
      title: "Drain System Constructions",
      description:
        "Design and build surface and subsurface drainage networks that protect sites from flooding and standing water.",
      scope: [
        "Stormwater modelling & hydraulic design",
        "Construction of closed and open drains",
        "Manholes, inlets, and maintenance access",
      ],
      specs: [
        { label: "System", value: "Surface & subsurface drainage" },
        { label: "Maintenance", value: "Built-in inspection covers" },
      ],
      features: [
        "Survey & hydraulic assessment",
        "Closed & open drain execution",
        "Maintenance access solutions",
      ],
    },
    "road-median-construction": {
      title: "Road Median Construction",
      description:
        "Median construction with barriers, drainage, and landscaping to safely separate opposing traffic flows.",
      scope: [
        "Geometric layout, staking & excavation",
        "Barrier, curb, and channel installation",
        "Lighting, landscaping, and signage works",
      ],
      specs: [
        { label: "Safety", value: "Crash barrier & delineator integration" },
        { label: "Drainage", value: "Median scuppers and outlets" },
      ],
      features: [
        "Geometric design & surveying",
        "Barrier & curb installation",
        "Lighting & landscaping integration",
      ],
    },
  },
  clientsSection: {
    label: "Our Trusted Partners",
    title: "Working with Industry Leaders",
    description:
      "We are proud to collaborate with government institutions and leading companies across Central Kalimantan and South Kalimantan.",
  },
  supportedBySection: {
    label: "Supported By",
    title: "Backed by Leading Equipment Providers",
    description:
      "We leverage trusted equipment partners to deliver consistent quality and reliable performance across every project.",
  },
  careerSupportedBySection: {
    label: "Supported By Industry Partners",
    title: "Join a Part of Our Success",
    description:
      "This program has been initiated by PT. Karya Halim Sampoerna in collaboration with educational institutions to provide opportunities for members of these institutions to develop skills and start professional careers in their fields.",
  },
  newsSection: {
    categories: {
      "Company News": "Company News",
    },
    label: "Latest News",
    title: "Stay Updated with Our Progress",
    description:
      "Read about our latest projects, achievements, and industry insights.",
    readMore: "Read More",
    viewAll: "View All News",
    pageTitle: "News & Insights",
    pageDescription:
      "Project updates, best practices, and construction industry information from PT. Karya Halim Sampoerna.",
    detail: {
      backToNews: "Back to News",
      shareLabel: "Share:",
      shareButton: "Share",
      copyLinkButton: "Copy link",
      copyLinkTitle: "Link copied",
      copyLinkDescription: "Article URL copied to clipboard",
      moreArticles: "More Articles",
      summaryTitle: "Summary",
      categoryLabel: "Category",
      contentMissing: {
        title: "No content",
        description:
          "Article content is not available yet. Please check back later.",
      },
      linkedIn: "LinkedIn",
      whatsapp: "WhatsApp",
      twitter: "X/Twitter",
    },
    featured: "Featured",
  },
  ctaSection: {
    title: "Ready to Start Your Project?",
    description:
      "Get a free consultation and quote for your construction project. Our expert team is ready to help you bring your vision to life.",
    benefits: [
      "Free consultation & site survey",
      "Competitive pricing with transparent quotation",
      "Experienced team with proven track record",
      "Quality materials & modern equipment",
      "On-time project delivery guarantee",
      "Full project warranty & support",
    ],
    contactInfo: {
      phone: "Call us directly",
      email: "Send us an email",
      hours: {
        title: "Business Hours",
        description:
          "Our support team is available during the following hours.",
        schedule: [
          {
            day: "Monday - Thursday",
            time: "8:00 AM - 12:00 PM, 12:30 - 5:00 PM",
          },
          {
            day: "Friday",
            time: "8:00 - 11:00 AM, 12:30 - 5:00 PM",
          },
          {
            day: "Saturday",
            time: "Closed",
            status: "closed",
          },
          {
            day: "Sunday",
            time: "Closed",
            status: "closed",
          },
        ],
      },
    },
    getQuote: "Get Free Quote",
    viewProducts: "View Our Products",
    contactUs: "Contact Us",
    readyToStart: "Ready to Start?",
  },
  companyStrategy: {
    label: "Company Strategy",
    title: "SIPADU",
    description:
      "An acronym for Synergy, Integrity, Protection, Trust, Dedication, and Excellence — PT. Karya Halim Sampoerna's work guidelines to support national development with safety, quality, and efficiency.",
    sipadu: {
      sinergi: {
        title: "Synergy",
        description: "Cross-division collaboration for optimal results.",
      },
      integritas: {
        title: "Integrity",
        description: "Upholding ethics, transparency, and accountability.",
      },
      perlindungan: {
        title: "Protection",
        description: "Workplace safety and health as a priority.",
      },
      amanah: {
        title: "Trust",
        description: "Client trust is safeguarded with full commitment.",
      },
      dedikasi: {
        title: "Dedication",
        description: "Continuous improvement and technology innovation.",
      },
      unggul: {
        title: "Excellence",
        description: "Continuous improvement and technology innovation.",
      },
    },
    logoMeaning: {
      title: "Company Meaning",
      companyName: "PT. Karya Halim Sampoerna",
      items: {
        redColor: {
          title: "Red Color",
          description: "Brave, Serious, Commitment and Professional.",
        },
        redCube: {
          title: "Red cube box",
          description:
            "Provides understanding with strength, stability, reliability and security.",
        },
        whiteCenter: {
          title: "White center box",
          description:
            "Provides justice in the work environment to always provide the best performance.",
        },
        blackLines: {
          title: "Black line box",
          description:
            "Emphasizes self-discipline in all work to create a harmonious work environment.",
        },
      },
    },
    strategies: {
      excellence: {
        title: "Operational Excellence",
        description:
          "Continuously improving our processes and methodologies to deliver superior results.",
      },
      innovation: {
        title: "Technology Innovation",
        description:
          "Adopting cutting-edge construction technologies and sustainable practices.",
      },
      sustainability: {
        title: "Environmental Sustainability",
        description:
          "Committed to environmentally responsible construction practices and materials.",
      },
      partnership: {
        title: "Strategic Partnerships",
        description:
          "Building long-term relationships with clients, suppliers, and industry partners.",
      },
    },
  },
  career: {
    label: "Career",
    internPageLabel: "Internship Programs",
    internPageTitle: "Build Your Future, Join Us",
    internPageDescription:
      "We open opportunities for young talents from educational institutions to develop their professional potential in their field.",
    pageTitle: "Grow with Us, Build Indonesia",
    pageDescription:
      "Find real project career opportunities. We're looking for disciplined talents who prioritise safety, quality and teamwork.",
    openPositionsLabel: "Career Opportunities",
    internPositionsLabel: "Internship Programs",
    internPositionsDescription:
      "Our internship programs offer hands-on experience, mentorship from construction experts, and real project exposure to develop your professional skills.",
    requirementsLabel: "Requirements",
    jobs: {
      "site-engineer-intern": {
        title: "Site Engineer Intern",
        department: "Engineering",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Internship",
        description:
          "Learn field engineering practices, assist in project documentation, and gain hands-on experience in road construction projects.",
        requirements: [
          "Currently pursuing Bachelor's degree in Civil Engineering (min. 5th semester)",
          "Strong interest in construction and infrastructure",
          "Willing to work in field conditions",
          "Good communication and teamwork skills",
          "Willing to be placed and assigned in any location",
        ],
      },
      "safety-hse-intern": {
        title: "Safety & HSE Intern",
        department: "Health, Safety & Environment",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Internship",
        description:
          "Support HSE team in safety inspections, incident reporting, and implementing safety protocols on construction sites.",
        requirements: [
          "Currently pursuing degree in Occupational Health & Safety, Environmental Engineering, or related field (min. 5th semester)",
          "Basic understanding of HSE principles",
          "Detail-oriented and proactive",
          "Able to work independently and in teams",
          "Willing to be placed and assigned in any location",
        ],
      },
      "estimator-planning-intern": {
        title: "Estimator & Planning Intern",
        department: "Project Management",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Internship",
        description:
          "Assist in cost estimation, project scheduling, and resource planning for road and infrastructure construction projects.",
        requirements: [
          "Currently pursuing Bachelor's degree in Civil Engineering or related field (min. 5th semester)",
          "Familiar with Microsoft Excel and basic project management tools",
          "Analytical mindset and attention to detail",
          "Good mathematical and problem-solving skills",
          "Willing to be placed and assigned in any location",
        ],
      },
      "project-engineer": {
        title: "Project Engineer",
        department: "Engineering",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Full-time",
        description:
          "Responsible for technical planning, execution coordination, and quality control of road and infrastructure construction projects.",
        requirements: [
          "Bachelor's degree in Civil Engineering or equivalent",
          "Minimum 3 years experience in road/asphalt projects",
          "Familiar with time management, cost estimation, and HSE",
          "Able to work on-site and mobile",
          "Willing to be placed and assigned in any location",
        ],
      },
      "site-supervisor": {
        title: "Site Supervisor",
        department: "Operations",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Full-time",
        description:
          "Lead field teams, ensure work meets specifications, and prepare daily reports and material/equipment coordination.",
        requirements: [
          "Diploma/Bachelor in Civil Engineering or equivalent experience",
          "2+ years experience as a field supervisor",
          "Understand working drawings, methods, and quality",
          "Communicative and disciplined",
          "Willing to be placed and assigned in any location",
        ],
      },
      "heavy-equipment-operator": {
        title: "Heavy Equipment Operator",
        department: "Operations",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Contract",
        description:
          "Operate heavy equipment (grader, excavator, compactor) for earthwork and asphalt works following safety SOPs.",
        requirements: [
          "Valid heavy equipment operator certification",
          "Experience operating at least 2 types of equipment",
          "Prioritise safety and equipment maintenance",
          "Willing to be placed and assigned in any location",
        ],
      },
    },
    cta: {
      notFoundTitle: "Need more internship information?",
      notFoundDescriptionPrefix: "Consult to",
      sendCvButton: "Send CV",
      applyNow: "Apply Now",
    },
  },
  aboutPages: {
    ourCompany: {
      hero: {
        label: "About Us",
        title: "Building with Integrity, Delivering Quality",
        description:
          "Company profile, values, and the team that drives safety and quality standards in every road, <em>hotmix</em> asphalt, and <em>earthwork</em> project in Central Kalimantan and South Kalimantan.",
      },
      intro: {
        heading: "Professionals Behind Infrastructure Projects",
        paragraph1:
          "We are a team of road construction, <em>earthwork</em>, and <em>hotmix</em> experts with over three decades of experience. Our work culture emphasizes safety, cross-division collaboration, and continuous innovation to ensure every project meets the highest standards.",
        paragraph2:
          "Supported by a complete fleet of <em>heavy-duty</em> equipment and safety certifications, the PT. Karya Halim Sampoerna team is ready to deliver quality infrastructure for both government and private clients.",
        imageAlt:
          "PT. Karya Halim Sampoerna field team wearing safety gear at a project site",
        slogan: "Commitment to safety • Focus on quality • Strong teamwork",
      },
    },
    ourTeam: {
      hero: {
        label: "Our Team",
        title: "Leadership & People Behind Every Project",
        description:
          "Our leaders drive a culture of safety, efficiency, and quality in every construction project across Central Kalimantan and South Kalimantan.",
      },
      badges: { peopleCulture: "People & Culture" },
      overview: {
        title: "A Team that Unites Strategy and Execution",
        description:
          "We believe project success starts from coordination between directors, engineers, and field crews. Our team ensures consistent standards of safety, quality control, and client communication from start to handover.",
      },
      leadership: {
        title: "How We Lead",
        description:
          "Three leadership principles ensure every project runs effectively and safely.",
        principles: [
          {
            title: "Field Leadership",
            description:
              "Every leader actively supports field teams to ensure safety standards are met on-site.",
          },
          {
            title: "Multidisciplinary Collaboration",
            description:
              "Our team consists of civil engineers, project managers, and finance experts working as one.",
          },
          {
            title: "Continuous Excellence",
            description:
              "Ongoing investment in training and technology keeps project results competitive.",
          },
        ],
      },
      stats: {
        certifiedProfessionals: {
          label: "Certified Professionals",
          value: "{count}",
          ctaLabel: "...see more",
        },
        trainingHours: { label: "Annual Training Hours", value: "1,200" },
      },
      organization: {
        badgeCompany: "PT. Karya Halim Sampoerna",
        title: "Organizational Structure",
        paragraph1:
          "The main coordination path from shareholders to operational divisions is visualized as a tree diagram, making it easy for stakeholders to read the flow of mandates and responsibilities.",
        paragraph2:
          "This layered management system ensures strategic decisions are executed quickly while maintaining quality and safety for all field teams.",
        hierarchy: [
          {
            title: "Shareholders",
            description:
              "Set long-term vision and governance principles that guide the entire organization.",
          },
          {
            title: "Commissioners",
            description:
              "Provide strategic oversight and ensure good corporate governance is consistently applied.",
          },
          {
            title: "President Director",
            description:
              "Coordinates project execution, drives cross-division collaboration, and maintains operational performance.",
          },
        ],
        divisions: [
          {
            name: "Finance Division",
            focus:
              "Budget planning, cost analysis, and cash flow governance for every project.",
          },
          {
            name: "Operations Division",
            focus:
              "Construction quality control, workplace safety, and on-time field schedules.",
          },
          {
            name: "Logistics Division",
            focus:
              "Material procurement, delivery scheduling, and coordination of the local supply chain.",
          },
          {
            name: "Marketing Division",
            focus:
              "Strategic partnerships, new project tenders, and brand communications.",
          },
          {
            name: "Equipment & Maintenance Division",
            focus:
              "Readiness of heavy equipment fleet and preventive maintenance to ensure smooth projects.",
          },
        ],
        levelLabelTemplate: "Level {index}",
        divisionLabelTemplate: "Division {index}",
      },
    },
    teamMemberDetail: {
      backToTeam: "Back to Team",
      buttons: {
        email: "Email",
        linkedIn: "LinkedIn",
        emailAria: "Email {name}",
        linkedInAria: "LinkedIn {name}",
      },
      signatureQuote: "Signature Quote",
      leadershipProfile: "Leadership Profile",
      keyStrengths: "Key Strengths",
      keyAchievements: "Key Achievements",
      leadershipMetrics: "Leadership Metrics",
      timeline: {
        title: "Contribution Timeline",
        description:
          "Key milestones that highlight growth, leadership, and impact.",
        descriptionTemplate:
          "Career milestones that shape {name}'s leadership at PT. Karya Halim Sampoerna.",
      },
    },
    certificationGallery: {
      hero: {
        label: "Certified Professionals",
        title: "Our Team Credentials & Certifications",
        description:
          "A collection of official certificates ensuring our team meets safety, quality, and project leadership standards.",
      },
      badge: "Internal Certifications",
      headingTemplate: "Professional Certificate Gallery of {company}",
      intro:
        "Client trust is built through continuous competency development. Here is documentation of training, licenses, and accreditations owned by our engineers, supervisors, and project management team.",
      defaultCaption:
        "Documentation of company operational standards and certification achievements.",
      captions: {
        antiBriberyManagementSystem:
          "Anti-bribery management system certification confirming compliant governance.",
        ohsManagementSystem:
          "Occupational health and safety management certification validating safe operations.",
        environmentManagementSystem:
          "Environmental management system certification demonstrating sustainable practices.",
        qualityManagementSystem:
          "Quality management system certification showcasing consistent service excellence.",
      },
    },
    companyAwardsGallery: {
      hero: {
        label: "Our Awards",
        title: "Recognition for Excellence and Trust",
        description:
          "A showcase of accolades affirming our dedication to safety, service quality, and long-term partnerships.",
      },
      badge: "Awards & Recognitions",
      headingTemplate: "Award Gallery of {company}",
      intro:
        "Our dedication to operational excellence is reflected through recognition from strategic partners, government institutions, and industry leaders.",
      defaultCaption:
        "Awards and appreciations that underline our consistent performance and safety-first culture.",
      captions: {
        csrRecognition:
          "Recognition for sustained, high-impact corporate social responsibility programs.",
        ohsMonth2025MainSession:
          "Safety month learning session involving internal teams and strategic partners.",
        ohsMonth2025Appreciation:
          "Appreciation ceremony honoring units that championed exemplary OHS culture.",
        pertaminaBestEndUserAspal2022Award:
          "Award for exemplary use of Pertamina asphalt that met national quality benchmarks.",
        pertaminaBestEndUserAspal2022Certificate:
          "Official Pertamina certificate for customer satisfaction and quality field implementation.",
        pertaminaBestEndUserAspal2023:
          "Continued recognition for sustainability commitment and road infrastructure quality.",
        pertaminaBestEndUserAspal2024:
          "Latest Pertamina acknowledgment for innovation and reliability across company projects.",
        miningSafetyImplementation:
          "Certificate of compliance with national mining safety and operational standards.",
        roadReservationProgram:
          "Local government award for effective planning and execution of road maintenance programs.",
      },
    },
  },
  contact: {
    hero: {
      label: "Contact",
      title: "Get in Touch",
      description:
        "Ready to discuss your project? Our team will respond quickly with recommendations and estimates.",
    },
    form: {
      title: "Send Us a Message",
      description:
        "Fill out the form and our team will reply within 1–2 business days.",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Project consultation, quotation, etc.",
      messageLabel: "Message",
      messagePlaceholder: "Briefly describe your needs",
      sendButton: "Send Message",
    },
    details: {
      title: "Contact Details",
      addressLabel: "Office Address",
      emailLabel: "Email",
      getDirections: "Get Directions",
      secondaryEmailLine: "or hire us at {email}",
    },
    validation: {
      nameRequired: "Name is required",
      emailInvalid: "Valid email required",
      subjectRequired: "Subject is required",
      messageMin: "Message must be at least 10 characters",
    },
    toast: {
      success: "Message sent. We will get back to you soon.",
    },
    mail: {
      subjectTemplate: "Application: {subject}",
      generalSubject: "General Application",
    },
  },
  gallery: {
    label: "Gallery",
    title: "Project Visual Documentation",
    description:
      "Visual documentation of high-quality projects we have completed.",
    ui: {
      filterBy: "Filter by:",
      viewLabel: "View:",
      gridAria: "Grid view",
      byCategoryAria: "Category view",
      keyboardHint: "Tip: Use Ctrl+1/2/3/4 to filter, Ctrl+G to toggle view",
    },
    emptyState: {
      title: "No photos",
      description: "No documentation for the selected category.",
    },
    autoplay: {
      play: "Play slideshow",
      pause: "Pause slideshow",
      prevAria: "Previous images",
      nextAria: "Next images",
    },
    overlay: {
      photoPrefix: "Photo",
      projectLabelPrefix: "Project",
      clickToView: "Click to view details",
    },
    category: {
      adaro: {
        title: "Site PT. Adaro Indonesia",
        description:
          "Infrastructure project documentation for PT. Adaro Indonesia",
        badge: "PT. Adaro",
      },
      kalimantan: {
        title: "Government Project - Central Kalimantan",
        description:
          "Government infrastructure project documentation in Central Kalimantan",
        badge: "Kalimantan",
      },
      borneo: {
        title: "Site PT. Borneo Indobara",
        description:
          "Infrastructure project documentation for PT. Borneo Indobara",
        badge: "PT. Borneo",
      },
      allTitle: "All Projects",
      allDescription: "All project visual documentation we've completed",
    },
    showingLabel: "Showing",
    photosNoun: "photos",
    clickToViewDetail: "Click to view details",
    card: { hdBadge: "HD" },
    stats: {
      projectDocs: "Project Documentation",
      projectCategories: "Project Categories",
      qualityAssured: "Quality Assured",
      completedProjects: "Completed Projects",
    },
    modal: { companyName: "PT. Karya Halim Sampoerna" },
    ariaGalleryNavigation: "{title} gallery - use arrow keys to navigate",
  },
  location: {
    label: "Location",
    pageTitle: "Locations & Operational Reach",
    pageDescription:
      "Find coordinates for head office, operational offices, depots, and our site support teams across Indonesia.",
    map: {
      coverageBadge: "Our Coverage",
      headline: "Operational Footprint Across Indonesia",
      subheadline:
        "Explore the strategic locations that support our nationwide operations — from the head office to regional warehouses and site support teams.",
      category: {
        headOffice: "Head Office",
        strategicPartner: "Strategic Partner",
        industryPartner: "Industry Partner",
      },
      zoomOut: "Zoom out view",
      viewOnMap: "View on Map",
      showLess: "Show less",
      viewMoreTemplate: "View more ({count})",
    },
  },
  common: {
    loading: "Loading...",
    home: "Home",
    works: "Works",
    services: "Services",
    all: "All",
    backToHome: "Go to Home",
    goBack: "Go Back",
    backToTop: "Back to top",
    viewNews: "View News",
    viewDetails: "View Details",
    contactUs: "Contact Us",
    keyDetails: "Key Details",
    or: "or",
    client: "Client",
    location: "Location",
    year: "Year",
    status: "Status",
    category: "Category",
    projectOverview: "Project Overview",
    keyFeatures: "Key Features",
    relatedProjects: "Related Projects",
    pageNotFound: "Oops! Page not found",
    pageNotFoundDescription:
      "We couldn't find the page you were looking for. Try the links below or go back to the homepage.",
  },
  footer: {
    company: {
      title: "PT. Karya Halim Sampoerna",
      description:
        "Your trusted partner in construction and infrastructure development with over 35 years of experience.",
      followUs: "Follow Us",
    },
    quickLinks: {
      title: "Quick Links",
      aboutUs: "About Us",
      ourTeam: "Our Team",
      services: "Services",
      projects: "Projects",
      news: "News",
      career: "Career",
      location: "Location",
      contact: "Contact",
    },
    services: {
      title: "Our Services",
      earthwork: "Earthwork",
      asphalt: "Asphalt Works",
      concrete: "Concrete Works",
      maintenance: "Maintenance",
    },
    contact: {
      title: "Contact Info",
      address: "Banjarmasin, South Kalimantan, Indonesia",
      phone: "+62 511 123 4567",
      email: PRIMARY_EMAIL,
      emailSecondary: SECONDARY_EMAIL,
      emails: [...ALL_EMAILS],
    },
    location: {
      title: "Our Location",
      openInGoogleMaps: "Open in Google Maps",
    },
    newsletter: {
      title: "Newsletter",
      error: "Something went wrong. Please try again.",
    },
    ctaLookingForPartner: "Looking for a reliable partner?",
    ctaLetsBuild: "Let's build something great together.",
    copyright: "© 2024 PT. Karya Halim Sampoerna. All rights reserved.",
  },
};
