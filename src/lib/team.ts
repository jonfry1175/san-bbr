export type TeamMember = {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  focus: string;
  tenure: string;
  photo: string;
  location: string;
  email?: string;
  linkedin?: string;
  quote: string;
  background: string;
  strengths: string[];
  achievements: string[];
  stats: { label: string; value: string }[];
  timeline: { year: string; title: string; description: string }[];
};

export const teamMembers: TeamMember[] = [
  {
    id: "tm-01",
    slug: "alika-maheswari",
    name: "Alika Maheswari",
    role: "Chief Operations Architect",
    bio: "Operational strategist with a decade of experience orchestrating fast-moving infrastructure projects across Kalimantan.",
    focus:
      "Leads integrated planning for multi-site builds and keeps our field teams synced in real time.",
    tenure: "12 years in heavy civil and industrial projects",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Palangka Raya, Kalimantan Tengah, Indonesia",
    email: "alika.maheswari@karyahalim.co.id",
    linkedin: "https://www.linkedin.com/in/alika-maheswari",
    quote:
      "Dominating a schedule is about respecting the people executing it. We invest in their safety, clarity, and confidence.",
    background:
      "Alika memadukan disiplin engineering dengan pendekatan agile untuk memastikan setiap proyek terpenuhi tepat waktu tanpa mengorbankan keselamatan.",
    strengths: ["Lean construction", "Safety leadership", "Agile governance"],
    achievements: [
      "Mengurangi waktu serah-terima proyek pelabuhan 17% melalui koordinasi lintas divisi",
      "Membangun framework pelaporan risiko real-time yang diadopsi oleh seluruh site",
    ],
    stats: [
      { label: "Proyek Tuntas", value: "48" },
      { label: "Tim Terkoordinasi", value: "12" },
      { label: "Jam Safety Audit", value: "950+" },
    ],
    timeline: [
      {
        year: "2022",
        title: "Chief Operations Architect",
        description:
          "Mengawasi transformasi digital untuk semua proyek sipil dan memastikan keterpaduan data lapangan.",
      },
      {
        year: "2018",
        title: "Regional Project Director",
        description:
          "Mengelola lima proyek simultan dan memperkenalkan ritual standup harian di seluruh site.",
      },
      {
        year: "2014",
        title: "Project Controls Engineer",
        description:
          "Membangun baseline CPM pertama perusahaan untuk proyek dermaga batu bara.",
      },
    ],
  },
  {
    id: "tm-02",
    slug: "rafi-wiryawan",
    name: "Rafi Wiryawan",
    role: "Director of Structural Delivery",
    bio: "Engineer struktural yang menavigasi proyek kompleks dari desain hingga commissioning dengan presisi tinggi.",
    focus:
      "Menjamin integritas struktur dan mitigasi risiko pada proyek jembatan dan dermaga.",
    tenure: "15 tahun pengalaman engineering",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Banjarmasin, Indonesia",
    email: "rafi.wiryawan@karyahalim.co.id",
    linkedin: "https://www.linkedin.com/in/rafi-wiryawan",
    quote:
      "Struktur terbaik adalah yang membaca kondisi tanah dan cuaca seperti kru membacanya setiap hari.",
    background:
      "Rafi memimpin tim teknis untuk memastikan desain konstruksi tetap adaptif terhadap dinamika lapangan dan kondisi geoteknik.",
    strengths: ["Geoteknik", "Bridge retrofitting", "Commissioning"],
    achievements: [
      "Mempercepat penyelesaian jembatan gantung 2 bulan lebih awal melalui segmentasi modul",
      "Menerapkan inspeksi ultrasonik portabel yang menurunkan rework 24%",
    ],
    stats: [
      { label: "Retrofitting Sukses", value: "11" },
      { label: "Sertifikasi Profesional", value: "6" },
      { label: "Audit Struktur", value: "180" },
    ],
    timeline: [
      {
        year: "2023",
        title: "Director of Structural Delivery",
        description:
          "Mengarahkan integrasi BIM ke proses kontrol kualitas untuk proyek dermaga curah.",
      },
      {
        year: "2016",
        title: "Lead Structural Engineer",
        description:
          "Memimpin desain adaptif untuk jembatan sungai Kayan dengan struktur modular.",
      },
      {
        year: "2010",
        title: "Site Engineer",
        description:
          "Mengelola instalasi pondasi bored pile untuk proyek pelabuhan minyak.",
      },
    ],
  },
  {
    id: "tm-03",
    slug: "nadira-prasetyo",
    name: "Nadira Prasetyo",
    role: "Director of Risk & Compliance",
    bio: "Ahli manajemen risiko yang menyelaraskan governance, perizinan, dan compliance untuk proyek multi-regulasi.",
    focus:
      "Menjaga tata kelola dan hubungan regulator sambil mempercepat approvals proyek.",
    tenure: "11 tahun governance & compliance",
    photo: "https://randomuser.me/api/portraits/women/29.jpg",
    location: "Jakarta, Indonesia",
    email: "nadira.prasetyo@karyahalim.co.id",
    linkedin: "https://www.linkedin.com/in/nadira-prasetyo",
    quote:
      "Regulasi bukan penghalang—ia adalah bahasa yang harus kita kuasai untuk bergerak lebih cepat.",
    background:
      "Nadira membangun framework compliance yang adaptif terhadap perubahan regulasi pertambangan dan lingkungan.",
    strengths: [
      "Regulatory affairs",
      "Contract governance",
      "Stakeholder diplomacy",
    ],
    achievements: [
      "Mencapai zero finding pada audit ISO 45001 tiga tahun berturut-turut",
      "Mengotomasi pelaporan izin operasional sehingga SLA turun dari 14 menjadi 5 hari",
    ],
    stats: [
      { label: "Audit Nol Temuan", value: "9" },
      { label: "Regulator Aktif", value: "5" },
      { label: "Workshop Compliance", value: "42" },
    ],
    timeline: [
      {
        year: "2021",
        title: "Director of Risk & Compliance",
        description:
          "Mengonsolidasikan 22 SOP lintas fungsi menjadi satu playbook digital.",
      },
      {
        year: "2017",
        title: "Compliance Program Manager",
        description:
          "Mengembangkan modul e-learning keselamatan untuk seluruh vendor.",
      },
      {
        year: "2013",
        title: "Legal Analyst",
        description: "Mengawal akuisisi lahan strategis dan penyusunan AMDAL.",
      },
    ],
  },
  {
    id: "tm-04",
    slug: "gilang-mahendra",
    name: "Gilang Mahendra",
    role: "Chief Project Strategist",
    bio: "Menghubungkan visi bisnis dengan eksekusi proyek melalui PMO berdaya data.",
    focus:
      "Mengarahkan portofolio proyek dan memaksimalkan utilisasi sumber daya lintas divisi.",
    tenure: "14 tahun project leadership",
    photo: "https://randomuser.me/api/portraits/men/51.jpg",
    location: "Balikpapan, Indonesia",
    email: "gilang.mahendra@karyahalim.co.id",
    linkedin: "https://www.linkedin.com/in/gilang-mahendra",
    quote: "Dashboard bukan sekadar angka—ia harus bicara dengan tim lapangan.",
    background:
      "Gilang membangun PMO hybrid yang menyatukan ritual scrum dan milestone-based review untuk proyek EPC.",
    strengths: [
      "Portfolio governance",
      "Resource modeling",
      "Stakeholder alignment",
    ],
    achievements: [
      "Menurunkan idle equipment 28% melalui dynamic resource pooling",
      "Mendorong visibilitas pipeline melalui command center interaktif",
    ],
    stats: [
      { label: "Nilai Portofolio", value: "Rp1.2T" },
      { label: "Resource Pools", value: "8" },
      { label: "Dashboard Aktif", value: "15" },
    ],
    timeline: [
      {
        year: "2023",
        title: "Chief Project Strategist",
        description:
          "Meluncurkan command center portofolio dengan data live dari seluruh site.",
      },
      {
        year: "2018",
        title: "PMO Lead",
        description:
          "Menerapkan scenario planning kuartalan untuk proyek EPC multi-site.",
      },
      {
        year: "2011",
        title: "Project Scheduler",
        description:
          "Mengembangkan baseline penjadwalan untuk proyek kilang mini LNG.",
      },
    ],
  },
];

export const getTeamMemberBySlug = (slug: string) =>
  teamMembers.find((member) => member.slug === slug);

// Localized helpers (placeholder – domain data mostly proper nouns)
export const getLocalizedTeamMembers = () => teamMembers;
