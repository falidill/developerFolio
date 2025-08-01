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
  title: "Hi, I'm Fali 👋",
  subTitle: emoji(
    "Aspiring Data Scientist | Analyst | Innovator. I’m passionate about extracting insights, building impactful tools, and supporting inclusive change through data."
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
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of New Haven",
      logo: "", // optional
      subHeader: "M.S. in Data Science",
      duration: "2023 - 2025",
      desc: "Focused on applied machine learning, NLP, and real-world data science tools.",
      descBullets: [
        "Capstone: Built NLP pipeline to detect fake news (90%+ accuracy)",
        "Created dashboards for student success and retention using Power BI",
        "Served as VP of Diversity & Inclusion in Graduate Student Council"
      ]
    },
    {
      schoolName: "KNUST, Ghana",
      logo: "",
      subHeader: "M.S. in Accounting & Finance | B.Sc. in Actuarial Science",
      duration: "2012 - 2022",
      desc: "Gained solid foundations in modeling, statistics, and financial analysis."
    }
  ]
};

// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Science & ML", progressPercentage: "85%" },
    { Stack: "Data Analysis & Reporting", progressPercentage: "90%" },
    { Stack: "Data Engineering & Automation", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "JEDI Data Science Fellow",
      company: "University of New Haven",
      companylogo: "",
      date: "Feb 2024 – May 2025",
      desc: "Built ML models to identify student dropout risk, automated reporting workflows, and created department-wide BI dashboards."
    },
    {
      role: "Data Science Analyst",
      company: "Allied Health Professions Council, Ghana",
      companylogo: "",
      date: "Dec 2020 – Jul 2023",
      desc: "Streamlined workflows for 3,000+ professionals, developed dashboards, and improved outreach to underserved health workers."
    },
    {
      role: "Data Analyst",
      company: "Ho Technical University, Ghana",
      companylogo: "",
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
  title: "Projects",
  subtitle: "Real-World Applications and Solutions",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
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
      image: require("./assets/images/nextuLogo.webp"),
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
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Portfolio Website",
      projectDesc: "My original portfolio built using HTML, CSS, and JavaScript, hosted on GitHub Pages.",
      footerLink: [
        {
          name: "Visit site",
          url: "https://falidill.github.io/portfolio-website/"
        }
      ]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Here are some highlights and credentials I’ve earned.",
  achievementsCards: [
    {
      title: "Oracle Certified Foundations Associate",
      subtitle: "Credentialed by Oracle University",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Oracle",
      footerLink: []
    },
    {
      title: "Dean's List & Order of the Engineer",
      subtitle: "University of New Haven",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Honors",
      footerLink: []
    },
    {
      title: "Deloitte Data Analytics Virtual Internship",
      subtitle: "Completed through Forage",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Virtual Internship",
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
