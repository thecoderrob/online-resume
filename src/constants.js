import easybank from "./assets/easybank.png";
import spaceTourism from "./assets/space-tourism.png";
import blogr from "./assets/blogr.png";
import todo from "./assets/todo.png";
import calculator from "./assets/calculator.png";
import jobListing from "./assets/job-listing.png";
import advice from "./assets/advice.png";
import logoMeta from "./assets/meta-logo.png";
import logoUM from "./assets/university-of-michigan-logo.png";

const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "#home",
    icon: "estate",
  },
  {
    id: 2,
    title: "Skills",
    link: "#skills",
    icon: "file-alt",
  },
  {
    id: 3,
    title: "Experience",
    link: "#experience",
    icon: "briefcase-alt",
  },
  {
    id: 4,
    title: "Portfolio",
    link: "#portfolio",
    icon: "scenery",
  },
  {
    id: 5,
    title: "Certificates",
    link: "#certificates",
    icon: "award",
  },
  {
    id: 6,
    title: "Contact",
    link: "#contact",
    icon: "message",
  },
];

const skills = [
  {
    id: 1,
    title: "Frontend Development",
    tSkills: [
      {
        id: 1,
        skill: "HTML",
        proficiency: "Intermediate",
      },
      {
        id: 2,
        skill: "CSS",
        proficiency: "Intermediate",
      },
      {
        id: 3,
        skill: "Bootstrap",
        proficiency: "Basic",
      },
      {
        id: 4,
        skill: "Tailwind",
        proficiency: "Basic",
      },
      {
        id: 5,
        skill: "JavaScript",
        proficiency: "Intermediate",
      },
      {
        id: 6,
        skill: "React",
        proficiency: "Basic",
      },
      {
        id: 7,
        skill: "GitHub",
        proficiency: "Basic",
      },
      {
        id: 8,
        skill: "Figma",
        proficiency: "Basic",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    tSkills: [
      {
        id: 1,
        skill: "PHP",
        proficiency: "Basic",
      },
      {
        id: 2,
        skill: "Laravel",
        proficiency: "Basic",
      },
      {
        id: 3,
        skill: "NodeJS",
        proficiency: "Basic",
      },
      {
        id: 4,
        skill: "MySQL",
        proficiency: "Basic",
      },
    ],
  },
];

const education = [
  {
    id: 1,
    school: "Far Eastern University",
    course: "B.S. Information Technology",
    yearStart: "2015",
    yearEnd: "2019",
  },
  {
    id: 2,
    school: "Sta. Elena Highschool",
    yearStart: "2011",
    yearEnd: "2015",
  },
];

const workExperience = [
  {
    id: 1,
    company: "VirtuallyinCredible",
    position: "Web Developer",
    dateStart: "Jun 2019",
    dateEnd: "Sep 2021",
  },
  {
    id: 2,
    company: "Corporate Innovators Baguio, Inc.",
    position: "Web Developer",
    dateStart: "Jun 2019",
    dateEnd: "Sep 2021",
  },
  {
    id: 3,
    company: "Vertiv Co.",
    position: "IT Intern",
    dateStart: "Jun 2019",
    dateEnd: "Sep 2021",
  },
  {
    id: 4,
    company: "JG Summit Holdings, Inc.",
    position: "IT Intern",
    dateStart: "Jun 2019",
    dateEnd: "Sep 2021",
  },
];

const portfolio = [
  {
    id: 1,
    title: "React",
    projects: [
      {
        id: 1,
        img: todo,
        title: "Todo App",
        siteUrl: "https://fem-todo-app-thecoderrob.netlify.app/",
        githubUrl: "https://github.com/thecoderrob/fem-todo-app",
      },
      {
        id: 2,
        img: calculator,
        title: "Calculator App w/ Themes",
        siteUrl: "https://fem-calculator-app-thecoderrob.netlify.app/",
        githubUrl: "https://github.com/thecoderrob/fem-calculator-app",
      },
      {
        id: 3,
        img: jobListing,
        title: "Job Listings w/ Filtering",
        siteUrl: "https://fem-job-listings-thecoderrob.netlify.app/",
        githubUrl: "https://github.com/thecoderrob/fem-job-listings",
      },
      {
        id: 4,
        img: advice,
        title: "Advice Generator",
        siteUrl: "https://fem-advice-generator-thecoderrob.netlify.app/",
        githubUrl: "https://github.com/thecoderrob/fem-advice-generator",
      },
    ],
  },
  {
    id: 2,
    title: "HTML & CSS",
    projects: [
      {
        id: 1,
        img: easybank,
        title: "Easybank Landing Page",
        siteUrl: "https://fem-easybank-thecoderrob.netlify.app/",
        githubUrl: "https://github.com/thecoderrob/fem-easybank",
      },
      {
        id: 2,
        img: spaceTourism,
        title: "Space Tourism",
        siteUrl: "https://fem-space-tourism-thecoderrob.netlify.app/",
        githubUrl: "https://github.com/thecoderrob/fem-space-tourism",
      },
      {
        id: 3,
        img: blogr,
        title: "Blogr Landing Page",
        siteUrl: "https://fem-blogr-thecoderrob.netlify.app/",
        githubUrl: "https://github.com/thecoderrob/fem-blogr-landing-page",
      },
    ],
  },
];

const certificates = [
  {
    id: 1,
    title: "Advanced React",
    subtitle: "2022",
    link: "https://drive.google.com/file/d/1xmh1BeUr1dIKbYR1BBHTYQ9DB1DwhkKz/view?usp=sharing",
    logo: logoMeta,
  },
  {
    id: 2,
    title: "React Basics",
    subtitle: "2022",
    link: "https://drive.google.com/file/d/1f-xvSEEaP8uHYfF42HUe576A3fAwKCoN/view?usp=sharing",
    logo: logoMeta,
  },
  {
    id: 3,
    title: "Programming with Javascript",
    subtitle: "2022",
    link: "https://drive.google.com/file/d/1f7KC3jikMEv8nWt0erLtmSDpECsiRPLA/view?usp=sharing",
    logo: logoMeta,
  },
  {
    id: 4,
    title: "HTML and CSS in depth",
    subtitle: "2022",
    link: "https://drive.google.com/file/d/10NzI_jcAZktxz0BZJuJ89-EemZHTvKSA/view?usp=sharing",
    logo: logoMeta,
  },
  {
    id: 5,
    title: "Advanced Styling w/ Responsive Design",
    subtitle: "2022",
    link: "https://drive.google.com/file/d/1S5So9gxO7BzTskwqMnlu_DJUsMpElhwR/view?usp=sharing",
    logo: logoUM,
  },
  {
    id: 6,
    title: "Principles of UX/UI",
    subtitle: "2022",
    link: "https://drive.google.com/file/d/1lh3EayMTajlBtyVniNAvOfrZBGx2tPut/view?usp=sharing",
    logo: logoMeta,
  },
  {
    id: 7,
    title: "Version Control",
    subtitle: "2022",
    link: "https://drive.google.com/file/d/1IkA3JA216ugXsSBHLzklMKLorE-2uAzr/view?usp=sharing",
    logo: logoMeta,
  },
  {
    id: 8,
    title: "Intro to Web Development",
    subtitle: "2022",
    link: "https://drive.google.com/file/d/1OYm_kinAi3LhEseVD5T64nbCmlC6B15B/view?usp=sharing",
    logo: logoMeta,
  },
];

const contactInfo = [
  {
    id: 1,
    title: "Email",
    logo: "bx bx-mail-send",
    data: "rmd.regodon@gmail.com",
  },
  {
    id: 2,
    title: "SMS",
    logo: "bx bx-mobile-alt",
    data: "+63-977-442-4520",
  },
  {
    id: 3,
    title: "SMS",
    logo: "bx bxl-messenger",
    data: "rdregodon",
  },
];

const socials = [
  {
    id: 1,
    icon: "uil uil-facebook-f",
    link: "https://www.facebook.com/rdregodon",
  },
  {
    id: 2,
    icon: "uil uil-twitter",
    link: "https://twitter.com/robinregodon",
  },
  {
    id: 3,
    icon: "uil uil-instagram",
    link: "https://www.instagram.com/robinregodon/",
  },
];

export {
  navLinks,
  skills,
  education,
  workExperience,
  portfolio,
  certificates,
  contactInfo,
  socials,
};
