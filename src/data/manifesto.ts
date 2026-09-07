import { ManifestoCategory, ManifestoPolicy } from "@/types";

export const manifestoCategories: ManifestoCategory[] = [
  {
    id: "governance",
    titleEn: "National Identity & Governance",
    titleUr: "قومی نظریہ اور حکمرانی",
    descriptionEn: "Reorganizing administrative boundaries into manageable provinces, empowering local municipalities, and implementing Urdu as state language.",
    descriptionUr: "انتظامی بنیادوں پر نئے صوبوں کا قیام، بااختیار بلدیاتی نظام اور قومی زبان کا نفاذ۔",
    policyNumbers: [1, 2, 3, 4, 34],
  },
  {
    id: "justice",
    titleEn: "Justice & Rule of Law",
    titleUr: "عدل اور قانون کی بالادستی",
    descriptionEn: "Statutory Case Calendar system, e-courts, depoliticized local policing, and universal accountability where no one is above the law.",
    descriptionUr: "کیس کیلنڈر سسٹم، ای کورٹس، غیر سیاسی پولیسنگ اور بلا امتیاز کڑا احتساب۔",
    policyNumbers: [8, 9, 10, 11, 32],
  },
  {
    id: "education",
    titleEn: "Education & Human Development",
    titleUr: "تعلیم اور انسانی ترقی",
    descriptionEn: "Single core national curriculum, mother tongue support in primary years, and the 'Skill + Education + Industry' vocational framework.",
    descriptionUr: "یکساں نصاب، مادری زبان کا احترام اور اسکل پلس ایجوکیشن پلس انڈسٹری ماڈل۔",
    policyNumbers: [5, 6, 7],
  },
  {
    id: "economy",
    titleEn: "Economy, Industry & Agriculture",
    titleUr: "معیشت، صنعت اور زراعت",
    descriptionEn: "Pivoting from debt consumption to production, special economic zones, modernized agri-business, sovereign energy, and digital tax reform.",
    descriptionUr: "درآمدی معیشت کی جگہ پیداواری معیشت، صنعتی و زرعی انقلاب اور ٹیکس اصلاحات۔",
    policyNumbers: [12, 13, 14, 15, 16, 33],
  },
  {
    id: "trade",
    titleEn: "Trade, Ports & Connectivity",
    titleUr: "تجارت، بندرگاہیں اور مواصلات",
    descriptionEn: "Developing the Karachi-Gwadar economic axis, Arabian Sea trade corridors, and industrial Technology & CPEC 2.0 partnerships.",
    descriptionUr: "کراچی اور گوادر کا ساحلی معاشی کوریڈور اور ٹیکنالوجی و سی پیک 2.0 کا اگلا مرحلہ۔",
    policyNumbers: [17, 18, 19],
  },
  {
    id: "security",
    titleEn: "Foreign Policy, Defense & Security",
    titleUr: "خارجہ پالیسی، دفاع اور سلامتی",
    descriptionEn: "Pakistan First balanced diplomacy, diplomatic internationalization of Kashmir, defense export modernization, and unified internal security.",
    descriptionUr: "پاکستان فرسٹ متوازن خارجہ پالیسی، مسئلہ کشمیر کا سفارتی حل اور جدید دفاعی صنعت۔",
    policyNumbers: [20, 21, 22, 23],
  },
  {
    id: "public-service",
    titleEn: "Public Administration, Health & Environment",
    titleUr: "عوامی خدمات، صحت اور ماحولیات",
    descriptionEn: "One Citizen — One Digital Government ID, universal district health coverage, Water Security Plan, and urban water plans.",
    descriptionUr: "ون سٹیزن ڈیجیٹل گورنمنٹ آئی ڈی، ضلعی صحت پروگرام اور قومی واٹر سیکیورٹی پلان۔",
    policyNumbers: [24, 25, 26],
  },
  {
    id: "citizenship",
    titleEn: "Youth, Women, Rights & Electoral Reform",
    titleUr: "نوجوان، خواتین، اقلیتیں اور اصلاحات",
    descriptionEn: "Empowering youth as national economic assets, women's inclusion, equal constitutional rights for minorities, and eliminating dynastic politics.",
    descriptionUr: "نوجوانوں کو معاشی اثاثہ بنانا، خواتین کی شمولیت، اقلیتوں کو تحفظ اور موروثی سیاست کا خاتمہ۔",
    policyNumbers: [27, 28, 29, 30, 31],
  },
  {
    id: "transformation",
    titleEn: "National Transformation 2036",
    titleUr: "قومی تبدیلی کا منصوبہ 2036",
    descriptionEn: "The centerpiece 10-year transformation plan anchored on National Unity, Justice, Production, Connectivity, and Security.",
    descriptionUr: "قومی اتحاد، انصاف، پیداوار، کنیکٹیویٹی اور سلامتی پر مشتمل دس سالہ انقلابی منصوبہ۔",
    policyNumbers: [35],
  },
];

export const manifestoPolicies: ManifestoPolicy[] = [
  {
    number: 1,
    slug: "1-national-vision",
    titleUr: "پاکستان عدل پارٹی کا قومی نظریہ",
    titleEn: "National Vision",
    category: "governance",
    categoryUr: "قومی نظریہ اور حکمرانی",
    summaryUr: "پاکستان کا بحران حکومتوں کی تبدیلی نہیں بلکہ ریاستی نظم، سیاسی ڈھانچے، عدالتی تاخیر، اور اشرافیائی سیاست کا مجموعہ ہے۔ ایک قوم، ایک ریاست، ایک آئین، ایک قومی شناخت اور متعدد انتظامی اکائیاں۔",
    summaryEn: "Pakistan's fundamental crisis is not merely a change of regimes; it is a structural failure of state governance, dynastic politics, judicial backlogs, and elite-capture economics. Our foundation: One Nation, One State, One Constitution, One National Identity, and Multiple Administrative Units.",
    fullTextUr: "پاکستان عدل پارٹی سمجھتی ہے کہ پاکستان کا بنیادی بحران صرف حکومتوں کی تبدیلی نہیں بلکہ ریاستی نظم، سیاسی ڈھانچے، معاشی پالیسی، عدالتی تاخیر، انتظامی مرکزیت، لسانی تقسیم اور اشرافیائی سیاست کا مجموعہ ہے۔ ہم پاکستان کو ایک قوم، ایک ریاست، ایک آئین، ایک قومی شناخت اور متعدد انتظامی اکائیوں کے اصول پر منظم کریں گے۔\n\nنئے صوبے کسی زبان یا نسل کی بنیاد پر نہیں بلکہ درج ذیل بنیاد پر تشکیل دیے جائیں گے:\n• بہتر حکمرانی\n• انتظامی سہولت\n• معاشی استعداد\n• آبادی\n• جغرافیائی ضرورت\n• شہری خدمات\n• قومی یکجہتی\n\nصوبہ قوم نہیں ہو گا؛ صوبہ ریاست پاکستان کی انتظامی اکائی ہو گا۔ اس طرح لسانی و نسلی قوم پرستی کے بجائے پاکستانی قومی شناخت مضبوط ہوگی۔",
    fullTextEn: "Pakistan Adal Party recognizes that Pakistan's systemic predicament is not merely about cyclical political changes, but the culmination of a distorted state apparatus, political feudalism, economic fragility, judicial delay, excessive centralization, and ethno-linguistic polarization. We shall organize Pakistan around the bedrock principle: One Nation, One State, One Constitution, One National Identity, and Multiple Decentralized Administrative Units.\n\nNew provinces will not be demarcated on linguistic or racial grounds, but strictly on administrative criteria: superior governance, administrative ease, economic viability, population distribution, geographical coherence, urban public services, and national cohesion. Provinces are administrative servants of the federation, not sovereign nationalities.",
    keyPointsUr: [
      "ریاستی وفاداری صرف آئین اور پاکستان سے ہوگی۔",
      "لسانی یا نسلی بنیادوں پر صوبوں کی تقسیم کی مخالفت۔",
      "صوبہ صرف انتظامی اکائی ہوگا، الگ قوم نہیں۔",
      "انتظامی استعداد، آبادی اور عوامی سہولت پر مبنی نئے صوبوں کا قیام۔"
    ],
    keyPointsEn: [
      "State loyalty belongs exclusively to the Constitution and Pakistan.",
      "Rejection of ethno-linguistic state fracturing in favor of administrative decentralization.",
      "Provinces serve as functional administrative units, not ethnic nationalities.",
      "Establishment of new administrative units based on population, efficiency, and citizen access."
    ],
    officialTerms: ["One Nation, One State, One Constitution", "Administrative Units"],
    icon: "Compass"
  },
  {
    number: 2,
    slug: "2-new-provinces",
    titleUr: "ملک بھر میں نئے صوبوں کا قیام",
    titleEn: "Establishment of New Provinces Across the Country",
    category: "governance",
    categoryUr: "قومی نظریہ اور حکمرانی",
    summaryUr: "کسی ایک صوبے کو نشانہ بنانے کے بجائے پورے پاکستان کے لیے ایک غیر جانبدار قومی کمیشن برائے انتظامی تنظیمِ نو قائم کیا جائے گا۔",
    summaryEn: "Rather than targeting any single region, an independent National Commission for Administrative Reorganization will be established across Pakistan to recommend new administrative provinces.",
    fullTextUr: "پاکستان عدل پارٹی کا بنیادی انتظامی اصلاحاتی منصوبہ ملک بھر میں مناسب تعداد میں نئے صوبوں اور انتظامی اکائیوں کا قیام ہو گا۔ ہم کسی ایک صوبے کو نشانہ بنانے کے بجائے پورے پاکستان کے لیے ایک غیر جانبدار قومی کمیشن برائے انتظامی تنظیمِ نو قائم کریں گے۔ کمیشن درج ذیل بنیادوں پر سفارشات دے گا:\n1. آبادی\n2. جغرافیہ\n3. انتظامی فاصلے\n4. معاشی استعداد\n5. قدرتی وسائل\n6. شہری سہولیات\n7. صحت و تعلیم کی رسائی\n8. انفراسٹرکچر\n9. عوامی رائے\n10. قومی سلامتی اور انتظامی استحکام\n\nبنیادی اصول:\n• نئے صوبے لسانی ریاستیں نہیں ہوں گے۔\n• پنجابی، سندھی، پشتون، بلوچ، سرائیکی، اردو، ہندکو، براہوی یا کسی دوسری زبان کو سیاسی اقتدار کی مستقل بنیاد نہیں بنایا جائے گا۔\n• ہر صوبے میں تمام پاکستانی شہری برابر ہوں گے۔\n• مقامی زبانوں کی ثقافتی اور تعلیمی حیثیت برقرار رہے گی، مگر قومی انتظام، بین الصوبائی رابطے اور ریاستی شناخت کے لیے اردو کو مرکزی حیثیت حاصل ہوگی۔",
    fullTextEn: "Pakistan Adal Party's flagship administrative reform is the creation of a rational number of smaller administrative provinces throughout Pakistan. An impartial National Commission for Administrative Reorganization will evaluate: 1. Population, 2. Geography, 3. Administrative distances, 4. Economic viability, 5. Natural resources, 6. Urban civic facilities, 7. Access to healthcare and schooling, 8. Infrastructure, 9. Public consultations, 10. National security and institutional stability.\n\nCore Principles: New provinces shall not be ethnic fiefdoms. No linguistic grouping shall monopolize provincial authority. Every Pakistani citizen shall enjoy equal legal standing regardless of residence. While regional languages are culturally preserved, Urdu serves as the primary inter-provincial administrative anchor.",
    keyPointsUr: [
      "غیر جانبدار قومی کمیشن برائے انتظامی تنظیمِ نو کا قیام۔",
      "10 بنیادی معیارات کی بنیاد پر سائنسی و شفاف سفارشات۔",
      "ہر صوبے میں تمام پاکستانی شہریوں کے یکساں اور مساوی حقوق۔",
      "علاقائی زبانوں کا احترام اور اردو کو قومی رابطے کا مرکزی ذریعہ بنانا۔"
    ],
    keyPointsEn: [
      "Establishment of an independent National Commission for Administrative Reorganization.",
      "Transparent 10-point criteria balancing geography, population, and economic potential.",
      "Equal citizenship and unhindered residency rights for all Pakistanis across all provinces.",
      "Preservation of cultural mother tongues alongside Urdu as the central federal lingua franca."
    ],
    officialTerms: ["National Commission for Administrative Reorganization", "Administrative Stability"],
    icon: "MapPin"
  },
  {
    number: 3,
    slug: "3-local-government",
    titleUr: "مقامی حکومت: اقتدار عوام کی دہلیز تک",
    titleEn: "Local Government: Power at the People's Doorstep",
    category: "governance",
    categoryUr: "قومی نظریہ اور حکمرانی",
    summaryUr: "صرف نئے صوبے بنانے تک محدود نہیں رہیں گے بلکہ ہر صوبے میں صوبہ، ڈویژن، ضلع، تحصیل اور مقامی حکومت کا مؤثر انتظامی نظام قائم کیا جائے گا۔",
    summaryEn: "Administrative decentralization will not stop at new provinces. An empowered tier of local government will bring real financial, planning, and executive authority to the people's doorstep.",
    fullTextUr: "پاکستان عدل پارٹی صوبائی حکومتوں کی جگہ صرف نئے صوبے بنانے تک محدود نہیں رہے گی۔ ہر صوبے میں: صوبہ، ڈویژن، ضلع، تحصیل، مقامی حکومت کا مؤثر انتظامی نظام قائم کیا جائے گا۔ بلدیاتی حکومتوں کو درج ذیل اختیارات اور مالی وسائل دیے جائیں گے:\n• پانی اور صفائی\n• مقامی سڑکیں\n• بنیادی صحت اور ابتدائی تعلیم\n• شہری منصوبہ بندی اور بلڈنگ کنٹرول\n• مقامی ٹرانسپورٹ",
    fullTextEn: "Decentralization cannot stop at the provincial level. In every province, an institutional hierarchy—Province, Division, District, Tehsil, and Local Councils—will be constitutionally secured with guaranteed fiscal transfers. Municipal governments will hold devolved powers over: water supply, sanitation, local road construction, primary healthcare, basic schooling, urban town planning, building codes, and municipal transit.",
    keyPointsUr: [
      "اختیارات اور فنڈز کی براہِ راست بلدیاتی اداروں کو منتقلی۔",
      "صفائی، پینے کا پانی، اور مقامی انفراسٹرکچر منتخب کونسلوں کے سپرد۔",
      "شہری منصوبہ بندی اور بلڈنگ کنٹرول میں شفافیت۔"
    ],
    keyPointsEn: [
      "Constitutional protection and direct fiscal empowerment of local governments.",
      "Primary health, education, and municipal sanitation managed at local council level.",
      "Modern urban planning and zoning administered directly by accountable municipal bodies."
    ],
    officialTerms: ["Local Government Autonomy", "Power at the People's Doorstep"],
    icon: "Building2"
  },
  {
    number: 4,
    slug: "4-practical-urdu",
    titleUr: "اردو کا عملی نفاذ",
    titleEn: "Practical Implementation of Urdu",
    category: "governance",
    categoryUr: "قومی نظریہ اور حکمرانی",
    summaryUr: "آئین کے آرٹیکل 251 کے تحت 'پانچ سالہ اردو نفاذ پروگرام' کا آغاز، وفاقی وزارتوں، پارلیمنٹ اور قانونی خط و کتابت کا قومی زبان میں تبادلہ۔",
    summaryEn: "Full practical implementation of Article 251 of the Constitution under a dedicated 'Five-Year Urdu Implementation Program' across all federal ministries, parliament, and official administration.",
    fullTextUr: "آئین پاکستان پہلے ہی اردو کو قومی زبان قرار دیتا ہے اور آرٹیکل 251 میں سرکاری استعمال کے لیے اس کے نفاذ کی سمت متعین کرتا ہے۔ پاکستان عدل پارٹی اس آئینی تقاضے کو عملی شکل دے گی۔ ہمارا منصوبہ 'پانچ سالہ اردو نفاذ پروگرام' کے تحت:\n• وفاقی وزارتوں کا سرکاری کام اردو میں\n• قومی اسمبلی اور سینیٹ میں اردو ترجیحی زبان\n• سرکاری خط و کتابت اور امتحانات اردو میں\n• عدالتی فیصلوں کے اردو نسخے اور سرکاری قوانین کے مستند اردو متن\n• پولیس اور ضلعی انتظامیہ کا دفتری کام اردو میں\n• سرکاری تعلیمی نصاب کا بنیادی ذریعہ اردو ہوگا\nالبتہ سائنس، طب، انجینئرنگ، آئی ٹی، عالمی تجارت اور سفارت کاری کے لیے انگریزی اور دیگر عالمی زبانوں کی تدریس ختم نہیں کی جائے گی۔ مقصد انگریزی دشمنی نہیں بلکہ قومی زبان کو ریاستی زبان بنانا ہے۔",
    fullTextEn: "Article 251 of the Constitution mandates Urdu as the official working language. The Pakistan Adal Party introduces a realistic 'Five-Year Urdu Implementation Program': federal ministerial documentation, parliamentary debates, official examinations, authentic statutory texts, court decisions, and police procedures will transition into Urdu. Critically, instruction in science, medicine, engineering, IT, international diplomacy, and commerce in English and global languages will be strengthened; the objective is not hostility to English, but restoring national dignity and equal access to state functions through our national tongue.",
    keyPointsUr: [
      "آرٹیکل 251 کا عملی نفاذ اور 'پانچ سالہ اردو نفاذ پروگرام'۔",
      "عدالتی فیصلوں اور ریاستی قوانین کا اردو متن عوام کی آسانی کیلئے۔",
      "سائنس، ٹیکنالوجی اور عالمی تجارت میں انگریزی کی اہمیت بدستور برقرار رہے گی۔"
    ],
    keyPointsEn: [
      "Constitutional fulfillment of Article 251 via a structured 5-year federal roadmap.",
      "Publishing authentic Urdu legal statutes and judgments so common citizens understand the law.",
      "Preserving scientific, medical, and global technological competency in English."
    ],
    officialTerms: ["Five-Year Urdu Implementation Program", "Article 251 Compliance"],
    icon: "BookOpen"
  },
  {
    number: 5,
    slug: "5-uniform-education",
    titleUr: "یکساں قومی نظام تعلیم",
    titleEn: "Uniform National Education System",
    category: "education",
    categoryUr: "تعلیم اور انسانی ترقی",
    summaryUr: "تعلیم میں طبقاتی تقسیم کا خاتمہ؛ 'ایک قوم، ایک بنیادی قومی نصاب' کا نفاذ تاکہ غریب اور امیر کے بچوں کو برابر تعلیمی مواقع میسر آئیں۔",
    summaryEn: "Eliminating educational apartheid through 'One Nation, One Core National Curriculum', guaranteeing uniform high-quality schooling regardless of socioeconomic status.",
    fullTextUr: "پاکستان میں طبقاتی تعلیم قومی وحدت کے لیے ایک بڑا مسئلہ ہے۔ پاکستان عدل پارٹی 'ایک قوم، ایک بنیادی قومی نصاب' کا نظام نافذ کرے گی۔ نصاب میں بنیادی حیثیت کے حامل مضامین:\n• قرآن و اسلامیات، پاکستان اسٹڈیز، آئین پاکستان، تاریخ پاکستان\n• سائنس، ریاضی، ٹیکنالوجی، معاشیات\n• اخلاقیات، تنقیدی فکر، شہری ذمہ داریاں، آئینی حقوق",
    fullTextEn: "Class-divided schooling fractures national cohesion. Pakistan Adal Party will enforce 'One Nation, One Core Curriculum' ensuring that every child masters foundational ethics, constitutional literacy, mathematics, science, technology, economics, critical reasoning, and civic responsibilities.",
    keyPointsUr: [
      "طبقاتی تعلیمی نظام اور تعلیمی تفریق کا خاتمہ۔",
      "آئین پاکستان اور شہری حقوق نصاب تعلیم کا لازمی حصہ ہوں گے۔",
      "سائنس، ریاضی اور ٹیکنالوجی کی اعلیٰ معیار کی تعلیم۔"
    ],
    keyPointsEn: [
      "Abolition of class-stratified schooling and commercial exploitation in basic education.",
      "Mandatory instruction in constitutional rights, civic accountability, and national history.",
      "World-class focus on STEM, critical thinking, and digital literacy from early grades."
    ],
    officialTerms: ["One Nation, One Core Curriculum", "Constitutional Literacy"],
    icon: "GraduationCap"
  },
  {
    number: 6,
    slug: "6-mother-tongue",
    titleUr: "مادری زبان",
    titleEn: "Mother Tongue",
    category: "education",
    categoryUr: "تعلیم اور انسانی ترقی",
    summaryUr: "ابتدائی سطح پر بچے کو مادری/مقامی زبان میں سہولت دی جا سکے گی، مگر قومی تعلیمی اور سرکاری نظام کا مرکزی رابطہ اردو ہو گا۔",
    summaryEn: "Facilitating early childhood cognitive development in regional mother tongues while maintaining Urdu as the national pedagogical and administrative bridge.",
    fullTextUr: "ابتدائی سطح پر بچے کو مادری/مقامی زبان میں سہولت دی جاسکے گی، مگر قومی تعلیمی اور سرکاری نظام کا مرکزی رابطہ اردو ہوگا۔ ہر طالب علم کے لیے اردو، انگریزی اور کم از کم ایک اضافی زبان سیکھنے کے مواقع پیدا کیے جائیں گے۔",
    fullTextEn: "Children learn best initially in their mother tongue; foundational primary support will be extended in indigenous languages. Simultaneously, Urdu serves as the primary national bridge language, with rigorous instruction in English and elective regional languages.",
    keyPointsUr: [
      "ابتدائی تعلیم میں مادری زبان کی افادیت کا اعتراف۔",
      "اردو اور انگریزی کے ساتھ کثیر لسانی مہارت کی حوصلہ افزائی۔"
    ],
    keyPointsEn: [
      "Pedagogical support for native mother tongues during foundational early education.",
      "Trilingual fluency: regional mother tongue, national Urdu, and international English."
    ],
    officialTerms: ["Mother Tongue Support", "Trilingual Fluency"],
    icon: "Languages"
  },
  {
    number: 7,
    slug: "7-education-employment",
    titleUr: "تعلیم اور روزگار کو جوڑنا",
    titleEn: "Connecting Education with Employment",
    category: "education",
    categoryUr: "تعلیم اور انسانی ترقی",
    summaryUr: "صرف ڈگریاں تقسیم کرنے کے بجائے Skill + Education + Industry ماڈل نافذ ہوگا؛ ہر ضلع میں ٹیکنیکل و ووکیشنل سینٹرز کا قیام۔",
    summaryEn: "Replacing meaningless paper degree factories with the 'Skill + Education + Industry' framework; establishing technical institutes and vocational polytechnics in every district.",
    fullTextUr: "صرف ڈگریاں تقسیم کرنے کے بجائے Skill + Education + Industry ماڈل نافذ ہوگا۔ ہر ضلع میں درج ذیل ادارے قائم کیے جائیں گے تاکہ نوجوانوں کو قابل روزگار بنایا جاسکے:\n• ٹیکنیکل یونیورسٹی / انسٹی ٹیوٹ\n• ووکیشنل سینٹر اور آئی ٹی ہب\n• زرعی اور صنعتی تربیتی مرکز",
    fullTextEn: "Pakistan will depart from producing unemployed generalist degree holders. Under the 'Skill + Education + Industry' framework, each district will house an integrated Technical University/Institute, modern IT Vocational Center, and Agro-Industrial Apprenticeship Hub tied directly to local industry demands.",
    keyPointsUr: [
      "Skill + Education + Industry ماڈل کا نفاذ۔",
      "ہر ضلع میں ووکیشنل سینٹر، آئی ٹی ہب اور زرعی تربیتی مرکز۔",
      "ڈگری کے ساتھ ہنر اور براہِ راست روزگار کے مواقع۔"
    ],
    keyPointsEn: [
      "Direct rollout of the 'Skill + Education + Industry' institutional linkage model.",
      "IT academies and vocational polytechnics tailored to the market in every single district.",
      "Guaranteed apprenticeships and industry-recognized certifications."
    ],
    officialTerms: ["Skill + Education + Industry", "District IT Hubs"],
    icon: "Briefcase"
  },
  {
    number: 8,
    slug: "8-judicial-case-calendar",
    titleUr: "عدالتی نظام: کیس کیلنڈر سسٹم",
    titleEn: "Judicial System: Case Calendar System",
    category: "justice",
    categoryUr: "عدل اور قانون کی بالادستی",
    summaryUr: "ہر مقدمے کے آغاز پر عدالت ایک Case Calendar مقرر کرے گی جس میں ابتدائی سماعت، جواب داخل کرنے، شہادت اور حتمی فیصلے کی مدت طے ہوگی۔",
    summaryEn: "Institutionalizing a statutory 'Case Calendar System' at the outset of every court case to establish strict deadlines for hearings, evidence, pleadings, and judgment.",
    fullTextUr: "پاکستان عدل پارٹی 'کیلنڈر سسٹم آف جسٹس' نافذ کرے گی۔ ہر مقدمے کے آغاز پر عدالت ایک Case Calendar مقرر کرے گی جس میں ابتدائی سماعت، جواب داخل کرنے کی تاریخ، شہادت، جرح، حتمی دلائل اور فیصلے کی مقررہ مدت ہوگی۔\n\nاصول: Justice delayed shall not become justice denied.\n\nہر مقدمے کا ڈیجیٹل ٹریکنگ نمبر ہوگا تاکہ شہری آن لائن دیکھ سکیں کہ مقدمہ کہاں پہنچا، اگلی تاریخ کیا ہے، اور تاخیر کی وجہ کیا ہے۔",
    fullTextEn: "The centerpiece of our judicial revolution is the statutory 'Case Calendar System'. At the moment of suit registration, the court issues a legally binding scheduling order designating deadlines for pleadings, discovery, evidence, cross-examination, and final verdict.\n\nFoundational Maxim: Justice delayed shall not become justice denied.\n\nEvery legal action receives a public Digital Tracking Number, enabling any citizen to audit case progression online, upcoming dates, and recorded reasons for any adjournment.",
    keyPointsUr: [
      "کیس کیلنڈر سسٹم کے تحت عدالتی مقدمات کی مدت کا تعین۔",
      "اصول: Justice delayed shall not become justice denied۔",
      "ہر مقدمے کا آن لائن ڈیجیٹل ٹریکنگ نمبر اور شفاف کارروائی۔"
    ],
    keyPointsEn: [
      "Mandatory Case Calendar with binding judicial timelines for pleadings, evidence, and verdict.",
      "Universal Digital Tracking Numbers providing real-time online citizen case visibility.",
      "Eliminating frivolous adjournments and chronic multi-decade civil litigation."
    ],
    officialTerms: ["Case Calendar System", "Justice delayed shall not become justice denied", "Digital Tracking Number"],
    icon: "Calendar"
  },
  {
    number: 9,
    slug: "9-judicial-reforms",
    titleUr: "عدالتوں میں اصلاحات",
    titleEn: "Judicial Reforms",
    category: "justice",
    categoryUr: "عدل اور قانون کی بالادستی",
    summaryUr: "ای کورٹ سسٹم، ویڈیو لنک سماعت، ڈیجیٹل کیس فائل، اور AI-assisted legal research کا نفاذ تاکہ انصاف سستا اور فوری ہو۔",
    summaryEn: "Modernizing courts with e-Courts, remote hearings, paperless digital case management, ADR commercial tribunals, and AI-assisted legal research while preserving judicial independence.",
    fullTextUr: "پاکستان عدل پارٹی درج ذیل اصلاحات متعارف کروائے گی:\n• ای کورٹ سسٹم، ویڈیو لنک سماعت، اور ڈیجیٹل کیس فائل\n• AI-assisted legal research (مگر فیصلہ صرف جج کرے گا)\n• متبادل تنازعاتی حل اور کمرشل کورٹس\n• فیملی کورٹس کی تیز رفتار کارروائی\n• زمین اور جائیداد کے تنازعات کے خصوصی ٹریبونلز\nعدلیہ کی آزادی برقرار رکھتے ہوئے جوابدہی اور شفافیت کا نظام مضبوط کیا جائے گا۔",
    fullTextEn: "We will systematically digitize the entire judicial apparatus: e-Courtrooms, video testimony, paperless filings, specialized Alternative Dispute Resolution (ADR) tribunals, fast-track family courts, and dedicated Land Dispute Tribunals. We will deploy secure AI-assisted legal research for judicial research while affirming that judgment rests solely with the human judge, upholding strict judicial independence alongside robust public transparency.",
    keyPointsUr: [
      "ای کورٹ سسٹم اور ویڈیو لنک سماعت کا ملک گیر دائرہ۔",
      "AI-assisted legal research برائے ججز اور عدالتی محققین۔",
      "اراضی اور جائیداد کے تنازعات کیلئے خصوصی فاسٹ ٹریک ٹریبونلز۔"
    ],
    keyPointsEn: [
      "Nationwide deployment of paperless e-Court filings and remote video hearings.",
      "Integration of AI-assisted legal research under strict judicial oversight.",
      "Specialized Fast-Track Tribunals for land title and commercial disputes."
    ],
    officialTerms: ["AI-assisted legal research", "e-Court System", "Land Dispute Tribunals"],
    icon: "Scale"
  },
  {
    number: 10,
    slug: "10-police-reforms",
    titleUr: "پولیس: مقامی پولیس، قومی معیار",
    titleEn: "Police: Local, Professional and Accountable",
    category: "justice",
    categoryUr: "عدل اور قانون کی بالادستی",
    summaryUr: "پولیس کو سیاسی اثر سے آزاد کر کے ضلعی سطح پر مقامی کمیونٹی سروس کا ادارہ بنایا جائے گا جس کا اصول ہے: Police should be local, professional and accountable.",
    summaryEn: "Depoliticizing the police service and transforming it into an accountable, locally rooted institution under the doctrine: Police should be local, professional and accountable.",
    fullTextUr: "پاکستان عدل پارٹی پولیس کو سیاسی حکومت کا ذاتی ادارہ نہیں بننے دے گی۔\nاصول: Police should be local, professional and accountable.\n\nضلعی سطح پر پولیس مقامی جرائم، شہری امن، تفتیش، اور کمیونٹی پولیسنگ کی ذمہ دار ہوگی۔ پورے ملک میں تربیت، فرانزک، انسدادِ دہشت گردی، سائبر کرائم، انٹیلی جنس، اور انسانی حقوق کے قومی معیار مقرر ہوں گے۔",
    fullTextEn: "Police forces must never act as partisan henchmen for ruling political regimes. Governing Principle: Police should be local, professional and accountable. Policing will be restructured at the district level for community peace, crime prevention, and independent investigation, backstopped by unified federal standards in modern forensic science, anti-terrorism, cyber-security, and constitutional human rights compliance.",
    keyPointsUr: [
      "اصول: Police should be local, professional and accountable۔",
      "پولیس کو سیاسی مداخلت سے مکمل آزاد ادارہ بنانا۔",
      "تفتیش کے جدید فرانزک طریقے اور سائبر کرائم کی جدید تربیت۔"
    ],
    keyPointsEn: [
      "Core doctrine: Police should be local, professional and accountable.",
      "Total insulation from political interference and arbitrary transfers.",
      "National standards in forensic science, cyber crime, and constitutional human rights."
    ],
    officialTerms: ["Police should be local, professional and accountable", "Community Policing"],
    icon: "ShieldAlert"
  },
  {
    number: 11,
    slug: "11-accountability",
    titleUr: "احتساب: قانون سب کیلئے",
    titleEn: "Accountability: No One Above the Law",
    category: "justice",
    categoryUr: "عدل اور قانون کی بالادستی",
    summaryUr: "صدر، وزیر اعظم، جج یا جنرل—کوئی قانون سے بالا تر نہیں ہو گا۔ اصول: No one above the law. احتساب سیاسی انتقام نہیں بلکہ عدالت میں شواہد کی بنیاد پر ہوگا۔",
    summaryEn: "From President and Prime Minister to Generals and Judges—no one stands above the law. Anchored on the bedrock maxim: No one above the law.",
    fullTextUr: "اصول: No one above the law.\n\nصدر، وزیر اعظم، وزیر، جرنیل، جج، یا عام شہری—کوئی قانون سے بالاتر نہیں ہوگا۔ احتساب سیاسی انتقام یا میڈیا ٹرائل نہیں بلکہ ثبوت، قانون اور عدالت کی بنیاد پر ہوگا۔",
    fullTextEn: "Principle: No one above the law. Whether President, Prime Minister, General, Judge, minister, or ordinary citizen—none is above statutory scrutiny. National accountability will abandon media lynchings and partisan witch-hunts, operating strictly on verified financial forensics, admissible evidence, and due process in open court.",
    keyPointsUr: [
      "اصول: No one above the law۔",
      "تمام عوامی عہدیداروں، بیوروکریسی اور عدلیہ کیلئے احتساب کا یکساں پیمانہ۔",
      "میڈیا ٹرائلز اور سیاسی انتقام کی بجائے عدالتی شواہد کی بالادستی۔"
    ],
    keyPointsEn: [
      "Uncompromising standard: No one above the law.",
      "Universal accountability across executive, military, judicial, and legislative offices.",
      "Abolishing politicized witch-hunts in favor of evidentiary, forensic jurisprudence."
    ],
    officialTerms: ["No one above the law", "Forensic Accountability"],
    icon: "Award"
  },
  {
    number: 12,
    slug: "12-production-economy",
    titleUr: "معیشت: درآمد نہیں، پیداوار",
    titleEn: "Economy: From Consumption to Production",
    category: "economy",
    categoryUr: "معیشت، صنعت اور زراعت",
    summaryUr: "اقتصادی پالیسی کا مرکزی اصول: Consumption Economy to Production Economy. پاکستان کو قرض لے کر خرچ کرنے کی بجائے برآمدات، صنعت، ٹیکنالوجی اور سرمایہ کاری کی معیشت بنایا جائے گا۔",
    summaryEn: "Transforming the national macroeconomic paradigm: Consumption Economy to Production Economy, breaking free from perpetual sovereign debt through export manufacturing and indigenous innovation.",
    fullTextUr: "اقتصادی پالیسی کا مرکزی اصول ہوگا: Consumption Economy to Production Economy.\nپاکستان کو قرض لے کر خرچ کرنے والی معیشت سے نکال کر پیداوار، برآمدات، صنعت، ٹیکنالوجی اور سرمایہ کاری کی معیشت بنایا جائے گا۔",
    fullTextEn: "Core economic doctrine: Consumption Economy to Production Economy. Pakistan will dismantle the destructive cycle of borrowing foreign debt to finance elite consumption. The state will pivot ruthlessly to export-led industrialization, domestic technology, value addition, and productive capital investment.",
    keyPointsUr: [
      "بنیادی اصول: Consumption Economy to Production Economy۔",
      "قرضوں پر معیشت چلانے کے موروثی ماڈل کا خاتمہ۔",
      "مقامی صنعت، برآمدات اور ٹیکنالوجی کی پیداوار پر خصوصی مراعات۔"
    ],
    keyPointsEn: [
      "Strategic shift: Consumption Economy to Production Economy.",
      "Eliminating circular sovereign debt and foreign loan dependency.",
      "Targeted incentives for export-focused technology, value-added goods, and capital formation."
    ],
    officialTerms: ["Consumption Economy to Production Economy", "Productive Capital"],
    icon: "TrendingUp"
  },
  {
    number: 13,
    slug: "13-industrial-revolution",
    titleUr: "قومی صنعتی انقلاب",
    titleEn: "National Industrial Revolution",
    category: "economy",
    categoryUr: "معیشت، صنعت اور زراعت",
    summaryUr: "ہر نئے صوبے میں کم از کم ایک بڑا Industrial Zone اور Special Economic Zone کا قیام؛ ٹیکسٹائل، اسٹیل، انجینئرنگ، سولر، آئی ٹی اور مصنوعی ذہانت میں مراعات۔",
    summaryEn: "Establishing at least one major Industrial Zone and Special Economic Zone in every province, empowering textiles, steel, engineering, solar panel manufacturing, IT, and AI.",
    fullTextUr: "ہر نئے صوبے میں کم از کم ایک بڑا Industrial Zone اور Special Economic Zone قائم کیا جائے گا۔ ترجیحی شعبوں میں ٹیکسٹائل، اسٹیل، انجینئرنگ، گاڑی سازی، دفاعی پیداوار، سولر پینل، آئی ٹی، اور مصنوعی ذہانت شامل ہوں گے۔ حکومت کاروبار کے لیے سازگار ماحول پیدا کرے گی۔",
    fullTextEn: "Every province will house at least one flagship Industrial Park and Special Economic Zone (SEZ) endowed with uninterrupted utility infrastructure and one-window regulatory clearance. Priority industries: advanced textiles, basic steel, precision engineering, automotive, defense indigenous manufacturing, solar photovoltaics, IT, and Artificial Intelligence.",
    keyPointsUr: [
      "ہر صوبے میں کم از کم ایک بڑا اسپیشل اکنامک زون (SEZ)۔",
      "سولر، دفاعی سازوسامان، انجینئرنگ اور آئی ٹی میں مقامی پیداوار۔",
      "کاروبار اور صنعت کاری کیلئے ریگولیٹری آسانیاں اور ون ونڈو آپریشن۔"
    ],
    keyPointsEn: [
      "At least one world-class Special Economic Zone in every provincial territory.",
      "Domestic capability in clean solar, advanced electronics, steel, and defense engineering.",
      "Deregulation and one-window ease of doing business for domestic manufacturers."
    ],
    officialTerms: ["Special Economic Zones", "National Industrial Revolution"],
    icon: "Factory"
  },
  {
    number: 14,
    slug: "14-agricultural-revolution",
    titleUr: "زرعی انقلاب",
    titleEn: "Agricultural Revolution",
    category: "economy",
    categoryUr: "معیشت، صنعت اور زراعت",
    summaryUr: "زراعت کو روایتی پیداوار سے جدید Agri-Business Economy میں تبدیل کیا جائے گا۔ جدید آبپاشی، کولڈ اسٹوریج، زرعی انشورنس، اور کسان مارکیٹس کا قیام۔",
    summaryEn: "Transitioning traditional feudal agriculture into a modernized 'Agri-Business Economy', introducing drip irrigation, regional cold chains, crop insurance, and direct farmer markets.",
    fullTextUr: "زراعت کو روایتی پیداوار سے جدید Agri-Business Economy میں تبدیل کیا جائے گا۔ جدید آبپاشی، کولڈ اسٹوریج، زرعی انشورنس، اور کسان مارکیٹ کو ترجیح دی جائے گی۔ کسان کو صرف سبسڈی نہیں بلکہ مارکیٹ تک رسائی دی جائے گی۔",
    fullTextEn: "Pakistan will transform agriculture from subsistence tenant farming into a competitive Agri-Business Economy. We will construct nationwide cold storage chains, subsidize drip and sprinkler irrigation, institute comprehensive crop insurance against climate disasters, and eliminate predatory middlemen by granting farmers direct market access.",
    keyPointsUr: [
      "زراعت کا Agri-Business Economy میں تغیر۔",
      "کولڈ چین، جدید آبپاشی نظام اور زرعی انشورنس کا نفاذ۔",
      "کسان کو آڑھتیوں کے چنگل سے نکال کر براہِ راست منڈی تک رسائی۔"
    ],
    keyPointsEn: [
      "Comprehensive transition to an integrated Agri-Business Economy.",
      "State-backed cold chains, solarized micro-irrigation, and universal crop insurance.",
      "Bypassing exploitative cartels to connect cultivators directly with consumer markets."
    ],
    officialTerms: ["Agri-Business Economy", "Direct Farmer Markets"],
    icon: "Wheat"
  },
  {
    number: 15,
    slug: "15-energy-self-sufficiency",
    titleUr: "توانائی کی خود مختاری",
    titleEn: "Energy Self-Sufficiency",
    category: "economy",
    categoryUr: "معیشت، صنعت اور زراعت",
    summaryUr: "سولر، ونڈ، ہائیڈرو، نیوکلیئر، گیس اور جدید گرڈ کے امتزاج سے توانائی کا قومی منصوبہ؛ بجلی چوری اور گردشی قرضوں کے خلاف سخت کارروائی۔",
    summaryEn: "A national energy sovereignty blueprint combining solar, wind, hydro, nuclear, and domestic gas with modernized smart grids, while eradicating power theft and circular debt.",
    fullTextUr: "سولر، ونڈ، ہائیڈرو، نیوکلیئر، گیس اور جدید گرڈ کے امتزاج سے توانائی کا قومی منصوبہ بنے گا۔ بجلی چوری کے خلاف سخت کارروائی ہوگی۔",
    fullTextEn: "We will establish a balanced national energy matrix harmonizing indigenous hydel, utility-scale solar, wind corridors, nuclear plants, and domestic tight gas reserves. The outdated transmission grid will be overhauled with smart metering, and organized power theft will be crushed via strict penal sanctions.",
    keyPointsUr: [
      "مقامی قدرتی ذرائع (سولر، ہائیڈرو، ونڈ، نیوکلیئر) پر مبنی توانائی۔",
      "بجلی چوری اور لائن لاسز کے خلاف سخت قانونی کارروائی۔",
      "گردشی قرضے کے دائمی بوجھ کا پائیدار خاتمہ۔"
    ],
    keyPointsEn: [
      "Indigenous clean power integration (hydel, solar, wind, and civil nuclear).",
      "Uncompromising enforcement against commercial electricity theft and transmission leakage.",
      "Structural eradication of circular debt in the energy supply chain."
    ],
    officialTerms: ["Energy Self-Sufficiency", "Smart Grid Modernization"],
    icon: "Zap"
  },
  {
    number: 16,
    slug: "16-tax-revolution",
    titleUr: "ٹیکس انقلاب",
    titleEn: "Tax Revolution",
    category: "economy",
    categoryUr: "معیشت، صنعت اور زراعت",
    summaryUr: "اصول: کم شرح، وسیع بنیاد، مکمل ڈیجیٹل نظام۔ ٹیکس نظام کو رئیل اسٹیٹ، ریٹیل اور غیر دستاویزی معیشت تک وسعت؛ تنخواہ دار طبقے کو ریلیف۔",
    summaryEn: "Tax Principle: Low rates, broad base, and end-to-end digital automation. Expanding tax net to speculative real estate and retail cartels while providing relief to salaried employees.",
    fullTextUr: "اصول: کم شرح، وسیع بنیاد، مکمل ڈیجیٹل نظام۔\nٹیکس نظام کو ریٹیل، رئیل اسٹیٹ، اور غیر دستاویزی معیشت تک وسعت دی جائے گی۔ عام تنخواہ دار طبقے کو غیر ضروری کاغذی کارروائی سے نجات دی جائے گی۔",
    fullTextEn: "Tax Canon: Low Rates, Broad Base, and Total Digital Automation. The tax net will be expanded across untaxed wholesale traders, speculative real estate hoarders, and the informal shadow economy. The crushed salaried middle class will receive immediate rate reductions and freedom from bureaucratic harassment.",
    keyPointsUr: [
      "اصول: کم شرح، وسیع بنیاد، مکمل ڈیجیٹل نظام۔",
      "رئیل اسٹیٹ، ریٹیل اور غیر دستاویزی شعبوں پر مناسب ٹیکس کا نفاذ۔",
      "عام تنخواہ دار طبقے پر ٹیکس بوجھ میں واضح کمی اور ڈیجیٹل فائلنگ۔"
    ],
    keyPointsEn: [
      "Guiding principle: Low rates, broad base, 100% digital integration.",
      "Enforcing fair taxation on speculative property cartels and large retail trade.",
      "Direct relief and simplified automated filing for salaried citizens."
    ],
    officialTerms: ["Low Rates, Broad Base", "Digital Tax Automation"],
    icon: "ReceiptPercent"
  },
  {
    number: 17,
    slug: "17-karachi-gwadar-axis",
    titleUr: "کراچی — خطہ — گوادر قومی معاشی محور",
    titleEn: "Karachi–Region–Gwadar National Economic Axis",
    category: "trade",
    categoryUr: "تجارت، بندرگاہیں اور مواصلات",
    summaryUr: "National Coastal Economic Corridor کے تحت کراچی سے گوادر تک ساحلی محور کو جدید معاشی زون میں تبدیل کیا جائے گا۔",
    summaryEn: "Transforming the coastal belt into a modernized economic powerhouse under the National Coastal Economic Corridor, establishing Karachi as a Financial, Industrial, Port, and Technology Capital.",
    fullTextUr: "National Coastal Economic Corridor کے تحت کراچی سے گوادر تک ساحلی محور کو جدید معاشی زون میں تبدیل کیا جائے گا۔ کراچی کو Financial + Industrial + Port + Technology Capital اور گوادر کو Free Economic Zone بنایا جائے گا۔",
    fullTextEn: "Under the National Coastal Economic Corridor, Pakistan's southern maritime seaboard from Karachi to Gwadar will be developed into an integrated international mega-zone. Karachi will be empowered as the nation's premier Financial + Industrial + Port + Technology Capital, while Gwadar will operate as a world-class Free Economic Zone.",
    keyPointsUr: [
      "National Coastal Economic Corridor کے تحت ساحلی پٹی کی ترقی۔",
      "کراچی: Financial + Industrial + Port + Technology Capital۔",
      "گوادر: مکمل فعال Free Economic Zone اور تجارتی حب۔"
    ],
    keyPointsEn: [
      "Launch of the National Coastal Economic Corridor along the Arabian Sea.",
      "Designating Karachi as the Financial + Industrial + Port + Technology Capital.",
      "Accelerating Gwadar into a duty-free international Free Economic Zone."
    ],
    officialTerms: ["National Coastal Economic Corridor", "Financial + Industrial + Port + Technology Capital", "Free Economic Zone"],
    icon: "Ship"
  },
  {
    number: 18,
    slug: "18-global-trade-routes",
    titleUr: "کراچی سے عالمی تجارتی روٹس تک",
    titleEn: "From Karachi to Global Trade Routes",
    category: "trade",
    categoryUr: "تجارت، بندرگاہیں اور مواصلات",
    summaryUr: "پاکستان کے ساحلی کوریڈور کو وسطی ایشیا، مشرق وسطیٰ اور افریقہ کے تجارتی راستوں سے جوڑا جائے گا تاکہ پاکستان Regional Trade Gateway بن سکے۔",
    summaryEn: "Linking Pakistan's coastline with Central Asia, the Middle East, and Africa to establish Pakistan as the premier Regional Trade Gateway.",
    fullTextUr: "پاکستان کے ساحلی کوریڈور کو وسطی ایشیا، مشرق وسطیٰ اور افریقہ کے تجارتی راستوں سے جوڑا جائے گا تاکہ پاکستان Regional Trade Gateway بن سکے۔",
    fullTextEn: "By modernizing deep-sea berths, bonded transit warehouses, and cross-border transport linkages, Pakistan will connect Central Asian republics, the Gulf, and East Africa, securing our geopolitical destiny as an indispensable Regional Trade Gateway.",
    keyPointsUr: [
      "پاکستان کو Regional Trade Gateway بنانا۔",
      "وسطی ایشیائی ریاستوں کو سمندر تک سب سے مختصر اور محفوظ تجارتی راستہ فراہم کرنا۔",
      "بندرگاہوں پر جدید خودکار لاجسٹکس سسٹم کا قیام۔"
    ],
    keyPointsEn: [
      "Positioning Pakistan as the central Regional Trade Gateway.",
      "Providing Central Asian landlocked nations with the shortest maritime transit routes.",
      "Automating multimodal port logistics and transit documentation."
    ],
    officialTerms: ["Regional Trade Gateway", "Maritime Transit Corridors"],
    icon: "Globe"
  },
  {
    number: 19,
    slug: "19-gwadar-cpec",
    titleUr: "گوادر اور CPEC کا نیا مرحلہ",
    titleEn: "Gwadar and a New Phase of CPEC",
    category: "trade",
    categoryUr: "تجارت، بندرگاہیں اور مواصلات",
    summaryUr: "Technology & CPEC 2.0 کے تحت صنعتی منتقلی، برآمدات اور ٹیکنالوجی پر توجہ؛ متوازن معاشی سفارت کاری اور نئی تجارتی شراکت داریاں۔",
    summaryEn: "Pioneering Technology & CPEC 2.0 to drive industrial relocation, export manufacturing, and technological transfer under balanced economic diplomacy.",
    fullTextUr: "Technology & CPEC 2.0 — Trade, Industry کے تحت صنعتی منتقلی، برآمدات اور ٹیکنالوجی پر توجہ دی جائے گی۔ متوازن معاشی سفارت کاری کے تحت دیگر ممالک سے بھی تجارتی شراکت داری قائم کی جائے گی۔",
    fullTextEn: "We will evolve the China-Pakistan Economic Corridor into Technology & CPEC 2.0 — Trade, Industry, focusing on manufacturing relocation, joint software ventures, and technology transfer. In tandem, balanced economic diplomacy will welcome mutual investments from regional and international partners.",
    keyPointsUr: [
      "Technology & CPEC 2.0 — Trade, Industry کا باقاعدہ آغاز۔",
      "چینی صنعتوں کی پاکستان منتقلی اور برآمدی پیداوار میں اضافہ۔",
      "متوازن معاشی سفارت کاری کے تحت کثیر جہتی عالمی شراکت داری۔"
    ],
    keyPointsEn: [
      "Executing the next phase: Technology & CPEC 2.0 — Trade, Industry.",
      "Incentivizing factory relocation, joint venture manufacturing, and technology licensing.",
      "Balanced economic statecraft fostering trade alliances globally."
    ],
    officialTerms: ["Technology & CPEC 2.0 — Trade, Industry", "Balanced Economic Diplomacy"],
    icon: "Network"
  },
  {
    number: 20,
    slug: "20-foreign-policy",
    titleUr: "خارجہ پالیسی: امن، بقا اور خودمختاری",
    titleEn: "Foreign Policy: Peace, Coexistence and Sovereignty",
    category: "security",
    categoryUr: "خارجہ پالیسی، دفاع اور سلامتی",
    summaryUr: "اصول: Peace — Coexistence — Sovereignty. 'پاکستان فرسٹ' (Pakistan First) اور متوازن خارجہ پالیسی اپنائی جائے گی۔",
    summaryEn: "Foreign Policy Principles: Peace — Coexistence — Sovereignty. Championing a dignified 'Pakistan First' and balanced diplomatic strategy in all bilateral and multilateral engagements.",
    fullTextUr: "اصول: Peace — Coexistence — Sovereignty.\nپاکستان فرسٹ (Pakistan First) — Balanced Foreign Policy اپنائے گا اور قومی مفاد کی بنیاد پر تمام ممالک سے تجارتی و سفارتی تعلقات استوار کرے گا۔",
    fullTextEn: "Cardinal Principle: Peace — Coexistence — Sovereignty. Guided by Pakistan First — Balanced Foreign Policy, the state will refuse to be dragged into external bloc rivalries. Diplomatic and commercial engagements with all global powers will be calibrated strictly on sovereign parity and economic benefit.",
    keyPointsUr: [
      "اصول: Peace — Coexistence — Sovereignty۔",
      "پاکستان فرسٹ (Pakistan First) اور متوازن خارجہ پالیسی۔",
      "عالمی محاذ آرائیوں سے دور رہتے ہوئے قومی معاشی مفادات کو اولیت۔"
    ],
    keyPointsEn: [
      "Guiding doctrine: Peace — Coexistence — Sovereignty.",
      "Firm implementation of Pakistan First — Balanced Foreign Policy.",
      "Refusal of proxy alignments; prioritization of trade and national integrity."
    ],
    officialTerms: ["Peace — Coexistence — Sovereignty", "Pakistan First — Balanced Foreign Policy"],
    icon: "Handshake"
  },
  {
    number: 21,
    slug: "21-kashmir-policy",
    titleUr: "کشمیر پالیسی",
    titleEn: "Kashmir Policy",
    category: "security",
    categoryUr: "خارجہ پالیسی، دفاع اور سلامتی",
    summaryUr: "کشمیر کو محض دوطرفہ تنازع کے بجائے عالمی سطح پر Internationalisation through diplomacy, law and multilateral institutions کے تحت اقوام متحدہ، او آئی سی اور عالمی فورمز پر اٹھایا جائے گا۔",
    summaryEn: "Pursuing strategic 'Internationalisation through diplomacy, law and multilateral institutions', championing the Kashmiri right to self-determination across the UN, OIC, and international legal forums.",
    fullTextUr: "پاکستان عدل پارٹی کشمیر کو محض دو طرفہ تنازع کے بجائے عالمی سطح پر اٹھائے گی۔ Internationalisation through diplomacy, law and multilateral institutions کے تحت مسئلہ کشمیر کو اقوام متحدہ، او آئی سی، اور عالمی قانونی فورمز پر پیش کیا جائے گا۔",
    fullTextEn: "The Kashmir dispute will not remain hostage to stalled bilateral optics. Under the doctrine of Internationalisation through diplomacy, law and multilateral institutions, Pakistan will relentlessly advocate the self-determination rights of the Kashmiri people before the United Nations, OIC, and international human rights and legal tribunals.",
    keyPointsUr: [
      "Internationalisation through diplomacy, law and multilateral institutions۔",
      "مسئلہ کشمیر کو عالمی قانونی و انسانی حقوق کے فورمز پر مؤثر انداز میں اٹھانا۔",
      "کشمیری عوام کے حقِ خود ارادیت کی غیر متزلزل سفارتی و اخلاقی حمایت۔"
    ],
    keyPointsEn: [
      "Strategic doctrine: Internationalisation through diplomacy, law and multilateral institutions.",
      "Mobilizing international statutory covenants and legal accountability on Kashmir.",
      "Uncompromising moral, diplomatic, and juridical solidarity with Kashmiris."
    ],
    officialTerms: ["Internationalisation through diplomacy, law and multilateral institutions"],
    icon: "Landmark"
  },
  {
    number: 22,
    slug: "22-defence-policy",
    titleUr: "دفاع: مضبوط پاکستان، محفوظ پاکستان",
    titleEn: "Defence: Strong Pakistan, Secure Pakistan",
    category: "security",
    categoryUr: "خارجہ پالیسی، دفاع اور سلامتی",
    summaryUr: "اصول: Peace through Strength. پاکستان کی دفاعی قوت کو سائبر، ڈرون، اور آرٹیفیشل انٹیلی جنس سے لیس کر کے Defence Technology Producer and Exporter بنایا جائے گا۔",
    summaryEn: "Strategic Principle: Peace through Strength. Modernizing armed forces with cyber defense, drone technology, and AI, elevating Pakistan into a premier Defence Technology Producer and Exporter.",
    fullTextUr: "اصول: Peace through Strength.\nپاکستان کی دفاعی قوت (سائبر، ڈرون، آرٹیفیشل انٹیلی جنس) کو جدید کیا جائے گا اور پاکستان کو Defence Technology Producer and Exporter بنایا جائے گا۔",
    fullTextEn: "Defence Maxim: Peace through Strength. Deterrence requires technological pre-eminence. Pakistan's armed forces will integrate sovereign cyber warfare, autonomous drone formations, and tactical Artificial Intelligence, transitioning our indigenous ordnance complex into a top-tier Defence Technology Producer and Exporter.",
    keyPointsUr: [
      "بنیادی اصول: Peace through Strength۔",
      "سائبر سیکیورٹی، ڈرونز اور مصنوعی ذہانت سے لیس جدید دفاعی صلاحیت۔",
      "پاکستان کو Defence Technology Producer and Exporter بنانا۔"
    ],
    keyPointsEn: [
      "Foundational pillar: Peace through Strength.",
      "Rapid integration of autonomous systems, electronic warfare, and sovereign AI into national defense.",
      "Transforming indigenous military production into a world-class Defence Technology Producer and Exporter."
    ],
    officialTerms: ["Peace through Strength", "Defence Technology Producer and Exporter"],
    icon: "ShieldCheck"
  },
  {
    number: 23,
    slug: "23-internal-security",
    titleUr: "داخلی سلامتی",
    titleEn: "Internal Security",
    category: "security",
    categoryUr: "خارجہ پالیسی، دفاع اور سلامتی",
    summaryUr: "دہشت گردی کے خلاف پولیس، انٹیلی جنس، ٹیکنالوجی اور معاشی ترقی کا مربوط نظام؛ سرحدی علاقوں میں تعلیم اور روزگار کی فراہمی۔",
    summaryEn: "An integrated internal security apparatus combining intelligence fusion, modern police tactics, cyber surveillance, and rapid economic development in border areas.",
    fullTextUr: "دہشت گردی کے خلاف پولیس، انٹیلی جنس، ٹیکنالوجی اور معاشی ترقی کا مربوط نظام بنایا جائے گا۔ سرحدی علاقوں میں تعلیم اور روزگار کی فراہمی قومی سلامتی کا حصہ ہوگی۔",
    fullTextEn: "National security begins within. We will establish real-time intelligence fusion between civilian agencies and police services to eliminate terrorism. Border and previously marginalized regions will receive immediate investments in schools, clinics, and industrial employment as vital pillars of national stability.",
    keyPointsUr: [
      "انٹیلی جنس اور پولیس کا دہشت گردی کے خلاف مربوط تعاون۔",
      "سرحدی اور پسماندہ علاقوں میں فوری ترقیاتی پیکجز اور اسکولز۔",
      "سخت سیکیورٹی کے ساتھ ساتھ نوجوانوں کیلئے روزگار کے مواقع۔"
    ],
    keyPointsEn: [
      "Intelligence-led civilian and policing counter-terrorism apparatus.",
      "Accelerated socio-economic development and technical education in border districts.",
      "Treating youth employment and institutional justice as core national security components."
    ],
    officialTerms: ["Internal Security Framework", "Border District Transformation"],
    icon: "Lock"
  },
  {
    number: 24,
    slug: "24-bureaucratic-reforms",
    titleUr: "بیوروکریسی میں اصلاحات",
    titleEn: "Bureaucratic Reforms",
    category: "public-service",
    categoryUr: "عوامی نظم و نسق اور صحت",
    summaryUr: "سرکاری افسر حاکم نہیں خادم ہوگا۔ محکموں میں ڈیجیٹل مانیٹرنگ اور One Citizen — One Digital Government ID کے ذریعے خدمات آن لائن فراہم کی جائیں گی۔",
    summaryEn: "Civil servants as public servants, not colonial rulers. Introducing automated departmental KPI tracking and universal citizen access via One Citizen — One Digital Government ID.",
    fullTextUr: "سرکاری افسر حاکم نہیں خادم ہوگا۔ محکموں میں ڈیجیٹل مانیٹرنگ اور One Citizen — One Digital Government ID کے ذریعے خدمات آن لائن فراہم کی جائیں گی۔",
    fullTextEn: "The colonial mindset of bureaucratic overlordship will be eradicated. Civil servants are public servants. We will implement transparent performance metrics and introduce One Citizen — One Digital Government ID, moving all citizen certifications, licensing, permits, and tax filings to a single biometric online portal.",
    keyPointsUr: [
      "One Citizen — One Digital Government ID کا ملک گیر نفاذ۔",
      "سرکاری افسران کی کارکردگی کا ڈیجیٹل مانیٹرنگ سسٹم۔",
      "تمام سرکاری کاغذات، این او سی اور تصدیق کا عمل آن لائن اور آسان۔"
    ],
    keyPointsEn: [
      "Rollout of One Citizen — One Digital Government ID for all public interactions.",
      "Digital citizen evaluation and performance tracking for all civil servants.",
      "Zero-footprint paperless citizen services, permits, and registrations."
    ],
    officialTerms: ["One Citizen — One Digital Government ID", "Civil Service Modernization"],
    icon: "Fingerprint"
  },
  {
    number: 25,
    slug: "25-national-health-program",
    titleUr: "صحت کا قومی پروگرام",
    titleEn: "National Health Program",
    category: "public-service",
    categoryUr: "عوامی نظم و نسق اور صحت",
    summaryUr: "ضلعی سطح پر جدید ہسپتال، ایمرجنسی سسٹم اور ٹیلی میڈیسن کو قومی ترجیح بنایا جائے گا۔ صحت کی سہولیات صرف بڑے شہروں تک محدود نہیں ہوں گی۔",
    summaryEn: "Equipping every district with state-of-the-art hospitals, emergency triage networks, and telemedicine hubs, ending healthcare apartheid between rural districts and elite urban centers.",
    fullTextUr: "ضلعی سطح پر جدید ہسپتال، ایمرجنسی سسٹم اور ٹیلی میڈیسن کو قومی ترجیح بنایا جائے گا۔ صحت کی سہولیات صرف بڑے شہروں تک محدود نہیں ہوں گی۔",
    fullTextEn: "Healthcare is a fundamental human right. Pakistan Adal Party will equip every district headquarters with intensive care units, 24/7 trauma services, diagnostic imaging, and telemedicine links to central teaching hospitals, ensuring rural citizens receive the same medical dignity as metropolitan residents.",
    keyPointsUr: [
      "ہر ضلع میں مکمل فعال جدید ہسپتال اور ایمرجنسی نیٹ ورک۔",
      "دور دراز علاقوں کیلئے ٹیلی میڈیسن اور جدید تشخیصی لیبارٹریاں۔",
      "بنیادی ادویات کی فراہمی اور بچوں کی نگہداشت کے خصوصی مراکز۔"
    ],
    keyPointsEn: [
      "Equipping all district headquarters with 24/7 emergency trauma centers.",
      "National telemedicine network connecting rural health units to top specialists.",
      "Universal access to essential generic life-saving medicines."
    ],
    officialTerms: ["National Health Program", "District Telemedicine"],
    icon: "HeartPulse"
  },
  {
    number: 26,
    slug: "26-water-environment",
    titleUr: "پانی اور ماحولیاتی تحفظ",
    titleEn: "Water and Environmental Protection",
    category: "public-service",
    categoryUr: "عوامی نظم و نسق اور صحت",
    summaryUr: "قومی Water Security Plan کے تحت نئے ذخائر، بارش کا پانی محفوظ کرنے، نہری اصلاحات اور بڑے شہروں کے لیے Urban Water Plans کی تشکیل۔",
    summaryEn: "Safeguarding water security through the national Water Security Plan, rainwater harvesting, canal lining, and dedicated Urban Water Plans for all major metropolitan cities.",
    fullTextUr: "قومی Water Security Plan کے تحت نئے ذخائر، بارش کا پانی محفوظ کرنے، اور نہری نظام کی اصلاح پر کام ہوگا۔ بڑے شہروں کے لیے الگ Urban Water Plans بنائے جائیں گے۔",
    fullTextEn: "Pakistan confronts acute water scarcity and climate volatility. Under the comprehensive Water Security Plan, we will construct medium storage dams, mandatorily harvest urban monsoon runoff, repair ancient canal seepage, and enforce tailored Urban Water Plans to guarantee piped potable water in all cities.",
    keyPointsUr: [
      "قومی Water Security Plan کا جامع نفاذ۔",
      "بارش کے پانی کو محفوظ کرنے اور نہری نظام کی جدید کاری۔",
      "بڑے شہروں کے لیے پینے کے صاف پانی کے الگ Urban Water Plans۔"
    ],
    keyPointsEn: [
      "Execution of the national Water Security Plan for storage and climate resilience.",
      "Canal lining, aquifer recharge, and mandatory urban rainwater capture.",
      "Dedicated Urban Water Plans to guarantee safe drinking water to every urban household."
    ],
    officialTerms: ["Water Security Plan", "Urban Water Plans"],
    icon: "Droplets"
  },
  {
    number: 27,
    slug: "27-young-pakistan",
    titleUr: "نوجوان پاکستان",
    titleEn: "Young Pakistan",
    category: "citizenship",
    categoryUr: "نوجوان، خواتین، اقلیتیں اور اصلاحات",
    summaryUr: "نوجوان آبادی کو National Economic Asset بنایا جائے گا۔ ان کے لیے ٹیکنیکل اور ڈیجیٹل اسکلز، فری لانسنگ اور انٹرپرینیورشپ کے مواقع۔",
    summaryEn: "Transforming youth from a demographic challenge into a National Economic Asset through state-supported technical skills, digital freelancing zones, and startup seed funding.",
    fullTextUr: "نوجوان آبادی کو National Economic Asset بنایا جائے گا۔ ان کے لیے ٹیکنیکل اور ڈیجیٹل اسکلز، فری لانسنگ اور انٹرپرینیورشپ کے مواقع پیدا کیے جائیں گے۔",
    fullTextEn: "With over 60% of citizens under thirty, youth are our ultimate National Economic Asset. We will fund digital skills academies in AI, coding, and game design, establish co-working IT incubation parks with guaranteed high-speed internet, and provide zero-interest collateral-free seed capital for youth startups.",
    keyPointsUr: [
      "نوجوانوں کو ملک کا سب سے بڑا National Economic Asset بنانا۔",
      "ڈیجیٹل اسکلز، مصنوعی ذہانت اور فری لانسنگ کے مراعات یافتہ ہب۔",
      "نوجوان انٹرپرینیورز کیلئے بلا سود آسان قرضوں اور انکیوبیٹرز کا قیام۔"
    ],
    keyPointsEn: [
      "Empowering youth as the country's primary National Economic Asset.",
      "Nationwide IT freelancing academies with subsidized hardware and fiber connectivity.",
      "Non-collateralized venture seed funds for youth-led technological enterprises."
    ],
    officialTerms: ["National Economic Asset", "Digital Skills Revolution"],
    icon: "Sparkles"
  },
  {
    number: 28,
    slug: "28-women-economic-inclusion",
    titleUr: "خواتین کی معاشی شمولیت",
    titleEn: "Women's Economic Inclusion",
    category: "citizenship",
    categoryUr: "نوجوان، خواتین، اقلیتیں اور اصلاحات",
    summaryUr: "خواتین کو قومی معیشت کا فعال حصہ بنانے کے لیے محفوظ ماحول، مساوی مواقع، اور ووکیشنل انٹرپرینیورشپ کی فراہمی۔",
    summaryEn: "Integrating women into the formal economic mainstream through safe transport, workplace equality, microfinance, and home-based enterprise digitisation.",
    fullTextUr: "خواتین کو قومی معیشت کا فعال حصہ بنانے کے لیے محفوظ اور مساوی مواقع فراہم کیے جائیں گے۔",
    fullTextEn: "No nation can rise while half its talent remains excluded. Pakistan Adal Party will mandate dignified, safe workplace regulations, subsidized dedicated women's transit, direct micro-credit for female entrepreneurs, and legal enforcement of women's inheritance and property rights.",
    keyPointsUr: [
      "خواتین کیلئے محفوظ کام کی جگہیں اور محفوظ ٹرانسپورٹ کی سہولت۔",
      "وراثت اور جائیداد میں خواتین کے شرعی و قانونی حقوق کا سخت نفاذ۔",
      "خواتین کے کاروبار اور اسٹارٹ اپس کیلئے ترجیحی فنڈنگ۔"
    ],
    keyPointsEn: [
      "Guaranteed workplace security, anti-harassment enforcement, and safe transit.",
      "Strict juridical enforcement of constitutional property and inheritance rights.",
      "Dedicated venture funds and digital market access for women entrepreneurs."
    ],
    officialTerms: ["Women's Economic Inclusion", "Constitutional Property Protections"],
    icon: "Users"
  },
  {
    number: 29,
    slug: "29-minority-rights",
    titleUr: "اقلیتوں کے حقوق",
    titleEn: "Rights of Minorities",
    category: "citizenship",
    categoryUr: "نوجوان، خواتین، اقلیتیں اور اصلاحات",
    summaryUr: "اصول: Equal Citizenship under the Constitution. غیر مسلم پاکستانیوں کے آئینی اور مذہبی حقوق کا تحفظ ریاست کی ذمہ داری ہوگی۔",
    summaryEn: "Constitutional Core Principle: Equal Citizenship under the Constitution. Unwavering state protection of the places of worship, civil liberties, and equality of non-Muslim Pakistanis.",
    fullTextUr: "اصول: Equal Citizenship under the Constitution.\nغیر مسلم پاکستانیوں کے آئینی اور مذہبی حقوق کا تحفظ ریاست کی ذمہ داری ہوگا۔",
    fullTextEn: "Foundational Canon: Equal Citizenship under the Constitution. Non-Muslim citizens are equal owners of Pakistan. The state assumes full responsibility for the inviolable safety of their lives, religious places of worship, cultural institutions, and educational and economic opportunities without discrimination.",
    keyPointsUr: [
      "اصول: Equal Citizenship under the Constitution۔",
      "غیر مسلم شہریوں کی عبادت گاہوں اور املاک کا مکمل ریاستی تحفظ۔",
      "قومی زندگی، عدلیہ اور عوامی نمائندگی میں مساوی حقوق اور شمولیت۔"
    ],
    keyPointsEn: [
      "Guiding constitutional pillar: Equal Citizenship under the Constitution.",
      "State-enforced protection of all churches, temples, gurdwaras, and minority institutions.",
      "Zero tolerance for discrimination in civil appointments, judiciary, or commerce."
    ],
    officialTerms: ["Equal Citizenship under the Constitution"],
    icon: "Heart"
  },
  {
    number: 30,
    slug: "30-political-reforms",
    titleUr: "سیاسی اصلاحات",
    titleEn: "Political Reforms",
    category: "citizenship",
    categoryUr: "نوجوان، خواتین، اقلیتیں اور اصلاحات",
    summaryUr: "موروثی سیاست اور برادری ازم کے خاتمے کے لیے انتخابی اصلاحات؛ سیاسی جماعتوں میں شفاف انتخابات اور مالی حسابات کو قانونی معیار بنایا جائے گا۔",
    summaryEn: "Eradicating dynastic political fiefdoms and clan feudalism through transparent internal party democracy and forensic auditing of political finance.",
    fullTextUr: "موروثی سیاست اور برادری ازم کے خاتمے کے لیے انتخابی اصلاحات لائی جائیں گی۔ سیاسی جماعتوں میں شفاف انتخابات اور مالی حسابات کو قانونی معیار بنایا جائے گا۔",
    fullTextEn: "Dynastic family politics and feudal clan baradari networks have crippled democratic integrity. We will mandate statutory internal elections within registered political parties under Election Commission scrutiny and enforce rigorous public auditing of party financing and campaign contributions.",
    keyPointsUr: [
      "موروثی خاندانی سیاست اور برادری ازم کا جمہوری خاتمہ۔",
      "سیاسی جماعتوں کے اندر شفاف اور باقاعدہ انتخابات کا نفاذ۔",
      "انتخابی فنڈنگ اور اخراجات کا جامع آڈٹ اور مکمل شفافیت۔"
    ],
    keyPointsEn: [
      "Eradicating hereditary dynastic control over political organizations.",
      "Statutory mandate for verifiable secret-ballot intra-party elections.",
      "Full forensic auditing and disclosure of campaign contributions."
    ],
    officialTerms: ["Internal Party Democracy", "Electoral Integrity"],
    icon: "Vote"
  },
  {
    number: 31,
    slug: "31-media-freedom",
    titleUr: "میڈیا اور آزادی اظہار",
    titleEn: "Media and Freedom of Expression",
    category: "citizenship",
    categoryUr: "نوجوان، خواتین، اقلیتیں اور اصلاحات",
    summaryUr: "ریاستی اداروں اور حکومت پر تنقید کو جرم نہیں بنایا جائے گا۔ جعلی خبروں اور سائبر جعل سازی کے خلاف قانون نافذ ہو گا، مگر اختلاف رائے دبانے کے لیے نہیں۔",
    summaryEn: "Constructive criticism of government and state institutions will never be criminalized. Combating fake news and cyber fraud without gagging democratic dissent.",
    fullTextUr: "ریاستی اداروں اور حکومت پر تنقید کو جرم نہیں بنایا جائے گا۔ جعلی خبروں اور سائبر جعل سازی کے خلاف قانون نافذ ہوگا، مگر اختلافِ رائے دبانے کے لیے نہیں۔",
    fullTextEn: "A vibrant, uninhibited press is essential for constitutional justice. Honest journalistic critique of state institutions and government policies will never be treated as a crime. Laws addressing disinformation, deepfakes, and cyber espionage will be enforced strictly to prevent fraud, never as tools to stifle lawful political dissent.",
    keyPointsUr: [
      "ریاستی اداروں اور حکومت پر تنقید کو جرم قرار نہیں دیا جائے گا۔",
      "آزادیِ صحافت اور صحافیوں کے تحفظ کی قانونی ضمانت۔",
      "سائبر قوانین کا استعمال صرف جعل سازی روکنے کیلئے ہوگا، تنقید دبانے کیلئے نہیں۔"
    ],
    keyPointsEn: [
      "Decriminalizing legitimate criticism of state and governmental policies.",
      "Safeguarding investigative journalism and freedom of peaceful expression.",
      "Strictly barring the weaponization of cyber laws against democratic dissent."
    ],
    officialTerms: ["Democratic Freedom of Expression", "Decriminalizing Critique"],
    icon: "Newspaper"
  },
  {
    number: 32,
    slug: "32-national-accountability-principle",
    titleUr: "قومی احتساب کا نیا اصول",
    titleEn: "New Principle of National Accountability",
    category: "justice",
    categoryUr: "عدل اور قانون کی بالادستی",
    summaryUr: "ریاستی وسائل کی چوری قومی جرم ہوگی۔ ڈیجیٹل فرانزک اور اثاثوں کے ریکارڈ کو مربوط کر کے احتساب کیا جائے گا جس کا مقصد Recovery + Prevention + Accountability ہوگا۔",
    summaryEn: "The theft of state resources is a crime against the nation. Deploying financial forensics and digital asset registry under the triad: Recovery + Prevention + Accountability.",
    fullTextUr: "ریاستی وسائل کی چوری قومی جرم ہوگی۔ ڈیجیٹل فرانزک اور اثاثوں کے ریکارڈ کو مربوط کرکے احتساب کیا جائے گا جس کا مقصد Recovery + Prevention + Accountability ہوگا۔",
    fullTextEn: "Looting public revenue is high treason against the citizens of Pakistan. We will connect computerized banking records, offshore asset registries, and tax databases through AI-driven forensic audits. The national accountability architecture will operate on three pillars: Recovery + Prevention + Accountability.",
    keyPointsUr: [
      "مقصد: Recovery + Prevention + Accountability۔",
      "ڈیجیٹل فرانزک کے ذریعے قومی وسائل کی لوٹ مار کی فوری بازیابی۔",
      "کرپشن کے راستے مستقل بند کرنے کیلئے ادارہ جاتی خودکار اصلاحات۔"
    ],
    keyPointsEn: [
      "Operating triad: Recovery + Prevention + Accountability.",
      "Digital financial forensics to trace and repatriate stolen sovereign assets.",
      "Institutional process redesign to eradicate systemic bribery at source."
    ],
    officialTerms: ["Recovery + Prevention + Accountability", "Digital Asset Forensics"],
    icon: "FileCheck2"
  },
  {
    number: 33,
    slug: "33-fiscal-discipline",
    titleUr: "ریاستی اخراجات میں کفایت",
    titleEn: "Fiscal Discipline / Economy in State Expenditure",
    category: "economy",
    categoryUr: "معیشت، صنعت اور زراعت",
    summaryUr: "غیر ضروری سرکاری اخراجات اور مراعات میں کمی کی جائے گی۔ ریاستی پیسہ پہلے تعلیم، صحت، دفاع، اور روزگار پر خرچ ہو گا۔",
    summaryEn: "Abolishing colonial VIP perks and wasteful state expenditures; prioritizing every public rupee on education, healthcare, defense, and job creation.",
    fullTextUr: "غیر ضروری سرکاری اخراجات اور مراعات میں کمی کی جائے گی۔ ریاستی پیسہ پہلے تعلیم، صحت، دفاع، اور روزگار پر خرچ ہوگا۔",
    fullTextEn: "The state will end lavish imperial motorcades, elite housing subsidies, and non-essential foreign junkets. Sovereign revenue will be redirected strictly toward classroom education, modern clinics, defense modernization, and public infrastructure that catalyzes private employment.",
    keyPointsUr: [
      "غیر ضروری سرکاری شاہ خرچیوں اور وی آئی پی مراعات کا مکمل خاتمہ۔",
      "عوامی ٹیکس کا پیسہ پہلے تعلیم، صحت، دفاع اور روزگار پر خرچ ہوگا۔",
      "ریاستی بجٹ میں سخت مالیاتی ڈسپلن اور خسارے میں کمی۔"
    ],
    keyPointsEn: [
      "Abolition of VIP perks, palatial subsidies, and non-productive state outlays.",
      "Prioritizing sovereign budget allocations for education, health, defense, and youth employment.",
      "Rigorous fiscal discipline and structural reduction of fiscal deficit."
    ],
    officialTerms: ["Fiscal Discipline", "Abolition of VIP Privileges"],
    icon: "BadgeDollarSign"
  },
  {
    number: 34,
    slug: "34-national-identity",
    titleUr: "پاکستان کی قومی شناخت",
    titleEn: "Pakistan's National Identity",
    category: "governance",
    categoryUr: "قومی نظریہ اور حکمرانی",
    summaryUr: "علاقائی شناختوں کے احترام کے ساتھ ساتھ ریاستی وفاداری اور سیاسی قومیت کی آخری شناخت صرف 'پاکستانی' ہو گی: ریاست ایک، آئین ایک اور قومی وفاداری ایک۔",
    summaryEn: "Regional and cultural heritages are respected, but political nationhood and ultimate civic loyalty belong singularly to Pakistan: One State, One Constitution, One National Loyalty.",
    fullTextUr: "مقصد علاقائی شناختوں کو ختم کرنا نہیں بلکہ: مقامی شناختیں اپنی جگہ زندہ رہیں، مگر ریاستی وفاداری اور سیاسی قومیت کی آخری شناخت پاکستانی ہو۔ یعنی ریاست ایک، آئین ایک اور قومی وفاداری ایک۔",
    fullTextEn: "Our vision does not suppress cultural or regional heritages. Punjabi, Sindhi, Pashtun, Balochi, Saraiki, Kashmiri, Gilgiti, and Urdu cultures enrich our mosaic. However, in terms of political loyalty and civic allegiance, the supreme identity is Pakistani: One State, One Constitution, One National Loyalty.",
    keyPointsUr: [
      "ریاست ایک، آئین ایک اور قومی وفاداری ایک۔",
      "تمام علاقائی اور مقامی ثقافتوں کا احترام اور تحفظ۔",
      "سیاسی قومیت اور ریاستی وفاداری کی حتمی بنیاد صرف 'پاکستانی'۔"
    ],
    keyPointsEn: [
      "Core ethos: One State, One Constitution, One National Loyalty.",
      "Celebrating regional and indigenous heritages as branches of one single nation.",
      "Transcendence of ethnic divisiveness into proud, cohesive Pakistani citizenship."
    ],
    officialTerms: ["One State, One Constitution, One National Loyalty", "Pakistani Civic Identity"],
    icon: "Flag"
  },
  {
    number: 35,
    slug: "35-pakistan-2036",
    titleUr: "دس سالہ قومی ترقیاتی منصوبہ — پاکستان 2036",
    titleEn: "Pakistan 2036 National Transformation Plan",
    category: "transformation",
    categoryUr: "قومی تبدیلی کا منصوبہ 2036",
    summaryUr: "دس سالہ جامع حکمت عملی جس کے 5 بنیادی ستون ہیں: National Unity، Justice، Production، Connectivity، اور Security۔",
    summaryEn: "The centerpiece 10-year transformation roadmap anchored upon five unshakeable pillars: National Unity, Justice, Production, Connectivity, and Security.",
    fullTextUr: "پاکستان عدل پارٹی پیش کرے گی جس کے 5 ستون ہوں گے:\n• National Unity: قومی شناخت اور انتظامی اصلاحات\n• Justice: کیلنڈر سسٹم اور پولیس اصلاحات\n• Production: صنعت، زراعت اور ٹیکنالوجی\n• Connectivity: ریل، بندرگاہیں اور ڈیجیٹل انفراسٹرکچر\n• Security: مضبوط دفاع اور خود مختار خارجہ پالیسی\n\nبنیادی انتخابی عہد:\nہم پاکستان کو لسانی صوبوں کا مجموعہ نہیں بلکہ ایک مضبوط پاکستانی قومی ریاست بنائیں گے۔ ہم صوبے عوام کی سہولت کے لیے بنائیں گے، قومیں تقسیم کرنے کے لیے نہیں۔ ہم عدالت کو تاریخ دینے کے بجائے فیصلہ دینے کا ادارہ بنائیں گے۔ ہم پولیس کو سیاست سے نکال کر عوام کے سامنے جواب دہ بنائیں گے۔ ہم معیشت کو قرض سے پیداوار کی طرف لے جائیں گے، اور ریاست کی دفاعی قوت جدید ٹیکنالوجی سے مضبوط کریں گے۔\n\nریاست کسی خاندان، جماعت یا طبقے کی جاگیر نہیں — پاکستان کے ہر شہری کی امانت ہے۔\n\nپاکستان عدل پارٹی:\nعدل سے ریاست — اتحاد سے قوم — پیداوار سے خوشحالی — قوت سے امن",
    fullTextEn: "The Pakistan 2036 National Transformation Plan is the operational blueprint of the Pakistan Adal Party, resting on five strategic pillars:\n\n1. National Unity: Sovereign civic identity and administrative reorganization through new non-ethnic provinces.\n2. Justice: Statutory Case Calendar system and politically insulated, community-accountable policing.\n3. Production: Transforming Pakistan from debt consumption into agro-industrial and technological manufacturing.\n4. Connectivity: High-speed freight rail, port modernization from Gwadar to Karachi, and national optical fiber broadband.\n5. Security: High-tech cyber and autonomous defense capabilities backed by a balanced, sovereign foreign policy.\n\nOur Fundamental Electoral Covenant:\nWe will build a united Pakistani state, not an enclave of ethnic fiefdoms. We will create administrative provinces to serve the public, never to fracture our nation. We will transform courts from dispensers of dates into instruments of prompt verdicts. We will liberate the police from political subjugation and make them accountable to the people. We will steer our economy from debt to production, and reinforce state defense with cutting-edge technology.\n\nThe State is not the fiefdom of any family, party, or class — it is the sacred trust of every citizen of Pakistan.\n\nPakistan Adal Party:\nFrom Justice, the State — From Unity, the Nation — From Production, Prosperity — From Strength, Peace.",
    keyPointsUr: [
      "پانچ اسٹریٹجک ستون: قومی یکجہتی، انصاف، پیداوار، کنیکٹیویٹی، اور سلامتی۔",
      "عدالتوں کو تاریخ دینے کی بجائے فوری فیصلہ دینے والے اداروں میں بدلنا۔",
      "معیشت کو غیر ملکی قرضوں سے نکال کر برآمدی پیداوار پر استوار کرنا۔",
      "شعار: عدل سے ریاست — اتحاد سے قوم — پیداوار سے خوشحالی — قوت سے امن۔"
    ],
    keyPointsEn: [
      "Five Strategic Pillars: National Unity, Justice, Production, Connectivity, and Security.",
      "Ending the date-dispensing court culture through enforceable Case Calendars.",
      "Total structural economic conversion from foreign debt dependence to domestic production.",
      "Party Motto: From Justice, the State — From Unity, the Nation — From Production, Prosperity — From Strength, Peace."
    ],
    officialTerms: [
      "Pakistan 2036 National Transformation Plan",
      "National Unity",
      "Justice",
      "Production",
      "Connectivity",
      "Security",
      "From Justice, the State — From Unity, the Nation — From Production, Prosperity — From Strength, Peace"
    ],
    icon: "Milestone"
  }
];
