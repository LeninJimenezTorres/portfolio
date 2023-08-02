import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    postman,

    cpi,
    cendiavia,
    cisco,
    fiverr,
    freecodecamp,
    hackmakers,
    indomodesign,
    ledfashion,

    linux,
    after,
    photoshop,
    illustrator,
    premier,
    blender,
    aws,
    androi,
    csharp,
    effecthouse,
    pytho,
    php,
    symfony,
    flask,
    express,
    next,
    gcloud,
    ios,
    swift,
    unity,
    woo,
    wordpress,

    cpifull,
    dogwolrd,
    gandalf,
    fullindomo,
    pokemonpedia,
    ledfashionfull,
    scol,
    survey,
    twitterdownloader,
    espe,
    oci,
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
      title: "iOS Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "React Native Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const languajes = [
    {
      name:"Javascript",
      icon: javascript,
    },
    {
      name:"Typrescript",
      icon: typescript,
    },
    {
      name:"Swift",
      icon: swift,
    },
    {
      name:"Python",
      icon: pytho,
    },
    {
      name:"Php",
      icon:php,
    },
    {
      name:"C#",
      icon: csharp,
    },
    {
      name:"Html",
      icon: html,
    },
    {
      name:"Css",
      icon: css,
    },
  ];

  const frameworks = [
    {
      name:"React",
      icon: reactjs,
    },
    {
      name:"Express",
      icon: express,
    },
    {
      name:"Next",
      icon: next,
    },
    {
      name:"Flask",
      icon: flask,
    },
    {
      name:"Symfony",
      icon: symfony,
    },
  ];

  const design = [
    {
      name:"Blender",
      icon: blender,
    },
    {
      name:"Figma",
      icon: figma,
    },
    {
      name:"Photoshop",
      icon: photoshop,
    },
    {
      name:"Illustrator",
      icon: illustrator,
    },
    {
      name:"Premier Pro",
      icon: premier,
    },
    {
      name:"After Effects",
      icon: after,
    },
  ];
  
  const servicios = [
    {
      name:"AWS",
      icon: aws,
    },
    {
      name:"Google Cloud",
      icon: gcloud,
    },
    {
      name:"Docker",
      icon: docker,
    },
    {
      name:"Git",
      icon: git,
    },
    {
      name:"Postman",
      icon: postman,
    },
  ];
  
  const platforms = [
    {
      name:"Unity",
      icon: unity,
    },
    {
      name:"WordPress",
      icon: wordpress,
    },
    {
      name:"E-commerce",
      icon: woo,
    },
    {
      name:"Effect House",
      icon: effecthouse,
    },
  ];

  const libraries = [
    {
      name:"Taildwindcss",
      icon: tailwind,
    },
    {
      name:"Three.JS",
      icon: threejs,
    },
    {
      name:"Redux",
      icon: redux,
    },
  ];

  const systems = [
    {
      name:"Linux",
      icon: linux,
    },
    {
      name:"iOS",
      icon: ios,
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
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Laboratory Integral Pathology Center",
      icon: cpi,
      iconBg: "#383E56",
      date: "Feb 2021 - Dec 2021",
      points: [
        "Web application development to solve the problem of laboratory results delivery during the pandemic. A CRUD system was developed based on Symfony - PHP with administrator rights and SQL database.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Hackmakers FormulaAI Hack",
      icon: hackmakers,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Global Hackathon organized by Hackmakers for FormulaAI. The challenge was to develop an augmented reality mobile app innovating the way in which users interact with vehicle data during races. The purpose of the event was to promote Oracle's new cloud services which were presented at the event, so the challenge for the developers was to measure their learning capacity and develop the challenge under pressure. I was in charge of the backend development, management of the cloud services, manipulation of the remote Json databases and deployment of the rest api with the consumption information for the ap.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Cendiavia",
      icon: cendiavia,
      iconBg: "#383E56",
      date: "Jan 2022 - Aug 2022",
      points: [
        "Development of some services to the medical center",
        "Reduced form filling from 10 min to less than 1 min, automating the filling of Ministry of Health forms with an application that uses the system's internal records and overlays them on the required form adapted to various formats, text styles, distribution and text structure. This app was based on Symfony-PHP.",
        "Optimized the inpatient registration process by 36% by eliminating the need to manually search for a photo in the patient's records, using an application that recognizes the patient's face in their clinical history. This application is based on Python-Django and uses the OpenCV computer vision library.",
      ],
    },
    {
      title: "Full-stack Developer",
      company_name: "IndomoDesign",
      icon: indomodesign,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Jun 2023",
      points: [
        "Development of architecture studio Web App based on ReactJS and NodeJS incorporates 3D renderization with Three.js and soon an e-commerce using Wordpress and Amazon Web Services.",
        "Increased sales by 17% due to increased potential customer interest in interacting with 3D rendering elements incorporated with Three.js library.",
      ],
    },
    {
      title: "Software Developer Freelance",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Present",
      points: [
        "Development of Mobile apps using React.JS and Swift for iOS.",
        "Webapps development.",
        "3D models design using Blender.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      title: "IndomoDesign",
      url:"https://indomodesign.com",
      image:fullindomo,
      description: "",
    },
    {
      title: "LedFashion",
      url:"https://ledfashion-ec.com",
      image:ledfashionfull,
      description: "",
    },
    {
      title: "Twitter Video Downloader",
      url:"https://leninjimeneztorres.github.io/VideoTwitterDownloader/",
      image:twitterdownloader,
      description: "",
    },
    
    {
      title: "Clinical Laboratory CPI",
      url:"https://laboratoriocpi.com/",
      image:cpifull,
      description: "",
    },
    
    {
      title: "PokemonApp",
      url:"https://leninjimeneztorres.github.io/PokemonApp/",
      image:pokemonpedia,
      description: "",
    },
    {
      title: "Dog World",
      url:"https://leninjimeneztorres.github.io/Dog-World/",
      image:dogwolrd,
      description: "",
    },
    {
      title: "Survey template",
      url:"https://leninjimeneztorres.github.io/Survey-freeCodeCamp-Frontend/",
      image:survey,
      description: "",
    },
    {
      title: "Gandalf's heart",
      url:"https://leninjimeneztorres.github.io/GandalfsHeart/",
      image:gandalf,
      description: "",
    },
    
  ];

  const projects2 = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

    
  const credentials = [
    {
      title: "Mechatronic Engineer",
      url:"https://leninjimeneztorres.github.io/credentials/#/engineering",
      image: espe,
      description: "",
    },
    {
      title: "JavaScript Algorithms and Data Structures - freeCodeCamp",
      url:"https://www.freecodecamp.org/certification/lenin_jimenez/javascript-algorithms-and-data-structures",
      image:freecodecamp,
      description: "",
    },
    {
      title: "Hackmakers #FormulaAI Hack 2022: Honorable Mentions Certificate",
      url:"https://au.badgr.com/public/assertions/tbLk44dBQ_GTwRo1KRsNBQ",
      image:hackmakers,
      description: "",
    },
    
    {
      title: "Hackmakers #FormulaAI Hack 2022: Participant Certificate",
      url:"https://au.badgr.com/public/assertions/GdlyHo6MT0aKNYi_XLGHIg",
      image:hackmakers,
      description: "",
    },
    
    {
      title: "OCI Foundations 2021 Associate [1Z0-1085-21] - Oracle",
      url:"https://catalog-education.oracle.com/pls/certview/sharebadge?id=57DA537F51BFDC25313319B550020AE6EB1690C8598101BCDB9411E030DE686A",
      image:oci,
      description: "",
    },
    {
      title: "Responsive Web Design - freeCodeCamp",
      url:"https://www.freecodecamp.org/certification/lenin_jimenez/responsive-web-design",
      image:freecodecamp,
      description: "",
    },
    {
      title: "Cisco Certified Network Associate - CCNA - Cisco",
      url:"https://www.credly.com/badges/3853b4bc-3d93-4daf-aa81-fafe6e164b44",
      image:cisco,
      description: "",
    },
  ];

  
  export { services, technologies, experiences, testimonials, projects, languajes, libraries, design, platforms, servicios, frameworks, systems, credentials };