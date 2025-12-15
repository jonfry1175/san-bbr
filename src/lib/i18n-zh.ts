import type { TranslationResources } from "./i18n";
import { salesCategoryDefinitions } from "./products";
import { PRIMARY_EMAIL, SECONDARY_EMAIL, ALL_EMAILS } from "./email-config";

export const zhTranslations: TranslationResources = {
  header: {
    home: "首页",
    aboutUs: "关于我们",
    aboutDropdownAria: "导航到关于我们页面",
    languageLabel: "语言",
    changeLanguageAria: "更改语言（当前：{language}）",
    getQuote: "获取报价",
    switchLanguageAria: {
      EN: "切换到英语",
      ID: "切换到印尼语",
      ZH: "切换到简体中文",
    },
    aboutLinks: {
      ourCompany: "我们公司",
      ourTeam: "我们的团队",
      certifications: "资质认证",
      companyAwards: "公司奖项",
    },
    navigationItems: {
      services: "服务",
      products: "产品",
      ourWorks: "我们的作品",
      gallery: "画廊",
      news: "新闻",
      career: "职业",
      location: "位置",
      contact: "联系我们",
    },
    productLinks: {
      rentalAlatBerat: "重型设备租赁 (PT SAN)",
      jasaKonstruksi: "采矿建筑服务 (PT BBR)",
    },
    careerLinks: {
      employee: "员工职位",
      intern: "实习计划",
      san: "PT SAN 职业",
      bbr: "PT BBR 职业",
    },
  },
  hero: {
    welcome: "欢迎",
    defaultTitle: "以诚信建设卓越",
    defaultDescription: "您值得信赖的建筑和基础设施开发合作伙伴",
  },
  aboutSection: {
    label: "公司简史",
    title: "PT SAN & PT BBR",
    ptSan: {
      title: "PT SAN (重型设备租赁)",
      description: "建筑和采矿项目高质量重型设备的值得信赖的合作伙伴。我们确保卓越的设备可用性和可靠的技术支持。",
    },
    ptBbr: {
      title: "PT BBR (采矿建筑服务)",
      description: "采矿建筑和土方工程服务专家。我们优先考虑符合采矿行业标准的高效、安全的工作方法。",
    },
    description: {
      paragraph1:
        "PT SAN & PT BBR成立于2003年1月15日，是1990年成立的CV. Halim Sampoerna的延续。我们是一家从事建筑服务的公司，专门从事道路和高速公路基础设施。",
      paragraph2:
        "凭借超过35年的建筑经验，我们已完成中加里曼丹和南加里曼丹的数百个项目。我们对质量和创新的承诺使我们成为各种政府和私人机构的值得信赖的合作伙伴。",
      paragraph3:
        "我们通过采用建筑行业的最新技术和最佳实践继续成长和发展，为我们处理的每个项目提供最佳解决方案。",
    },
    achievements: {
      established: "成立",
      establishedDesc: "始于CV. Halim Sampoerna",
      yearsExperience: "年经验",
      yearsExperienceDesc: "自2003年起作为PT",
      successfulProjects: "成功项目",
      successfulProjectsDesc: "成功完成的项目",
      satisfiedClients: "满意客户",
      satisfiedClientsDesc: "对我们服务满意的客户",
    },
    values: {
      title: "公司价值观",
      integrity: {
        title: "诚信",
        description: "我们致力于始终以高诚信和完全透明的方式工作。",
      },
      quality: {
        title: "质量",
        description: "质量是我们承担的每个项目的首要任务。",
      },
      innovation: {
        title: "创新",
        description: "使用最新技术和现代建筑方法获得最佳结果。",
      },
      reliability: {
        title: "可靠性",
        description: "客户信任是我们始终维护的宝贵资产。",
      },
    },
    learnMore: "了解更多关于我们",
  },
  common: {
    loading: "加载中...",
    home: "首页",
    works: "作品",
    services: "服务",
    all: "全部",
    backToHome: "返回首页",
    goBack: "返回",
    backToTop: "返回顶部",
    viewNews: "查看新闻",
    viewDetails: "查看详情",
    contactUs: "联系我们",
    keyDetails: "关键详情",
    or: "或",
    client: "客户",
    location: "位置",
    year: "年份",
    status: "状态",
    category: "类别",
    projectOverview: "项目概述",
    keyFeatures: "关键特性",
    relatedProjects: "相关项目",
    pageNotFound: "哎呀！页面未找到",
    pageNotFoundDescription:
      "我们找不到您要查找的页面。请尝试下面的链接或返回首页。",
  },
  footer: {
    company: {
      title: "PT SAN & PT BBR",
      description:
        "您值得信赖的建筑和基础设施开发合作伙伴，拥有超过35年的经验。",
      followUs: "关注我们",
    },
    quickLinks: {
      title: "快速链接",
      aboutUs: "关于我们",
      ourTeam: "我们的团队",
      services: "服务",
      projects: "项目",
      news: "新闻",
      career: "职业",
      location: "位置",
      contact: "联系",
    },
    services: {
      title: "我们的服务",
      earthwork: "土方工程",
      asphalt: "沥青工程",
      concrete: "混凝土工程",
      maintenance: "维护",
    },
    contact: {
      title: "联系信息",
      address: "印度尼西亚南加里曼丹班贾尔马辛",
      phone: "+62 511 123 4567",
      email: PRIMARY_EMAIL,
      emailSecondary: SECONDARY_EMAIL,
      emails: [...ALL_EMAILS],
    },
    location: {
      title: "我们的位置",
      openInGoogleMaps: "在Google地图中打开",
    },
    newsletter: {
      title: "新闻通讯",
      error: "出现错误。请重试。",
    },
    ctaLookingForPartner: "寻找可靠的合作伙伴？",
    ctaLetsBuild: "让我们一起建造一些伟大的东西。",
    copyright: "© 2024 PT SAN & PT BBR. 保留所有权利。",
  },
  // Placeholder for other sections - will be filled in subsequent updates
  visionMission: {
    label: "愿景与使命",
    title: "PT SAN & PT BBR",
    subtitle: "以诚信工作，提供卓越",
    ptSan: {
      vision: {
        title: "PT SAN 愿景",
        content: "成为印度尼西亚领先、可靠和高效的重型设备解决方案提供商。",
      },
      mission: {
        title: "PT SAN 使命",
        points: [
          "提供高质量和维护良好的重型设备车队。",
          "提供响应迅速的售后服务和技术支持。",
          "与客户建立长期合作伙伴关系。",
        ],
      },
    },
    ptBbr: {
      vision: {
        title: "PT BBR 愿景",
        content: "成为在安全和生产力方面卓越的采矿和建筑承包商。",
      },
      mission: {
        title: "PT BBR 使命",
        points: [
          "以最高安全标准执行采矿建筑工作。",
          "通过工作方法创新提高运营效率。",
          "为利益相关者提供增值。",
        ],
      },
    },
    vision: {
      title: "我们的愿景",
      content:
        "成为印度尼西亚领先的建筑公司，在提供优质基础设施解决方案方面值得信赖、创新和可持续。",
    },
    mission: {
      title: "我们的使命",
      points: [
        "实施良好的公司治理。",
        "良好的人力资源管理，为员工创造最佳的工作和卓越条件。",
        "实施管理系统以确保工作场所安全、健康、质量和工作环境。",
        "使用和应用可再生技术进行更好的建筑。",
        "通过创造最佳公司形象发展建筑业务。",
        "参与我们心爱的国家印度尼西亚共和国的发展。",
      ],
    },
  },
  servicesSection: {
    label: "我们的服务",
    title: "提供各种解决方案",
    description:
      "我们提供最完整的建筑解决方案，具有最佳质量和现代技术，以满足您的项目需求。",
    ptSan: {
      title: "重型设备租赁 (PT SAN)",
      description: "针对各种项目需求的完整重型设备租赁服务。",
      action: "查看设备目录",
    },
    ptBbr: {
      title: "采矿建筑服务 (PT BBR)",
      description: "专业的采矿承包商和土木工程服务。",
      action: "查看建筑服务",
    },
    viewAll: "查看所有服务",
    learnMore: "了解更多",
    ctaTitle: "需要定制解决方案？",
    ctaDescription:
      "每个项目都有独特的需求。我们的专家团队随时准备帮助为您的项目设计正确的建筑解决方案。",
    ctaRequestQuote: "请求报价",
  },
  projectsSection: {
    label: "我们的作品集",
    title: "我们交付的卓越项目",
    description:
      "探索我们在中加里曼丹和南加里曼丹成功建筑项目的作品集，展示我们的专业知识和对卓越的承诺。",
    viewAll: "查看所有项目",
    client: "客户",
    location: "位置",
    year: "年份",
    stats: {
      yearsExperience: "35+年",
      roadsBuilt: "建造道路",
      sitesDeveloped: "开发场地",
      sitesDevelopedValue: "1,000+公顷",
      clientSatisfaction: "客户满意度",
    },
    categories: {
      "Road Construction": "道路建设",
      "Aspal Hotmix": "热拌沥青",
      Earthwork: "土方工程",
    },
    statuses: {
      Completed: "已完成",
      Ongoing: "进行中",
    },
    ctaTitle: "准备开始您的下一个项目？",
    ctaDescription:
      "与我们的专家团队讨论您的建筑项目。获得免费咨询和满足您需求的最佳报价。",
    startProject: "开始您的项目",
  },
  projectsData: {
    // removed translation: peningkatan-jalan-mantangai-timpah-paket-1 (client: Pemerintah Daerah)
    "hauling-road-2021-2024": {
      title: "运输道路建设",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "进行中",
      description:
        "为支持采矿作业而进行的运输道路建设与维护项目。该项目包括土方工程、路面铺设和日常维护，以确保道路在各种天气条件下对重型设备交通保持安全和可靠。",
    },
    "earthwork-looping-cp2a": {
      title: "土方工程CP2A环路",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "土方工程",
      status: "已完成",
      description:
        "CP2A区域环路建设的土方工程项目。该项目侧重于开挖、路堤成型和压实，为矿山运输道路的路面施工做准备。",
    },
    "pemasangan-patok-jalan-hauling": {
      title: "运输道路桩安装",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description:
        "在矿山运输道路沿线安装标桩作为标记和几何参考，以提高安全性和有序性。",
    },
    "lpa-dumping-km-17": {
      title: "17公里卸料区上路面基层(LPA)",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description:
        "在17公里卸料区进行上路面基层(LPA)工程，以增加路面的承载能力和稳定性。",
    },
    "jasa-konstruksi-hauling-rad": {
      title: "运输道路建设",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "进行中",
      description: "为运输道路提供全面的建筑服务，涵盖从准备到竣工的各个阶段。",
    },
    "earthwork-looping-cp2b": {
      title: "土方工程CP2B环路",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "土方工程",
      status: "已完成",
      description:
        "CP2B区域环路建设的土方工程项目，是支持运营扩展的类似工作的延续。",
    },
    "preventif-jalan-kosongan": {
      title: "空载道路预防性维护",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description:
        "对空载道路进行预防性维护工作，以保持路况并在结构损坏发生前进行预防。",
    },
    "earthwork-checkout-bunati": {
      title: "Bunati港口结账点土方工程",
      client: "矿业公司",
      location: "Bunati港口",
      year: "2021-2024",
      category: "土方工程",
      status: "已完成",
      description:
        "为Bunati港口的结账点区域进行土方工程，为港口运营支持设施准备基础。",
    },
    "maintenance-cs-hauling-road": {
      title: "运输道路碎石封层维护",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "进行中",
      description:
        "对运输道路的碎石封层表面进行例行维护，以保持路面质量和驾驶舒适性。",
    },
    // removed translation: pemasangan-gorong-gorong (client: Pemerintah Daerah)
    "rambu-reflektroized": {
      title: "反光标志",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description: "安装带有反光材料的交通标志，以提高夜间的能见度和安全性。",
    },
    // removed translation: pemasangan-culvert-100-cm (client: Pemerintah Daerah)
    "solar-stud-light-glass-stud-road": {
      title: "太阳能和玻璃道钉安装",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description:
        "安装太阳能道钉和玻璃道钉，以提高夜间或恶劣天气条件下道路标线的可见性和安全性。",
    },
    "konstruksi-rest-area-km-1-5-dan-16-5": {
      title: "1.5公里（空载）和16.5公里（重载）休息区建设",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "土方工程",
      status: "已完成",
      description:
        "在1.5公里（空载车道）和16.5公里（重载车道）处建设休息区设施，为驾驶员提供安全舒适的休息场所。",
    },
    "maintenance-chipseal-hauling": {
      title: "碎石封层运输道路维护",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "进行中",
      description:
        "对采用碎石封层的运输道路路面进行例行维护工作，以延长道路使用寿命。",
    },
    "pelebaran-km-14": {
      title: "14公里处拓宽",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description:
        "14公里处的道路拓宽工程，以增加道路容量并改善重型设备的交通流量。",
    },
    "persiapan-north-stockpile": {
      title: "北部堆场准备工作",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "土方工程",
      status: "已完成",
      description: "北部堆场的土方工程和场地准备工作，包括清理、平整和压实。",
    },
    "pelebaran-km-12": {
      title: "12公里处拓宽工程",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description: "12公里处的道路拓宽工程，以适应交通量的增加并提高安全性。",
    },
    "peningkatan-antrian-truck-hauling": {
      title: "运输道路 - 卡车排队区改善",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description:
        "改善运输道路上卡车排队区域的容量和管理，以减少等待时间并提高效率。",
    },
    "upgrade-hauling-road": {
      title: "运输道路升级",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "进行中",
      description:
        "运输道路的综合升级项目，包括结构修复、路面改善和道路几何优化。",
    },
    "konstruksi-jalan-looping-cp9": {
      title: "CP 9环路建设",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description:
        "在9号检查站新建一条环路，以疏导交通并最大限度地减少交叉口。",
    },
    // removed translation: perawatan-jembatan-martani (client: Pemerintah Daerah)
    "chipseal-rest-area-km-1-5-dan-16-5": {
      title: "1.5公里（空载）和16.5公里休息区碎石封层工程",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "热拌沥青",
      status: "已完成",
      description: "在休息区应用碎石封层，以改善表面质量、耐用性和美观性。",
    },
    "additional-work-pelebaran-km-12": {
      title: "12公里拓宽工程的额外工作",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description: "12公里拓宽项目的额外工作，包括排水调整和其他小型工程。",
    },
    "pavement-akses-jalan-aviary": {
      title: "鸟舍通道铺面",
      client: "私人",
      location: "加里曼丹",
      year: "2021-2024",
      category: "热拌沥青",
      status: "已完成",
      description: "为通往鸟舍的通道铺设路面，以提供平滑耐用的表面。",
    },
    "peningkatan-10-ha-bunati": {
      title: "Bunati 10公顷土地改良",
      client: "港口公司",
      location: "Bunati",
      year: "2021-2024",
      category: "土方工程",
      status: "已完成",
      description:
        "在Bunati地区进行的10公顷土地改良和准备项目，用于开发新设施。",
    },
    "maintenance-road-bunati": {
      title: "Bunati道路维护",
      client: "港口公司",
      location: "Bunati",
      year: "2021-2024",
      category: "道路建设",
      status: "进行中",
      description:
        "在Bunati地区进行的例行道路维护工作，以确保路况保持最佳和安全。",
    },
    "maintenance-jalan-cp5": {
      title: "CP 5道路维护",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "进行中",
      description: "在5号检查站区域进行例行道路维护，以确保运营顺畅。",
    },
    "north-drainage-work": {
      title: "北部排水工程",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "土方工程",
      status: "已完成",
      description: "北部地区的排水系统工程，以控制水流并防止侵蚀。",
    },
    "earthwork-jalan-looping-cp7": {
      title: "CP7环路土方工程",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "土方工程",
      status: "已完成",
      description: "7号检查站环路建设的土方工程。",
    },
    "access-charging-station-temporary": {
      title: "临时充电站通道",
      client: "私人",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description: "为电动汽车充电站修建临时通道。",
    },
    "akses-jalan-ke-charging-station": {
      title: "通往充电站的通道",
      client: "私人",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description: "修建通往充电站的永久性通道，改善电动汽车的连接性和支持。",
    },
    "jalan-hauling-pit-kgb-kgu": {
      title: "KGB和KGU矿区运输道路",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "已完成",
      description: "修建专用运输道路，服务于KGB和KGU矿区，优化物料运输周期。",
    },
    "chipseal-rest-area-km-1-dan-4": {
      title: "1公里和4公里休息区（重载车道）的碎石封层",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "热拌沥青",
      status: "已完成",
      description:
        "在1公里和4公里休息区（重载车道）应用碎石封层，以提高路面质量和耐久性。",
    },
    "pavement-preservation-jalur-muatan": {
      title: "重载车道路面保护",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "道路建设",
      status: "进行中",
      description:
        "在重载车道上实施路面保护计划，以延长道路使用寿命并保持安全。",
    },
    "double-chipseal-rest-area": {
      title: "休息区双层碎石封层",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "热拌沥青",
      status: "已完成",
      description: "在休息区应用双层碎石封层，以提供额外保护和更耐用的表面。",
    },
    "double-chipseal-kosongan-km-1": {
      title: "1公里处（空载车道）双层碎石封层",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "热拌沥青",
      status: "已完成",
      description:
        "在空载车道1公里处应用双层碎石封层，以增加路面强度和耐久性。",
    },
    "peningkatan-area-kosongan": {
      title: "空载区改善",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2021-2024",
      category: "土方工程",
      status: "已完成",
      description: "对空载车道区域进行改进和布置，以提高交通效率和安全性。",
    },
    // removed translation: penanganan-long-segmen-sei-asem-batas-kalsel (client: Pemerintah Daerah)
    // removed translation: palingkau-seberang-batas-kalsel-dak (client: Pemerintah Daerah)
    "peningkatan-akses-looping-north-stockpile": {
      title: "改善通往北部堆场环线（空载车道）的运输通道",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2025",
      category: "道路建设",
      status: "进行中",
      description: "改善通往北部堆场环线的空载车道运输通道，以确保运营顺畅。",
    },
    "chipseal-rest-area-km-1-dan-4-2025": {
      title: "1公里和4公里休息区碎石封层工程",
      client: "矿业公司",
      location: "加里曼丹",
      year: "2025",
      category: "热拌沥青",
      status: "进行中",
      description:
        "2025年在1公里和4公里休息区进行碎石封层涂层工程，以进行维护和质量改进。",
    },
    "akses-charging-station-bib": {
      title: "BIB充电站通道工程",
      client: "PT. Borneo Indobara",
      location: "加里曼丹",
      year: "2025",
      category: "道路建设",
      status: "进行中",
      description: "在BIB区域修建通往充电站的通道，以支持电动汽车基础设施。",
    },
    "stabilisasi-parkir-charging-station-bib": {
      title: "BIB充电站停车场稳定工程",
      client: "PT. Borneo Indobara",
      location: "加里曼丹",
      year: "2025",
      category: "土方工程",
      status: "进行中",
      description: "在BIB充电站停车场进行土壤稳定工作，以确保地基坚固耐用。",
    },
    // removed translation: pelebaran-peningkatan-jalan-bayah-atu-bib (client: Pemerintah Daerah)
  },
  clientsSection: {
    label: "我们值得信赖的合作伙伴",
    title: "与行业领导者合作",
    description: "我们很自豪与中加里曼丹和南加里曼丹的政府机构和领先企业合作。",
  },
  supportedBySection: {
    label: "支持者",
    title: "由领先设备提供商支持",
    description:
      "我们利用值得信赖的设备合作伙伴在每个项目中提供一致的质量和可靠的性能。",
  },
  careerSupportedBySection: {
    label: "行业合作伙伴支持",
    title: "加入我们的成功",
    description:
      "该计划由PT SAN & PT BBR与教育机构合作发起，为这些机构的成员提供机会，以发展其领域内的技能并开始专业职业生涯。",
  },
  newsSection: {
    categories: {
      "Company News": "公司新闻",
    },
    label: "最新新闻",
    title: "了解我们的进展",
    description: "阅读我们最新的项目、成就和行业见解。",
    readMore: "阅读更多",
    viewAll: "查看所有新闻",
    pageTitle: "新闻与见解",
    pageDescription:
      "PT SAN & PT BBR的项目更新、最佳实践和建筑行业信息。",
    detail: {
      backToNews: "返回新闻",
      shareLabel: "分享：",
      shareButton: "分享",
      copyLinkButton: "复制链接",
      copyLinkTitle: "链接已复制",
      copyLinkDescription: "文章URL已复制到剪贴板",
      moreArticles: "更多文章",
      summaryTitle: "摘要",
      categoryLabel: "类别",
      contentMissing: {
        title: "无内容",
        description: "文章内容尚不可用。请稍后再查看。",
      },
      linkedIn: "LinkedIn",
      whatsapp: "WhatsApp",
      twitter: "X/Twitter",
    },
    featured: "精选",
  },
  ctaSection: {
    title: "准备开始您的项目？",
    description:
      "为您的建筑项目获得免费咨询和报价。我们的专家团队随时准备帮助您实现愿景。",
    benefits: [
      "免费咨询和现场调查",
      "具有透明报价的竞争性定价",
      "经验丰富的团队，拥有经过验证的业绩记录",
      "优质材料和现代设备",
      "按时项目交付保证",
      "完整的项目保修和支持",
    ],
    contactInfo: {
      phone: "直接致电我们",
      email: "发送电子邮件给我们",
      hours: {
        title: "营业时间",
        description: "我们的服务团队在以下时间提供支持。",
        schedule: [
          {
            day: "星期一 - 星期四",
            time: "08:00 - 12:00，12:30 - 17:00",
          },
          {
            day: "星期五",
            time: "08:00 - 11:00，12:30 - 17:00",
          },
          {
            day: "星期六",
            time: "休息",
            status: "closed",
          },
          {
            day: "星期日",
            time: "休息",
            status: "closed",
          },
        ],
      },
    },
    getQuote: "获取免费报价",
    viewProducts: "查看我们的产品",
    contactUs: "联系我们",
    readyToStart: "准备开始？",
  },
  companyStrategy: {
    label: "公司战略",
    title: "SIPADU",
    description:
      "协同、诚信、保护、信任、奉献和卓越的缩写——PT SAN & PT BBR的工作指导原则，以安全、质量和效率支持国家发展。",
    ptSan: {
      title: "PT SAN 战略",
      description: "专注于预防性维护和高设备可用性以支持客户运营。",
    },
    ptBbr: {
      title: "PT BBR 战略",
      description: "在每个采矿项目执行中优先考虑运营效率和工作安全。",
    },
    sipadu: {
      sinergi: {
        title: "协同",
        description: "跨部门协作以获得最佳结果。",
      },
      integritas: {
        title: "诚信",
        description: "坚持道德、透明度和问责制。",
      },
      perlindungan: {
        title: "保护",
        description: "工作场所安全和健康作为优先事项。",
      },
      amanah: {
        title: "信任",
        description: "客户信任通过充分承诺得到保护。",
      },
      dedikasi: {
        title: "奉献",
        description: "持续改进和技术创新。",
      },
      unggul: {
        title: "卓越",
        description: "持续改进和技术创新。",
      },
    },
    logoMeaning: {
      title: "公司含义",
      companyName: "PT SAN & PT BBR",
      items: {
        redColor: {
          title: "红色",
          description: "勇敢、严肃、承诺和专业。",
        },
        redCube: {
          title: "红色立方体",
          description: "提供力量、稳定性、可靠性和安全性的理解。",
        },
        whiteCenter: {
          title: "白色中心框",
          description: "在工作环境中提供正义，始终提供最佳性能。",
        },
        blackLines: {
          title: "黑线框",
          description: "强调所有工作的自律，创造和谐的工作环境。",
        },
      },
    },
    strategies: {
      excellence: {
        title: "运营卓越",
        description: "持续改进我们的流程和方法，以提供卓越的结果。",
      },
      innovation: {
        title: "技术创新",
        description: "采用前沿的建筑技术和可持续实践。",
      },
      sustainability: {
        title: "环境可持续性",
        description: "致力于对环境负责的建筑实践和材料。",
      },
      partnership: {
        title: "战略合作伙伴关系",
        description: "与客户、供应商和行业合作伙伴建立长期关系。",
      },
    },
  },
  career: {
    label: "职业",
    internPageLabel: "实习计划",
    internPageTitle: "建设未来，加入我们",
    internPageDescription:
      "我们为来自教育机构的年轻人才开放机会，让他们能够在自己的领域发展专业潜力。",
    pageTitle: "与我们一起成长，建设印度尼西亚",
    pageDescription:
      "找到真实的项目职业机会。我们正在寻找优先考虑安全、质量和团队合作的纪律严明的人才。",
    openPositionsLabel: "职业机会",
    internPositionsLabel: "实习计划",
    internPositionsDescription:
      "我们的实习计划提供实践经验、建筑专家的指导以及真实项目的接触，以发展您的专业技能。",
    requirementsLabel: "要求",
    jobs: {
      "site-engineer-intern": {
        title: "现场工程师实习生",
        department: "工程",
        location: "中加里曼丹，南加里曼丹",
        employmentType: "实习",
        description:
          "学习现场工程实践，协助项目文档工作，并在道路建设项目中获得实践经验。",
        requirements: [
          "土木工程学士学位在读（至少第5学期）",
          "对建筑和基础设施有浓厚兴趣",
          "愿意在现场条件下工作",
          "良好的沟通和团队合作能力",
          "愿意被安置和分配到任何地点",
        ],
      },
      "safety-hse-intern": {
        title: "安全与HSE实习生",
        department: "Health, Safety & Environment",
        location: "中加里曼丹，南加里曼丹",
        employmentType: "实习",
        description:
          "支持HSE团队进行安全检查、事故报告和在建筑工地实施安全协议。",
        requirements: [
          "职业健康与安全、环境工程或相关领域学位在读（至少第5学期）",
          "基本了解HSE原则",
          "注重细节且主动积极",
          "能够独立工作和团队合作",
          "愿意被安置和分配到任何地点",
        ],
      },
      "estimator-planning-intern": {
        title: "估算与规划实习生",
        department: "Project Management",
        location: "中加里曼丹，南加里曼丹",
        employmentType: "实习",
        description:
          "协助道路和基础设施建设项目的成本估算、项目调度和资源规划。",
        requirements: [
          "土木工程或相关领域学士学位在读（至少第5学期）",
          "熟悉Microsoft Excel和基本项目管理工具",
          "分析思维和注重细节",
          "良好的数学和解决问题能力",
          "愿意被安置和分配到任何地点",
        ],
      },
      "project-engineer": {
        title: "项目工程师",
        department: "工程",
        location: "中加里曼丹，南加里曼丹",
        employmentType: "全职",
        description:
          "负责道路和基础设施建筑项目的技术规划、执行协调和质量控制。",
        requirements: [
          "土木工程学士学位或同等学历",
          "道路/沥青项目至少3年经验",
          "熟悉时间管理、成本估算和HSE",
          "能够在现场和移动中工作",
          "愿意被安置和分配到任何地点",
        ],
      },
      "site-supervisor": {
        title: "现场主管",
        department: "运营",
        location: "中加里曼丹，南加里曼丹",
        employmentType: "全职",
        description:
          "领导现场团队，确保工作符合规格，并准备日常报告和材料/设备协调。",
        requirements: [
          "土木工程文凭/学士学位或同等经验",
          "2年以上现场主管经验",
          "了解工作图纸、方法和质量",
          "善于沟通和纪律严明",
          "愿意被安置和分配到任何地点",
        ],
      },
      "heavy-equipment-operator": {
        title: "重型设备操作员",
        department: "运营",
        location: "中加里曼丹，南加里曼丹",
        employmentType: "合同",
        description:
          "操作重型设备（平地机、挖掘机、压实机）进行土方工程和沥青工程，遵循安全SOP。",
        requirements: [
          "有效的重型设备操作员认证",
          "操作至少2种设备类型的经验",
          "优先考虑安全和设备维护",
          "愿意被安置和分配到任何地点",
        ],
      },
    },
    cta: {
      notFoundTitle: "需要更多实习信息？",
      notFoundDescriptionPrefix: "请咨询",
      sendCvButton: "发送简历",
      applyNow: "立即申请",
    },
  },
  contact: {
    hero: {
      label: "联系",
      title: "联系我们",
      description: "准备讨论您的项目？我们的团队将快速响应建议和估算。",
    },
    form: {
      title: "发送消息",
      description: "填写表格，我们的团队将在1-2个工作日内回复。",
      nameLabel: "姓名",
      namePlaceholder: "您的全名",
      emailLabel: "电子邮件",
      emailPlaceholder: "you@example.com",
      subjectLabel: "主题",
      subjectPlaceholder: "项目咨询、报价等",
      messageLabel: "消息",
      messagePlaceholder: "简要描述您的需求",
      sendButton: "发送消息",
    },
    details: {
      title: "联系详情",
      addressLabel: "办公地址",
      emailLabel: "电子邮件",
      getDirections: "获取路线",
      secondaryEmailLine: "或通过 {email} 聘用我们",
    },
    validation: {
      nameRequired: "姓名是必需的",
      emailInvalid: "需要有效的电子邮件",
      subjectRequired: "主题是必需的",
      messageMin: "消息必须至少10个字符",
    },
    toast: {
      success: "消息已发送。我们将很快回复您。",
    },
    mail: {
      subjectTemplate: "申请：{subject}",
      generalSubject: "一般申请",
    },
  },
  gallery: {
    label: "画廊",
    title: "项目视觉文档",
    description: "我们完成的高质量项目的视觉文档。",
    ui: {
      filterBy: "按以下方式筛选：",
      viewLabel: "查看：",
      gridAria: "网格视图",
      byCategoryAria: "类别视图",
      keyboardHint: "提示：使用Ctrl+1/2/3/4进行筛选，Ctrl+G切换视图",
    },
    emptyState: {
      title: "无照片",
      description: "所选类别没有文档。",
    },
    autoplay: {
      play: "播放幻灯片",
      pause: "暂停幻灯片",
      prevAria: "上一张图片",
      nextAria: "下一张图片",
    },
    overlay: {
      photoPrefix: "照片",
      projectLabelPrefix: "项目",
      clickToView: "点击查看详情",
    },
    category: {
      adaro: {
        title: "PT. Adaro Indonesia现场",
        description: "PT. Adaro Indonesia基础设施项目文档",
        badge: "PT. Adaro",
      },
      kalimantan: {
        title: "政府项目 - 中加里曼丹",
        description: "中加里曼丹政府基础设施项目文档",
        badge: "加里曼丹",
      },
      borneo: {
        title: "PT. Borneo Indobara现场",
        description: "PT. Borneo Indobara基础设施项目文档",
        badge: "PT. Borneo",
      },
      allTitle: "所有项目",
      allDescription: "我们完成的所有项目视觉文档",
    },
    showingLabel: "显示",
    photosNoun: "照片",
    clickToViewDetail: "点击查看详情",
    card: { hdBadge: "高清" },
    stats: {
      projectDocs: "项目文档",
      projectCategories: "项目类别",
      qualityAssured: "质量保证",
      completedProjects: "已完成项目",
    },
    modal: { companyName: "PT SAN & PT BBR" },
    ariaGalleryNavigation: "{title}画廊 - 使用箭头键导航",
  },
  location: {
    label: "位置",
    pageTitle: "位置和运营范围",
    pageDescription:
      "查找我们在印度尼西亚各地的总部、运营办公室、仓库和现场支持团队的坐标。",
    map: {
      coverageBadge: "我们的覆盖范围",
      headline: "印度尼西亚的运营足迹",
      subheadline:
        "探索支持我们全国运营的战略位置——从总部到区域仓库和现场支持团队。",
      category: {
        headOffice: "总部",
        strategicPartner: "战略合作伙伴",
        industryPartner: "行业合作伙伴",
      },
      zoomOut: "缩小视图",
      viewOnMap: "在地图上查看",
      showLess: "显示较少",
      viewMoreTemplate: "查看更多（{count}）",
    },
  },
  serviceDetail: {
    scopeOfWork: "工作范围",
    specifications: "典型规格",
    deliverables: { title: "交付物和报告" },
    applications: { title: "适用应用" },
    premiumService: "优质服务",
    process: {
      title: "我们的工作方式",
      steps: {
        consultation: {
          title: "咨询",
          description: "与我们的团队讨论您的项目需求。",
        },
        planning: {
          title: "规划",
          description: "详细规划、调度和成本估算。",
        },
        execution: {
          title: "执行",
          description: "现场执行，严格控制质量。",
        },
      },
    },
    faqs: {
      title: "常见问题",
      items: [
        {
          q: "预计项目工期是多少？",
          a: "工期根据范围而变化。我们将在初步调查后提供详细的时间表。",
        },
        {
          q: "您如何确保质量标准？",
          a: "我们遵循国家标准和国际最佳实践，定期进行测试。",
        },
        {
          q: "我们将收到什么文件？",
          a: "您将收到方法声明、时间表、每日/每周报告、测试结果、照片文档和移交文件（竣工图、BAST），根据需要。",
        },
        {
          q: "可以在运营车道上工作吗？",
          a: "可以，通过交通工程、分阶段调度和严格的HSE标准来维护运营安全。",
        },
        {
          q: "有质量保证吗？",
          a: "我们根据合同实施维护期，如果结果不符合约定的规格，我们会进行纠正。",
        },
      ],
    },
    backToServices: "返回服务",
    sidebar: {
      title: "讨论您的项目",
      descriptionTemplate:
        "需要{service}服务？我们的团队随时准备帮助您选择最佳解决方案。",
    },
    whyChoose: {
      title: "为什么选择我们",
      items: ["经验丰富且经过认证的团队", "持续的质量控制", "现代安全的设备"],
    },
    bottomCta: {
      titleTemplate: "准备开始您的{service}项目？",
      description: "免费咨询和满足您需求的最佳报价。",
      exploreServices: "探索服务",
    },
  },
  services: {
    eatwork: {
      title: "土方工程",
      description:
        "全面的土方工程，包括场地清理、挖填、整平和压实，为坚固的建筑基础提供支持。",
      scope: ["场地清理和剥离", "挖填和整平", "压实和排水"],
      specs: [
        { label: "方法", value: "标准土方工程方法" },
        { label: "压实", value: "分层压实至规格" },
        { label: "质量", value: "现场密度和质量控制测试" },
      ],
      features: ["场地清理和剥离", "挖填和整平", "压实和排水"],
    },
    "upgrade-unbound": {
      title: "升级无粘结层",
      description: "通过材料和几何升级以及压实来提高无粘结骨料基层的承载能力。",
      scope: ["重新成型和重塑", "材料改进", "压实至目标密度"],
      specs: [
        { label: "重点", value: "材料和几何改进" },
        { label: "压实", value: "指定密度目标" },
      ],
      features: ["重新成型和重塑", "材料改进", "压实质量控制"],
    },
    ctrb: {
      title: "水泥处理再生基层 (CTRB)",
      description: "用水泥/化学品对现有材料进行就地稳定，形成更强的再生基层。",
      scope: ["就地再生", "水泥/化学品稳定", "分层压实和养护"],
      specs: [
        { label: "方法", value: "与粘结剂就地混合" },
        { label: "养护", value: "通常3-7天" },
      ],
      features: ["就地再生", "水泥/化学品稳定", "更快重新开放"],
    },
    ctrsb: {
      title: "水泥处理再生底基层 (CTRSB)",
      description: "通过水泥稳定加强底基层，提高模量和服务寿命。",
      scope: ["底基层改进和稳定", "成型、压实和测试"],
      specs: [
        { label: "层", value: "底基层（基础）" },
        { label: "密度", value: ">= 100% 目标（典型）" },
      ],
      features: ["底基层改进", "强度和刚度提升", "优化配合比设计"],
    },
    chipseal: {
      title: "碎石封层",
      description: "结合粘结剂和骨料的表面处理，提供保护、防滑和耐候性。",
      scope: ["表面准备和小修", "粘结剂喷洒和骨料摊铺", "碾压和清理"],
      specs: [
        { label: "类型", value: "单层/双层碎石封层" },
        { label: "粘结剂", value: "改性沥青或粘层" },
      ],
      features: ["单层/双层碎石封层", "粘结剂改性", "快速周转"],
    },
    "aspal-hotmix-modifikasi-coldmix": {
      title: "改性沥青热拌/冷拌",
      description: "使用改性沥青的高质量路面材料，提供卓越的耐久性和性能。",
      scope: ["材料准备和混合", "摊铺和压实", "质量控制和测试"],
      specs: [
        { label: "类型", value: "改性沥青热拌/冷拌" },
        { label: "改性剂", value: "聚合物改性沥青" },
      ],
      features: ["聚合物改性", "增强耐久性", "优异的抗车辙性"],
    },
    "bridge-construction-maintenance": {
      title: "桥梁建设与维护",
      description:
        "端到端桥梁交付和结构维护，确保桥梁在其整个生命周期内安全、可靠和合规。",
      scope: [
        "上部结构和下部结构建设",
        "支座、接缝和桥面修复",
        "保护涂层和防腐",
      ],
      specs: [
        { label: "重点", value: "设计建造、加固和维护" },
        { label: "质量", value: "荷载测试和详细检查报告" },
      ],
      features: [
        "上部结构和下部结构工程",
        "结构检查和修复",
        "交通管理和安全措施",
      ],
    },
    "soil-cement-base": {
      title: "水泥土基层",
      description: "用水泥粘结剂稳定土壤，为重型路面产生更强、更硬的基层。",
      scope: [
        "路基评估和配合比设计",
        "粉碎、混合和就地混合",
        "压实、养护和表面处理",
      ],
      specs: [
        { label: "粘结剂", value: "普通硅酸盐水泥 3-8%" },
        { label: "质量控制", value: "现场密度、无侧限抗压强度和湿度控制" },
      ],
      features: ["就地混合和稳定", "湿度和密度控制", "养护和质量保证"],
    },
    "rigid-pavement": {
      title: "刚性路面",
      description: "钢筋或接缝素混凝土路面系统，适用于长寿命、重交通走廊。",
      scope: [
        "底基层准备和传力杆安装",
        "滑模或固定模板摊铺作业",
        "接缝密封、养护和表面纹理",
      ],
      specs: [
        { label: "厚度", value: "通常200-320毫米" },
        { label: "钢筋", value: "按设计传力杆和拉杆" },
      ],
      features: ["设计和配合比优化", "滑模摊铺和面板放置", "接缝密封和养护"],
    },
    "overlay-road-method": {
      title: "路面覆盖方法",
      description:
        "用沥青或混凝土覆盖层恢复路面性能，根据结构条件和交通需求定制。",
      scope: [
        "状况调查和结构评估",
        "表面铣刨和粘结准备",
        "覆盖层放置、压实和完成",
      ],
      specs: [
        { label: "材料", value: "热拌沥青或PCC覆盖层" },
        { label: "交通", value: "分阶段交通和安全管理" },
      ],
      features: ["状况调查和设计", "表面准备和铣刨", "覆盖层放置和完成"],
    },
    "irrigation-system": {
      title: "灌溉系统",
      description: "建设和修复灌溉网络，为农业区域提供可靠的水分配。",
      scope: [
        "渠道土方工程和衬砌安装",
        "进水口、闸门和流量控制结构",
        "调试、校准和操作员培训",
      ],
      specs: [
        { label: "流量", value: "根据方案定制的设计流量" },
        { label: "控制", value: "手动或自动闸门" },
      ],
      features: ["渠道和进水口建设", "流量控制结构", "运营和维护规划"],
    },
    "pedestrian-construction-needs": {
      title: "人行道建设需求",
      description:
        "无障碍人行道设施，包括人行道、坡道、过街设施和城市环境的安全元素。",
      scope: [
        "人行道、坡道和触觉铺装工程",
        "扶手、护栏和安全安装",
        "街道家具、照明和景观",
      ],
      specs: [
        { label: "合规性", value: "SNI无障碍和通用设计" },
        { label: "表面", value: "防滑、耐用表面" },
      ],
      features: ["人行道和坡道施工", "无障碍和安全设计", "街道家具集成"],
    },
    "u-ditch-construction": {
      title: "U型沟渠建设",
      description:
        "预制U型沟渠排水安装，提供整洁、快速和低维护的开渠解决方案。",
      scope: [
        "测量、对齐和开挖",
        "垫层准备和预制件放置",
        "接缝密封、回填和完成",
      ],
      specs: [
        { label: "尺寸范围", value: "内宽300-1,200毫米" },
        { label: "材料", value: "预制钢筋混凝土" },
      ],
      features: ["预制件制作协调", "开挖和垫层准备", "接缝密封和完成"],
    },
    "box-culvert-construction": {
      title: "箱涵建设",
      description:
        "使用预制或现浇方法的公用设施、排水和道路交叉的箱涵解决方案。",
      scope: [
        "水力尺寸和钢筋详图",
        "底板和基础工程",
        "节段安装、接缝密封和回填",
      ],
      specs: [
        { label: "跨度", value: "通常1.5-4.0米" },
        { label: "施工", value: "预制或现浇" },
      ],
      features: ["水力设计和尺寸", "基础和垫层工程", "节段安装和灌浆"],
    },
    "drain-system-constructions": {
      title: "排水系统建设",
      description: "设计和建造地表和地下排水网络，保护场地免受洪水和积水影响。",
      scope: [
        "雨水建模和水力设计",
        "封闭和开放排水建设",
        "检查井、进水口和维护通道",
      ],
      specs: [
        { label: "系统", value: "地表和地下排水" },
        { label: "维护", value: "内置检查盖" },
      ],
      features: ["测量和水力评估", "封闭和开放排水施工", "维护通道解决方案"],
    },
    "road-median-construction": {
      title: "道路中央分隔带建设",
      description: "带护栏、排水和景观的中央分隔带建设，安全分离对向交通流。",
      scope: [
        "几何布局、放样和开挖",
        "护栏、路缘石和渠道安装",
        "照明、景观和标志工程",
      ],
      specs: [
        { label: "安全", value: "防撞护栏和标线集成" },
        { label: "排水", value: "中央分隔带排水口和出水口" },
      ],
      features: ["几何设计和测量", "护栏和路缘石安装", "照明和景观集成"],
    },
  },
  aboutPages: {
    ourCompany: {
      hero: {
        label: "关于我们",
        title: "以诚信建设，提供质量",
        description:
          "公司简介、价值观和推动中加里曼丹和南加里曼丹每个道路、热拌沥青和土方工程项目安全和质量标准提升的团队。",
      },
      intro: {
        heading: "基础设施项目背后的专业团队",
        paragraph1:
          "我们是由道路建设、土方工程和热拌沥青专家组成的团队，拥有超过三十年的经验。我们的工作文化强调安全、跨部门协作和持续创新，确保每个项目都达到最高标准。",
        paragraph2:
          "在完整重型设备车队和安全认证的支持下，PT SAN & PT BBR团队准备为政府和私人客户提供优质基础设施。",
        imageAlt: "PT SAN & PT BBR现场团队在项目现场穿着安全装备",
        slogan: "对安全的承诺 • 对质量的关注 • 强大的团队合作",
      },
    },
    ourTeam: {
      hero: {
        label: "我们的团队",
        title: "每个项目背后的领导力和人员",
        description:
          "我们的领导者在中加里曼丹和南加里曼丹的每个建筑项目中推动安全、效率和质量文化。",
      },
      badges: { peopleCulture: "人员与文化" },
      overview: {
        title: "统一战略和执行的团队",
        description:
          "我们相信项目成功始于董事、工程师和现场人员之间的协调。我们的团队确保从开始到移交的安全标准、质量控制和客户沟通保持一致。",
      },
      leadership: {
        title: "我们的领导方式",
        description: "三个领导原则确保每个项目有效安全地运行。",
        principles: [
          {
            title: "现场领导",
            description: "每个领导者都积极支持现场团队，确保现场满足安全标准。",
          },
          {
            title: "多学科协作",
            description:
              "我们的团队由土木工程师、项目经理和财务专家组成，作为一个整体工作。",
          },
          {
            title: "持续卓越",
            description: "对培训和技术的持续投资确保项目结果保持竞争力。",
          },
        ],
      },
      stats: {
        certifiedProfessionals: {
          label: "认证专业人员",
          value: "{count}",
          ctaLabel: "查看更多",
        },
        trainingHours: { label: "年度培训时间", value: "1,200" },
      },
      organization: {
        badgeCompany: "PT SAN & PT BBR",
        title: "组织结构",
        paragraph1:
          "从股东到运营部门的主要协调路径可视化为树状图，使每个利益相关者都能轻松阅读授权和责任流程。",
        paragraph2:
          "这种分层管理系统确保战略决策快速执行，同时为所有现场团队保持质量和安全。",
        hierarchy: [
          {
            title: "股东",
            description: "设定长期愿景和指导整个组织的治理原则。",
          },
          {
            title: "监事",
            description: "提供战略监督，确保良好公司治理得到一致应用。",
          },
          {
            title: "总裁董事",
            description: "协调项目执行，推动跨部门协作，维护运营绩效。",
          },
        ],
        divisions: [
          {
            name: "财务部门",
            focus: "每个项目的预算规划、成本分析和现金流治理。",
          },
          {
            name: "运营部门",
            focus: "建筑质量控制、工作场所安全和现场时间表准确性。",
          },
          {
            name: "物流部门",
            focus: "材料采购、交付调度和本地供应链协调。",
          },
          {
            name: "营销部门",
            focus: "战略合作伙伴关系、新项目招标和品牌传播。",
          },
          {
            name: "设备和维护部门",
            focus: "重型设备车队的准备和预防性维护，确保项目顺利进行。",
          },
        ],
        levelLabelTemplate: "级别{index}",
        divisionLabelTemplate: "部门{index}",
      },
    },
    teamMemberDetail: {
      backToTeam: "返回团队",
      buttons: {
        email: "电子邮件",
        linkedIn: "LinkedIn",
        emailAria: "给{name}发邮件",
        linkedInAria: "LinkedIn {name}",
      },
      signatureQuote: "签名引用",
      leadershipProfile: "领导力档案",
      keyStrengths: "关键优势",
      keyAchievements: "关键成就",
      leadershipMetrics: "领导力指标",
      timeline: {
        title: "贡献时间线",
        description: "突出增长、领导力和影响的关键里程碑。",
        descriptionTemplate:
          "塑造{name}在PT SAN & PT BBR领导力的职业里程碑。",
      },
    },
    certificationGallery: {
      hero: {
        label: "认证专业人员",
        title: "我们团队的证书和认证",
        description: "确保我们团队满足安全、质量和项目领导标准的官方证书集合。",
      },
      badge: "内部认证",
      headingTemplate: "{company}专业证书画廊",
      intro:
        "客户信任通过持续的能力发展建立。以下是我们工程师、主管和项目管理团队拥有的培训、许可证和认证文档。",
      defaultCaption: "公司运营标准和认证成就的文档。",
      captions: {
        antiBriberyManagementSystem:
          "反贿赂管理体系认证，确保公司治理合规透明。",
        ohsManagementSystem: "职业健康安全管理体系认证，保障作业安全。",
        environmentManagementSystem: "环境管理体系认证，体现可持续运营实践。",
        qualityManagementSystem: "质量管理体系认证，展示服务稳定与卓越。",
      },
    },
    companyAwardsGallery: {
      hero: {
        label: "我们的奖项",
        title: "卓越与信任的认可",
        description:
          "展示我们在安全、服务质量和长期合作方面坚持不懈的荣誉与肯定。",
      },
      badge: "奖项与表彰",
      headingTemplate: "{company}奖项画廊",
      intro:
        "我们对卓越运营的坚持，得到了战略合作伙伴、政府机构与行业领袖的广泛认可。",
      defaultCaption: "彰显我们持续表现与安全文化的奖项及荣誉。",
      captions: {
        csrRecognition: "对持续、高影响力企业社会责任计划的认可。",
        ohsMonth2025MainSession: "涉及内部团队和战略合作伙伴的安全月学习会议。",
        ohsMonth2025Appreciation: "表彰倡导卓越OHS文化单位的表彰仪式。",
        pertaminaBestEndUserAspal2022Award:
          "对符合国家质量基准的Pertamina沥青使用表现的奖励。",
        pertaminaBestEndUserAspal2022Certificate:
          "Pertamina对客户满意度和质量现场实施的官方证书。",
        pertaminaBestEndUserAspal2023:
          "对可持续性承诺和道路基础设施质量的持续认可。",
        pertaminaBestEndUserAspal2024:
          "Pertamina对公司项目创新和可靠性的最新认可。",
        miningSafetyImplementation: "符合国家采矿安全和运营标准的合规证书。",
        roadReservationProgram: "地方政府对有效规划和执行道路维护计划的奖励。",
      },
    },
  },
  products: {
    hero: {
      label: "产品",
      title: "重型设备和项目支持",
      description:
        "找到符合PT SAN质量标准的重型机械、电力解决方案和项目支持车辆。",
    },
    intro: {
      badge: "我们的产品",
      description:
        "我们提供全面的解决方案，包括重型设备、电力供应和材料运输。每个单元都经过严格检查，准备支持24/7运营。",
      rent: {
        badge: "重型设备租赁 (PT SAN)",
        title: "可靠的重型设备解决方案",
        description:
          "我们为您的建筑和采矿项目需求提供高质量的重型设备车队，并提供24/7技术支持。",
      },
      sale: {
        badge: "建筑服务与材料 (PT BBR)",
        title: "优质建筑与材料",
        description: "专业的采矿建筑服务和优质材料供应，以支持您的运营。",
      },
      all: {
        badge: "产品与服务",
        title: "PT SAN & PT BBR 的完整解决方案",
        description:
          "探索我们专为您的项目效率和可靠性而设计的各种重型设备和建筑服务。",
      },
    },
    filters: {
      title: "产品筛选器",
      description: "使用搜索和类别来缩小选择范围。",
      categoryTitle: "类别",
      allCategories: "所有类别",
      moreCategoriesLabel: "更多类别",
      viewOptions: "查看选项",
      exploreMore: "探索{count}个更多类别",
      productNoun: "产品",
      searchPlaceholder: "搜索产品、功能或标签...",
      sortPlaceholder: "排序",
      reset: "重置筛选器",
      activeLabel: "活跃",
      salesCategoryTitle: "销售类别",
      salesCategories: {
        all: "所有产品",
        sale: "销售产品",
        rent: "租赁产品",
      },
    },
    emptyState: {
      title: "未找到产品",
      description: "尝试不同的筛选器或清除您的搜索。",
    },
    status: {
      contactLabel: "联系我们",
      descriptionTemplate: "联系：{email}或{whatsapp}",
      descriptionEmailOnly: "联系：{email}",
      descriptionDualEmail: "联系：{email}或{emailSecondary}",
    },
    pagination: {
      perPage: "每页",
      perPageAria: "选择每页产品数量",
      summaryTemplate: "显示{start}-{end}，共{total}个{noun}",
    },
    detail: {
      specsTitle: "主要规格",
      highlights: "亮点",
      categoryHighlights: "类别亮点",
      availabilityStatus: "可用性状态",
      nextSteps: "下一步",
      nextStepsList: [
        "讨论项目需求和设备配置。",
        "获取交付时间表和售后支持。",
        "准备采购的支持文件。",
      ],
      helpText: "需要更多信息？我们的团队随时准备帮助定制最佳解决方案。",
      whatsappButton: "通过WhatsApp联系",
      rentPrefix: "租赁",
      salePrefix: "销售",
      locationTitle: "位置",
      locationValue: "中加里曼丹帕朗卡拉亚",
    },
    productsData: {
      categories: {
        excavator: {
          name: "挖掘机",
          description:
            "挖掘机车队用于大规模开挖、装载与重载土方(<em>earthwork</em>)施工。",
          highlight: "节油效率, 坡度控制, 精准液压",
        },
        "vibratory-roller": {
          name: "振动压路机",
          description: "振动式压实机，确保颗粒料和基层的均匀压实。",
          highlight: "可变振幅, 自动振动, 远程监控",
        },
        "pad-foot-roller": {
          name: "羊足碾",
          description: "针对黏性土的高压压实方案，提供强大牵引力。",
          highlight: "高压实度, 羊足碾壳体, 重载车轴",
        },
        aspal: {
          name: "沥青材料",
          description: "高品质沥青材料，适用于道路与基础设施建设。",
          highlight: "高等级沥青, 渗透等级, 卓越品质",
        },
        "ready-mix": {
          name: "预拌混凝土",
          description: "提供多种强度等级的预拌混凝土，随时可浇筑。",
          highlight: "K-125 至 K-550, 品质保证",
        },
        "peralatan-aspal": {
          name: "沥青施工设备",
          description: "沥青路面施工设备。",
          highlight: "精确摊铺, 温度控制, 光滑成型",
        },
        "batching-plant": {
          name: "混凝土搅拌站",
          description: "模块化搅拌站，确保预拌混凝土的稳定生产。",
          highlight: "90-120 m³/h, 双轴搅拌机, 含水监测",
        },
        "peralatan-aspal-asphalt-sprayer-distributor-mitsubishi-fe-349-h": {
          name: "沥青喷洒机 - 三菱 FE 349 H",
          description: "沥青热拌喷洒设备",
        },
        "peralatan-aspal-soil-stabilizer-wirtgen-wr-2500-s": {
          name: "土壤稳定剂 - WIRTGEN WR 2500 S",
          description: "再生施工设备",
        },
        "combination-roller": {
          name: "组合式压路机",
          description: "组合压路机在沥青面层收光时实现最佳密实度。",
          highlight: "双钢轮, 气胎组, 自动喷淋",
        },
        "tandem-roller": {
          name: "双钢轮压路机",
          description: "双钢轮压路机用于细料沥青层的均匀压实。",
          highlight: "振动摆动, 侧压装置, 振动控制",
        },
        "pneumatic-tire-roller": {
          name: "胶轮压路机",
          description: "胶轮压路机用于封层收光及层间黏结。",
          highlight: "可调配重, 轮胎加热, 覆盖均匀",
        },
        bulldozer: {
          name: "推土机",
          description: "中大型推土机，适用于场地清理与松土作业。",
          highlight: "国三发动机, PAT 可调铲, 松土器预装",
        },
        "crawler-crane": {
          name: "履带起重机",
          description: "履带式起重机用于重型构件吊装与基础工程。",
          highlight: "变幅副臂, 力矩限制器, 重载底盘",
        },
        "road-sweeper": {
          name: "道路清扫车",
          description: "道路清扫车适用于工地道路及工业区域保洁。",
          highlight: "大容量料仓, 喷水系统, 真空助力",
        },
        "dump-truck": {
          name: "自卸卡车",
          description: "<em>重载型</em>自卸车，用于矿山与施工物料运输。",
          highlight: "液力缓速器, 车队远程监控, 重载车轴",
        },
        "mixer-truck": {
          name: "混凝土搅拌运输车",
          description: "多种容量的搅拌车，配备坍落度控制与冲洗系统。",
          highlight: "自动计量, 舒适驾驶室, 易清洗搅拌筒",
        },
        "self-loader-truck": {
          name: "自装车",
          description: "带液压跳板的自装运车，用于中小型设备运输。",
          highlight: "液压鹅颈, 绞盘辅助, 护航组件",
        },
        "motor-grader": {
          name: "平地机",
          description: "高精度平地机，用于道路成型和底基层整平。",
          highlight: "坡度控制, 全轮驱动, 精准刀板控制",
        },
        "wheel-loader": {
          name: "轮式装载机",
          description: "多用途轮式装载机，适合装载骨料、堆料与物料搬运。",
          highlight: "自动称重, 牵引力控制, 高破碎力",
        },
        "tractor-head-trailer": {
          name: "牵引车/挂车",
          description: "牵引车搭配模块化挂车，满足重载运输与项目物流。",
          highlight: "370 马力, ABS, 空气悬挂",
        },
      },
      products: {
        "peralatan-aspal-asphalt-sprayer-distributor-xi-an-dagang-dgls251gls": {
          name: "沥青喷洒机 - 西安大港 DGLS251GLS",
          description: "沥青热拌喷洒设备",
          specs: [
            "精准摊铺",
            "温度控制",
            "平滑整理",
            "工作宽度2.04米",
            "工作深度0.5毫米",
          ],
          tags: [],
        },
        "combination-roller-combination-roller-medium-sakai-tw-500w-1": {
          specs: ["双钢轮", "气胎轮组", "自动洒水", "3.5 吨级", "中等级别工程"],
        },
        "combination-roller-combination-roller-mini-sakai-tw350": {
          specs: ["双钢轮", "气胎轮组", "自动洒水", "2.5 吨级", "小型级别工程"],
        },
        "tandem-roller-tandem-roller-dynapac-cc2200": {
          name: "串联压路机 - 戴纳派克 CC2200",
          description: "双钢轮串联压路机，高效沥青压实",
          specs: ["振荡", "边缘压实", "振动控制", "9 吨级"],
          tags: [],
        },
        "tandem-roller-tandem-roller-mini-dynapac-cc1250": {
          name: "小型串联压路机 - 戴纳派克 CC1250",
          description: "紧凑型双钢轮压路机，精确压实作业",
          specs: ["振荡", "边缘压实", "振动控制", "3 吨级", "小型-中型工程"],
          tags: [],
        },
        "pneumatic-tire-roller-pneumatic-tire-roller-kotai-kp166": {
          name: "轮胎压路机 - KOTAI KP166",
          description: "轮胎压路机用于密封层整修和层间结合",
          specs: ["可变配重", "轮胎加热", "均匀覆盖", "16 吨级"],
          tags: [],
        },
        "pneumatic-tire-roller-pneumatic-tire-roller-sakai-ts-200": {
          name: "轮胎压路机 - SAKAI TS 200",
          description: "轮胎压路机用于密封层整修和层间结合",
          specs: ["可变配重", "轮胎加热", "均匀覆盖", "10-15 吨级"],
          tags: [],
        },
        "bulldozer-bulldozer-caterpillar-d7g": {
          name: "推土机 - 卡特彼勒 D7G",
          description: "中重型推土机用于清场和松土作业",
          specs: ["20.5 吨级", "Tier 3 发动机", "PAT 推土板", "松土器就绪"],
          tags: [],
        },
        "bulldozer-bulldozer-maximus-md85xl": {
          name: "推土机 - MAXIMUS MD85XL",
          description: "中重型推土机用于清场和松土作业",
          specs: ["20-21 吨级", "Tier 3 发动机", "PAT 推土板", "松土器就绪"],
          tags: [],
        },
      },
      sortOptions: {},
    },
  },
};
