import project1 from "../assets/projects/The-Ecommerce-Business-Model-Explained.jpg";
import project2 from "../assets/projects/NASA API Project.png";
import project3 from "../assets/projects/e-learning.jpg";
import project4 from "../assets/projects/virtual try on.jpg";
import project5 from "../assets/projects/customer care.png";

export const HERO_CONTENT = `Passionate about technology, problem-solving, and building impactful solutions for the future.`;

export const ABOUT_TEXT_1 = `I am a passionate and driven final-year Software Engineering student at the Sri Lanka Institute of Information Technology (SLIIT). My academic journey has been centered around full-stack development, cloud integration, and software engineering principles. With a keen interest in technology, I have developed a solid foundation in programming languages and frameworks, including Java, Python, C#, React, Node.js, Flutter, and MongoDB.`;
export const ABOUT_TEXT_2 = `I am constantly exploring new tools and technologies to enhance my skills and contribute to the development of innovative software solutions. My technical expertise includes web development, mobile app development, cloud technologies, and software engineering best practices. I am excited to bring my skills and knowledge into real-world projects that will challenge me and help me grow further in the software development field.`;

export const EXPERIENCES = [
  {
    year: "2024 February - Present",
    role: "Undergrdauate Trainee - Delivery - IFS Cloud Upgrade Support",
    company: "IFS R&D International (Pvt) Ltd.",
    description: `Resolved over 50 customer cases across the Delivery vertical teams, ensuring smooth upgrades and addressing client concerns efficiently. I actively collaborated with team members using platforms like Azure and ServiceNow to streamline workflows and improve support outcomes. Additionally, I authored 8 comprehensive knowledge base articles to support team operations and provide long-term value to the organization.`,
    technologies: [
      "Azure",
      "JIRA",
      "ServiceNow",
      "IFS Project Explorer",
      "PL/SQL Developer",
      "Developer Studio",
    ],
  },
  {
    year: "2013 july - 2023 December",
    role: "Software Engineer Intern",
    company: "WSO2 (Pvt) Ltd",

    description: `Contributed to the development of internal applications aimed at improving employee productivity and operational efficiency. I worked on the Carpooling App, facilitating seamless communication between drivers and passengers, and the Sales Pitstop web application, enhancing functionality for the sales team. Both applications were built with modern frameworks and deployed via the Choreo platform.`,
    technologies: [
      "React.js",
      "TypeScript",
      "Ballerina",
      " Material-UI (MUI)",
      "Choreo",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A client-server e-commerce system with a web app for back-office functions and an Android app for customers. It includes product management, order processing, and customer account handling, using MongoDB for data storage and IIS for hosting.",
    technologies: ["ASP .NET", "React", "Mongo DB", "Bootstrap", "Kotlin"],
    type: "web",
    github:
      "https://github.com/Sujitha1221/EAD-Client-Server-E-commerce-System",
  },
  {
    title: "Web Application for Accessing NASA's Astronomical Data and Imagery",
    image: project2,
    description:
      "Astro Data Hub is a web application that leverages NASA APIs to provide users with various astronomical data and imagery. Users can register an account, log in, and access different features of the application including Astronomy Picture of the Day (APOD), Mars Rover Photos, EPIC (Earth Polychromatic Imaging Camera), and Earth APIs.",
    technologies: ["React", "Tailwind CSS", "Mongo DB", "Node", "Express"],
    type: "web",
    github: "https://github.com/Sujitha1221/NASA-API-Assignment",
  },
  {
    title: "Education Platform with RESTful API and Secure User Management",
    image: project3,
    description:
      "This project is an education platform that manages courses, user registration, payment enrolment, and notifications. It ensures secure authentication and authorization for user data protection and integrates SMS and email for communication.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Docker Compose",
      "Node",
      "MongoDB",
    ],
    type: "web",
    github:
      "https://github.com/Sujitha1221/Educational-Platform-for-Online-Learning",
  },
  {
    title: "Eyewear Virtual Try-On Application",
    image: project4,
    description:
      "This application is designed for an eyewear shop, offering a virtual try-on feature that allows users to browse and select glasses, then use their device's camera to visualize how different styles look on them.",
    technologies: ["React", "Tailwind CSS", "Python", "Node", "MongoDB"],
    type: "web",
    github: "https://github.com/Sujitha1221/Eye-wear-shop",
  },
  {
    title: "Customer Care Management System for Electronics Supply Shop",
    image: project5,
    description:
      "This application manages customer care services for an electronics supply shop. It includes features for admin and user data management, electronic product management, and handling FAQs and reviews. ",
    technologies: [
      "HTML",
      "CSS",
      "Java",
      "JavaScript",
      "Apache Tomcat",
      "My SQL",
    ],
    type: "web",
    github:
      "https://github.com/Sujitha1221/Web-application-for-Online-Customer-Care-System",
  },
  {
    title: "Eyewear Virtual Try-On Application",
    image: project4,
    description:
      "This application is designed for an eyewear shop, offering a virtual try-on feature that allows users to browse and select glasses, then use their device's camera to visualize how different styles look on them.",
    technologies: ["React", "Tailwind CSS", "Python", "Node", "MongoDB"],
    type: "mobile",
    github: "https://github.com/Sujitha1221/Eye-wear-shop",
  },
  {
    title: "Eyewear Virtual Try-On Application",
    image: project4,
    description:
      "This application is designed for an eyewear shop, offering a virtual try-on feature that allows users to browse and select glasses, then use their device's camera to visualize how different styles look on them.",
    technologies: ["React", "Tailwind CSS", "Python", "Node", "MongoDB"],
    type: "mobile",
    github: "https://github.com/Sujitha1221/Eye-wear-shop",
  },
  {
    title: "Eyewear Virtual Try-On Application",
    image: project4,
    description:
      "This application is designed for an eyewear shop, offering a virtual try-on feature that allows users to browse and select glasses, then use their device's camera to visualize how different styles look on them.",
    technologies: ["React", "Tailwind CSS", "Python", "Node", "MongoDB"],
    type: "mobile",
    github: "https://github.com/Sujitha1221/Eye-wear-shop",
  },
];

export const CONTACT = {
  address:
    "30/36, 3/1, Charles Apartment, De Silva Cross Road, Kalubowila, Colombo.",
  phoneNo: "+94 74 206 5382",
  email: "sujithasrikanthan@gmail.com",
};
