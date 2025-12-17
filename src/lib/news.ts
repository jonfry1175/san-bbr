import companyLogo from "@/assets/company-logo-san-full.jpeg";
import fatigueManagementHero from "@/assets/news/fatigue-management-family-visit-hero.webp";
import constructionSecurityProgram from "@/assets/news/construction-security-program-kapuas.jpeg";

// const companyLogo = "https://placehold.co/200x80/white/000000?text=Company+Logo";
// const fatigueManagementHero = "https://placehold.co/800x600/f97316/ffffff?text=Fatigue+Management";
// const constructionSecurityProgram = "https://placehold.co/800x600/f97316/ffffff?text=Security+Program";

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
      "PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES Ajak Keluarga Pekerja Jadi Mitra Keselamatan, Fokus Atasi Kelelahan Kerja",
    excerpt:
      'Angsana, 31 Juli 2025 - PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES (SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES) menggelar acara inovatif bertajuk "Off The Job Safety - Family Visit to SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES 2025" yang...',
    category: "Company News",
    author: "Admin SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES",
    date: "2025-09-09",
    readTime: "1 min read",
    image: fatigueManagementHero,
    content: [
      'Angsana, 31 Juli 2025 - PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES (SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES) menggelar acara inovatif bertajuk "Off The Job Safety - Family Visit to SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES 2025" yang melibatkan keluarga para pekerjanya. Mengusung tema "Keluarga Peduli, Pekerja Aman: Bersama Atasi Kelelahan Kerja," kegiatan ini bertujuan untuk meningkatkan kesadaran keluarga mengenai peran penting mereka dalam mendukung keselamatan kerja, khususnya dalam pengelolaan kelelahan (fatigue management). Acara yang dihadiri oleh 30 peserta dari kalangan keluarga pekerja ini diselenggarakan di ruang pertemuan perusahaan dan berlangsung selama tiga jam.',
      "Program ini dirancang untuk memberikan edukasi mendalam kepada keluarga mengenai dampak kelelahan kerja. Para peserta diberikan pemahaman tentang definisi fatigue, gejala, serta dampaknya yang dapat menurunkan kewaspadaan dan meningkatkan risiko kecelakaan di lingkungan kerja pertambangan. Materi utama menekankan bahwa dukungan keluarga melalui pola tidur yang teratur, asupan nutrisi sehat, dan dukungan psikologis merupakan faktor krusial untuk membantu pekerja pulih dan tetap bugar. Dengan demikian, perusahaan memposisikan keluarga sebagai mitra strategis dalam menciptakan budaya keselamatan yang komprehensif.",
      "Rangkaian acara dikemas secara interaktif dan menarik untuk seluruh anggota keluarga. Selain sesi edukasi utama mengenai fatigue management, kegiatan juga diisi dengan pengenalan area kerja untuk memberikan gambaran mengenai lingkungan dan potensi bahaya yang dihadapi para pekerja setiap hari. Untuk mencairkan suasana dan mempererat hubungan, acara ini juga dimeriahkan dengan sesi sharing, kuis interaktif, dan permainan keluarga yang disambut antusias oleh para peserta.",
      "Berdasarkan evaluasi akhir, kegiatan ini dinilai sangat berhasil mencapai tujuannya. Hasil kuesioner menunjukkan respon yang sangat positif dari peserta, di mana pemahaman mereka mengenai risiko kelelahan kerja dan cara mendukung pekerja di rumah meningkat secara signifikan. Banyak peserta yang mengapresiasi program ini dan mengusulkan agar kegiatan serupa dapat diadakan secara berkala di masa mendatang. Inisiatif ini membuktikan bahwa pelibatan keluarga secara aktif dapat memberikan dampak positif dalam memperkuat budaya keselamatan kerja dari rumah hingga ke lokasi kerja.",
    ],
    translations: {
      EN: {
        title:
          "SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES Engages Workers' Families as Safety Partners to Address Fatigue",
        excerpt:
          'Angsana, July 31, 2025 – PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES (SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES) held an innovative program titled "Off The Job Safety - Family Visit to SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES 2025" that...',
        content: [
          'Angsana, July 31, 2025 – PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES (SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES) organized an innovative program titled "Off The Job Safety - Family Visit to SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES 2025" involving employees\' families. Carrying the theme "Caring Families, Safe Workers: Together Managing Fatigue," the event aimed to increase family awareness of their important role in supporting workplace safety, particularly in fatigue management. The three-hour session was attended by 30 family participants at the company meeting room.',
          "The program was designed to provide in-depth education to families about the impact of work-related fatigue. Participants gained understanding of the definition, symptoms, and consequences of fatigue that can reduce alertness and increase accident risk in mining operations. The core material emphasized that family support through consistent sleep patterns, proper nutrition, and psychological encouragement is crucial to help workers recover and stay fit. This positions families as strategic partners in building a comprehensive safety culture.",
          "The event was packaged interactively and attractively for all family members. In addition to the main educational session on fatigue management, activities included an introduction to the work area to give insight into the environment and potential hazards workers face daily. To create an engaging atmosphere and strengthen relationships, there were sharing sessions, interactive quizzes, and family games enthusiastically received by participants.",
          "Based on the final evaluation, the program successfully achieved its objectives. Survey results showed a significant increase in participants' understanding of fatigue risks and how to support workers at home. Many expressed appreciation and suggested similar programs be held regularly. This initiative demonstrates that active family involvement can positively reinforce a safety culture from home to the worksite.",
        ],
        category: "Company News",
      },
    },
    sourceUrl:
      "https://san-bbr.id/pt-khs-ajak-keluarga-pekerja-jadi-mitra-keselamatan-fokus-atasi-kelelahan-kerja/",
  },
  {
    id: 4,
    slug: "pekerja-jasa-konstruksi-di-kapuas-didorong-aktif-dalam-program-jaminan-sosial",
    title:
      "Pekerja Jasa Konstruksi di Kapuas Didorong Aktif Dalam Program Jaminan Sosial",
    excerpt:
      "Dinas PUPRPKPP Kabupaten Kapuas, Kalimantan Tengah, mendorong para pengusaha dan pekerja pada sektor jasa konstruksi di daerah setempat, untuk...",
    category: "Company News",
    author: "Admin SINERGY AGTER NUSANTARA & BUMI BLAMBANGAN RESOURCES",
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
      "Salah satu perwakilan peserta sosialisasi Direktur PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES, Robert mengucapkan terimakasih kepada BPJS Ketenagakerjaan Palangka Raya, Kalimantan Tengah dan Kuala Kapuas juga Dinas PUPRPKPP yang sudah memfasilitasi kegiatan ini.",
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
          "A representative of participating companies—Director of PT SINERGY AGTER NUSANTARA & PT BUMI BLAMBANGAN RESOURCES, Robert—thanked BPJS Employment Palangka Raya, Kalimantan Tengah and Kuala Kapuas and the PUPRPKPP Office for facilitating the event.",
          "“This socialization is very beneficial for us as construction service business actors in Central Kalimantan. We now better understand our rights, obligations, and the benefits of employment social security,” Robert said.",
          "The Construction Development Division, appointed directly by the Head of the PUPRPKPP Office to support the event's success, invited 60 construction service providers with active contracts with the office.",
        ],
        category: "Company News",
      },
    },
    sourceUrl:
      "https://san-bbr.id/pekerja-jasa-konstruksi-di-kapuas-didorong-aktif-dalam-program-jaminan-sosial/",
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
