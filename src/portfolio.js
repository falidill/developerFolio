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
  title: "Hi, I'm Fali Honutse",
  subTitle: emoji(
    "Data & Operations Analyst | Business Intelligence Engineer |Passionate about extracting insights, building impactful tools, and supporting change through data."
  ),
  resumeLink: "", // We'll add this later
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/falidill",
  linkedin: "https://www.linkedin.com/in/fali-dillys-honutse",
  gmail: "fhonutse@yahoo.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "DATA ENTHUSIAST TURNING MESSY DATA INTO MEANINGFUL ACTIONS",
  skills: [
    emoji("⚡ Build predictive models using Scikit-learn, TensorFlow, and PyTorch"),
    emoji("⚡ Visualize insights using Power BI, Tableau, and Excel"),
    emoji("⚡ Automate analysis and reporting with SQL, Python, and R")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "R", fontAwesomeClassname: "fab fa-r-project" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" },
    { skillName: "MiniTab", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      degree: "MSc. Data Science",
      subHeader: "MSc in Data Science — University of New Haven",
      logo: require("./assets/images/unhlogo.png"),
      duration: "2023 - 2025",
      desc: "Focused on applied machine learning, NLP, and real-world data science tools.",
      descBullets: [
        "Capstone: Built NLP pipeline to detect fake news (90%+ accuracy)",
        "Created dashboards for student success and retention using Power BI",
        "Served as VP of Diversity & Inclusion in Graduate Student Council"
      ]
    },
    {
      degree:"M.S. Accounting & Finance | B.Sc. Actuarial Science",
      subHeader: "M.Sc in Accounting & Finance | B.Sc in Actuarial Science| KNUST",
      logo: require("./assets/images/knustlogo.jpg"),
      duration: "2017 - 2022",
      desc: "Gained solid foundations in modeling, statistics, and financial analysis. Developed actuarial models, performed risk assessments, and analyzed large datasets using R and Excel to inform financial decision-making."
    }
  ]
};


// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Science & Machine Learning", progressPercentage: "85%" },
    { Stack: "Data Analysis & Reporting", progressPercentage: "95%" },
    { Stack: "Data Engineering & Automation", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};
// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data & Operations Analyst",
      company: "MatchingDonors",
      companylogo: require("./assets/images/matching_donors.jpg"),
      date: "June 2025 – Present",
      desc: "Optimizing global affiliate operations by centralizing data systems and delivering high-integrity analytics for better efficiency in operations.",
      descBullets: [
        "Standardize global databases across Salesforce, Airtable, and Excel, improving data consistency by 35% and reducing retrieval time by 40%.",
        "Develop Power BI and Looker Studio dashboards to track performance metrics for 3000 affiliates and identify growth opportunities.",
        "Engineer workflow solutions and automated reporting in Google Workspace to bridge process gaps between Marketing and Outreach teams."
      ]
    },
    {
      role: "Data Analyst",
      company: "University of New Haven",
      companylogo: require("./assets/images/data1.png"),
      date: "Feb 2024 – May 2025",
      desc: "Built ML models to identify student dropout risk, automated reporting workflows, and created department-wide BI dashboards.",
      descBullets: [
        "Developed Power BI dashboards for student retention",
        "Collaborated with university leadership on student strategy"
      ]
    },
    {
      role: "Data Analyst",
      company: "Allied Health Professions Council, Ghana",
      companylogo: require("./assets/images/data2.webp"),
      date: "Dec 2020 – Jul 2023",
      desc: "Streamlined workflows for 30,000+ professionals, developed dashboards, and improved outreach to underserved health workers."
    },
    { 
      role: "Data Analyst",
      company: "Ho Technical University, Ghana",
      companylogo: require("./assets/images/data3.jpg"),
      date: "Dec 2018 – Dec 2020",
      desc: "Led curriculum impact analysis, digitized records using relational models, and produced actionable trend reports."
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
      subtitle: "Credentialed by Oracle University",
      image: require("./assets/images/oracleuniversity.jpg"),
      imageAlt: "Oracle",
      footerLink: []
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      subtitle: "Credentialed by Oracle University",
      image: require("./assets/images/oracleuniversity.jpg"),
      imageAlt: "Oracle",
      footerLink: []
    },
    {
      title: "Oracle Certified Foundations Associate",
      subtitle: "Credentialed by Oracle University",
      image: require("./assets/images/oracleuniversity.jpg"),
      imageAlt: "Oracle",
      footerLink: []
    },
    {
      title: "Oracle AI Vector Search Certified Professional",
      subtitle: "Credentialed by Oracle University",
      image: require("./assets/images/oracleuniversity.jpg"),
      imageAlt: "Oracle",
      footerLink: []
    },
    {
      title: "Six Sigma Green Belt",
      subtitle: "Credentialed by The Council for Six Sigma Certification",
      image: require("./assets/images/six_sigma_green_belt.png"),
      imageAlt: "Six Sigma Green Belt Certified",
      footerLink: []
    },
    {
      title: "Deloitte Data Analytics Virtual Internship",
      subtitle: "Completed through Forage",
      image: require("./assets/images/delloitte.png"),
      imageAlt: "Virtual Internship",
      footerLink: []
    },
    {
      title: "Data Literacy Certificate",
      subtitle: "Credentialed by DataCamp",
      image: require("./assets/images/datacamp.png"),
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
