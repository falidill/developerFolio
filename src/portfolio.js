import emoji from "react-easy-emoji";

const greeting = {
  username: "Fali Honutse",
  title: "Hi, I'm Fali 👋",
  subTitle: emoji(
    "Data Scientist | Analyst | Innovator. Passionate about extracting insights, building tools, and driving equity through data."
  ),
  resumeLink:
    "https://falidill.github.io/portfolio-website/Fali%20Honutse__Resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/falidill",
  linkedin: "https://www.linkedin.com/in/fali-dillys-honutse",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle:
    "DATA ENTHUSIAST WHO LOVES UNLOCKING INSIGHTS AND TELLING STORIES WITH NUMBERS.",
  skills: [
    emoji(
      "⚡ Build predictive models with Scikit-learn, TensorFlow, and PyTorch"
    ),
    emoji("⚡ Design and deploy dashboards in Power BI, Tableau, and Excel"),
    emoji(
      "⚡ Automate workflows and analyze trends using Python, SQL, and R"
    )
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "R", fontAwesomeClassname: "fab fa-r-project" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of New Haven",
      logo: require("./assets/images/harvardLogo.png"), // you can swap in your own logo later
      subHeader: "M.S. in Data Science",
      duration: "2023 - 2025",
      desc: "Specialized in machine learning, NLP, and data storytelling.",
      descBullets: [
        "Built tools to detect fake news, predict insurance charges, and prevent student dropout",
        "Led DEI initiatives and peer mentorship for graduate students"
      ]
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "JEDI Data Science Fellow",
      company: "University of New Haven",
      date: "Feb 2024 – May 2025",
      desc: "Built models to detect student dropout risk and developed Power BI dashboards that cut manual reporting by 40%."
    },
    {
      role: "Data Science Analyst",
      company: "Allied Health Professions Council, Ghana",
      date: "Dec 2020 – Jul 2023",
      desc: "Streamlined workflows for 3,000+ professionals and built performance dashboards for underserved groups."
    },
    {
      role: "Data Analyst",
      company: "Ho Technical University",
      date: "Dec 2018 – Dec 2020",
      desc: "Led data-driven curriculum redesign, developed faculty databases, and produced insight dashboards for admissions."
    }
  ]
};

const bigProjects = {
  title: "Projects",
  subtitle: "A FEW THINGS I'VE BUILT LATELY",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Fake News Detection",
      projectDesc:
        "BERT-based NLP system that flags fake news in real time. Built with Hugging Face, deployed via MLOps pipeline.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/falidill/fake-news-detector"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Insurance Charge Predictor",
      projectDesc:
        "Streamlit web app that lets users explore how age, BMI, and smoking affect insurance premiums.",
      footerLink: [
        {
          name: "Try it live",
          url: "https://insurance-claim-predictor-8ep2mqqchbn4gxasgpz53d.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Personal Portfolio Site",
      projectDesc: "Original HTML/CSS/JS portfolio now rebuilt with React!",
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

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Some highlights from my learning and leadership journey",
  achievementsCards: [
    {
      title: "Oracle Certified Foundations Associate",
      subtitle: "Oracle University",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: []
    },
    {
      title: "Dean’s List & Order of the Engineer",
      subtitle: "University of New Haven (2024)",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: []
    },
    {
      title: "Data Analytics Job Simulation",
      subtitle: "Completed virtual internship with Deloitte",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "I write about data, leadership, and empowering students through tech.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("I share my knowledge through mentoring and presentations."),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon: my take on data, equity, and innovation",
  podcast: [],
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's talk data, collaboration, or opportunities!",
  number: "+1 (609) 533‑7155",
  email_address: "fhonutse@yahoo.com"
};

const twitterDetails = {
  userName: "falidill", // Replace with your actual Twitter handle if you want
  display: false
};

const isHireable = true;

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
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
