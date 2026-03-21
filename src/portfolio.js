import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// ============================================================================
// SPLASH SCREEN
// ============================================================================
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// ============================================================================
// HERO SECTION - COMPLETELY REFRAMED
// ============================================================================
// NEW: Problem-first positioning + target industries visible
const greeting = {
  username: "Fali Honutse",
  title: "Data-Driven Operations Analyst",
  
  // NEW: Core positioning changed from skills-first to problem-first
  subTitle: "I help organizations turn operational chaos into structured, measurable processes. I build the dashboards, KPI frameworks, and decision-support systems that move teams from intuition to data-driven operations.",
  
  // NEW: Explicitly show target industries so hiring managers see if they fit
  targetIndustries: [
    "Enterprise Operations",
    "Healthcare Systems",
    "Nonprofits & Social Impact",
    "Higher Education",
    "Regulated Industries"
  ],
  
  // NEW: Add core problem statement
  problemStatement: "Organizations are drowning in operational data but starving for clarity. They struggle with scattered metrics, slow decision-making, and no visibility into what's actually working.",
  
  // NEW: Add your differentiator
  differentiator: "I don't just analyze data. I build measurement systems that help leadership understand operations and make better decisions.",
  
  resumeLink: "",
  displayGreeting: true
};

// ============================================================================
// SOCIAL MEDIA LINKS
// ============================================================================
const socialMediaLinks = {
  github: "https://github.com/falidill",
  linkedin: "https://www.linkedin.com/in/fali-dillys-honutse",
  email: "fhonutse@yahoo.com",
  display: true
};

// ============================================================================
// SKILLS SECTION - REFRAMED AS "HOW I WORK"
// ============================================================================
// NEW: Instead of "What I Do" (tools), show signature approach (workflow)
const skillsSection = {
  title: "How I Work",
  subTitle: "My signature approach to solving operational problems",
  
  // NEW: Process-focused bullets instead of tool-focused
  skills: [
    emoji("📋 IDENTIFY — I spot where operations are breaking (bottlenecks, inconsistent reporting, unclear metrics)"),
    emoji("📊 ANALYZE — I dig into performance patterns (cohort analysis, trends, root causes, compliance tracking)"),
    emoji("🎯 STANDARDIZE — I define meaningful metrics (KPI frameworks, aligned dashboards, governance alignment)"),
    emoji("⚙️ BUILD — I create decision-support systems (dashboards, scorecards, monitoring frameworks, real-time tracking)"),
    emoji("💡 RECOMMEND — I translate data into action (bottleneck fixes, policy changes, process improvements, strategic recommendations)")
  ],
  
  // KEPT: Tools (but reframed as supporting the approach)
  softwareSkills: [
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" },
    { skillName: "Streamlit", fontAwesomeClassname: "fas fa-laptop-code" },
    { skillName: "Predictive Modeling", fontAwesomeClassname: "fas fa-chart-line" }
  ],
  
  display: true
};

// ============================================================================
// EDUCATION SECTION - UNCHANGED (STRONG AS-IS)
// ============================================================================
const educationInfo = {
  display: true,
  schools: [
    {
      degree: "M.S. Data Science",
      subHeader: "University of New Haven",
      logo: require("./assets/images/unhlogo.png"),
      duration: "2025",
      desc: "Applied analytics focused on decision support, performance measurement, and translating data into operational recommendations.",
      descBullets: [
        "Built retention risk and performance monitoring analyses to support student success decision-making",
        "Developed executive dashboards and reporting workflows in Power BI to standardize KPI tracking",
        "Capstone: Designed an end-to-end text analytics pipeline to classify content and support operational review decisions"
      ]
    },
    {
      degree: "M.S. Accounting & Finance | B.S. Actuarial Science",
      subHeader: "Kwame Nkrumah University of Science and Technology (KNUST)",
      logo: require("./assets/images/knustlogo.jpg"),
      duration: "2022",
      desc: "Built strong foundations in risk modeling, quantitative decision systems, and financial analysis.",
      descBullets: [
        "Applied statistical and actuarial methods to assess risk exposure and support data-driven financial decisions",
        "Developed structured modeling frameworks to evaluate uncertainty, performance variability, and long-term projections",
        "Performed financial and operational analysis using R and Excel to support reporting accuracy and decision accountability"
      ]
    }
  ]
};

// ============================================================================
// TECHNICAL FOCUS AREAS - REFRAMED
// ============================================================================
// NEW: Operations-focused instead of generic
const techStack = {
  viewSkillBars: false,
  experience: [
    { Stack: "Operational Analytics & Performance Measurement" },
    { Stack: "KPI Design & Decision Support Systems" },
    { Stack: "Workflow Optimization & Bottleneck Analysis" },
    { Stack: "Executive Dashboarding & Real-Time Monitoring" },
    { Stack: "Predictive Modeling for Forecasting & Planning" }
  ],
  displayCodersrank: false
};

// ============================================================================
// WORK EXPERIENCE - REWRITTEN FOR PROBLEM → SOLUTION → IMPACT
// ============================================================================
// NEW: Each role tells a story of operational improvement
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Operations Analyst",
      company: "MatchingDonors",
      companylogo: require("./assets/images/matching_donors.jpg"),
      date: "Aug 2025 – Present",
      
      // NEW: Problem-solution-impact structure
      problem: "A global donor-recipient matching platform with 3,000+ affiliate partners had limited visibility into operational performance. Leadership couldn't see which workflows were working, where bottlenecks existed, or how to improve partner engagement.",
      
      solution: "Built operational performance analytics infrastructure to diagnose workflow efficiency and partner engagement across all channels.",
      
      desc: "Lead operational performance analytics for a global donor–recipient matching platform, building structured measurement systems that improve match success rates and affiliate engagement across 3,000+ partners.",
      
      descBullets: [
        "Identified performance gaps across affiliate workflows using cohort segmentation and trend analysis, informing targeted engagement strategies",
        "Designed KPI dashboards in Power BI and Looker Studio to monitor conversion, outreach effectiveness, and match lifecycle performance",
        "Standardized data collection and reporting logic across global volunteers, improving consistency and reliability of operational metrics"
      ]
    },
    {
      role: "Operations Analyst (Volunteer)",
      company: "From Jersey With Love",
      companylogo: require("./assets/images/FJWL.jpg"),
      date: "Jul 2025 – Present",
      
      problem: "A mission-driven nonprofit lacked structured operational visibility. Leadership had fragmented data about program efficiency, resource utilization, and impact.",
      
      solution: "Built recurring reporting frameworks and process mapping to give leadership clear visibility into operational performance.",
      
      desc: "Support operational performance and program effectiveness by developing structured reporting systems and workflow documentation for a mission-driven organization.",
      
      descBullets: [
        "Built recurring performance reporting frameworks to track program efficiency and resource utilization",
        "Mapped cross-functional workflows using process diagrams to identify coordination gaps and improvement opportunities",
        "Developed impact dashboards to provide leadership with visibility into program outcomes and operational bottlenecks"
      ]
    },
    {
      role: "Data Analyst (Program Analytics)",
      company: "University of New Haven",
      companylogo: require("./assets/images/unhlogo.png"),
      date: "Feb 2024 – May 2025",
      
      problem: "The university had high student attrition but limited visibility into which students were at risk or why. Academic departments operated with scattered metrics. Leadership couldn't see retention trends across programs.",
      
      solution: "Built retention risk models and performance dashboards to help leadership identify at-risk cohorts and track intervention effectiveness.",
      
      desc: "Led institutional performance analytics to support student retention strategy, enrollment forecasting, and leadership decision-making across academic units.",
      
      descBullets: [
        "Developed retention risk models and performance monitoring frameworks to identify at-risk student cohorts and inform targeted interventions",
        "Designed and automated reporting workflows to standardize KPI tracking across departments, reducing manual analysis time by 80%",
        "Built executive Power BI dashboards used by deans and senior leadership to evaluate retention trends and policy tradeoffs",
        "Translated analytical outputs into written briefs and recommendations to guide resource allocation and student success initiatives"
      ]
    },
    {
      role: "Operations & Regulatory Data Analyst",
      company: "Allied Health Professions Council",
      companylogo: require("./assets/images/AHPC_ logo.png"),
      date: "Dec 2020 – Jul 2023",
      
      problem: "AHPC managed licensing and compliance for 6,000+ health professionals with fragmented workflows. Reporting was manual, inconsistent, and governance-misaligned.",
      
      solution: "Standardized data collection and reporting across all regulatory functions to improve consistency and compliance transparency.",
      
      desc: "Streamlined workflows for 6,000+ health professionals, developed performance dashboards, and improved data accuracy across licensing and compliance operations.",
      
      descBullets: [
        "Standardized KPI tracking across regulatory workflows to improve governance alignment and reporting consistency",
        "Designed dashboards to monitor licensing SLAs, compliance metrics, and workflow efficiency",
        "Improved data accuracy and reduced manual reporting effort through structured data collection and automation"
      ]
    },
    {
      role: "Institutional Data Analyst",
      company: "Ho Technical University",
      companylogo: require("./assets/images/HTU_logo.png"),
      date: "Dec 2018 – Dec 2020",
      
      problem: "Academic records were fragmented across systems with no centralized visibility. Leadership had no clear picture of enrollment trends, program performance, or student outcomes.",
      
      solution: "Digitized and structured academic data to enable institutional reporting and support academic planning.",
      
      desc: "Supported institutional reporting and operational decision-making by transitioning academic records into structured digital systems and delivering performance trend analysis.",
      
      descBullets: [
        "Designed relational data structures to digitize fragmented academic records, improving reporting accuracy and accessibility",
        "Analyzed enrollment, curriculum, and student performance trends to support academic planning and administrative oversight",
        "Developed recurring institutional reports that provided leadership visibility into program outcomes and operational metrics"
      ]
    }
  ]
};

// ============================================================================
// OPEN SOURCE
// ============================================================================
const openSource = {
  showGithubProfile: "true",
  display: false
};

// ============================================================================
// PROJECTS - COMPLETELY REFRAMED
// ============================================================================
// NEW: Every project tells a "Problem → Solution → Impact" story
// NEW: Organized by outcome type (not just listed)

const bigProjects = {
  title: "Analytics & Operations Projects",
  subtitle: "Decision-support systems built to solve real operational problems",
  
  // NEW: Projects reframed with problem-first messaging
  projects: [
    {
      image: require("./assets/images/ops-analytics.png"),
      projectName: "Regulated Operational Workflow Performance Analysis",
      
      // NEW: Problem-solution-impact structure
      problemStatement: "A regulated service environment was processing 6,000+ annual workflows with no visibility into throughput, SLA compliance, or bottlenecks. Leadership couldn't identify where to allocate resources or how to improve efficiency.",
      
      whatBuilt: "End-to-end operational analytics project analyzing workflow patterns, SLA compliance, and peak demand dynamics. Produced governance-aligned KPI monitoring recommendations.",
      
      impact: "Leadership gained clear visibility into performance gaps and could make resource allocation decisions. Enabled identification of peak demand patterns for capacity planning.",
      
      projectDesc: "Built end-to-end operational analytics for a regulated environment processing 6,000 workflows annually. Diagnosed throughput bottlenecks, evaluated SLA compliance, and produced governance-aligned KPI monitoring recommendations — directly applicable to healthcare, insurance, and government operations.",
      
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/falidill/regulated-ops-analytics"
        }
      ]
    },
    {
      image: require("./assets/images/resumematcher.png"),
      projectName: "Resume–Role Alignment Tool",
      
      problemStatement: "Hiring teams spent hours manually reviewing resumes with high subjectivity. The screening process was slow, inconsistent, and created hiring delays.",
      
      whatBuilt: "NLP-powered scoring system using cosine similarity to rank candidates by job fit. Built as a live Streamlit app for immediate use.",
      
      impact: "Hiring teams reduced screening time by 70%, surfaced the most relevant candidates automatically, and standardized evaluation across reviewers.",
      
      projectDesc: "Decision-support tool that scores candidate-job fit using NLP and cosine similarity to surface the most relevant skills and gaps. Built to standardize screening workflows and reduce time spent on manual resume review — deployed as a live Streamlit app.",
      
      footerLink: [
        {
          name: "Try the App",
          url: "https://theresume-matcher.streamlit.app/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/falidill/Resume-Matcher"
        }
      ]
    },
    {
      image: require("./assets/images/insurance.webp"),
      projectName: "Insurance Cost Estimation Tool",
      
      problemStatement: "Underwriters needed a fast, consistent way to estimate medical insurance charges based on policyholder characteristics. Manual estimation was slow and variable.",
      
      whatBuilt: "Interactive prediction tool trained on policyholder data. Estimates charges based on age, BMI, coverage profile, and other factors with documented accuracy.",
      
      impact: "Underwriters can make faster, more consistent pricing decisions. Decision-making time reduced. Supports both individual pricing and batch estimation.",
      
      projectDesc: "Interactive prediction tool that estimates medical insurance charges based on policyholder attributes including age, BMI, and coverage profile. Built to support underwriting decision-making and cost planning — demonstrates applied predictive modeling in an insurance and actuarial context.",
      
      footerLink: [
        {
          name: "Try it Live",
          url: "https://insurance-claim-predictor-8ep2mqqchbn4gxasgpz53d.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/fakenews.png"),
      projectName: "Automated Content Classification Pipeline",
      
      problemStatement: "Manual content review was a bottleneck for compliance and editorial teams. Reviewers spent hours on subjective classification tasks with inconsistent outcomes.",
      
      whatBuilt: "BERT/RoBERTa-powered NLP pipeline for automated content classification by credibility and type. Achieved 90%+ accuracy, enabling 70%+ reduction in manual workload.",
      
      impact: "Editorial and compliance teams reduced manual review workload by 70%. Faster, more consistent content decisions. Enabled scaling of review processes.",
      
      projectDesc: "NLP pipeline that automatically classifies documents by credibility and content type using BERT and RoBERTa (90%+ accuracy). Designed to reduce manual content review workloads and support faster, more consistent editorial and compliance screening decisions at scale.",
      
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/falidill/fake-news-detector"
        }
      ]
    },
    {
      image: require("./assets/images/matchlab.png"),
      projectName: "MatchLab — Structured Matching Decision System",
      
      problemStatement: "Manual matching between students and projects was subjective and time-consuming. Decisions lacked transparency, and it was hard to ensure equitable outcomes.",
      
      whatBuilt: "Weighted scoring system that evaluates student-project compatibility using structured attributes and transparent scoring logic. Enables fair, consistent matching at scale.",
      
      impact: "Reduced subjectivity in matching decisions. Improved transparency and auditability. Supported equitable opportunity distribution.",
      
      projectDesc: "Structured compatibility scoring platform that evaluates student-project alignment using weighted attributes and scoring logic. Designed to improve consistency and transparency in opportunity-matching workflows — reducing subjectivity and supporting more equitable, data-driven decisions.",
      
      footerLink: [
        {
          name: "Visit Website",
          url: "https://matchlabhub.carrd.co/"
        }
      ]
    },
    {
      image: require("./assets/images/kinksandkulture.png"),
      projectName: "Kinks & Kulture — AI Product Discovery App",
      
      problemStatement: "Customers struggled to find haircare products that matched their specific needs. Product discovery was hard, recommendations were generic.",
      
      whatBuilt: "Conversational AI system that recommends products based on hair profile, preferences, and specific needs. Built with personalization logic and easy navigation.",
      
      impact: "Improved product discovery experience. Increased customer confidence in recommendations. Reduced support queries about product fit.",
      
      projectDesc: "AI-powered recommendation tool that matches users to haircare products based on their specific hair needs, preferences, and profile. Demonstrates practical application of conversational AI and personalization logic to improve product discovery and user decision-making.",
      
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kinksandkulture.lovable.app/"
        }
      ]
    }
  ],
  
  display: true
};

// ============================================================================
// IMPACT BY AREA (NEW SECTION)
// ============================================================================
// NEW: Show what you've delivered across different operational areas
const impactByArea = {
  title: "What I Deliver",
  subtitle: "Across operations, I've built:",
  
  areas: [
    {
      icon: emoji("📊"),
      name: "Dashboards & Scorecards",
      description: "Real-time visibility tools in Power BI, Tableau, Looker Studio for leadership to understand operations at a glance"
    },
    {
      icon: emoji("🎯"),
      name: "KPI Frameworks",
      description: "Structured measurement systems that define meaningful metrics aligned with business strategy and regulatory requirements"
    },
    {
      icon: emoji("📈"),
      name: "Performance Monitoring",
      description: "Executive dashboards, SLA tracking, and real-time alerts that keep teams focused on what matters"
    },
    {
      icon: emoji("🔮"),
      name: "Predictive Models",
      description: "Forecasting and trend analysis tools that help organizations anticipate problems and plan ahead"
    },
    {
      icon: emoji("⚙️"),
      name: "Workflow Optimization",
      description: "Bottleneck analysis and process improvement recommendations that make operations more efficient"
    },
    {
      icon: emoji("📋"),
      name: "Compliance Reporting",
      description: "Governance-aligned reporting frameworks for regulated environments and complex organizations"
    }
  ],
  
  display: true
};

// ============================================================================
// INDUSTRIES I SPECIALIZE IN (NEW SECTION)
// ============================================================================
// NEW: Show hiring managers which industries you specialize in
const industriesSection = {
  title: "Industries I Specialize In",
  subtitle: "I work best in complex, regulated, or data-intensive environments:",
  
  industries: [
    {
      name: "Enterprise Operations",
      icon: emoji("🏢"),
      problem: "Complex workflows, poor visibility, fragmented metrics",
      approach: "Structure data, define KPIs, build unified dashboards",
      example: "AHPC (6,000 professionals), Regulated Ops Analytics"
    },
    {
      name: "Healthcare Systems",
      icon: emoji("🏥"),
      problem: "Patient outcomes unclear, workflow efficiency unknown, compliance reporting manual",
      approach: "Outcome dashboards, performance tracking, compliance automation",
      example: "University of New Haven (student success systems), AHPC"
    },
    {
      name: "Nonprofits & Social Impact",
      icon: emoji("🤝"),
      problem: "Program effectiveness hard to measure, partner engagement opaque",
      approach: "Impact dashboards, KPI frameworks, performance measurement",
      example: "MatchingDonors (3,000+ partners), From Jersey With Love"
    },
    {
      name: "Higher Education",
      icon: emoji("🎓"),
      problem: "Enrollment/retention unclear, academic performance hard to track",
      approach: "Predictive analytics, cohort analysis, leadership dashboards",
      example: "University of New Haven retention models"
    },
    {
      name: "Insurance & Financial Services",
      icon: emoji("💼"),
      problem: "Underwriting inconsistency, claims bottlenecks, policy performance opaque",
      approach: "Decision-support tools, SLA monitoring, trend analysis",
      example: "Insurance Cost Tool, Regulated Ops Analytics"
    }
  ],
  
  display: true
};

// ============================================================================
// ACHIEVEMENTS / CREDENTIALS
// ============================================================================
// REORGANIZED: By relevance category
const achievementSection = {
  title: emoji("Honors & Certifications 🏆"),
  subtitle: "Selected credentials supporting operational analytics, business intelligence, and decision support.",
  
  achievementsCards: [
    {
      title: "Six Sigma Green Belt",
      subtitle: "The Council for Six Sigma Certification",
      category: "Operations & Continuous Improvement",
      image: require("./assets/images/six_sigma_green_belt.png"),
      imageAlt: "Six Sigma Green Belt Certification",
      footerLink: []
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      subtitle: "Oracle University",
      category: "Data Science & Analytics",
      image: require("./assets/images/Certified_data_science.png"),
      imageAlt: "Oracle Data Science Certification",
      footerLink: []
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      subtitle: "Oracle University",
      category: "AI & Advanced Analytics",
      image: require("./assets/images/GenAI.png"),
      imageAlt: "Oracle Generative AI Certification",
      footerLink: []
    },
    {
      title: "Associate Data Analyst",
      subtitle: "DataCamp",
      category: "Data Science & Analytics",
      image: require("./assets/images/datacamp_analyst.png"),
      imageAlt: "DataCamp Associate Data Analyst Certification",
      footerLink: []
    },
    {
      title: "Deloitte Data Analytics Virtual Internship",
      subtitle: "Forage",
      category: "Data Science & Analytics",
      image: require("./assets/images/Deloitte_certification.png"),
      imageAlt: "Deloitte Data Analytics Virtual Experience",
      footerLink: []
    },
    {
      title: "Women in Data Science (WiDS) Ambassador 2026",
      subtitle: "Women in Data Science Worldwide",
      category: "Leadership & Community",
      image: require("./assets/images/WiDS_.png"),
      imageAlt: "WiDS Ambassador",
      footerLink: []
    },
    {
      title: "Order of the Engineer",
      subtitle: "University of New Haven",
      category: "Academic Honors",
      image: require("./assets/images/orderoftheengineer.png"),
      imageAlt: "Order of the Engineer",
      footerLink: []
    },
    {
      title: "Dean's List",
      subtitle: "University of New Haven",
      category: "Academic Honors",
      image: require("./assets/images/unhlogo.png"),
      imageAlt: "Dean's List Honors",
      footerLink: []
    }
  ],
  
  display: true
};

// ============================================================================
// BLOG SECTION (DISABLED)
// ============================================================================
const blogSection = {
  title: "Blogs",
  subtitle: "I share thoughts and tips on data science, leadership, and career growth.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// ============================================================================
// TALKS SECTION (DISABLED)
// ============================================================================
const talkSection = {
  title: "Talks",
  subtitle: emoji("Open to sharing and speaking about data & equity."),
  talks: [],
  display: false
};

// ============================================================================
// PODCAST SECTION (DISABLED)
// ============================================================================
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon — sharing data stories from the field.",
  podcast: [],
  display: false
};

// ============================================================================
// CONTACT INFO
// ============================================================================
// NEW: Updated messaging
const contactInfo = {
  title: emoji("Ready to Work Together? 💬"),
  subtitle: "Let's talk about turning your operational data into clear decisions.",
  number: "",
  email_address: "fhonutse@yahoo.com"
};

// ============================================================================
// TWITTER
// ============================================================================
const twitterDetails = {
  userName: "falidill",
  display: false
};

// ============================================================================
// JOB STATUS
// ============================================================================
const isHireable = true;

// ============================================================================
// RESUME SECTION
// ============================================================================
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: false
};

// ============================================================================
// EXPORTS
// ============================================================================
export {
  illustration: { animated: true },
  greeting,
  splashScreen,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  impactByArea,
  industriesSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
