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

// UPDATED: Focused title and broader subTitle
const greeting = {
  username: "Fali Honutse",
  title: "Data & Business Intelligence Analyst",
  subTitle:
    "I build the dashboards, KPI frameworks, and analytics systems that help organizations turn operational data into clear, confident decisions.",
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

// UPDATED: Broader skills section, tools-first
const skillsSection = {
  title: "What I Do",
  subTitle:
    "DATA ANALYSIS · BUSINESS INTELLIGENCE · KPI SYSTEMS · PREDICTIVE MODELING",
  skills: [
    emoji("⚡ Build dashboards, scorecards, and self-service reporting tools that give teams real-time visibility into what matters"),
    emoji("⚡ Design KPI frameworks and performance measurement systems that turn messy operational data into structured, reliable insights"),
    emoji("⚡ Develop predictive models and trend analyses that support forecasting, decision-making, and continuous improvement")
  ],
  softwareSkills: [
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" },
    { skillName: "Streamlit", fontAwesomeClassname: "fas fa-laptop-code" },
    { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" }
  ],
  display: true
};

// Education Section (unchanged — solid as is)
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
      desc: "Built strong foundations in risk modeling, quantitative decision systems, and financial analysis.",
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
    { Stack: "Business Intelligence & Dashboard Development" },
    { Stack: "KPI Design & Performance Measurement" },
    { Stack: "Predictive Modeling & Forecasting" }
  ],
  displayCodersrank: false
};

// Work Experience (unchanged — already well written)
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Operations Analyst",
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
        "Mapped cross-functional workflows using process diagrams to identify coordination gaps and improvement opportunities",
        "Developed impact dashboards to provide leadership with visibility into program outcomes and operational bottlenecks"
      ]
    },
    {
      role: "Data Analyst (Program Analytics)",
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
      role: "Operations & Regulatory Data Analyst",
      company: "Allied Health Professions Council",
      companylogo: require("./assets/images/AHPC_ logo.png"),
      date: "Dec 2020 – Jul 2023",
      desc: "Streamlined workflows for 6,000+ health professionals, developed performance dashboards, and improved data accuracy across licensing and compliance operations."
    },
    {
      role: "Institutional Data Analyst",
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

// UPDATED: All 6 projects with business-outcomes framing
const bigProjects = {
  title: "Analytics & Operations Projects",
  subtitle: "Decision-support tools and business intelligence systems",
  projects: [
    {
      image: require("./assets/images/ops-analytics.png"),
      projectName: "Regulated Operational Workflow Performance Analysis",
      projectDesc:
        "End-to-end operational analytics project analyzing 6,000 workflow encounters in a regulated service environment. Diagnosed throughput bottlenecks, evaluated SLA compliance, and produced governance-aligned KPI monitoring recommendations for peak demand management — directly applicable to healthcare, insurance, and government operations.",
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
        "A structured compatibility scoring platform that evaluates student-project alignment using weighted attributes and scoring logic. Designed to improve consistency and transparency in opportunity-matching workflows — reducing subjectivity and supporting more equitable, data-driven decisions.",
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
        "A decision-support tool that scores candidate-job fit using NLP and cosine similarity to surface the most relevant skills and gaps. Built to standardize screening workflows and reduce time spent on manual resume review — deployed as a live Streamlit app.",
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
      projectDesc:
        "An interactive prediction tool that estimates medical insurance charges based on policyholder attributes including age, BMI, and coverage profile. Built to support underwriting decision-making and cost planning — demonstrates applied predictive modeling in an insurance and actuarial context.",
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
      projectDesc:
        "An NLP pipeline that automatically classifies documents by credibility and content type using BERT and RoBERTa (90%+ accuracy). Designed to reduce manual content review workloads and support faster, more consistent editorial and compliance screening decisions at scale.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/falidill/fake-news-detector"
        }
      ]
    },
    {
      image: require("./assets/images/kinksandkulture.png"),
      projectName: "Kinks & Kulture — AI Product Discovery App",
      projectDesc:
        "An AI-powered recommendation tool that matches users to haircare products based on their specific hair needs, preferences, and profile. Demonstrates practical application of conversational AI and personalization logic to improve product discovery and user decision-making.",
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

// Achievements — updated with full recommended list
const achievementSection = {
  title: emoji("Honors & Certifications 🏆"),
  subtitle: "Selected credentials supporting analytics, business intelligence, and decision support.",
  achievementsCards: [
    {
      title: "Six Sigma Green Belt",
      subtitle: "The Council for Six Sigma Certification",
      image: require("./assets/images/six_sigma_green_belt.png"),
      imageAlt: "Six Sigma Green Belt Certification",
      footerLink: []
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      subtitle: "Oracle University",
      image: require("./assets/images/Certified_data_science.png"),
      imageAlt: "Oracle Data Science Certification",
      footerLink: []
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      subtitle: "Oracle University",
      image: require("./assets/images/GenAI.png"),
      imageAlt: "Oracle Generative AI Certification",
      footerLink: []
    },
    {
      title: "Associate Data Analyst",
      subtitle: "DataCamp",
      image: require("./assets/images/datacamp_analyst.png"),
      imageAlt: "DataCamp Associate Data Analyst Certification",
      footerLink: []
    },
    {
      title: "Deloitte Data Analytics Virtual Internship",
      subtitle: "Forage",
      image: require("./assets/images/Deloitte_certification.png"),
      imageAlt: "Deloitte Data Analytics Virtual Experience",
      footerLink: []
    },
    {
      title: "Women in Data Science (WiDS) Ambassador 2026",
      subtitle: "Women in Data Science Worldwide",
      image: require("./assets/images/WiDS_.png"),
      imageAlt: "WiDS Ambassador",
      footerLink: []
    },
    {
      title: "Order of the Engineer",
      subtitle: "University of New Haven",
      image: require("./assets/images/orderoftheengineer.png"),
      imageAlt: "Order of the Engineer",
      footerLink: []
    },
    {
      title: "Dean's List",
      subtitle: "University of New Haven",
      image: require("./assets/images/unhlogo.png"),
      imageAlt: "Dean's List Honors",
      footerLink: []
    },
    {
      title: "More Certifications",
      subtitle: `• Machine Learning with Scikit-learn
- Predictive Analytics: Data Mining
- MLOps Essentials
- DevOps for Data Scientists
- SQL Essential Training
- Data Science Foundations`,
      image: require("./assets/images/linkedin.png"),
      imageAlt: "Additional Certifications",
      footerLink: []
    }
  ],
  display: true
};

// Blog Section
const blogSection = {
  title: "Blogs",
  subtitle: "I share thoughts and tips on data science, leadership, and career growth.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks
const talkSection = {
  title: "Talks",
  subtitle: emoji("Open to sharing and speaking about data & equity."),
  talks: [],
  display: false
};

// Podcast
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

// Twitter
const twitterDetails = {
  userName: "falidill",
  display: false
};

// Job Status
const isHireable = true;

// Resume Section
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
