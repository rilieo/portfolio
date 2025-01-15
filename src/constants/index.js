import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    threejs,
    python,
    swift,
    commuter,
    map,
    oogle,
    yourway,
    ts
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: ts
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "swift",
      icon: swift,
    }
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "3Arb Capital",
      iconBg: "#800080",
      date: "June 2024-August 2024",
      points: [
        "Automated crypto trading by using Dagster and Python to generate YAML files, reducing market onboarding time by 20%",
        "Developed data pipelines for market trade data and used Streamlit to identity patterns for optimal buy and sell times",
        "Refactored Protobuf enums to Python strings, saving 10+ hours in manual code edits and dependency upgrades"
      ]
    },
    {
      title: "Tech Director",
      company_name: "HackNYU Organizing Team",
      iconBg: "#800080",
      date: "September 2023-Present",
      points: [
        "Led a team of 5 and oversaw the development of HackNYU’s main platform, serving 1,000+ monthly active users",
        "Implemented GitHub Actions to deploy PR previews, accelerating live testing by 40% and streamlining code reviews",
        "Deployed websites and a Discord bot to a DigitalOcean virtual machine and ensured 99% uptime for all services"
      ]
    },
    {
      title: "General Engineering Teaching Assistant",
      company_name: "NYU Tandon School of Engineering",
      iconBg: "#800080",
      date: "August 2023-Present",
      points: [
        "Provided guidance and support to at least 15 students during lab sessions, fostering an environment conducive to learning",
        "Clarified concepts, troubleshooted technical issues, and offered assistance with experiments or projects related to Arduino programming, digital logic, etc"
      ]
    },
    {
      title: "Software Engineer Intern",
      company_name: "3Arb Capital",
      iconBg: "#800080",
      date: "June 2023-August 2023",
      points: [
        "Supported migration from Protobuf to JSON, reducing code maintenance efforts and debugging times by 60%",
        "Designed a Redis Python workflow to handle real-time JSON updates and increase flexibility in dynamic data handling",
        "Streamlined the deployment process using Docker, cutting deployment times by 30%"
      ],
    },
    {
      title: "Communications Manager, Developer",
      company_name: "BUGS@NYU",
      iconBg: "#800080",
      date: "January 2023-Present",
      points: [
        "Authored Markdown docs on NYU’s CS community, improving accessibility and engagement among 100+ members",
        "Orchestrated targeted social media campaigns, boosting club membership by 25%",
        "Designed graphics and promotional content, increasing event RSVPs by 30% and improving brand visibility"
      ],
    }
  ];
  
  const projects = [
    {
      name: "Oogle Unphotos",
      description:
        "Oogle Unphoto is a web app that stores the photos that you upload...but life isn't always fair",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: oogle,
      source_code_link: "https://github.com/rilieo/oogle-unphotos"
    },
    {
      name: "Yourway",
      description:
        "Yourway is designed to fit your schedule, tracking the subway lines that you ride the most",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "MTA API",
          color: "pink-text-gradient",
        },
      ],
      image: yourway,
      source_code_link: "https://github.com/rilieo/yourway"
    },
    {
      name: "NYC Bathrooms",
      description:
        "IOS 17 app that tracks the bathrooms in NYC using MapKit",
      tags: [
        {
          name: "swift",
          color: "blue-text-gradient",
        },
        {
          name: "mapkit",
          color: "green-text-gradient",
        },
        {
          name: "firestore",
          color: "pink-text-gradient",
        },
      ],
      image: map,
      source_code_link: "https://github.com/rilieo/nyc-bathrooms",
    },
    {
      name: "Commuter Clock",
      description:
        "Web application that allows users to add, update, and delete a setting, providing a convenient method to personalize their method of travel",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: commuter,
      source_code_link: "https://github.com/rilieo/commuter-clock-web",
    }
  ];
  
  export { services, technologies, experiences, projects };
  