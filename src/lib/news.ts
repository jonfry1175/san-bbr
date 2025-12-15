import companyLogo from "@/assets/company-logo.png";
import gatheringImage from "@/assets/news/gathering-pt-khs-direktur-untuk-keakraban.jpg";
import fatigueManagementHero from "@/assets/news/fatigue-management-family-visit-hero.webp";
import kaltengCircuit from "@/assets/news/kalteng-circuit-falery-tuwan.gif";
import constructionSecurityProgram from "@/assets/news/construction-security-program-kapuas.jpeg";
import gatheringTeamEvent from "@/assets/news/gathering-khs-team-event.jpg";
import gatheringPhoto1 from "@/assets/news/gathering-khs-group-photo-1.png";
import gatheringPhoto2 from "@/assets/news/gathering-khs-group-photo-2.png";
import gatheringPhoto3 from "@/assets/news/gathering-khs-group-photo-3.png";
import type { TranslationResources } from "@/lib/i18n";

export type NewsArticle = {
  id: number;
  slug: string;
  /** Default (ID) title */
  title: string;
  /** Default (ID) excerpt */
  excerpt: string;
  /** Category key (e.g., "Company News") */
  category: string;
  author: string;
  date: string; // ISO date string
  readTime: string;
  image: string;
  featured?: boolean;
  /** Default (ID) content paragraphs */
  content?: string[];
  contentImages?: string[];
  sourceUrl?: string;
  translations?: {
    EN?: {
      title?: string;
      excerpt?: string;
      content?: string[];
      category?: string; // optional override if category wording differs
    };
  };
};

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    slug: "pt-khs-ajak-keluarga-pekerja-jadi-mitra-keselamatan-fokus-atasi-kelelahan-kerja",
    title:
      "PT. KHS Ajak Keluarga Pekerja Jadi Mitra Keselamatan, Fokus Atasi Kelelahan Kerja",
    excerpt:
      'Angsana, 31 Juli 2025 - PT. Karya Halim Sampoerna (KHS) menggelar acara inovatif bertajuk "Off The Job Safety - Family Visit to KHS 2025" yang...',
    category: "Company News",
    author: "Admin KHS",
    date: "2025-09-09",
    readTime: "1 min read",
    image: fatigueManagementHero,
    content: [
      'Angsana, 31 Juli 2025 - PT. Karya Halim Sampoerna (KHS) menggelar acara inovatif bertajuk "Off The Job Safety - Family Visit to KHS 2025" yang melibatkan keluarga para pekerjanya. Mengusung tema "Keluarga Peduli, Pekerja Aman: Bersama Atasi Kelelahan Kerja," kegiatan ini bertujuan untuk meningkatkan kesadaran keluarga mengenai peran penting mereka dalam mendukung keselamatan kerja, khususnya dalam pengelolaan kelelahan (fatigue management). Acara yang dihadiri oleh 30 peserta dari kalangan keluarga pekerja ini diselenggarakan di ruang pertemuan perusahaan dan berlangsung selama tiga jam.',
      "Program ini dirancang untuk memberikan edukasi mendalam kepada keluarga mengenai dampak kelelahan kerja. Para peserta diberikan pemahaman tentang definisi fatigue, gejala, serta dampaknya yang dapat menurunkan kewaspadaan dan meningkatkan risiko kecelakaan di lingkungan kerja pertambangan. Materi utama menekankan bahwa dukungan keluarga melalui pola tidur yang teratur, asupan nutrisi sehat, dan dukungan psikologis merupakan faktor krusial untuk membantu pekerja pulih dan tetap bugar. Dengan demikian, perusahaan memposisikan keluarga sebagai mitra strategis dalam menciptakan budaya keselamatan yang komprehensif.",
      "Rangkaian acara dikemas secara interaktif dan menarik untuk seluruh anggota keluarga. Selain sesi edukasi utama mengenai fatigue management, kegiatan juga diisi dengan pengenalan area kerja untuk memberikan gambaran mengenai lingkungan dan potensi bahaya yang dihadapi para pekerja setiap hari. Untuk mencairkan suasana dan mempererat hubungan, acara ini juga dimeriahkan dengan sesi sharing, kuis interaktif, dan permainan keluarga yang disambut antusias oleh para peserta.",
      "Berdasarkan evaluasi akhir, kegiatan ini dinilai sangat berhasil mencapai tujuannya. Hasil kuesioner menunjukkan respon yang sangat positif dari peserta, di mana pemahaman mereka mengenai risiko kelelahan kerja dan cara mendukung pekerja di rumah meningkat secara signifikan. Banyak peserta yang mengapresiasi program ini dan mengusulkan agar kegiatan serupa dapat diadakan secara berkala di masa mendatang. Inisiatif ini membuktikan bahwa pelibatan keluarga secara aktif dapat memberikan dampak positif dalam memperkuat budaya keselamatan kerja dari rumah hingga ke lokasi kerja.",
    ],
    translations: {
      EN: {
        title:
          "KHS Engages Workers' Families as Safety Partners to Address Fatigue",
        excerpt:
          'Angsana, July 31, 2025 – PT. Karya Halim Sampoerna (KHS) held an innovative program titled "Off The Job Safety - Family Visit to KHS 2025" that...',
        content: [
          'Angsana, July 31, 2025 – PT. Karya Halim Sampoerna (KHS) organized an innovative program titled "Off The Job Safety - Family Visit to KHS 2025" involving employees\' families. Carrying the theme "Caring Families, Safe Workers: Together Managing Fatigue," the event aimed to increase family awareness of their important role in supporting workplace safety, particularly in fatigue management. The three-hour session was attended by 30 family participants at the company meeting room.',
          "The program was designed to provide in-depth education to families about the impact of work-related fatigue. Participants gained understanding of the definition, symptoms, and consequences of fatigue that can reduce alertness and increase accident risk in mining operations. The core material emphasized that family support through consistent sleep patterns, proper nutrition, and psychological encouragement is crucial to help workers recover and stay fit. This positions families as strategic partners in building a comprehensive safety culture.",
          "The event was packaged interactively and attractively for all family members. In addition to the main educational session on fatigue management, activities included an introduction to the work area to give insight into the environment and potential hazards workers face daily. To create an engaging atmosphere and strengthen relationships, there were sharing sessions, interactive quizzes, and family games enthusiastically received by participants.",
          "Based on the final evaluation, the program successfully achieved its objectives. Survey results showed a significant increase in participants' understanding of fatigue risks and how to support workers at home. Many expressed appreciation and suggested similar programs be held regularly. This initiative demonstrates that active family involvement can positively reinforce a safety culture from home to the worksite.",
        ],
        category: "Company News",
      },
    },
    sourceUrl:
      "https://karyahalimsampoerna.id/pt-khs-ajak-keluarga-pekerja-jadi-mitra-keselamatan-fokus-atasi-kelelahan-kerja/",
  },

  {
    id: 3,
    slug: "keren-kalteng-miliki-sirkuit-bertaraf-internasional",
    title: "Keren... Kalteng Miliki Sirkuit Bertaraf Internasional",
    excerpt:
      "Masyarakat Kalimantan Tengah wajar berbangga, karena sebentar lagi akan memiliki sirkuit bertaraf internasional di Jalan Tjilik Riwut Kilometer 29...",
    category: "Company News",
    author: "Admin KHS",
    date: "2025-09-05",
    readTime: "1 min read",
    image: kaltengCircuit,
    content: [
      "Masyarakat Kalimantan Tengah wajar berbangga, karena sebentar lagi akan memiliki sirkuit bertaraf internasional di Jalan Tjilik Riwut Kilometer 29 Palangka Raya, Kalimantan Tengah.",
      "Pembangunan Sirkuit dengan panjang 1400 meter tersebut, tak lepas dari dukungan pimpinan PT. Karya Halim Sampoerna Michael Halim , Ketua DPD Komite Nasional Pemuda Indonesia (KNPI) Kalteng Fairid Naparin dan pengusaha muda John Garinda.",
      '"Saya sangat berterima kasih atas dukungan lahan dan peralatan berat dari ketiga tokoh itu, hingga sirkuit bertaraf nasional ini dapat terwujud di Kalteng,"kata Pelaksana Tugas (Plt) Kepala Dinas Pemuda dan Olahraga (Dispora) Kalimantan Tengah, Falery Tuwan, di Palangka Raya, Kalimantan Tengah, Rabu (28/3/2018).',
      "Selain itu juga ia mengucapkan terimakasih atas swadaya pembangunan sirkuit terhadap praktisi otomotif lain yakni Haidir, Ether Kaharap, Kaharap, Herry Wijono dan Ferry Lohing.",
      "Menurut Falery, biaya pembangunan sirkuit itu, menelan biaya sekitar Rp 350 juta, meliputi biaya alat berat, mobilisasi/angkutan, material dan upah.",
      "Sirkuit ini memiliki panjang 1400 meter, lebar 5-8 meter, jumlah tikungan 18, jumlah rintangan 12 type jump dan model rintangan tablet top jump, double jump, triple jump, step on, camel up jump, bermed corner dan roller. Ditambah fasilitas lain paddock area, waiting zone, repair zone, VIP area, parkir, kantin, pohon lindung dan toilet",
      "Dengan keberadaan sirkuit tersebut diharapkan dapat menjadi barometer bagi seluruh pembalap nasional di Indonesia. Selain sebagai pusat olahraga motocross dan grasstrack di Kalimantan Tengah.",
      "Kawasan sirkuit ini nantinya juga akan dibangun sebagai pusat pariwisata di Tangkiling dengan beberapa fasilitas antara lain pondok-pondok, hutan lindung, kolam pancing, pendopo, Sungai Tahai, pusat out bond, olahraga adventure, camping ground,dan beberapa fasilitas lain yang cocok dengan suasana hutan di tempat ini.",
      '"Untuk itu semua kiranya kami mendapat dukungan dari masyarakat luas dan Pemerintah Kota Palangka Raya, Kalimantan Tengah serta Pemerintah Provinsi Kalimantan Tengah" ujarnya.',
    ],
    contentImages: [kaltengCircuit],
    translations: {
      EN: {
        title: "Central Kalimantan to Have an International-Standard Circuit",
        excerpt:
          "Residents of Central Kalimantan have reason to be proud—the region will soon have an international-standard circuit on Jalan Tjilik Riwut Kilometer 29...",
        content: [
          "Residents of Central Kalimantan have good reason to be proud, as an international-standard circuit will soon stand on Jalan Tjilik Riwut Kilometer 29, Palangka Raya, Kalimantan Tengah.",
          "The 1,400-meter circuit construction is made possible through the support of PT. Karya Halim Sampoerna leadership Michael Halim, KNPI Kalteng Chairman Fairid Naparin, and young entrepreneur John Garinda.",
          "“I am very grateful for the land support and heavy equipment from these three figures, enabling this national-standard circuit to materialize in Central Kalimantan,” said Acting Head of the Youth and Sports Office (Dispora) of Central Kalimantan, Falery Tuwan, in Palangka Raya, Kalimantan Tengah, Wednesday (3/28/2018).",
          "He also expressed appreciation for the voluntary contributions from other motorsport practitioners including Haidir, Ether Kaharap, Kaharap, Herry Wijono, and Ferry Lohing.",
          "According to Falery, construction costs amount to approximately Rp 350 million, covering heavy equipment, mobilization/transportation, materials, and labor.",
          "The circuit spans 1,400 meters in length and 5–8 meters in width, featuring 18 turns and 12 jump obstacles including tabletops, double jumps, triple jumps, step-on, camel-up jumps, bermed corners, and rollers. Additional facilities will include a paddock area, waiting zone, repair zone, VIP area, parking, canteen, shade trees, and toilets.",
          "The circuit is expected to become a benchmark for national racers across Indonesia as well as a center for motocross and grasstrack in Central Kalimantan.",
          "The area will also be developed into a tourism hub in Tangkiling with facilities such as cottages, protected forest area, fishing ponds, pavilions, Tahai River access, outbound area, adventure sports, camping ground, and other nature-oriented amenities.",
          "“For all of this we hope to receive support from the wider community and both the Palangka Raya, Kalimantan Tengah City Government and the Central Kalimantan Provincial Government,” he added.",
        ],
        category: "Company News",
      },
    },
    sourceUrl:
      "https://karyahalimsampoerna.id/keren-kalteng-miliki-sirkuit-bertaraf-internasional/",
  },
  {
    id: 4,
    slug: "pekerja-jasa-konstruksi-di-kapuas-didorong-aktif-dalam-program-jaminan-sosial",
    title:
      "Pekerja Jasa Konstruksi di Kapuas Didorong Aktif Dalam Program Jaminan Sosial",
    excerpt:
      "Dinas PUPRPKPP Kabupaten Kapuas, Kalimantan Tengah, mendorong para pengusaha dan pekerja pada sektor jasa konstruksi di daerah setempat, untuk...",
    category: "Company News",
    author: "Admin KHS",
    date: "2025-09-05",
    readTime: "2 min read",
    image: constructionSecurityProgram,
    content: [
      "Dinas PUPRPKPP Kabupaten Kapuas, Kalimantan Tengah, mendorong para pengusaha dan pekerja pada sektor jasa konstruksi di daerah setempat, untuk berpartisipasi aktif dalam program jaminan sosial yang di tawarkan BPJS Ketenagakerjaan.",
      '"Hal ini dapat membantu menjaga pendapatan mereka dan menyediakan jaring pengaman bagi pelaksanaan proyek -proyek mereka," kata kata Sekretaris Dinas PUPRPKPP Kapuas Jonnie, di Kuala Kapuas, Jumat (19/7/2024).',
      "Hal itu disampaikannya, saat memberikan sambutan pada kegiatan sosialisasi Peraturan Bupati Nomor 28 Tahun 2023 tentang pelaksanaan Program Jaminan Sosial Ketenagakerjaan bagi pengusaha dan pekerja pada sektor jasa konstruksi di daerah setempat.",
      "Kegiatan sosialisasi yang dilaksanakan di Aula Kantor Dinas PUPRPKPP kabupaten setempat jalan Tambun Bungai Kuala Kapuas ini, menggandeng BPJS Ketenagakerjaan Palangka Raya, Kalimantan Tengah dan Kuala Kapuas.",
      "Menurutnya, perlu dilakukan upaya untuk meningkatkan kesadaran di kalangan pengusaha dan pekerja pada sektor jasa konstruksi mengenai manfaat dan cakupan yang diberikan oleh BPJS Ketenagakerjaan.",
      "Kegiatan ini juga berperan penting dalam membangun kepercayaan dan kredibilitas di antara para pemangku kepentingan di sektor jasa konstruksi terhadap BPJS Ketenagakerjaan.",
      '"Harapan saya agar penyedia jasa konstruksi dan tenaga kerja yang bekerja di sektor jasa konstruksi memahami betul sistem jaminan sosial tenaga kerja dan juga BPJS Ketenagakerjaan harus berusaha meningkatkan kemudahan akses terhadap layanan jaminan sosial bagi pekerja disektor konstruksi, meliputi proses pendaftaran, memperjelas prosedur klaim manfaat, dan menanggapi secara cepat setiap pertanyaan atau permasalahan yang diajukan oleh para penyedia jasa konstruksi," terangnya.',
      "Sementara itu, Kepala Bidang Kepesertaan BPJS Ketenagakerjaan Palangka Raya, Kalimantan Tengah, Ariane Chaterina Natalia. T mengatakan, maksud dan tujuan dari kegiatan ini adalah untuk memberikan pemahaman tentang kewajiban penyedia Jasa Konstruksi dalam pelaksanaan program Jaminan Sosial Ketenagakerjaan didaerah khususnya kabupaten setempat.",
      '"Jadi disini saya mengimbau untuk penyedia jasa konstruksi apabila memang sudah diketahui nominal proyeknya segera saja didaftarkan dalam sistem aplikasi kami online E-JAKON," kata Ariane Chaterina Natalia. T.',
      "Tujuannya, agar proyek yang didaftarkan ini terlindungi seluruh pekerjaannya, memberikan perlindungan kepada tenaga kerja dan resiko - resiko yang terjadi pada saat proyek berlangsung sampai habis masa pemeliharaan sudah dapat di antisipasi. Asalkan data-data yang diberikan di awal sesuai dan valid.",
      '"Adapun penambahan dan pengurangan tenaga kerja silahkan saja dilakukan pengupdatean di Aplikasi E-JAKON, dan apabila ada penambahan kami pastikan tidak ada penambahan untuk iuran selama berdirinya proyek sampai masa pemeliharaan, kecuali adanya adendum dan mengubah nominal nilai proyek maka harus dilaporkan ulang," jelasnya.',
      "Salah satu perwakilan peserta sosialisasi Direktur PT. Karya Halim Sampoerna, Robert mengucapkan terimakasih kepada BPJS Ketenagakerjaan Palangka Raya, Kalimantan Tengah dan Kuala Kapuas juga Dinas PUPRPKPP yang sudah memfasilitasi kegiatan ini.",
      '"Kegiatan sosialisasi ini sangat bermanfaat bagi kami selaku pelaku usaha jasa konstruksi di Kalteng yang mana kami sedikit banyaknya mengetahui hak, kewajiban juga manfaat jaminan sosial di sektor jasa konstruksi," demikian Robert.',
      "Sementara Bidang Bina Konstruksi yang ditunjuk langsung oleh Kepala Dinas PUPRPKPP untuk membantu kelancaran acara ini telah mengundang 60 penyedia jasa konstruksi yang berkontrak dengan Dinas PUPRPKPP setempat.",
    ],
    contentImages: [constructionSecurityProgram],
    translations: {
      EN: {
        title:
          "Construction Workers in Kapuas Encouraged to Participate in Social Security Program",
        excerpt:
          "The Kapuas Regency PUPRPKPP Office in Central Kalimantan is encouraging businesses and workers in the local construction services sector to actively join the BPJS Employment social security program...",
        content: [
          "The Kapuas Regency PUPRPKPP Office in Central Kalimantan is urging construction service providers and workers to actively participate in the BPJS Employment social security program.",
          "“This can help safeguard their income and provide a safety net for their project implementation,” said Kapuas PUPRPKPP Office Secretary Jonnie in Kuala Kapuas, Friday (7/19/2024).",
          "He delivered the remarks during a socialization event on Regent Regulation No. 28 of 2023 regarding implementation of Employment Social Security for construction business owners and workers in the region.",
          "The event—held in the PUPRPKPP Office Hall on Jalan Tambun Bungai Kuala Kapuas—involved BPJS Employment representatives from Palangka Raya, Kalimantan Tengah and Kuala Kapuas.",
          "According to him, efforts are needed to raise awareness among construction business actors and workers about the benefits and coverage provided by BPJS Employment.",
          "The activity also plays an important role in building trust and credibility among stakeholders in the construction sector toward BPJS Employment.",
          "“My hope is that construction service providers and workers truly understand the employment social security system. BPJS Employment must also keep improving service accessibility, including enrollment processes, clearer claim procedures, and quicker responses to questions or issues,” he explained.",
          "Meanwhile, Palangka Raya, Kalimantan Tengah BPJS Employment Participation Division Head Ariane Chaterina Natalia T. said the purpose of the event is to provide understanding about the obligations of construction service providers in implementing the program, especially in the regency.",
          "“So I urge providers—if the project value is already known—please immediately register it in our online E-JAKON application,” said Ariane Chaterina Natalia T.",
          "The goal is for registered projects to be fully covered, protecting workers from risks during project execution through the maintenance period—provided initial data is accurate and valid.",
          "“Any addition or reduction of workers should be updated in the E-JAKON Application. If there are additions we ensure no increase in contributions during the project term unless an addendum changes the project value, which must then be re-reported,” she added.",
          "A representative of participating companies—Director of PT. Karya Halim Sampoerna, Robert—thanked BPJS Employment Palangka Raya, Kalimantan Tengah and Kuala Kapuas and the PUPRPKPP Office for facilitating the event.",
          "“This socialization is very beneficial for us as construction service business actors in Central Kalimantan. We now better understand our rights, obligations, and the benefits of employment social security,” Robert said.",
          "The Construction Development Division, appointed directly by the Head of the PUPRPKPP Office to support the event's success, invited 60 construction service providers with active contracts with the office.",
        ],
        category: "Company News",
      },
    },
    sourceUrl:
      "https://karyahalimsampoerna.id/pekerja-jasa-konstruksi-di-kapuas-didorong-aktif-dalam-program-jaminan-sosial/",
  },
  {
    id: 5,
    slug: "gathering-pt-khs-direktur-untuk-keakraban",
    title: "Gathering PT. KHS, Direktur: Untuk Keakraban",
    excerpt:
      "PT. Karya Halim Sampoerna (KHS) mengadakan Gathering, bertempat di Kantor PT. KHS, Jl. Mahir Mahar, Km. 4.6, No. 88, Sabtu (18/01/2020) jam 10.00...",
    category: "Company News",
    author: "Admin KHS",
    date: "2025-09-05",
    readTime: "1 min read",
    image: gatheringImage,
    content: [
      "PT. Karya Halim Sampoerna (KHS) mengadakan Gathering, bertempat di Kantor PT. KHS, Jl. Mahir Mahar, Km. 4.6, No. 88, Sabtu (18/01/2020) jam 10.00 WIB. Tujuan dari dilaksanakan kegiatan tersebut adalah untuk meningkatkan rasa nyaman dan kebersamaan antara pimpinan dan karyawan yang bekerja di lingkungan PT. KHS.",
      '"Kalau antara karyawan dan pimpinan terjalin kebersamaan yang erat, suatu pekerjaan pasti akan terselesaikan dengan baik," kata Direktur Utama PT. KHS, Ciang, kepada Lintasberita1.com yang hadir dalam acara Gathering tersebut.',
      "Lanjutnya, sebenarnya kegiatan hari ini adalah dadakan, hanya melanjutkan rencana Gathering sebelum pergantian Tahun Baru 2020 yang sempat dibatalkan. Karena sebagian karyawan PT. KHS berasal dari luar Daerah Kalimantan Tengah.",
      '"Saya tetap bersyukur, semoga kegiatan ini dapat mempererat hubungan antara Karyawan dan pimpinan PT. KHS semakin solid," harap Ciang.',
      '"Kepada para karyawan agar selalu meningkatkan kualitas kerjanya untuk semakin bagus dari yang sebelumnya," tambah Ciang.',
    ],
    contentImages: [
      gatheringTeamEvent,
      gatheringPhoto1,
      gatheringPhoto2,
      gatheringPhoto3,
    ],
    translations: {
      EN: {
        title: "KHS Company Gathering: Strengthening Team Bonding",
        excerpt:
          "PT. Karya Halim Sampoerna (KHS) held a company gathering at its office to strengthen comfort and togetherness between leadership and employees...",
        content: [
          "PT. Karya Halim Sampoerna (KHS) held a company gathering at its office on Saturday (01/18/2020) at 10:00 AM. The purpose was to improve comfort and strengthen togetherness between management and employees.",
          "“When strong togetherness exists between employees and leadership, work can be completed well,” said KHS President Director Ciang to Lintasberita1.com during the event.",
          "He continued that the activity was actually spontaneous—essentially continuing a previously canceled New Year gathering plan, as many KHS employees come from outside Central Kalimantan.",
          "“I remain grateful. Hopefully this activity further solidifies the relationship between KHS employees and management,” Ciang said.",
          "He also reminded employees to continue improving their work quality going forward.",
        ],
        category: "Company News",
      },
    },
    sourceUrl:
      "https://karyahalimsampoerna.id/gathering-pt-khs-direktur-untuk-keakraban/",
  },
];

export const getArticleBySlug = (slug: string) =>
  newsArticles.find((a) => a.slug === slug);

export type LocalizedNewsArticle = Omit<
  NewsArticle,
  "title" | "excerpt" | "content" | "category"
> & {
  title: string;
  excerpt: string;
  content?: string[];
  category: string;
};

export const getLocalizedNews = (
  translations: TranslationResources,
  language?: string,
): LocalizedNewsArticle[] => {
  return newsArticles.map((a) => {
    if (language === "EN") {
      const en = a.translations?.EN || {};
      return {
        ...a,
        title: en.title || a.title,
        excerpt: en.excerpt || a.excerpt,
        content: en.content?.length ? en.content : a.content,
        category:
          en.category ||
          translations.newsSection.categories?.[a.category] ||
          a.category,
      };
    }
    // Default (ID) retains original but still applies translation map for category if provided
    return {
      ...a,
      category: translations.newsSection.categories?.[a.category] || a.category,
    };
  });
};
