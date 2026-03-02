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
    { Stack: "Applied Data Analysis & Decision Support" },
    { Stack: "Predictive Modeling & Analytics" },
    { Stack: "Data Automation & Analytical Pipelines" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role:  "Analytics & Operations Analyst",
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
      role: "Data & Operations Analyst (Volunteer)",
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
      companylogo: require("./assets/images/data1.png"),
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
      role: "Applied Data Scientist (Regulatory & Compliance Analytics) ",
      company: "Allied Health Professions Council",
      companylogo: require("./assets/images/data2.webp"),
      date: "Dec 2020 – Jul 2023",
      desc: "Streamlined workflows for 6,000+ customers, developed dashboards, and improved outreach to underserved communities."
    },
    { 
      role: "Institutional Data Analyst",
      company: "Ho Technical University",
      companylogo: require("./assets/images/data3.jpg"),
      date: "Dec 2018 – Dec 2020",
  desc: "Built foundational reporting and data-structure improvements to support academic planning and operational visibility.",
  descBullets: [
    "Converted fragmented records into structured datasets and recurring reports to improve reporting consistency",
    "Analyzed enrollment and program performance trends to support planning and decision-making"
  ]
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: false
};

// Projects
const bigProjects = {
  title: "My Projects",
  subtitle: "Products and Initiatives I’ve Created",
  projects: [
    {
      image: require("./assets/images/matchlab.png"),
      projectName: "MatchLab",
      projectDesc: "A platform to connect students and professionals based on projects, skills, and research interests.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://matchlabhub.carrd.co/"
        }
      ]
    },
    {
      image: require("./assets/images/resumematcher.png"),
      projectName: "Resume Matcher App",
      projectDesc: "A Streamlit app that matches your resume to a job description using NLP, cosine similarity, and scoring logic.",
      footerLink: [
        {
          name: "Try it Live",
          url: "https://theresume-matcher.streamlit.app/"
        },
        {
          name: "View on GitHub",
          url: "https://github.com/falidill/Resume-Matcher"
        }
      ]
    },
    {
      image: require("./assets/images/fakenews.png"),
      projectName: "Fake News Detection (Capstone)",
      projectDesc: "NLP pipeline using BERT & RoBERTa with 90%+ accuracy. Includes MLOps pipeline for deployment.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/falidill/fake-news-detector"
        }
      ]
    },
    {
      image: require("./assets/images/insurance.webp"),
      projectName: "Insurance Charges Prediction App",
      projectDesc: "Streamlit app that predicts medical insurance costs based on user input like age and BMI.",
      footerLink: [
        {
          name: "Try it Live",
          url: "https://insurance-claim-predictor-8ep2mqqchbn4gxasgpz53d.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/portfolio.png"),
      projectName: "Portfolio Website, Fali Honutse",
      projectDesc: "My original portfolio built using HTML, CSS, and JavaScript, hosted on GitHub Pages.",
      footerLink: [
        {
          name: "Visit site",
          url: "https://falidill.github.io/portfolio-website/"
        }
      ]
    },
    {
  image: require("./assets/images/kinksandkulture.png"), // Upload this image
  projectName: "Kinks & Kulture",
  projectDesc: "An AI-powered product discovery app that helps users find haircare products based on their hair needs and preferences.",
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
