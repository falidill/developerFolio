const greeting = {
  title: "Hi, I'm Fali Honutse",
  logo_name: "FaliHonutse",
  nickname: "falidill",
  subTitle:
    "Data Scientist | Analyst | Innovator. Passionate about extracting insights, building tools, and driving equity through data.",
  resumeLink: "https://falidill.github.io/portfolio-website/Fali%20Honutse__Resume.pdf",
  portfolio_repository: "https://github.com/falidill/portfolio-website",
};

const socialMediaLinks = {
  github: "https://github.com/falidill",
  linkedin: "https://www.linkedin.com/in/fali-dillys-honutse",
};

const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      skills: [
        "⚡ Building predictive models with Scikit-learn, TensorFlow, PyTorch",
        "⚡ Strong foundation in statistics and experimental design",
        "⚡ NLP modeling using BERT, RoBERTa, and custom pipelines",
      ],
      softwareSkills: [
        { skillName: "Python" },
        { skillName: "SQL" },
        { skillName: "R" },
        { skillName: "Power BI" },
        { skillName: "Tableau" },
        { skillName: "Excel" },
        { skillName: "AWS" },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of New Haven",
      subtitle: "M.S. in Data Science",
      logo_path: "unh.png", // You can add a UNH logo later
      alt_name: "UNH",
      duration: "2023 - 2025",
      descriptions: [
        "🔹 Built models to detect fake news, predict insurance costs, and assess student dropout risk.",
        "🔹 Developed dashboards in Power BI/Tableau to visualize and communicate insights.",
        "🔹 Led peer mentorship and DEI initiatives across campus."
      ],
    },
  ],
};

const experience = {
  title: "Experience",
  experiences: [
    {
      title: "JEDI Data Science Fellow",
      company: "University of New Haven",
      duration: "Feb 2024 – May 2025",
      description: "Built classification models and visual dashboards to support student retention and engagement insights across departments.",
    },
    {
      title: "Data Science Analyst",
      company: "Allied Health Professions Council, Ghana",
      duration: "Dec 2020 – Jul 2023",
      description: "Streamlined workflows for 3,000+ professionals; developed performance dashboards; supported virtual registration rollout for underserved women.",
    },
    {
      title: "Data Analyst",
      company: "Ho Technical University",
      duration: "Dec 2018 – Dec 2020",
      description: "Led data-driven curriculum redesign, built faculty databases, and produced insight dashboards for admissions and enrollment."
    }
  ]
};

const projects = {
  data: [
    {
      name: "Fake News Detection (Capstone)",
      description:
        "Built an NLP pipeline using BERT and RoBERTa to detect misinformation. Deployed a real-time classification API with 90%+ accuracy.",
      link: "https://github.com/falidill/fake-news-detector",
    },
    {
      name: "Insurance Charges Prediction App",
      description:
        "Deployed a Streamlit app that predicts insurance charges based on user inputs (e.g., BMI, smoking status).",
      link: "https://insurance-claim-predictor-8ep2mqqchbn4gxasgpz53d.streamlit.app/",
    },
    {
      name: "Personal Portfolio",
      description:
        "My original portfolio built using HTML, CSS, and JavaScript. Currently hosted on GitHub Pages.",
      link: "https://falidill.github.io/portfolio-website/"
    }
  ],
};

export {
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projects
};
