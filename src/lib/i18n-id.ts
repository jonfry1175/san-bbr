import type { TranslationResources } from "./i18n";
import { salesCategoryDefinitions } from "./products";
import { PRIMARY_EMAIL, SECONDARY_EMAIL, ALL_EMAILS } from "./email-config";

export const idTranslations: TranslationResources = {
  header: {
    home: "Beranda",
    aboutUs: "Tentang Kami",
    aboutDropdownAria: "Navigasi ke halaman Tentang Kami",
    languageLabel: "Bahasa",
    changeLanguageAria: "Ganti bahasa (saat ini: {language})",
    getQuote: "Dapatkan Penawaran",
    switchLanguageAria: {
      EN: "Ganti ke Bahasa Inggris",
      ID: "Ganti ke Bahasa Indonesia",
      ZH: "Ganti ke Bahasa Mandarin Sederhana",
    },
    aboutLinks: {
      ourCompany: "Perusahaan Kami",
      ourTeam: "Tim Kami",
      certifications: "Sertifikasi",
      companyAwards: "Penghargaan Perusahaan",
    },
    navigationItems: {
      services: "Layanan",
      products: "Produk",
      ourWorks: "Portofolio",
      gallery: "Galeri",
      news: "Berita",
      career: "Karir",
      location: "Lokasi",
      contact: "Hubungi Kami",
    },
    productLinks: {
      rentalAlatBerat: "Rental Alat Berat (PT SAN)",
      jasaKonstruksi: "Jasa Konstruksi Tambang (PT BBR)",
    },
    careerLinks: {
      employee: "Peluang Karir",
      intern: "Program Magang",
      san: "Karir PT SAN",
      bbr: "Karir PT BBR",
    },
  },
  aboutPages: {
    ourCompany: {
      hero: {
        label: "Tentang Kami",
        title: "Membangun dengan Integritas, Menghasilkan Kualitas",
        description:
          "Profil perusahaan, nilai, dan tim yang mendorong standar keselamatan dan mutu di setiap proyek konstruksi jalan, aspal <em>hotmix</em>, dan <em>earthwork</em> di Kalimantan Tengah dan Kalimantan Selatan.",
      },
      intro: {
        heading: "Tim Profesional di Balik Proyek Infrastruktur",
        paragraph1:
          "Kami terdiri dari para ahli konstruksi jalan, <em>earthwork</em>, dan <em>hotmix</em> yang berpengalaman lebih dari tiga dekade. Budaya kerja kami menekankan keselamatan, kolaborasi lintas divisi, dan inovasi berkelanjutan agar setiap proyek terselesaikan dengan standar terbaik.",
        paragraph2:
          "Dengan dukungan armada peralatan <em>heavy-duty</em> yang lengkap serta sertifikasi keselamatan kerja, tim PT SAN & PT BBR siap mewujudkan infrastruktur berkualitas bagi klien pemerintah maupun swasta.",
        imageAlt:
          "Tim lapangan PT SAN & PT BBR mengenakan seragam keselamatan di area proyek",
        slogan:
          "Komitmen pada keselamatan • Fokus pada kualitas • Kerja tim solid",
      },
    },
    ourTeam: {
      hero: {
        label: "Tim PT SAN & PT BBR",
        title: "Tim Profesional PT SAN & PT BBR",
        description:
          "Para pemimpin kami menggerakkan budaya keselamatan, efisiensi, dan kualitas pada setiap proyek konstruksi di Kalimantan Tengah dan Kalimantan Selatan.",
      },
      badges: { peopleCulture: "People & Culture" },
      overview: {
        title: "Tim yang Menyatukan Strategi dan Eksekusi",
        description:
          "Kami percaya keberhasilan proyek dimulai dari koordinasi rapat antara direktur, <em>engineers</em>, hingga crew lapangan. Tim kami memastikan standar keselamatan, pengendalian mutu, dan komunikasi klien tetap konsisten dari awal hingga serah terima.",
      },
      leadership: {
        title: "Cara Kami Memimpin",
        description:
          "Tiga prinsip kepemimpinan memastikan setiap proyek berjalan efektif dan aman.",
        principles: [
          {
            title: "Kepemimpinan Lapangan",
            description:
              "Setiap pemimpin aktif mendampingi tim proyek untuk memastikan standar keselamatan terpenuhi di lapangan.",
          },
          {
            title: "Kolaborasi Multidisiplin",
            description:
              "Tim kami terdiri dari ahli sipil, manajemen proyek, dan keuangan yang bergerak sebagai satu kesatuan.",
          },
          {
            title: "Keunggulan Berkelanjutan",
            description:
              "Investasi berkelanjutan pada pelatihan dan teknologi memastikan hasil proyek tetap kompetitif.",
          },
        ],
      },
      stats: {
        certifiedProfessionals: {
          label: "Profesional Bersertifikat",
          value: "{count}",
          ctaLabel: "Lihat selengkapnya",
        },
        trainingHours: { label: "Jam Pelatihan Tahunan", value: "1.200" },
      },
      organization: {
        badgeCompany: "PT SAN & PT BBR",
        title: "Struktur Organisasi",
        paragraph1:
          "Jalur koordinasi utama dari pemegang saham hingga divisi operasional divisualisasikan sebagai bagan pohon, memudahkan setiap pemangku kepentingan membaca alur mandat dan tanggung jawab.",
        paragraph2:
          "Sistem manajemen berlapis ini memastikan keputusan strategis dijalankan cepat serta menjaga mutu dan keselamatan kerja seluruh tim di lapangan.",
        hierarchy: [
          {
            title: "Pemegang Saham",
            description:
              "Menetapkan visi jangka panjang serta prinsip tata kelola yang menjadi acuan seluruh organisasi.",
          },
          {
            title: "Komisaris",
            description:
              "Melakukan pengawasan strategis dan memastikan prinsip good corporate governance diterapkan konsisten.",
          },
          {
            title: "Direktur Utama",
            description:
              "Mengkoordinasikan pelaksanaan proyek, menggerakkan kolaborasi antar divisi, dan menjaga kinerja operasional.",
          },
        ],
        divisions: [
          {
            name: "Divisi Keuangan",
            focus:
              "Perencanaan anggaran, analisis biaya, dan tata kelola arus kas setiap proyek.",
          },
          {
            name: "Divisi Operasional",
            focus:
              "Pengendalian mutu konstruksi, keselamatan kerja, dan ketepatan jadwal lapangan.",
          },
          {
            name: "Divisi Logistik",
            focus:
              "Pengadaan material, penjadwalan pengiriman, serta koordinasi supply chain lokal.",
          },
          {
            name: "Divisi Pemasaran",
            focus:
              "Pengembangan kemitraan strategis, tender proyek baru, dan komunikasi brand.",
          },
          {
            name: "Divisi Peralatan & Pemeliharaan",
            focus:
              "Kesiapan armada alat berat dan perawatan preventif agar proyek berjalan tanpa hambatan.",
          },
        ],
        levelLabelTemplate: "Level {index}",
        divisionLabelTemplate: "Divisi {index}",
      },
    },
    teamMemberDetail: {
      backToTeam: "Kembali ke Tim",
      buttons: {
        email: "Email",
        linkedIn: "LinkedIn",
        emailAria: "Email {name}",
        linkedInAria: "LinkedIn {name}",
      },
      signatureQuote: "Kutipan Utama",
      leadershipProfile: "Profil Kepemimpinan",
      keyStrengths: "Kekuatan Utama",
      keyAchievements: "Pencapaian Utama",
      leadershipMetrics: "Metrix Kepemimpinan",
      timeline: {
        title: "Timeline Kontribusi",
        description:
          "Tonggak penting yang menyoroti pertumbuhan, kepemimpinan, dan dampak.",
        descriptionTemplate:
          "Tonggak perjalanan karir yang membentuk gaya kepemimpinan {name} di PT SAN & PT BBR.",
      },
    },
    certificationGallery: {
      hero: {
        label: "Sertifikasi Profesional",
        title: "Sertifikasi PT SAN & PT BBR",
        description:
          "Kumpulan sertifikat resmi yang memastikan tim kami memenuhi standar keselamatan, mutu, dan kepemimpinan proyek.",
      },
      badge: "Sertifikasi Internal",
      headingTemplate: "Galeri Sertifikat Profesional {company}",
      intro:
        "Kepercayaan klien kami dibangun melalui pengembangan kompetensi berkelanjutan. Berikut dokumentasi pelatihan, lisensi, dan akreditasi yang dimiliki tim <em>engineer</em>, <em>supervisor</em>, serta manajemen proyek kami.",
      defaultCaption:
        "Dokumentasi pencapaian standar dan sertifikasi operasional perusahaan.",
      captions: {
        antiBriberyManagementSystem:
          "Sertifikat Sistem Manajemen Anti Penyuapan yang menegaskan tata kelola bebas suap.",
        ohsManagementSystem:
          "Sertifikat Sistem Manajemen Keselamatan dan Kesehatan Kerja untuk operasional yang aman.",
        environmentManagementSystem:
          "Sertifikat Sistem Manajemen Lingkungan sebagai bukti praktik berkelanjutan.",
        qualityManagementSystem:
          "Sertifikat Sistem Manajemen Mutu yang memastikan konsistensi layanan terbaik.",
      },
    },
    companyAwardsGallery: {
      hero: {
        label: "Penghargaan Perusahaan",
        title: "Penghargaan PT SAN & PT BBR",
        description:
          "Kumpulan penghargaan yang menegaskan dedikasi kami pada keselamatan, kualitas layanan, dan kemitraan jangka panjang.",
      },
      badge: "Penghargaan & Apresiasi",
      headingTemplate: "Galeri Penghargaan {company}",
      intro:
        "Komitmen kami pada keunggulan operasional tercermin dari apresiasi mitra strategis, institusi pemerintah, dan pelaku industri terkemuka.",
      defaultCaption:
        "Penghargaan dan apresiasi yang menegaskan konsistensi kinerja serta budaya keselamatan kami.",
      captions: {
        csrRecognition:
          "Pengakuan atas kontribusi perusahaan dalam program tanggung jawab sosial yang konsisten dan berdampak.",
        ohsMonth2025MainSession:
          "Momen edukasi keselamatan kerja yang melibatkan tim internal dan mitra strategis.",
        ohsMonth2025Appreciation:
          "Dokumentasi penyerahan apresiasi kepada unit yang berhasil menerapkan budaya K3 secara unggul.",
        pertaminaBestEndUserAspal2022Award:
          "Anugerah atas performa penggunaan aspal Pertamina yang memenuhi standar mutu nasional.",
        pertaminaBestEndUserAspal2022Certificate:
          "Piagam resmi dari Pertamina atas kepuasan pelanggan dan kualitas implementasi aspal di lapangan.",
        pertaminaBestEndUserAspal2023:
          "Apresiasi lanjutan atas komitmen keberlanjutan dan mutu pengerjaan infrastruktur jalan.",
        pertaminaBestEndUserAspal2024:
          "Pengakuan terbaru Pertamina terhadap inovasi dan keandalan proyek-proyek perusahaan.",
        miningSafetyImplementation:
          "Sertifikat kepatuhan terhadap standar keselamatan dan operasional industri pertambangan nasional.",
        roadReservationProgram:
          "Penghargaan pemerintah daerah atas perencanaan dan eksekusi proyek pemeliharaan jalan yang efektif.",
      },
    },
  },
  serviceDetail: {
    scopeOfWork: "Ruang Lingkup Pekerjaan",
    specifications: "Spesifikasi Tipikal",
    deliverables: { title: "Dokumen & Laporan" },
    applications: { title: "Aplikasi yang Sesuai" },
    premiumService: "Layanan Premium",
    process: {
      title: "Cara Kerja Kami",
      steps: {
        consultation: {
          title: "Konsultasi",
          description: "Diskusikan kebutuhan proyek Anda dengan tim kami.",
        },
        planning: {
          title: "Perencanaan",
          description: "Perencanaan detail, penjadwalan, dan estimasi biaya.",
        },
        execution: {
          title: "Pelaksanaan",
          description:
            "Pelaksanaan lapangan dengan kontrol kualitas yang ketat.",
        },
      },
    },
    faqs: {
      title: "FAQ",
      items: [
        {
          q: "Berapa estimasi durasi pengerjaan?",
          a: "Durasi bervariasi sesuai scope. Kami berikan jadwal detail setelah survei awal.",
        },
        {
          q: "Bagaimana standar kualitas kami?",
          a: "Mengacu pada standar nasional dan praktik terbaik internasional dengan pengujian berkala.",
        },
        {
          q: "Dokumen apa yang akan kami terima?",
          a: "Anda akan menerima metode kerja, jadwal, laporan harian/mingguan, hasil uji, dokumentasi foto, dan dokumen serah terima (as-built, BAST) sesuai kebutuhan kontrak.",
        },
        {
          q: "Apakah pekerjaan bisa dilakukan pada jalur beroperasi?",
          a: "Bisa, dengan rekayasa lalu lintas, penjadwalan bertahap, dan standar HSE yang ketat untuk menjaga keselamatan operasional.",
        },
        {
          q: "Apakah tersedia garansi mutu?",
          a: "Kami menerapkan masa pemeliharaan sesuai perjanjian kerja dan melakukan perbaikan apabila hasil tidak memenuhi spesifikasi yang disepakati.",
        },
      ],
    },
    backToServices: "Kembali ke Layanan",
    sidebar: {
      title: "Diskusikan Proyek Anda",
      descriptionTemplate:
        "Butuh layanan {service}? Tim kami siap membantu Anda memilih solusi terbaik.",
    },
    whyChoose: {
      title: "Mengapa Memilih Kami",
      items: [
        "Tim berpengalaman & bersertifikat",
        "Kontrol kualitas berkelanjutan",
        "Peralatan modern dan aman",
      ],
    },
    bottomCta: {
      titleTemplate: "Siap memulai proyek {service} Anda?",
      description:
        "Konsultasi gratis dan penawaran terbaik untuk kebutuhan Anda.",
      exploreServices: "Jelajahi Layanan",
    },
  },
  hero: {
    welcome: "Selamat Datang",
    defaultTitle: "Membangun Keunggulan dengan Integritas",
    defaultDescription:
      "Mitra terpercaya Anda dalam pembangunan konstruksi dan infrastruktur",
  },
  products: {
    hero: {
      label: "Produk",
      title: "Alat Berat & Dukungan Proyek",
      description:
        "Temukan alat berat, solusi kelistrikan, dan kendaraan pendukung proyek yang memenuhi standar kualitas PT SAN.",
    },
    intro: {
      badge: "Produk Kami",
      description:
        "Kami menyediakan solusi komprehensif mulai dari alat berat, penyedia daya, hingga transportasi material. Setiap unit melewati inspeksi menyeluruh dan siap mendukung operasional 24/7.",
      rent: {
        badge: "Rental Alat Berat (PT SAN)",
        title: "Solusi Alat Berat Terpercaya",
        description:
          "Kami menyediakan armada alat berat berkualitas tinggi untuk kebutuhan proyek konstruksi dan pertambangan dengan dukungan teknis 24/7.",
      },
      sale: {
        badge: "Jasa & Material Konstruksi (PT BBR)",
        title: "Konstruksi & Material Berkualitas",
        description:
          "Layanan konstruksi tambang profesional dan penyediaan material berkualitas untuk mendukung operasional Anda.",
      },
      all: {
        badge: "Produk & Layanan",
        title: "Solusi Lengkap PT SAN & PT BBR",
        description:
          "Jelajahi berbagai pilihan alat berat dan layanan konstruksi kami yang dirancang untuk efisiensi dan keandalan proyek Anda.",
      },
    },
    filters: {
      title: "Filter Produk",
      description: "Gunakan pencarian dan kategori untuk mempersempit pilihan.",
      categoryTitle: "Kategori",
      allCategories: "Semua Kategori",
      moreCategoriesLabel: "Kategori lainnya",
      viewOptions: "Opsi tampilan",
      exploreMore: "Jelajahi {count} kategori tambahan",
      productNoun: "produk",
      searchPlaceholder: "Cari produk, fitur, atau tag...",
      sortPlaceholder: "Urutkan",
      reset: "Reset filter",
      activeLabel: "Aktif",
      salesCategoryTitle: "Kategori Penjualan",
      salesCategories: {
        all: "Semua Produk",
        sale: "Produk Jual",
        rent: "Produk Sewa",
      },
    },
    emptyState: {
      title: "Tidak ada produk",
      description: "Coba filter lain atau hapus pencarian Anda.",
    },
    status: {
      contactLabel: "Hubungi Kami",
      descriptionTemplate: "hubungi: {email} atau {whatsapp}",
      descriptionEmailOnly: "hubungi: {email}",
      descriptionDualEmail: "hubungi: {email} atau {emailSecondary}",
    },
    pagination: {
      perPage: "Per halaman",
      perPageAria: "Pilih jumlah produk per halaman",
      summaryTemplate: "Menampilkan {start}-{end} dari {total} {noun}",
    },
    detail: {
      specsTitle: "Spesifikasi utama",
      highlights: "Highlight",
      categoryHighlights: "Keunggulan kategori",
      availabilityStatus: "Status ketersediaan",
      nextSteps: "Langkah berikutnya",
      nextStepsList: [
        "Diskusikan kebutuhan proyek dan konfigurasi unit.",
        "Dapatkan jadwal pengiriman dan dukungan after-sales.",
        "Siapkan dokumen pendukung untuk pengadaan.",
      ],
      helpText:
        "Butuh informasi tambahan? Tim kami siap membantu menyesuaikan solusi terbaik.",
      whatsappButton: "Hubungi via WhatsApp",
      rentPrefix: salesCategoryDefinitions
        .find((c) => c.id === "rent")
        ?.defaultLabel.toUpperCase(),
      salePrefix: salesCategoryDefinitions
        .find((c) => c.id === "sale")
        ?.defaultLabel.toUpperCase(),
      locationTitle: "Lokasi",
      locationValue: "Kota Palangka Raya, Kalimantan Tengah",
    },
    productsData: {
      categories: {
        excavator: {
          name: "Excavator",
          description:
            "Armada excavator untuk penggalian massal, <em>loading</em>, dan pekerjaan earthwork berat.",
          highlight: "Hemat bahan bakar, Grade control, Presisi hidraulik",
        },
        "vibratory-roller": {
          name: "Vibratory Roller",
          description:
            "Compactor vibrasi untuk pemadatan granular dan lapisan basecourse secara konsisten.",
          highlight: "Variable Amplitude, Auto Vibration, Telematics",
        },
        "pad-foot-roller": {
          name: "Pad Foot Roller",
          description:
            "Solusi pemadatan tanah kohesif dengan tekanan tinggi dan traksi maksimal.",
          highlight: "High Compaction, Pad Shell, Heavy Duty Axle",
        },
        aspal: {
          name: "Aspal",
          description:
            "Produk aspal berkualitas tinggi untuk konstruksi jalan dan infrastruktur.",
          highlight: "High-Grade Bitumen, Penetration Grade, Premium Quality",
        },
        "ready-mix": {
          name: "Ready Mix",
          description:
            "Beton Ready Mix siap pakai dengan berbagai mutu untuk konstruksi.",
          highlight: "K-125 to K-550, Quality Assured",
        },
        "peralatan-aspal": {
          name: "Peralatan Aspal",
          description: "Peralatan pekerjaan perkerasan aspal.",
          highlight:
            "Uniform spray distribution, Reliable heating control, Consistent surface finish",
        },
        "batching-plant": {
          name: "Batching Plant",
          description:
            "Batching plant modular untuk produksi beton ready-mix yang konsisten.",
          highlight: "90-120 M³/H, Twin Shaft Mixer, Moisture Sensor",
        },
        "combination-roller": {
          name: "Combination Roller",
          description:
            "Roller kombinasi untuk finishing permukaan aspal dengan densitas optimal.",
          highlight: "Dual Drum, Pneumatic Tires, Auto Water Spray",
        },
        "tandem-roller": {
          name: "Tandem Roller",
          description:
            "Double drum roller untuk pemadatan lapisan aspal halus dan merata.",
          highlight: "Oscillation, Edge Press, Vibration Control",
        },
        "pneumatic-tire-roller": {
          name: "Pneumatic Tire Roller",
          description:
            "Roller ban pneumatic untuk seal finishing dan bonding antar lapisan aspal.",
          highlight: "Variable Ballast, Tire Heating, Even Coverage",
        },
        bulldozer: {
          name: "Bulldozer",
          description:
            "Bulldozer kelas menengah hingga berat untuk land clearing dan ripping.",
          highlight: "Tier 3 Engine, PAT Blade, Ripper Ready",
        },
        "crawler-crane": {
          name: "Crawler Crane",
          description:
            "Crawler crane untuk erection struktur berat dan pekerjaan pondasi.",
          highlight:
            "Luffing Jib, Load Moment Limiter, Undercarriage Heavy Duty",
        },
        "road-sweeper": {
          name: "Road Sweeper",
          description:
            "Unit road sweeper untuk pembersihan jalan proyek dan area industri.",
          highlight: "High Capacity Hopper, Water Spray, Vacuum Assist",
        },
        "dump-truck": {
          name: "Dump Truck",
          description:
            "Dump truck <em>heavy-duty</em> untuk pengangkutan material untuk kebutuhan konstruksi.",
          highlight: "Retarder Brake, Fleet Telematics, Heavy Duty Axle",
        },
        "mixer-truck": {
          name: "Mixer Truck",
          description:
            "Truk mixer berbagai kapasitas dengan sistem slump control dan washdown.",
          highlight: "Auto Dosing, Cabin Comfort, Easy Clean Drum",
        },
        "self-loader-truck": {
          name: "Self Loader Truck",
          description:
            "Self loader untuk distribusi alat berat ringan dengan ramp hidrolik.",
          highlight: "Hydraulic Goose Neck, Winch Assist, Escort Kit",
        },
        "motor-grader": {
          name: "Motor Grader",
          description:
            "Motor grader presisi untuk pembentukan profil jalan dan finishing subgrade.",
          highlight: "Slope Control, AWD, Precision Blade Control",
        },
        "wheel-loader": {
          name: "Wheel Loader",
          description:
            "Wheel loader multi fungsi untuk <em>loading</em> agregat, <em>stockpiling</em>, dan <em>material</em> <em>handling</em>.",
          highlight: "Auto Weigh, Traction Control, High Breakout Force",
        },
        "tractor-head-trailer": {
          name: "Tractor Head / Trailer",
          description:
            "Tractor head dengan trailer modular untuk heavy haul dan logistik proyek.",
          highlight: "370 HP, ABS, Air Suspension",
        },
      },
      products: {
        "vibratory-roller-vr70": {
          name: "VR70 Vibratory Roller",
          description:
            "Roller 7 ton dengan drum vibrasi ganda untuk pemadatan basecourse dan subbase.",
          specs: [
            "Operating weight 7 ton",
            "Centrifugal force 120 kN",
            "Drum width 1.5 m",
          ],
          tags: ["Compaction", "Dual Amplitude"],
        },
        "peralatan-aspal-asphalt-sprayer-distributor-mitsubishi-fe-349-h": {
          name: "Asphalt Sprayer Distributor - MITSUBISHI FE 349 H",
          description: "peralatan <em>sprayer asphalt hotmix</em>",
        },
        "peralatan-aspal-asphalt-sprayer-distributor-xi-an-dagang-dgls251gls": {
          name: "Asphalt Sprayer Distributor - XI'AN DAGANG DGLS251GLS",
          description: "peralatan <em>sprayer asphalt hotmix</em>",
          specs: [
            "Uniform spray distribution",
            "Reliable heating control",
            "Consistent surface finish",
            "2.04 Meters working width",
            "0.5 mm working depths",
          ],
          tags: [],
        },
        "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-1000b-fa": {
          name: "Asphalt Mixing Plant - BUKAKA BAMP-1000B-FA",
          description:
            "Peralatan pencampuran aspal mentah menjadi Aspal Hotmix dengan capacity 60ton/h.",
          specs: ["capacity 60ton/h"],
          tags: [],
        },
        "peralatan-aspal-asphalt-mixing-plant-bukaka-bamp-800p-sa": {
          name: "Asphalt Mixing Plant - BUKAKA BAMP-800P-SA",
          description:
            "Peralatan pencampuran aspal mentah menjadi Aspal Hotmix dengan capacity 60ton/h.",
          specs: ["capacity 60ton/h"],
          tags: [],
        },
        "peralatan-aspal-soil-stabilizer-wirtgen-wr-2500-s": {
          name: "Soil Stabilizer - WIRTGEN WR 2500 S",
          description: "Peralatan pekerjaan metode <em>Recycling</em>",
        },
        "combination-roller-combination-roller-medium-sakai-tw-500w-1": {
          specs: [
            "Dual drum",
            "Pneumatic tires",
            "Auto water spray",
            "Kelas 3,5 ton",
            "Medium level work",
          ],
        },
        "combination-roller-combination-roller-mini-sakai-tw350": {
          specs: [
            "Dual drum",
            "Pneumatic tires",
            "Auto water spray",
            "Kelas 2,5 ton",
            "Small level work",
          ],
        },
        "tandem-roller-tandem-roller-dynapac-cc2200": {
          name: "Tandem Roller - DYNAPAC CC2200",
          description:
            "Double drum tandem roller untuk pemadatan aspal yang efisien",
          specs: [
            "Oscillation",
            "Edge Press",
            "Vibration Control",
            "Kelas 9 ton",
          ],
          tags: [],
        },
        "tandem-roller-tandem-roller-mini-dynapac-cc1250": {
          name: "Tandem Roller Mini - DYNAPAC CC1250",
          description:
            "Compact double drum roller untuk pekerjaan pemadatan presisi",
          specs: [
            "Oscillation",
            "Edge Press",
            "Vibration Control",
            "Kelas 3 ton",
            "pekerjaan kecil - menengah",
          ],
          tags: [],
        },
        "pneumatic-tire-roller-pneumatic-tire-roller-kotai-kp166": {
          name: "Pneumatic Tire Roller - KOTAI KP166",
          description:
            "Pneumatic tire roller untuk seal finishing dan bonding antar lapisan",
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
            "Pneumatic tire roller untuk seal finishing dan bonding antar lapisan",
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
            "Bulldozer kelas menengah hingga berat untuk land clearing dan ripping",
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
            "Bulldozer kelas menengah hingga berat untuk land clearing dan ripping",
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
  aboutSection: {
    label: "Tentang Perusahaan",
    title: "PT SAN & PT BBR",
    ptSan: {
      title: "PT SAN (Rental Alat Berat)",
      description: "Mitra terpercaya dalam penyediaan alat berat berkualitas untuk kebutuhan proyek konstruksi dan pertambangan. Kami menjamin ketersediaan unit yang prima dan dukungan teknis yang handal.",
    },
    ptBbr: {
      title: "PT BBR (Jasa Konstruksi Tambang)",
      description: "Spesialis dalam jasa konstruksi tambang dan pekerjaan tanah (earthwork). Kami mengedepankan metode kerja yang efisien, aman, dan sesuai standar industri pertambangan.",
    },
    description: {
      paragraph1:
        "PT SAN dan PT BBR hadir sebagai solusi terintegrasi untuk kebutuhan industri pertambangan dan konstruksi di Indonesia.",
      paragraph2:
        "Dengan pengalaman yang solid di bidangnya masing-masing, sinergi kedua entitas ini menghadirkan layanan komprehensif mulai dari penyediaan alat berat berkualitas hingga eksekusi proyek konstruksi tambang yang presisi.",
      paragraph3:
        "Komitmen kami terhadap keselamatan, efisiensi, dan kepuasan klien menjadikan kami mitra terpercaya bagi berbagai perusahaan tambang dan konstruksi terkemuka.",
    },
    achievements: {
      established: "Didirikan",
      establishedDesc: "Dimulai sebagai CV. Halim Sampoerna",
      yearsExperience: "Tahun Pengalaman",
      yearsExperienceDesc: "Sebagai PT. sejak 2003",
      successfulProjects: "Proyek Sukses",
      successfulProjectsDesc: "Proyek berhasil diselesaikan",
      satisfiedClients: "Klien Puas",
      satisfiedClientsDesc: "Klien yang puas dengan layanan kami",
    },
    values: {
      title: "Nilai-Nilai Perusahaan",
      integrity: {
        title: "Integritas",
        description:
          "Kami berkomitmen untuk selalu bekerja dengan integritas tinggi dan transparansi penuh.",
      },
      quality: {
        title: "Kualitas",
        description:
          "Kualitas adalah prioritas utama dalam setiap proyek yang kami kerjakan.",
      },
      innovation: {
        title: "Inovasi",
        description:
          "Menggunakan teknologi terkini dan metode konstruksi modern untuk hasil terbaik.",
      },
      reliability: {
        title: "Keandalan",
        description:
          "Kepercayaan klien adalah aset berharga yang selalu kami jaga dengan baik.",
      },
    },
    learnMore: "Pelajari Lebih Lanjut Tentang Kami",
  },
  visionMission: {
    label: "Visi & Misi",
    title: "PT SAN & PT BBR",
    subtitle: "Sinergi Kekuatan untuk Membangun Masa Depan",
    ptSan: {
      vision: {
        title: "Visi PT SAN",
        content: "Menjadi penyedia solusi alat berat terkemuka yang handal dan efisien di Indonesia.",
      },
      mission: {
        title: "Misi PT SAN",
        points: [
          "Menyediakan armada alat berat yang berkualitas dan terawat.",
          "Memberikan layanan purna jual dan dukungan teknis yang responsif.",
          "Membangun kemitraan jangka panjang dengan pelanggan.",
        ],
      },
    },
    ptBbr: {
      vision: {
        title: "Visi PT BBR",
        content: "Menjadi kontraktor pertambangan dan konstruksi yang unggul dalam keselamatan dan produktivitas.",
      },
      mission: {
        title: "Misi PT BBR",
        points: [
          "Melaksanakan pekerjaan konstruksi tambang dengan standar keselamatan tertinggi.",
          "Meningkatkan efisiensi operasional melalui inovasi metode kerja.",
          "Memberikan nilai tambah bagi pemangku kepentingan.",
        ],
      },
    },
    vision: {
      title: "Visi Kami",
      content:
        "Menjadi perusahaan konstruksi terdepan di Indonesia yang terpercaya, inovatif, dan berkelanjutan dalam menyediakan solusi infrastruktur berkualitas.",
    },
    mission: {
      title: "Misi Kami",
      points: [
        "Menjalankan tata kelola perusahaan yang baik.",
        "Manajemen sumber daya manusia yang baik dan menciptakan kondisi terbaik bagi karyawan untuk berkarya dan berprestasi.",
        "Menjalankan sistem manajemen untuk menjamin keselamatan, kesehatan kerja, kualitas, lingkungan kerja.",
        "Penggunaan dan penerapan teknologi terbarukan untuk kontruksi yang lebih baik.",
        "Mengembangkan usaha konstruksi dengan menciptakan citra terbaik perusahaan.",
        "Turut berpartisipasi dalam pembangunan negara tercinta Republik Indonesia.",
      ],
    },
  },
  servicesSection: {
    label: "Layanan Kami",
    title: "Menyediakan Solusi untuk Setiap Kebutuhan",
    description:
      "Kami menyediakan solusi konstruksi terlengkap dengan kualitas terbaik dan teknologi modern untuk memenuhi kebutuhan proyek Anda.",
    ptSan: {
      title: "Rental Alat Berat (PT SAN)",
      description: "Layanan penyewaan alat berat lengkap untuk berbagai kebutuhan proyek.",
      action: "Lihat Katalog Alat",
    },
    ptBbr: {
      title: "Jasa Konstruksi Tambang (PT BBR)",
      description: "Jasa kontraktor pertambangan dan pekerjaan sipil yang profesional.",
      action: "Lihat Layanan Konstruksi",
    },
    viewAll: "Lihat Semua Layanan",
    learnMore: "Pelajari Lebih Lanjut",
    ctaTitle: "Butuh Solusi Khusus?",
    ctaDescription:
      "Setiap proyek memiliki kebutuhan unik. Tim ahli kami siap membantu merancang solusi konstruksi yang tepat untuk proyek Anda.",
    ctaRequestQuote: "Minta Penawaran",
  },
  projectsSection: {
    label: "Portofolio PT SAN & PT BBR",
    title: "Proyek Unggulan PT SAN & PT BBR",
    description:
      "Jelajahi portofolio proyek konstruksi sukses kami di Kalimantan Tengah dan Kalimantan Selatan, menunjukkan keahlian dan komitmen PT SAN & PT BBR terhadap keunggulan.",
    viewAll: "Lihat Semua Proyek",
    client: "Klien",
    location: "Lokasi",
    year: "Tahun",
    stats: {
      yearsExperience: "35+ Tahun",
      roadsBuilt: "Jalan Dibangun",
      sitesDeveloped: "Lahan Dikembangkan",
      sitesDevelopedValue: "1.000+ Hektar",
      clientSatisfaction: "Kepuasan Klien",
    },
    categories: {
      "Road Construction": "Konstruksi Jalan",
      "Aspal Hotmix": "Aspal Hotmix",
      Earthwork: "Pekerjaan Tanah",
    },
    statuses: {
      Completed: "Selesai",
      Ongoing: "Sedang Berlangsung",
    },
    ctaTitle: "Siap Memulai Proyek Berikutnya?",
    ctaDescription:
      "Diskusikan proyek konstruksi Anda dengan tim ahli kami. Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan Anda.",
    startProject: "Mulai Proyek Anda",
  },
  projectsData: {
    "pengujian-falling-weight-deflectometer-fwd": {
      title: "Pengujian Falling Weight Deflectometer (FWD)",
      client: "PT. Adaro Indonesia, Tbk.",
      location: "Jalan Hauling — Kalimantan",
      year: "2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pengujian struktural pengerasan jalan hauling menggunakan FWD untuk menilai sisa umur layan dan menyusun rekomendasi penanganan. Dikerjakan pada koridor berproduksi tinggi (±54 juta ton/tahun) milik PT. Adaro Indonesia, Tbk.",
    },
    "cement-treated-recycling-base-ctrb": {
      title: "Cement Treated Recycling Base (CTRB)",
      client: "Berbagai Klien",
      location: "Jaringan Jalan Hauling — Kalimantan",
      year: "2017–2020",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Perbaikan struktur pengerasan jalan dengan memanfaatkan material eksisting yang distabilisasi semen/chemical untuk kekuatan dan umur layan lebih panjang. Cakupan pekerjaan ±25 km dari total 68 km jaringan hauling, dilaksanakan bertahap pada 2017–2020.",
    },
    "upgrading-jalan-hauling-pt-borneo-indobara": {
      title: "Upgrading Jalan Hauling PT. Borneo Indobara",
      client: "PT. Borneo Indobara",
      location: "Kalimantan Selatan",
      year: "2021–2023",
      category: "Aspal Hotmix",
      status: "Selesai",
      description:
        "Peningkatan lapis permukaan jalan hauling dengan chipseal menggunakan aspal modifikasi PG 70 (PT. ABS) sepanjang ±20 km. Peningkatan kualitas permukaan turut mendukung kenaikan produksi dari 28 juta ton (2019) menjadi 48,6 juta ton (2024). Durasi pekerjaan 16 bulan.",
    },
    "hauling-road-2021-2024": {
      title: "Pembuatan Hauling Road",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Sedang Berlangsung",
      description:
        "Proyek pembangunan dan pemeliharaan jalan angkut (hauling road) untuk mendukung operasional pertambangan. Proyek ini mencakup pekerjaan tanah, perkerasan, dan perawatan rutin untuk memastikan jalan tetap aman dan andal untuk lalu lintas alat berat dalam berbagai kondisi cuaca.",
    },
    "earthwork-looping-cp2a": {
      title: "Pekerjaan Earthwork Looping CP2A",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Pekerjaan Tanah",
      status: "Selesai",
      description:
        "Proyek pekerjaan tanah (earthwork) untuk pembangunan jalan lingkar (looping road) di area CP2A. Proyek ini berfokus pada pemindahan tanah, pembentukan badan jalan, dan pemadatan untuk mempersiapkan konstruksi perkerasan jalan angkut tambang.",
    },
    "pemasangan-patok-jalan-hauling": {
      title: "Pemasangan Patok Jalan Hauling",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pemasangan patok sebagai penanda dan referensi geometri di sepanjang jalan angkut tambang untuk meningkatkan keselamatan dan keteraturan.",
    },
    "lpa-dumping-km-17": {
      title: "Lapis Pondasi Atas (LPA) Lokasi Dumping KM 17",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pekerjaan lapis pondasi atas (LPA) di area dumping KM 17 untuk meningkatkan daya dukung dan stabilitas permukaan jalan.",
    },
    "jasa-konstruksi-hauling-rad": {
      title: "Konstruksi Hauling Road",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Sedang Berlangsung",
      description:
        "Penyediaan jasa konstruksi komprehensif untuk jalan angkut (hauling road), mencakup berbagai tahap dari persiapan hingga penyelesaian.",
    },
    "earthwork-looping-cp2b": {
      title: "Pekerjaan Earthwork Looping CP2B",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Pekerjaan Tanah",
      status: "Selesai",
      description:
        "Proyek pekerjaan tanah (earthwork) untuk pembangunan jalan lingkar (looping road) di area CP2B, kelanjutan dari pekerjaan serupa untuk mendukung ekspansi operasional.",
    },
    "preventif-jalan-kosongan": {
      title: "Preventif Jalan Kosongan",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pekerjaan pemeliharaan preventif pada jalan kosongan untuk menjaga kondisi jalan dan mencegah kerusakan struktural sebelum terjadi.",
    },
    "earthwork-checkout-bunati": {
      title: "Pekerjaan Earthwork Check Out Point Port Bunati",
      client: "Perusahaan Tambang",
      location: "Pelabuhan Bunati",
      year: "2021-2024",
      category: "Pekerjaan Tanah",
      status: "Selesai",
      description:
        "Pekerjaan tanah untuk area check out point di Pelabuhan Bunati, mempersiapkan fondasi untuk fasilitas pendukung operasional pelabuhan.",
    },
    "maintenance-cs-hauling-road": {
      title: "Maintenance CS Hauling Road",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Sedang Berlangsung",
      description:
        "Pemeliharaan rutin pada lapisan permukaan Chipseal di jalan angkut untuk menjaga kualitas permukaan dan kenyamanan berkendara.",
    },
    "rambu-reflektroized": {
      title: "Rambu Reflektroized",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pemasangan rambu lalu lintas dengan bahan reflektif untuk meningkatkan visibilitas dan keselamatan di malam hari.",
    },
    "solar-stud-light-glass-stud-road": {
      title: "Solar Stud Light dan Glass Stud Road",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pemasangan paku jalan tenaga surya dan paku kaca untuk meningkatkan visibilitas dan keselamatan marka jalan di malam hari atau kondisi cuaca buruk.",
    },
    "konstruksi-rest-area-km-1-5-dan-16-5": {
      title: "Konstruksi Rest Area KM 1,5 Kosongan dan 16,5 Muatan",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Pekerjaan Tanah",
      status: "Selesai",
      description:
        "Pembangunan fasilitas rest area di KM 1,5 (jalur kosongan) dan KM 16,5 (jalur muatan) untuk menyediakan tempat istirahat yang aman dan nyaman bagi pengemudi.",
    },
    "maintenance-chipseal-hauling": {
      title: "Maintenance Chipseal Hauling",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Sedang Berlangsung",
      description:
        "Pekerjaan pemeliharaan rutin pada permukaan jalan angkut yang menggunakan lapisan chipseal untuk memperpanjang umur layanan jalan.",
    },
    "pelebaran-km-14": {
      title: "Pelebaran KM 14",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Proyek pelebaran jalan di KM 14 untuk meningkatkan kapasitas jalan dan kelancaran lalu lintas alat berat.",
    },
    "persiapan-north-stockpile": {
      title: "Pekerjaan Persiapan North Stockpile",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Pekerjaan Tanah",
      status: "Selesai",
      description:
        "Pekerjaan tanah dan persiapan lahan untuk area stockpile utara, termasuk pembersihan, perataan, dan pemadatan.",
    },
    "pelebaran-km-12": {
      title: "Pekerjaan Pelebaran KM 12",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Proyek pelebaran jalan di KM 12 untuk mengakomodasi peningkatan volume lalu lintas dan meningkatkan keselamatan.",
    },
    "peningkatan-antrian-truck-hauling": {
      title: "Peningkatan Jalan Hauling - Antrian Truck Hauling",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Peningkatan kapasitas dan manajemen area antrian truk di jalan hauling untuk mengurangi waktu tunggu dan meningkatkan efisiensi.",
    },
    "upgrade-hauling-road": {
      title: "Upgrade Hauling Road",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Sedang Berlangsung",
      description:
        "Proyek peningkatan komprehensif pada jalan hauling, meliputi perbaikan struktural, peningkatan permukaan, dan optimalisasi geometri jalan.",
    },
    "konstruksi-jalan-looping-cp9": {
      title: "Konstruksi Jalan Looping CP 9",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pembangunan jalan lingkar (looping road) baru di Check Point 9 untuk memperlancar arus lalu lintas dan meminimalkan persimpangan.",
    },
    "chipseal-rest-area-km-1-5-dan-16-5": {
      title: "Pekerjaan Chipseal Rest Area KM 1,5 Kosongan & KM 16,5",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Aspal Hotmix",
      status: "Selesai",
      description:
        "Aplikasi lapisan chipseal di rest area untuk meningkatkan kualitas permukaan, daya tahan, dan estetika.",
    },
    "additional-work-pelebaran-km-12": {
      title: "Additonal Work Pelebaran KM 12",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pekerjaan tambahan pada proyek pelebaran KM 12, mencakup penyesuaian drainase dan pekerjaan minor lainnya.",
    },
    "pavement-akses-jalan-aviary": {
      title: "Pavement Akses Jalan Aviary",
      client: "Swasta",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Aspal Hotmix",
      status: "Selesai",
      description:
        "Pengaspalan jalan akses menuju Aviary untuk menyediakan permukaan yang halus dan tahan lama.",
    },
    "peningkatan-10-ha-bunati": {
      title: "Peningkatan 10 HA Bunati",
      client: "Perusahaan Pelabuhan",
      location: "Bunati",
      year: "2021-2024",
      category: "Pekerjaan Tanah",
      status: "Selesai",
      description:
        "Proyek peningkatan dan persiapan lahan seluas 10 hektar di area Bunati untuk pengembangan fasilitas baru.",
    },
    "maintenance-road-bunati": {
      title: "Maintenance Road Bunati",
      client: "Perusahaan Pelabuhan",
      location: "Bunati",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Sedang Berlangsung",
      description:
        "Pekerjaan pemeliharaan jalan rutin di area Bunati untuk memastikan kondisi jalan tetap optimal dan aman.",
    },
    "maintenance-jalan-cp5": {
      title: "Maintenance Jalan CP 5",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Sedang Berlangsung",
      description:
        "Pemeliharaan rutin jalan di area Check Point 5 untuk memastikan kelancaran operasional.",
    },
    "north-drainage-work": {
      title: "Pekerjaan North Drainage Work",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Pekerjaan Tanah",
      status: "Selesai",
      description:
        "Proyek pekerjaan sistem drainase di area utara untuk mengendalikan aliran air dan mencegah erosi.",
    },
    "earthwork-jalan-looping-cp7": {
      title: "Pekerjaan Earthwork Jalan Looping CP7",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Pekerjaan Tanah",
      status: "Selesai",
      description:
        "Pekerjaan tanah untuk pembangunan jalan lingkar (looping road) di Check Point 7.",
    },
    "access-charging-station-temporary": {
      title: "Access Charging Station Temporary",
      client: "Swasta",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pembangunan akses jalan sementara menuju stasiun pengisian daya untuk kendaraan listrik.",
    },
    "akses-jalan-ke-charging-station": {
      title: "Akses Jalan Ke Charging Station",
      client: "Swasta",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pembangunan jalan akses permanen menuju stasiun pengisian daya, meningkatkan konektivitas dan dukungan untuk kendaraan listrik.",
    },
    "jalan-hauling-pit-kgb-kgu": {
      title: "Jalan Hauling Pit KGB dan KGU",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Selesai",
      description:
        "Pembangunan jalan angkut khusus untuk melayani area pit KGB dan KGU, mengoptimalkan siklus angkut material.",
    },
    "chipseal-rest-area-km-1-dan-4": {
      title: "Chipseal di Rest Area KM 1 dan KM 4 Muatan",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Aspal Hotmix",
      status: "Selesai",
      description:
        "Aplikasi chipseal di rest area KM 1 dan KM 4 (jalur muatan) untuk meningkatkan kualitas dan ketahanan permukaan.",
    },
    "pavement-preservation-jalur-muatan": {
      title: "Pavement Preservation Jalur Muatan",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Konstruksi Jalan",
      status: "Sedang Berlangsung",
      description:
        "Program preservasi perkerasan pada jalur muatan untuk memperpanjang umur layanan jalan dan menjaga keamanan.",
    },
    "double-chipseal-rest-area": {
      title: "Pelapisan Double Chipseal Rest Area",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Aspal Hotmix",
      status: "Selesai",
      description:
        "Aplikasi lapisan double chipseal di rest area untuk memberikan perlindungan ekstra dan permukaan yang lebih tahan lama.",
    },
    "double-chipseal-kosongan-km-1": {
      title: "Lapisan Double CHIPSEAL Kosongan KM 1",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Aspal Hotmix",
      status: "Selesai",
      description:
        "Aplikasi lapisan double chipseal di KM 1 jalur kosongan untuk meningkatkan kekuatan dan ketahanan perkerasan.",
    },
    "peningkatan-area-kosongan": {
      title: "Peningkatan Area Kosongan",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2021-2024",
      category: "Pekerjaan Tanah",
      status: "Selesai",
      description:
        "Proyek peningkatan dan penataan area jalur kosongan untuk meningkatkan efisiensi dan keamanan lalu lintas.",
    },
    "peningkatan-akses-looping-north-stockpile": {
      title:
        "Peningkatan Jalan Hauling Akses Looping North Stockpile Jalur Kosongan",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2025",
      category: "Konstruksi Jalan",
      status: "Sedang Berlangsung",
      description:
        "Peningkatan jalan angkut pada akses menuju looping North Stockpile di jalur kosongan untuk kelancaran operasional.",
    },
    "chipseal-rest-area-km-1-dan-4-2025": {
      title: "Pekerjaan Chipseal di Rest Area KM 1 dan KM 4",
      client: "Perusahaan Tambang",
      location: "Kalimantan",
      year: "2025",
      category: "Aspal Hotmix",
      status: "Sedang Berlangsung",
      description:
        "Pekerjaan pelapisan chipseal di rest area KM 1 dan KM 4 pada tahun 2025 untuk pemeliharaan dan peningkatan kualitas.",
    },
    //
    "akses-charging-station-bib": {
      title: "Pekerjaan Akses Charging Station BIB",
      client: "PT. Borneo Indobara",
      location: "Kalimantan",
      year: "2025",
      category: "Konstruksi Jalan",
      status: "Sedang Berlangsung",
      description:
        "Pembangunan jalan akses menuju stasiun pengisian daya di area BIB untuk mendukung infrastruktur kendaraan listrik.",
    },
    "stabilisasi-parkir-charging-station-bib": {
      title: "Pekerjaan Stabilisasi Area Parkir Charging Station BIB",
      client: "PT. Borneo Indobara",
      location: "Kalimantan",
      year: "2025",
      category: "Pekerjaan Tanah",
      status: "Sedang Berlangsung",
      description:
        "Pekerjaan stabilisasi tanah pada area parkir stasiun pengisian daya BIB untuk memastikan fondasi yang kuat dan tahan lama.",
    },
    // removed translations for projects with client 'Pemerintah Daerah'
  },
  clientsSection: {
    label: "Mitra Terpercaya Kami",
    title: "Bekerja dengan Pemimpin Industri",
    description:
      "Kami bangga berkolaborasi dengan institusi pemerintah dan perusahaan terkemuka di Kalimantan Tengah dan Kalimantan Selatan.",
  },
  supportedBySection: {
    label: "Didukung Oleh",
    title: "Didukung Mitra Peralatan Unggulan",
    description:
      "Kami memanfaatkan dukungan produsen peralatan terpercaya untuk menghadirkan kualitas dan kinerja yang konsisten di setiap proyek.",
  },
  careerSupportedBySection: {
    label: "Didukung Oleh Mitra Industri",
    title: "Bergabung Menjadi Bagian Sukses Bersama Kami",
    description:
      "Program ini telah dimulai PT SAN & PT BBR dan bekerja sama dengan institusi-institusi pendidikan untuk menyediakan wadah bagi anggota institusi agar bisa mengembangkan kemampuan dan memulai karir dibidangnya secara profesional.",
  },
  // Per-service translations (ID)
  services: {
    eatwork: {
      title: "Pekerjaan Tanah",
      description:
        "Pekerjaan tanah menyeluruh meliputi site clearing, cut & fill, perataan (grading), dan pemadatan untuk pondasi konstruksi yang kokoh.",
      features: [
        "Site clearing & stripping",
        "Cut, fill & grading",
        "Compaction & drainage",
      ],
    },
    "upgrade-unbound": {
      title: "Upgrade Unbound",
      description:
        "Peningkatan lapisan pondasi agregat (unbound) melalui perbaikan material, geometri, serta pemadatan untuk meningkatkan daya dukung jalan.",
      features: [
        "Reprofiling & reshaping",
        "Material improvement",
        "Compaction quality control",
      ],
    },
    ctrb: {
      title: "Cement Treated Recycling Base (CTRB)",
      description:
        "Stabilisasi material eksisting dengan semen/chemical untuk membentuk lapis pondasi daur ulang yang lebih kuat dan awet.",
      features: [
        "In-place recycling",
        "Semen/chemical stabilization",
        "Faster reopening",
      ],
    },
    ctrsb: {
      title: "Cement Treated Recycling Sub Base (CTRSB)",
      description:
        "Perkuatan lapis pondasi bawah melalui stabilisasi semen untuk meningkatkan modulus dan memperpanjang umur layan perkerasan.",
      features: [
        "Subbase improvement",
        "Strength & stiffness gain",
        "Optimized mix design",
      ],
    },
    chipseal: {
      title: "Chipseal",
      description:
        "Pelapisan permukaan jalan dengan agregat dan binder untuk proteksi, skid resistance, dan ketahanan terhadap cuaca.",
      features: [
        "Single/Double chipseal",
        "Binder modifikasi",
        "Quick turnaround",
      ],
    },
    "aspal-hotmix-modifikasi-coldmix": {
      title: "Aspal Hotmix, Modifikasi, Cold Mix",
      description:
        "Layanan pengerasan aspal lengkap: hotmix untuk kinerja tinggi, aspal modifikasi untuk daya tahan ekstra, serta cold mix untuk perbaikan cepat.",
      features: [
        "HMA & SMA",
        "Aspal modifikasi (PG/Polymer)",
        "Cold mix patching",
      ],
    },
    "bridge-construction-maintenance": {
      title: "Konstruksi & Pemeliharaan Jembatan",
      description:
        "Pembangunan jembatan baru serta pemeliharaan struktural menyeluruh untuk menjaga keselamatan dan kinerja jangka panjang.",
      features: [
        "Pekerjaan struktur atas & bawah",
        "Inspeksi struktur dan rehabilitasi",
        "Manajemen lalu lintas & keselamatan",
      ],
      scope: [
        "Pekerjaan struktur atas dan bawah",
        "Penggantian bearing, expansion joint, dan dek",
        "Pelapisan protektif & pencegahan korosi",
      ],
      specs: [
        { label: "Fokus", value: "Desain-bangun, penguatan, dan pemeliharaan" },
        { label: "Mutu", value: "Uji beban & laporan inspeksi rinci" },
      ],
    },
    "soil-cement-base": {
      title: "Soil-Cement Base",
      description:
        "Stabilisasi lapisan pondasi dengan campuran tanah-semen untuk meningkatkan kekuatan dan modulus perkerasan.",
      features: [
        "Perancangan campuran & pencampuran in-situ",
        "Kontrol kadar air & kepadatan",
        "Pengawetan & pengujian mutu",
      ],
      scope: [
        "Evaluasi material & mix design",
        "Pulverisasi, blending, dan pencampuran in-situ",
        "Pemadatan berlapis dan curing terkontrol",
      ],
      specs: [
        { label: "Binder", value: "Semen Portland 3–8%" },
        { label: "QC", value: "Uji kepadatan lapangan & kuat tekan" },
      ],
    },
    "rigid-pavement": {
      title: "Pengerasan Beton",
      description:
        "Konstruksi pengerasan beton bertulang maupun tanpa tulangan untuk daya tahan lalu lintas tinggi dan perawatan minimal.",
      features: [
        "Optimasi desain & campuran",
        "Slipform paving & pemasangan panel",
        "Penyegelan sambungan & curing",
      ],
      scope: [
        "Persiapan subbase & pemasangan dowel",
        "Pengecoran slipform atau konvensional",
        "Perawatan, tekstur permukaan, & sealing",
      ],
      specs: [
        { label: "Tebal", value: "200–320 mm (typical)" },
        { label: "Tulangan", value: "Dowel & tie bar sesuai desain" },
      ],
    },
    "overlay-road-method": {
      title: "Metode Overlay Jalan",
      description:
        "Pelapisan ulang pengerasan jalan dengan aspal atau beton untuk memulihkan struktur dan kenyamanan berkendara.",
      features: [
        "Survey kondisi & desain penanganan",
        "Persiapan permukaan & milling",
        "Penghamparan overlay & finishing",
      ],
      scope: [
        "Survei kondisi & analisis struktural",
        "Milling, pembersihan, dan tack coat",
        "Penghamparan overlay & kontrol kualitas",
      ],
      specs: [
        { label: "Material", value: "Overlay HMA atau beton semen" },
        { label: "Lalu lintas", value: "Rekayasa lalu lintas bertahap" },
      ],
    },
    "irrigation-system": {
      title: "Sistem Irigasi",
      description:
        "Pembangunan dan rehabilitasi jaringan irigasi agar distribusi air ke lahan berjalan efisien dan andal.",
      features: [
        "Konstruksi kanal & intake",
        "Bangunan pengatur aliran",
        "Perencanaan operasi & pemeliharaan",
      ],
      scope: [
        "Pekerjaan tanah kanal dan pemasangan lining",
        "Instalasi pintu air, bendung, dan kontrol debit",
        "Pengujian, kalibrasi, dan pelatihan operator",
      ],
      specs: [
        { label: "Debit", value: "Disesuaikan dengan rencana jaringan" },
        { label: "Kontrol", value: "Pintu manual atau otomatis" },
      ],
    },
    "pedestrian-construction-needs": {
      title: "Fasilitas Pejalan Kaki",
      description:
        "Penyediaan fasilitas pedestrian seperti trotoar, ramp akses, penyeberangan, dan elemen keselamatan kota.",
      features: [
        "Konstruksi trotoar & ramp",
        "Desain aksesibilitas & keselamatan",
        "Integrasi street furniture",
      ],
      scope: [
        "Pemasangan trotoar, ramp, dan tactile paving",
        "Pemasangan handrail, guard, dan marka keselamatan",
        "Penerangan jalan, kursi, dan penataan lanskap",
      ],
      specs: [
        { label: "Standar", value: "Mengacu SNI aksesibilitas & K3" },
        { label: "Finishing", value: "Permukaan anti-slip tahan lama" },
      ],
    },
    "u-ditch-construction": {
      title: "Konstruksi U-Ditch",
      description:
        "Instalasi saluran U-ditch pracetak untuk solusi drainase terbuka yang cepat dan mudah dirawat.",
      features: [
        "Koordinasi fabrikasi pracetak",
        "Penggalian & penyiapan bedding",
        "Sealing sambungan & finishing",
      ],
      scope: [
        "Survey trase dan pekerjaan galian",
        "Penataan bedding dan pemasangan elemen pracetak",
        "Penutupan sambungan, backfilling, dan finishing",
      ],
      specs: [
        { label: "Ukuran", value: "Lebar 300–1.200 mm" },
        { label: "Material", value: "Beton bertulang pracetak" },
      ],
    },
    "box-culvert-construction": {
      title: "Konstruksi Box Culvert",
      description:
        "Pemasangan box culvert pracetak atau cor di tempat untuk penyaluran air dan penyeberangan utilitas.",
      features: [
        "Desain hidrolik & dimensioning",
        "Pekerjaan pondasi & bedding",
        "Pemasangan segmen & grouting",
      ],
      scope: [
        "Perencanaan hidrolik dan shop drawing",
        "Persiapan dasar & pengecoran plat",
        "Pemasangan segmen, sealing, & penimbunan",
      ],
      specs: [
        { label: "Bentang", value: "1,5–4,0 m (typical)" },
        { label: "Metode", value: "Pracetak atau cor di tempat" },
      ],
    },
    "drain-system-constructions": {
      title: "Konstruksi Sistem Drainase",
      description:
        "Perencanaan dan pembangunan drainase permukaan serta bawah tanah untuk mengendalikan limpasan dan genangan.",
      features: [
        "Survey & analisis hidrolik",
        "Pengerjaan drain tertutup & terbuka",
        "Akses perawatan & inspeksi",
      ],
      scope: [
        "Pemodelan hidrologi & hidrolik",
        "Pembangunan saluran terbuka maupun tertutup",
        "Pemasangan manhole, inlet, dan akses perawatan",
      ],
      specs: [
        { label: "Sistem", value: "Drainase permukaan & bawah permukaan" },
        { label: "Perawatan", value: "Akses inspeksi terintegrasi" },
      ],
    },
    "road-median-construction": {
      title: "Konstruksi Median Jalan",
      description:
        "Pembangunan median jalan berikut perlengkapan keselamatan, drainase, dan lanskap pemisah arus.",
      features: [
        "Desain geometrik & survei",
        "Pemasangan barrier & kerb",
        "Integrasi penerangan & lanskap",
      ],
      scope: [
        "Penentuan trase, pengukuran, dan galian median",
        "Pemasangan barrier, kerb, saluran & utilitas",
        "Penerangan, penanaman, dan signage median",
      ],
      specs: [
        { label: "Keselamatan", value: "Barrier, delineator, dan reflektor" },
        { label: "Drainase", value: "Saluran median & scupper" },
      ],
    },
  },
  newsSection: {
    label: "Berita Terkini",
    title: "Tetap Update dengan Perkembangan Kami",
    description:
      "Baca tentang proyek terbaru kami, pencapaian, dan wawasan industri.",
    readMore: "Baca Selengkapnya",
    viewAll: "Lihat Semua Berita",
    pageTitle: "Berita & Wawasan PT SAN & PT BBR",
    pageDescription:
      "Pembaruan proyek, praktik terbaik, dan informasi industri konstruksi dari PT SAN & PT BBR.",
    detail: {
      backToNews: "Kembali ke Berita",
      shareLabel: "Bagikan:",
      shareButton: "Bagikan",
      copyLinkButton: "Salin tautan",
      copyLinkTitle: "Tautan disalin",
      copyLinkDescription: "URL artikel disalin ke clipboard",
      moreArticles: "Artikel Lainnya",
      summaryTitle: "Ringkasan",
      categoryLabel: "Kategori",
      contentMissing: {
        title: "Konten tidak tersedia",
        description:
          "Konten artikel belum tersedia. Silakan kembali lagi nanti.",
      },
      linkedIn: "LinkedIn",
      whatsapp: "WhatsApp",
      twitter: "X/Twitter",
    },
    featured: "Unggulan",
    categories: {
      "Company News": "Berita Perusahaan",
    },
  },
  ctaSection: {
    title: "Siap Memulai Proyek Anda?",
    description:
      "Dapatkan konsultasi gratis dan penawaran untuk proyek konstruksi Anda. Tim ahli kami siap membantu mewujudkan visi Anda.",
    benefits: [
      "Konsultasi gratis & survei lokasi",
      "Harga kompetitif dengan penawaran transparan",
      "Tim berpengalaman dengan rekam jejak terbukti",
      "Material berkualitas & peralatan modern",
      "Jaminan pengiriman proyek tepat waktu",
      "Garansi proyek penuh & dukungan",
    ],
    contactInfo: {
      phone: "Hubungi kami langsung",
      email: "Kirim email kepada kami",
      hours: {
        title: "Jam Operasional",
        description:
          "Tim layanan kami siap membantu selama jam operasional berikut.",
        schedule: [
          {
            day: "Senin - Kamis",
            time: "08.00 - 12.00, 12.30 - 17.00",
          },
          {
            day: "Jumat",
            time: "08.00 - 11.00, 12.30 - 17.00",
          },
          {
            day: "Sabtu",
            time: "Tutup",
            status: "closed",
          },
          {
            day: "Minggu",
            time: "Tutup",
            status: "closed",
          },
        ],
      },
    },
    getQuote: "Dapatkan Penawaran Gratis",
    viewProducts: "Lihat Produk Kami",
    contactUs: "Hubungi Kami",
    readyToStart: "Siap Memulai?",
  },
  companyStrategy: {
    label: "Strategi Perusahaan",
    title: "SIPADU",
    description:
      "Merupakan singkatan dari Sinergi, Integritas, Perlindungan, Amanah, Dedikasi, dan Unggul — pedoman kerja PT SAN & PT BBR untuk mendukung pembangunan nasional dengan keselamatan, mutu, dan efisiensi.",
    ptSan: {
      title: "Strategi PT SAN",
      description: "Fokus pada pemeliharaan preventif dan ketersediaan unit tinggi untuk mendukung operasional klien.",
    },
    ptBbr: {
      title: "Strategi PT BBR",
      description: "Mengutamakan efisiensi operasional dan keselamatan kerja dalam setiap eksekusi proyek tambang.",
    },
    sipadu: {
      sinergi: {
        title: "Sinergi",
        description: "Kolaborasi lintas divisi untuk hasil yang optimal.",
      },
      integritas: {
        title: "Integritas",
        description: "Menjunjung etika, transparansi, dan akuntabilitas.",
      },
      perlindungan: {
        title: "Perlindungan",
        description: "Keselamatan dan kesehatan kerja sebagai prioritas.",
      },
      amanah: {
        title: "Amanah",
        description: "Kepercayaan klien dijaga dengan komitmen penuh.",
      },
      dedikasi: {
        title: "Dedikasi",
        description: "Perbaikan berkelanjutan dan inovasi teknologi.",
      },
      unggul: {
        title: "Unggul",
        description: "Perbaikan berkelanjutan dan inovasi teknologi.",
      },
    },
    logoMeaning: {
      title: "Makna Perusahaan",
      companyName: "PT SAN & PT BBR",
      items: {
        redColor: {
          title: "Warna Merah",
          description: "Pemberani, Serius, Komitmen dan Profesional.",
        },
        redCube: {
          title: "Kotak kubus warna merah",
          description:
            "Memberikan pemahaman dengan kekuatan, stabilitas, keandalan dan keamanan.",
        },
        whiteCenter: {
          title: "Kotak di tengah warna putih",
          description:
            "Memberikan keadilan di dalam lingkungan kerja agar selalu memberikan kinerja yang terbaik.",
        },
        blackLines: {
          title: "Kotak garis warna hitam",
          description:
            "Menekankan kedisiplinan diri terhadap segala pekerjaan agar terciptanya harmonisasi lingkungan kerja.",
        },
      },
    },
    strategies: {
      excellence: {
        title: "Keunggulan Operasional",
        description:
          "Terus meningkatkan proses dan metodologi kami untuk memberikan hasil yang unggul.",
      },
      innovation: {
        title: "Inovasi Teknologi",
        description:
          "Mengadopsi teknologi konstruksi terdepan dan praktik berkelanjutan.",
      },
      sustainability: {
        title: "Keberlanjutan Lingkungan",
        description:
          "Berkomitmen pada praktik konstruksi dan material yang bertanggung jawab lingkungan.",
      },
      partnership: {
        title: "Kemitraan Strategis",
        description:
          "Membangun hubungan jangka panjang dengan klien, pemasok, dan mitra industri.",
      },
    },
  },
  career: {
    label: "Karir",
    internPageLabel: "Program Magang",
    internPageTitle: "Bangun Masa Depan, Bergabung Bersama Kami",
    internPageDescription:
      "Kami membuka peluang untuk talenta-talenta muda dari institusi pendidikan agar bisa mengembangkan potensi profesi dalam bidangnya.",
    pageTitle: "Bertumbuh Bersama, Membangun Indonesia",
    pageDescription:
      "Temukan peluang berkarir di proyek-proyek nyata. Kami mencari talenta disiplin yang mengutamakan keselamatan, kualitas, dan kerja tim.",
    openPositionsLabel: "Peluang Berkarir",
    internPositionsLabel: "Program Magang",
    internPositionsDescription:
      "Program magang kami menawarkan pengalaman praktis langsung, bimbingan dari para ahli kontruksi, dan eksposur proyek nyata untuk mengembangkan keterampilan profesional Anda.",
    requirementsLabel: "Persyaratan",
    jobs: {
      "site-engineer-intern": {
        title: "Magang Site Engineer",
        department: "Engineering",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Magang",
        description:
          "Mempelajari praktik teknik lapangan, membantu dokumentasi proyek, dan mendapatkan pengalaman langsung dalam proyek konstruksi jalan.",
        requirements: [
          "Sedang menempuh S1 Teknik Sipil (minimal semester 5)",
          "Minat kuat pada konstruksi dan infrastruktur",
          "Bersedia bekerja di kondisi lapangan",
          "Kemampuan komunikasi dan kerja tim yang baik",
          "Bisa ditempatkan & ditugaskan di daerah mana saja",
        ],
      },
      "safety-hse-intern": {
        title: "Magang Safety & HSE",
        department: "Health, Safety & Environment",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Magang",
        description:
          "Mendukung tim HSE dalam inspeksi keselamatan, pelaporan insiden, dan implementasi protokol keselamatan di lokasi konstruksi.",
        requirements: [
          "Sedang menempuh pendidikan K3, Teknik Lingkungan, atau bidang terkait (minimal semester 5)",
          "Pemahaman dasar prinsip HSE",
          "Teliti dan proaktif",
          "Mampu bekerja mandiri dan dalam tim",
          "Bisa ditempatkan & ditugaskan di daerah mana saja",
        ],
      },
      "estimator-planning-intern": {
        title: "Magang Estimator & Planning",
        department: "Project Management",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Magang",
        description:
          "Membantu dalam estimasi biaya, penjadwalan proyek, dan perencanaan sumber daya untuk proyek konstruksi jalan dan infrastruktur.",
        requirements: [
          "Sedang menempuh S1 Teknik Sipil atau bidang terkait (minimal semester 5)",
          "Familiar dengan Microsoft Excel dan alat manajemen proyek dasar",
          "Pola pikir analitis dan perhatian terhadap detail",
          "Kemampuan matematis dan pemecahan masalah yang baik",
          "Bisa ditempatkan & ditugaskan di daerah mana saja",
        ],
      },
      "project-engineer": {
        title: "Project Engineer",
        department: "Engineering",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Full-time",
        description:
          "Bertanggung jawab atas perencanaan teknis, koordinasi pelaksanaan, dan kontrol kualitas proyek konstruksi jalan dan infrastruktur.",
        requirements: [
          "S1 Teknik Sipil atau setara",
          "Minimal 3 tahun pengalaman di proyek jalan/aspal",
          "Menguasai manajemen waktu, estimasi biaya, dan K3",
          "Mampu bekerja di lapangan dan mobile",
          "Bisa ditempatkan & ditugaskan di daerah mana saja",
        ],
      },
      "site-supervisor": {
        title: "Site Supervisor",
        department: "Operations",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Full-time",
        description:
          "Memimpin tim lapangan, memastikan pekerjaan sesuai spesifikasi, serta menyusun laporan harian dan koordinasi material/equipment.",
        requirements: [
          "Diploma/S1 Teknik Sipil atau pengalaman setara",
          "Pengalaman 2+ tahun sebagai pengawas lapangan",
          "Memahami gambar kerja, metode pelaksanaan, dan mutu",
          "Komunikatif dan disiplin",
          "Bisa ditempatkan & ditugaskan di daerah mana saja",
        ],
      },
      "heavy-equipment-operator": {
        title: "Operator Alat Berat",
        department: "Operations",
        location: "Kalimanatan Tengah, Kalimantan Selatan",
        employmentType: "Kontrak",
        description:
          "Mengoperasikan alat berat (grader, excavator, compactor) untuk pekerjaan <em>earthwork</em> dan pengaspalan sesuai SOP keselamatan.",
        requirements: [
          "Memiliki sertifikat operator alat berat yang valid",
          "Pengalaman mengoperasikan minimal 2 jenis alat",
          "Mengutamakan keselamatan kerja dan perawatan alat",
          "Bisa ditempatkan & ditugaskan di daerah mana saja",
        ],
      },
    },
    cta: {
      notFoundTitle: "Butuh info magang lebih lanjut ?",
      notFoundDescriptionPrefix: "Konsultasikan ke",
      sendCvButton: "Kirim CV",
      applyNow: "Lamar Sekarang",
    },
  },
  contact: {
    hero: {
      label: "Kontak",
      title: "Hubungi Kami",
      description:
        "Siap berdiskusi tentang kebutuhan proyek Anda? Tim kami akan merespons cepat dengan rekomendasi solusi dan estimasi.",
    },
    form: {
      title: "Kirim Pesan",
      description:
        "Isi formulir dan tim kami akan membalas dalam 1–2 hari kerja.",
      nameLabel: "Nama",
      namePlaceholder: "Nama lengkap Anda",
      emailLabel: "Email",
      emailPlaceholder: "anda@mail.com",
      subjectLabel: "Subjek",
      subjectPlaceholder: "Konsultasi proyek, penawaran, dll.",
      messageLabel: "Pesan",
      messagePlaceholder: "Jelaskan kebutuhan Anda singkatnya",
      sendButton: "Kirim Pesan",
    },
    details: {
      title: "Detail Kontak",
      addressLabel: "Alamat Kantor",
      emailLabel: "Email",
      getDirections: "Dapatkan Rute",
      secondaryEmailLine: "atau rekrut kami di {email}",
    },
    validation: {
      nameRequired: "Nama harus diisi",
      emailInvalid: "Email tidak valid",
      subjectRequired: "Subjek harus diisi",
      messageMin: "Pesan minimal 10 karakter",
    },
    toast: {
      success: "Pesan terkirim. Kami akan menghubungi Anda segera.",
    },
    mail: {
      subjectTemplate: "Aplikasi: {subject}",
      generalSubject: "Aplikasi Umum",
    },
  },
  gallery: {
    label: "Galeri",
    title: "Dokumentasi Visual Proyek",
    description:
      "Dokumentasi visual dari proyek-proyek berkualitas tinggi yang telah kami selesaikan.",
    ui: {
      filterBy: "Filter berdasarkan:",
      viewLabel: "Tampilan:",
      gridAria: "Tampilan grid",
      byCategoryAria: "Tampilan berdasarkan kategori",
      keyboardHint:
        "Tip: Gunakan Ctrl+1/2/3/4 untuk filter cepat, Ctrl+G untuk ubah tampilan",
    },
    emptyState: {
      title: "Tidak ada foto",
      description: "Tidak ada dokumentasi untuk kategori yang dipilih.",
    },
    autoplay: {
      play: "Putar slideshow",
      pause: "Jeda slideshow",
      prevAria: "Gambar sebelumnya",
      nextAria: "Gambar berikutnya",
    },
    overlay: {
      photoPrefix: "Foto",
      projectLabelPrefix: "Proyek",
      clickToView: "Klik untuk melihat detail",
    },
    category: {
      adaro: {
        title: "Site PT. Adaro Indonesia",
        description:
          "Dokumentasi proyek infrastruktur untuk PT. Adaro Indonesia",
        badge: "PT. Adaro",
      },
      kalimantan: {
        title: "Government Project - Central Kalimantan",
        description:
          "Dokumentasi proyek infrastruktur pemerintah di Kalimantan Tengah",
        badge: "Kalimantan",
      },
      borneo: {
        title: "Site PT. Borneo Indobara",
        description:
          "Dokumentasi proyek infrastruktur untuk PT. Borneo Indobara",
        badge: "PT. Borneo",
      },
      allTitle: "Semua Proyek",
      allDescription: "Semua dokumentasi proyek yang telah kami selesaikan",
    },
    showingLabel: "Menampilkan",
    photosNoun: "foto",
    clickToViewDetail: "Klik untuk melihat detail",
    card: { hdBadge: "HD" },
    stats: {
      projectDocs: "Dokumentasi Proyek",
      projectCategories: "Kategori Proyek",
      qualityAssured: "Kualitas Terjamin",
      completedProjects: "Proyek Selesai",
    },
    modal: { companyName: "PT SAN & PT BBR" },
    ariaGalleryNavigation:
      "{title} galeri - gunakan tombol panah untuk navigasi",
  },
  location: {
    label: "Lokasi",
    pageTitle: "Lokasi & Jangkauan Operasional",
    pageDescription:
      "Temukan titik koordinat kantor pusat, kantor operasional, gudang, dan tim site support kami di seluruh Indonesia.",
    map: {
      coverageBadge: "Jangkauan Kami",
      headline: "Jejak Operasional di Seluruh Indonesia",
      subheadline:
        "Jelajahi lokasi strategis yang mendukung operasi nasional kami — dari kantor pusat hingga gudang regional dan tim pendukung lapangan.",
      category: {
        headOffice: "Kantor Pusat",
        strategicPartner: "Mitra Strategis",
        industryPartner: "Mitra Industri",
      },
      zoomOut: "Perkecil tampilan",
      viewOnMap: "Lihat di Peta",
      showLess: "Tampilkan lebih sedikit",
      viewMoreTemplate: "Lihat lainnya ({count})",
    },
  },
  common: {
    loading: "Memuat...",
    home: "Beranda",
    works: "Karya",
    services: "Layanan",
    all: "Semua",
    or: "atau",
    backToHome: "Kembali ke Beranda",
    goBack: "Kembali",
    backToTop: "Kembali ke atas",
    viewNews: "Lihat Berita",
    viewDetails: "Lihat Detail",
    contactUs: "Hubungi Kami",
    keyDetails: "Detail Utama",
    client: "Klien",
    location: "Lokasi",
    year: "Tahun",
    status: "Status",
    category: "Kategori",
    projectOverview: "Gambaran Proyek",
    keyFeatures: "Fitur Utama",
    relatedProjects: "Proyek Terkait",
    pageNotFound: "Ups! Halaman tidak ditemukan",
    pageNotFoundDescription:
      "Kami tidak dapat menemukan halaman yang Anda cari. Coba tautan di bawah ini atau kembali ke beranda.",
  },
  footer: {
    company: {
      title: "PT SAN & PT BBR",
      description:
        "Mitra terpercaya Anda dalam solusi rental alat berat dan jasa konstruksi tambang.",
      followUs: "Ikuti Kami",
    },
    quickLinks: {
      title: "Tautan Cepat",
      aboutUs: "Tentang Kami",
      ourTeam: "Tim Kami",
      services: "Layanan",
      projects: "Proyek",
      news: "Berita",
      career: "Karir",
      location: "Lokasi",
      contact: "Kontak",
    },
    services: {
      title: "Layanan Kami",
      earthwork: "Pekerjaan Tanah",
      asphalt: "Pekerjaan Aspal",
      concrete: "Pekerjaan Beton",
      maintenance: "Pemeliharaan",
    },
    contact: {
      title: "Info Kontak",
      address: "Banjarmasin, Kalimantan Selatan, Indonesia",
      phone: "+62 511 123 4567",
      email: PRIMARY_EMAIL,
      emailSecondary: SECONDARY_EMAIL,
      emails: [...ALL_EMAILS],
    },
    location: {
      title: "Lokasi Kami",
      openInGoogleMaps: "Buka di Google Maps",
    },
    newsletter: {
      title: "Buletin",
      error: "Terjadi kesalahan. Silakan coba lagi.",
    },
    ctaLookingForPartner: "Mencari mitra yang terpercaya?",
    ctaLetsBuild: "Mari membangun sesuatu yang hebat bersama.",
    copyright: "© 2024 PT SAN & PT BBR. Semua hak dilindungi.",
  },
};
