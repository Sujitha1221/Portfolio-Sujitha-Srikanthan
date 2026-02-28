import project1 from "../assets/projects/ecommerce marketing.webp";
import project2 from "../assets/projects/nasa.webp";
import project3 from "../assets/projects/e-learning.jpg";
import project4 from "../assets/projects/eye-wear.jpg";
import project5 from "../assets/projects/customer service.jpg";
import project6 from "../assets/projects/smart_farm.jpg";
import project7 from "../assets/projects/health.avif";
import project8 from "../assets/projects/procurement.jpg";
import project9 from "../assets/projects/quiz platform.jpg";
import project10 from "../assets/projects/nature ar scene.jpg";
import project11 from "../assets/projects/chatbot.jpg";
import project12 from "../assets/projects/microservice.jpg";
import project13 from "../assets/projects/phone shop.jpg";

export const HERO_CONTENT = `Passionate about technology, problem-solving, and building impactful solutions for the future.`;

export const ABOUT_TEXT_1 = `I'm a Software Engineer at IFS R&D International Pvt Ltd and a final-year Software Engineering student at the Sri Lanka Institute of Information Technology (SLIIT). My journey in tech has been fueled by a passion for building scalable, innovative, and impactful software solutions.`;
export const ABOUT_TEXT_2 = `With a strong foundation in full-stack development, cloud integration, and software engineering best practices, I’ve gained hands-on experience with a diverse tech stack, including Java, Python, C#, React, Node.js, Flutter, and MongoDB. I enjoy solving real-world problems through technology and thrive in environments where I can continuously learn and grow.`;
export const ABOUT_TEXT_3 = `Outside of my academic and professional work, I actively explore emerging tools and frameworks, always looking for new ways to improve code quality, performance, and user experience. I’m particularly interested in projects that push boundaries and allow me to collaborate with others to deliver meaningful solutions.`;

export const EXPERIENCES = [
  {
    year: "2025 June - Present",
    role: "Software Engineer – Engineering, Construction & Infrastructure Team",
    company: "IFS R&D International (Pvt) Ltd.",
    description: `Recently joined the Engineering, Construction, and Infrastructure team at IFS R&D. Currently gaining domain knowledge and familiarizing with the development environment, frameworks, and processes involved in delivering industry-specific solutions. Working closely with senior engineers and leads to contribute to core feature development and long-term platform improvements.`,
    technologies: ["IFS Cloud", "Aurena", "C#", ".NET", "PL/SQL"],
  },
  {
    year: "2024 February - 2025 February",
    role: "Undergraduate Trainee - Delivery - IFS Cloud Upgrade Support",
    company: "IFS R&D International (Pvt) Ltd.",
    description: `Experienced in managing database upgrade-related cases, lifecycle experience cases, build-place customer issues, and Oracle CPU patch merge tickets with a focus on customer satisfaction. Skilled in using tools like Azure Pipelines, ServiceNow, Jira, and IFS Project Explorer to resolve cases efficiently. Authored eight knowledge base articles to support team operations. Completed Software Engineer training in the Aurena framework, C#, .NET Framework, and PL/SQL, with hands-on experience in PL/SQL Developer and Developer Studio.`,
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
    type: "web",
    title: "LLM-Based Adaptive Quiz Platform for A/L Biology",
    image: project9,
    description: `A full-stack AI-powered quiz system tailored for A/L Biology students. It dynamically generates and adapts MCQs using LLMs, IRT, and RAG. Features include topic-based quizzes, performance analytics, semantic filtering to avoid duplicates, and AI-generated answer explanations to reinforce learning.`,
    github:
      "https://github.com/Sujitha1221/LLM-Based-Adaptive-Quiz-Platform-for-A-L-Biology",
    technologies: [
      "React.js",
      "FastAPI",
      "MongoDB",
      "LLaMA 2",
      "FAISS",
      "Sentence Transformers",
    ],
  },
  {
    type: "web", // or "ai" or "education"
    title: "CTSE Lecture Chatbot (Flan-T5 + RAG)",
    image: project11,
    description: `An academic chatbot for the CTSE (Current Trends in Software Engineering) module that answers both free-text and multiple-choice questions. Built using a Retrieval-Augmented Generation (RAG) approach powered by FAISS semantic search and Google's Flan-T5 Large model.`,
    github: "https://github.com/Sujitha1221/CTSE-Lecture-Notes-Chatbot", // Replace with actual link
    technologies: [
      "Flan-T5 Large",
      "Sentence Transformers",
      "FAISS",
      "PyMuPDF",
      "python-pptx",
    ],
  },
  {
    type: "web",
    title:
      "Secure Cloud Deployment of a Node.js Microservice using Azure and Docker",
    image: project12, // Replace with appropriate image variable
    description: `A secure, containerized microservice for user authentication built using Node.js, Express, and MongoDB. It applies DevOps and DevSecOps best practices including JWT-based authentication, CI/CD pipelines via GitHub Actions, Docker containerization, and security scanning with Snyk. Deployed on Azure App Service.`,
    github:
      "https://github.com/Sujitha1221/CTSE-Assignment-1-User-Management-System",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Docker",
      "GitHub Actions",
      "Azure App Service",
      "Snyk",
    ],
  },
  {
    title: "iCorner - e-Commerce Web and Mobile Application",
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
    type: "web", // or "ar" if you want to create a new category
    title: "Explore & Discover: Nature AR Scene",
    image: project10, // Replace with a real image or placeholder
    description: `A marker-based WebAR experience using A-Frame and AR.js. Each printed marker triggers a unique animated 3D nature scene with positional audio and interactions like flying butterflies, jumping frogs, and more. Ideal for immersive education or themed exhibitions.`,
    github: "https://github.com/Sujitha1221/ar-nature-explorer", // Replace with your actual repo
    technologies: ["A-Frame", "AR.js", "GLTF", "WebXR", "JavaScript"],
  },
  {
    title: "LearnHub - e-Learning Platform",
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
    title: "Solar Flare - Eyewear Virtual Try-On Application",
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
    title:
      "Farm Connect - Farmer-Buyer Interaction and Product Sales Application",
    image: project6,
    description:
      "This Flutter-based application is designed to facilitate seamless interactions between farmers and buyers. Farmers can effortlessly list their products for sale, while buyers have the opportunity to place bids and make purchases directly.",
    technologies: ["Flutter", "dart"],
    type: "mobile",
    github: "https://github.com/Sujitha1221/UEE-Farm-Connect",
  },
  {
    title: "MedPro - Healthcare Mobile Application",
    image: project7,
    description:
      "This Android application is designed to provide a solution for the current economic crisis by offering users the ability to register and log in. It helps users book appointments with doctors, schedule lab tests, and purchase medicines, all from a single platform.",
    technologies: ["Kotlin"],
    type: "mobile",
    github:
      "https://github.com/Sujitha1221/MedPro-Healthcare-mobile-application",
  },
  {
    title:
      "Build Zone - Web and Mobile Applications for the Construction Industry",
    image: project8,
    description:
      "This solution includes a website for use by admins and procurement/accounting staff and a mobile app designed for site managers. The system streamlines procurement and accounting processes, enabling efficient data management and seamless communication between administrators and site managers.",
    technologies: ["React", "Tailwind CSS", "Flutter", "Node", "MongoDB"],
    type: "mobile",
    github:
      "https://github.com/Sujitha1221/Procurement-for-construction-industry",
  },
  {
    type: "web",
    title: "LuxuryX - e-Commerce Website and Web Application",
    image: project13, // Replace with appropriate image reference
    description: `A full-featured e-commerce platform built with the MERN stack. LuxuryX offers a web-based solution for managing employees, suppliers, products, customers, orders, deliveries, promotions, and finances. Designed for scalability and efficiency, it streamlines all major business operations through an integrated website and web application.`,
    github: "https://github.com/Sujitha1221/ITP-Final-Project", // Replace with actual GitHub link
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
];

export const CONTACT = {
  email: "sujithasrikanthan@gmail.com"
};
