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

// UPDATED: Just the title changed + clearer value prop
const greeting = {
  username: "Fali Honutse",
  title: "Data-Driven Operations Analyst",
  subTitle:
    "I help organizations turn operational chaos into structured, measurable processes. I build dashboards, KPI frameworks, and analytics systems that help leadership understand operations and make better decisions.",
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

// Skills section - minimal change
const skillsSection = {
  title: "What I Do",
  subTitle:
    "OPERATIONAL ANALYTICS · BUSINESS INTELLIGENCE · KPI SYSTEMS · DECISION SUPPORT",
  skills: [
    emoji("⚡ Build dashboards, scorecards, and self-service reporting tools that give leadership visibility into operational performance"),
    emoji("⚡ Design KPI frameworks and measurement systems that turn messy operational data into structured, reliable insights for decision-making"),
    emoji("⚡ Develop predictive models and trend analyses that support forecasting, operational optimization, and continuous improvement")
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

// Education Section (unchanged)
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
    { Stack: "Operational Analytics & Performance Measurement" },
    { Stack: "KPI Design & Decision Support Systems" },
    { Stack: "Predictive Modeling & Forecasting" }
  ],
  displayCodersrank: false
};

// Work Experience (unchanged)
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

// UPDATED: Projects with problem-solution-impact framing
const bigProjects = {
  title: "Analytics & Operations Projects",
  subtitle: "Decision-support tools and business intelligence systems",
  projects: [
    {
      image: require("./assets/images/ops-analytics.png"),
      projectName: "Regulated Operational Workflow Performance Analysis",
      projectDesc:
        "How I diagnosed bottlenecks in a 6,000-workflow regulated environment. Problem: no visibility into performance gaps or SLA compliance. Solution: end-to-end analytics system diagnosing bottlenecks and building KPI monitoring. Impact: leadership could make data-driven resource allocation decisions.",
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
        "How I reduced subjectivity in opportunity matching. Problem: manual matching was inconsistent and hard to audit. Solution: weighted scoring system with transparent logic. Impact: improved consistency, equity, and auditability in decision-making.",
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
        "How I reduced hiring screening time by 70%. Problem: hours spent manually reviewing resumes with high subjectivity. Solution: NLP-powered scoring to rank candidates by job fit. Impact: streamlined screening and standardized evaluation.",
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
        "How I enabled faster underwriting decisions. Problem: inconsistent, slow manual charge estimation. Solution: predictive model for instant, data-driven estimates. Impact: faster underwriting with consistent pricing logic.",
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
        "How I scaled content review from manual to 90% automated. Problem: manual review was a bottleneck. Solution: BERT/RoBERTa NLP pipeline for auto-classification. Impact: 70% reduction in manual workload and faster compliance screening.",
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
        "How I improved product discovery for customers. Problem: hard to find products matching specific needs. Solution: conversational AI with personalized recommendations. Impact: better product discovery and reduced support queries.",
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

// Achievements (unchanged)
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
