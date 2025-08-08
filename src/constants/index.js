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
    ts,
    crunch
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
      title: "Full-stack Developer",
      icon: web,
    },
    {
      title: "App Developer",
      icon: web,
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
      title: "iOS Tech Fellow",
      company_name: "CodePath",
      iconBg: "#800080",
      date: "June 2025-August 2025",
      points: [
        "Mentored 20 students in iOS breakout sessions, improving collaboration and boosting project completion by 30%",
        "Resolved technical questions on Swift, Xcode, and UIKit to support student learning and project development",
        "Collaborated with staff to refine leadership and facilitation, raising student engagement by 65%"
      ]
    },
    {
      title: "Student Ambassador",
      company_name: "CodePath",
      iconBg: "#800080",
      date: "May 2025-Present",
      points: [
        "Designed NYU course marketing plans via Google Docs and outreach, increasing CodePath summer applications by 50%",
        "Coordinated virtual puzzle event using Figma and Zoom, attracting 50+ attendees and boosting visibility",
        "Targeted faculty and students with flyers and emails, increasing application conversion rate by 30% "
      ]
    },
    {
      title: "Co-Director",
      company_name: "HackNYU",
      iconBg: "#800080",
      date: "April 2025-Present",
      points: [
        "Promoted recruitment through mailing lists and flyers, growing HackNYU membership by 40% in one semester",
        "Initiated outreach to companies via LinkedIn and email, securing 5 new partnerships for events and sponsorships",
      ]
    },
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
      title: "Tech Product Manager",
      company_name: "HackNYU Organizing Team",
      iconBg: "#800080",
      date: "April 2024-April 2025",
      points: [
        "Led Agile sprints using GitHub Projects to build HackNYU’s platform, allowing 1,000+ users to access event logistics",
        "Implemented GitHub Actions workflows to deploy PR previews, streamlining live testing and code reviews by 40%",
        "Engineered accessible, responsive UI from Figma designs, improving user experience for 500+ monthly users"
      ]
    },
    {
      title: "General Engineering Teaching Assistant",
      company_name: "NYU Tandon School of Engineering",
      iconBg: "#800080",
      date: "August 2023-April 2025",
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
        "Authored comprehensive documentation and code comments to support future maintenance and onboarding"
      ],
    },
    {
      title: "Communications Manager, Developer",
      company_name: "BUGS@NYU",
      iconBg: "#800080",
      date: "January 2023-April 2025",
      points: [
        "Authored Markdown docs on NYU’s CS community, improving accessibility and engagement among 100+ members",
        "Orchestrated targeted social media campaigns, boosting club membership by 25%",
        "Designed graphics and promotional content, increasing event RSVPs by 30% and improving brand visibility"
      ],
    }
  ];
  
  const projects = [
    {
      name: "Yourway",
      description:
        "Yourway is a mobile app designed to fit your schedule, tracking the subway lines that you ride the most",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "mta api",
          color: "pink-text-gradient",
        },
      ],
      image: yourway,
    },
    {
      name: "Crunch",
      description:
        "Crunch is a web app that helps you manage your diet.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "postgres",
          color: "pink-text-gradient",
        },
      ],
      image: crunch,
    },
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
        {
          name: "ajax",
          color: "orange-text-gradient",
        },
      ],
      image: oogle,
      source_code_link: "https://github.com/rilieo/oogle-unphotos"
    },
    {
      name: "NYC Bathrooms",
      description:
        "IOS 17 app that tracks bathrooms in NYC",
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
        "Commuter Clock provides a convenient method to personalize their commute in NYC",
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
  