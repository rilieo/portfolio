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
    commuter,
    music
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
      id: "contact",
      title: "Contact",
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
    }
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "3Arb Capital",
      iconBg: "#383E56",
      date: "June 2023-Present",
      points: [
        "Optimized the exchange of information between multiple servers by using protocol buffers",
        "Integrated gRPC with protocol buffers to facilitate easy client-server communication across multiple languages",
      ],
    },
  ];
  
  const projects = [
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
    },
    {
      name: "Music Player",
      description:
        "Web application that enables users to play selected songs with a personalized background",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: music,
      source_code_link: "https://github.com/rilieo/music-player",
    },
  ];
  
  export { services, technologies, experiences, projects };
  