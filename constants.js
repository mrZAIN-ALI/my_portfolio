export const METADATA = {
  author: "Zain Ali",
  title: "Portfolio | Zain Ali",
  description:
    "Zain Ali is a passionate Software Engineer specializing in full-stack web development and AI-powered applications, dedicated to building scalable web apps and intelligent systems.",
  siteUrl: "https://www.zainali.dev/",
  twitterHandle: "@zainali_dev",
  keywords: [
    "Zain Ali",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "MERN Stack Developer",
    "Deep Learning",
    "NLP",
    "Portfolio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A Full-Stack Web Developer",
  "I build intelligent web applications",
  "I create AI-powered solutions",
  "Software Engineer & AI Enthusiast",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:zainali.rio@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/zain-ali-rio/",
  },
  {
    name: "github",
    url: "https://github.com/mrZAIN-ALI",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "javascript",
    "typescript",
    "python",
    "html",
    "css",
    "sass",
    "nodejs",
    "git",
    "figma",
    "webpack",
    "vite",
  ],
  webDevelopment: [
    "react",
    "nextjs",
    "nodejs",
    "tailwindcss",
    "redux",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
    "firebase",
    "tanstack-query",
  ],
  aiAndML: [
    "python",
    "tensorflow",
    "pytorch", 
    "keras",
    "opencv",
    "pandas",
    "numpy",
    "scikit-learn",
    "jupyter",
  ],
  databases: ["mongodb", "mysql", "firebase"],
  mobileDevelopment: ["flutter", "firebase"],
  other: ["git", "docker", "vercel", "heroku", "postman"],
};

export const PROJECTS = [
  {
    name: "Airbnb Neo",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Full-stack vacation rental platform with Next.js 13 🏠",
    gradient: ["#FF5A5F", "#FF385C"],
    url: "https://github.com/mrZAIN-ALI/airbnb-neo",
    tech: ["nextjs", "tailwindcss", "typescript", "mongodb", "firebase"],
  },
  {
    name: "Uber Neo",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Real-time ride-hailing web platform with MERN Stack �",
    gradient: ["#000000", "#1A1A1A"],
    url: "https://github.com/mrZAIN-ALI/uber-neo",
    tech: ["react", "nodejs", "mongodb", "javascript", "css"],
  },
  {
    name: "Pneumonia Detection",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "AI-powered chest X-ray analysis using Deep Learning 🫁",
    gradient: ["#667eea", "#764ba2"],
    url: "https://github.com/mrZAIN-ALI/pneumonia-detection",
    tech: ["python", "tensorflow", "keras", "numpy"],
  },
  {
    name: "Heart Disease Prediction",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "ML model for cardiovascular risk assessment 💓",
    gradient: ["#f093fb", "#f5576c"],
    url: "https://github.com/mrZAIN-ALI/heart-disease-prediction",
    tech: ["python", "scikit-learn", "pandas", "numpy"],
  },
  {
    name: "Stock Price Prediction",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "FTSE-100 forecasting with LSTM & CNN models 📈",
    gradient: ["#a8edea", "#fed6e3"],
    url: "https://github.com/mrZAIN-ALI/stock-prediction",
    tech: ["python", "tensorflow", "keras", "pandas"],
  },
  {
    name: "Mualij",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Medical consultation app with integrated AI models �",
    gradient: ["#84fab0", "#8fd3f4"],
    url: "https://github.com/mrZAIN-ALI/mualij",
    tech: ["flutter", "firebase", "python", "tensorflow"],
  },
];

export const WORK_CONTENTS = {
  XAVINEX: [
    {
      title: "Xavinex",
      description:
        "A leading software development company specializing in mobile applications and digital solutions for businesses across various industries.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Building innovative mobile solutions
        </div>
      ),
    },
    {
      title: "Mobile Development",
      description:
        "As a Mobile App Developer at Xavinex, I developed cross-platform applications using Flutter and Firebase. I worked on multiple client projects, implementing real-time features, user authentication, and cloud integrations. My focus was on creating responsive, performant mobile apps that deliver exceptional user experiences.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Mobile App Developer
        </div>
      ),
    },
  ],
  ACM_UET: [
    {
      title: "ACM UET",
      description:
        "Association for Computing Machinery - University of Engineering and Technology chapter, promoting computer science education and organizing tech events for students.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Fostering tech community and innovation
        </div>
      ),
    },
    {
      title: "Leadership",
      description:
        "As Director of Event Management at ACM UET, I led the organization and execution of major tech events, workshops, and competitions. I managed teams of volunteers, coordinated with industry speakers, and successfully organized events that engaged hundreds of students in the tech community.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Director of Event Management
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
