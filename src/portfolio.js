import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen
const splashScreen = { 
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Fali Honutse",
  title: "Fali Honutse",
  subTitle: "Analytics & Operations Professional | Healthcare & Regulated Systems | I use data to improve operational decision-making, performance measurement, and process efficiency.",
  resumeLink: "",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/falidill",
  linkedin: "https://www.linkedin.com/in/fali-dillys-honutse",
  email: "fhonutse@yahoo.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
     "ANALYTICS & OPERATIONS | HEALTHCARE / REGULATORY DECISION SUPPORT, KPI SYSTEMS, AND OPERATIONAL PERFORMANCE",
  skills: [
    emoji("⚡ Build performance measurement frameworks (KPIs, dashboards, reporting logic) that leadership can trust"),
    emoji("⚡ Analyze operational workflows to identify bottlenecks, drivers of outcomes, and improvement opportunities"),
    emoji("⚡ Deliver decision support through forecasting, segmentation, and scenario analysis—translated into clear recommendations")
  ],
  softwareSkills: [
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" },
    { skillName: "AWS (S3)", fontAwesomeClassname: "fab fa-aws" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      degree: "M.S. Data Science",
      subHeader: "M.S. Data Science — University of New Haven",
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
      subHeader: "M.S. Accounting & Finance | B.S. Actuarial Science — Kwame Nkrumah University of Science and Technology (KNUST)",
      logo: require("./assets/images/knustlogo.jpg"),
      duration: "2022",
      desc: "Built strong foundations in risk modeling, quantitative decision systems, and financial governance within structured regulatory environments.",
      descBullets: [
        "Applied statistical and actuarial methods to assess risk exposure and support data-driven financial decisions",
        "Developed structured modeling frameworks to evaluate uncertainty, performance variability, and long-term projections",
        "Performed financial and operational analysis using R and Excel to support reporting accuracy and decision accountability"
      ]
    }
  ]
};

// Technical Focus Areas
const techStack = {
  viewSkillBars: false,
  experience: [
    { Stack: "Operational Analytics & Performance Measurement" },
    { Stack: "Decision Support & Forecasting" },
    { Stack: "Data Governance & Reporting Systems" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role:  "Data Operations Analyst",
      company: "MatchingDonors",
      companylogo: require("./assets/images/matching_donors.jpg"),
      date: "Aug 2025 – Present",
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
      desc: "Support operational performance and program effectiveness by developing structured reporting systems and workflow documentation for a mission-driven organization.",
  descBullets: [
    "Built recurring performance reporting frameworks to track program efficiency and resource utilization",
    "Mapped cross-functional workflows using process diagrams (Visio/Lucidchart) to identify coordination gaps and improvement opportunities",
    "Developed impact dashboards to provide leadership with visibility into program outcomes and operational bottlenecks"
  ]
    },
    {
      role: "JEDI Ambassador- Program and Institution Analytics",
      company: "University of New Haven",
      companylogo: require("./assets/images/unhlogo.png"),
      date: "Feb 2024 – May 2025",
      desc: "Led institutional performance analytics to support student retention strategy, enrollment forecasting, and leadership decision-making across academic units.",
  descBullets: [
    "Developed retention risk models and performance monitoring frameworks to identify at-risk student cohorts and inform targeted interventions",
    "Designed and automated reporting workflows to standardize KPI tracking across departments, reducing manual analysis time",
    "Built executive Power BI dashboards used by deans and senior leadership to evaluate retention trends and policy tradeoffs",
    "Translated analytical outputs into written briefs and recommendations to guide resource allocation and student success initiatives"
  ]
    },
    {
      role: "Assistant Administrative Assistant - Regulatory Analytics & Licensing Operations ",
      company: "Allied Health Professions Council",
      companylogo: require("./assets/images/AHPC_ logo.png"),
      date: "Dec 2020 – Jul 2023",
      desc: "Streamlined workflows for 6,000+ customers, developed dashboards, and improved outreach to underserved communities."
    },
      {
      role: "Institutional Data Analyst (Contract)",
      company: "Ho Technical University",
      companylogo: require("./assets/images/HTU_logo.png"),
      date: "Dec 2018 – Dec 2020",
      desc: "Supported institutional reporting and operational decision-making by transitioning academic records into structured digital systems and delivering performance trend analysis.",
      descBullets: [
        "Designed relational data structures to digitize fragmented academic records, improving reporting accuracy and accessibility",
        "Analyzed enrollment, curriculum, and student performance trends to support academic planning and administrative oversight",
        "Developed recurring institutional reports that provided leadership visibility into program outcomes and operational metrics"
      ]
    }
  ]
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: false
};

// Projects
const bigProjects = {
  title: "Analytics & Operations Projects",
  subtitle: "Operational analytics and decision-support systems",
  projects: [
    {
      image: require("./assets/images/ops-analytics.png"),
      projectName: "Regulated Operational Workflow Performance Analysis",
      projectDesc:
        "End-to-end operational analytics project analyzing 6,000 workflow encounters in a regulated service environment to diagnose throughput bottlenecks, evaluate SLA compliance, and assess safety exposure. The analysis identified queue congestion as the primary constraint and produced governance-aligned recommendations for peak demand management and operational monitoring.",
      footerLink: [
        {
          name: "View Project on GitHub",
          url: "https://github.com/falidill/regulated-ops-analytics"
        }
      ]
    },

    {
      image: require("./assets/images/matchlab.png"),
      projectName: "MatchLab — Structured Matching Decision System",
      projectDesc:
        "Designed a structured matching framework that evaluates student-project compatibility using scoring logic and structured attributes, improving transparency and consistency in opportunity matching workflows.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://matchlabhub.carrd.co/"
        }
      ]
    },

    {
      image: require("./assets/images/resumematcher.png"),
      projectName: "Resume–Role Alignment Tool",
      projectDesc:
        "Built a decision-support tool that evaluates candidate-job alignment using structured similarity scoring and NLP feature extraction, helping standardize resume screening workflows.",
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
    }
  ],
  display: true
};


// Achievements
const achievementSection = {
  title: emoji("Honors & Certifications 🏆"),
  subtitle: "Here are some highlights and credentials I’ve earned.",
  achievementsCards: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      subtitle: "Oracle University",
      image: require("./assets/images/Certified_data_science.png"),
      imageAlt: "Oracle",
      footerLink: []
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      subtitle: "Oracle University",
      image: require("./assets/images/GenAI.png"),
      imageAlt: "Oracle",
      footerLink: []
    },
    {
      title: "Oracle Certified AI Foundations Associate",
      subtitle: "Oracle University",
      image: require("./assets/images/AI_Foundations.png"),
      imageAlt: "Oracle",
      footerLink: []
    },
    {
      title: "Oracle AI Vector Search Certified Professional",
      subtitle: "Oracle University",
      image: require("./assets/images/Oracle_AIvector_search.png"),
      imageAlt: "Oracle",
      footerLink: []
    },
    {
      title: "Six Sigma Green Belt",
      subtitle: "The Council for Six Sigma Certification",
      image: require("./assets/images/six_sigma_green_belt.png"),
      imageAlt: "Six Sigma Green Belt Certified",
      footerLink: []
    },
    {
      title: "Deloitte Data Analytics Virtual Internship",
      subtitle: " Forage",
      image: require("./assets/images/Deloitte_certification.png"),
      imageAlt: "Virtual Internship",
      footerLink: []
    },
    {
      title: "Data Literacy Certificate",
      subtitle: "DataCamp",
      image: require("./assets/images/Data-Literacy-datacamp.png"),
      imageAlt: "Datacamp",
      footerLink: []
    },
    {
      title: "Order of the Engineer",
      subtitle: "University of New Haven",
      image: require("./assets/images/orderoftheengineer.png"),
      imageAlt: "Honors",
      footerLink: []
    },
    {
      title: "2026 Women In Data Science Ambassador ",
      subtitle: "Women In Data Science WorldWide",
      image: require("./assets/images/WiDS_.png"),
      imageAlt: "WIDS Ambassador",
      footerLink: []
    },
    {
      title: "Dean's List",
      subtitle: "University of New Haven",
      image: require("./assets/images/unhlogo.png"),
      imageAlt: "Honors",
      footerLink: []
    },
    {
      title: "More Certifications",
      subtitle: `• Machine Learning with Scikit-learn
• Predictive Analytics: Data Mining 
• SQL Essentials (2019)
• Data Science Foundations
• DevOps for Data Scientists
• MLOps Essentials
• SQL Essential Training
• Graph Databases: Neo4j`,
      image: require("./assets/images/linkedin.png"),
      imageAlt: "More Certifications",
      footerLink: []
    }
  ],
  display: true
};


// Blog Section (disabled for now)
const blogSection = {
  title: "Blogs",
  subtitle: "I share thoughts and tips on data science, leadership, and career growth.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks (optional)
const talkSection = {
  title: "Talks",
  subtitle: emoji("Open to sharing and speaking about data & equity."),
  talks: [],
  display: false
};

// Podcast (optional)
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon — sharing data stories from the field.",
  podcast: [],
  display: false
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to collaborate or connect? My inbox is open.",
  number: "",
  email_address: "fhonutse@yahoo.com"
};

// Twitter Section
const twitterDetails = {
  userName: "falidill",
  display: false
};

// Job Status
const isHireable = true;

// Resume Section (hidden for now)
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: false
};

export {
  illustration,
  greeting,
  splashScreen,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
