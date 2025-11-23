const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    {text: "Ideas", imgPath: "/images/ideas.svg"},
    {text: "Concepts", imgPath: "/images/concepts.svg"},
    {text: "Designs", imgPath: "/images/designs.svg"},
    {text: "Code", imgPath: "/images/code.svg"},
    {text: "Ideas", imgPath: "/images/ideas.svg"},
    {text: "Concepts", imgPath: "/images/concepts.svg"},
    {text: "Designs", imgPath: "/images/designs.svg"},
    {text: "Code", imgPath: "/images/code.svg"},
];

const counterItems = [
    {value: 15, suffix: "+", label: "Years of Experience"},
    {value: 200, suffix: "+", label: "Satisfied Clients"},
    {value: 108, suffix: "+", label: "Completed Projects"},
    {value: 90, suffix: "%", label: "Client Retention Rate"},
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Hadid consistently delivered high-quality fullstack solutions, from designing application architecture to building reliable backend services and scalable frontend features. His structured approach, strong debugging skills, and collaboration across teams made him a key contributor in improving system stability and overall product quality.",
        imgPath: "/images/fifgroup-logo.png",
        logoPath: "/images/fifgroup-logo.png",
        title: "Full Stack Developer",
        date: "May 2025 – Present",
        location: "FIFGROUP – Jakarta, Indonesia",
        responsibilities: [
            "Designed application architecture, including backend service structure and database schema (PostgreSQL).",
            "Created detailed application flow and technical specifications prior to development.",
            "Developed backend services using Spring Boot 3 with PostgreSQL for efficient data management.",
            "Implemented frontend features using Angular TypeScript v20, ensuring responsive and maintainable UI components.",
            "Wrote and maintained unit tests for backend (JUnit, Mockito) and frontend (Jasmine).",
            "Collaborated with QA and Business Analysts to validate requirements and ensure product quality.",
            "Supported UAT and production deployments within the release cycle.",
            "Performed error tracing and debugging in OpenShift (OCP) environments to maintain application reliability.",
            "Handled bug fixing, optimization, and continuous improvements for application performance.",
            "Worked in an Agile/Scrum environment, participating in sprint planning, daily stand-ups, and retrospectives."
        ]
    },
    {
        review: "Hadid demonstrated strong frontend engineering skills by delivering critical features for Kopra By Mandiri. His ability to lead feature development, collaborate across teams, and ensure smooth API integration made him a key contributor to improving the platform’s usability and performance.",
        imgPath: "/images/bank-mandiri-logo.png",
        logoPath: "/images/bank-mandiri-logo.png",
        title: "Frontend Angular Developer",
        date: "February 2024 – December 2024",
        location: "PT Bank Mandiri Tbk – Jakarta, Indonesia",
        responsibilities: [
            "Contributed to the development of Kopra By Mandiri, a microfrontend-based platform, focusing on the Value Chain channel using Angular TypeScript, Tailwind CSS, and internal libraries.",
            "Developed features for Account Payable and Account Receivable, including transactional capabilities such as Invoice Submission (manual input and file upload) and Payment Instruction.",
            "Led the development of the Supplier Onboarding feature, improving supplier registration and interaction with the platform.",
            "Worked on Reporting features to deliver seamless user experience and efficient data presentation.",
            "Implemented UI elements from Figma designs in collaboration with UI/UX and AD teams.",
            "Collaborated closely with Backend teams to integrate RESTful APIs following Confluence documentation.",
            "Worked with QA and PO to prioritize, troubleshoot, and resolve functional and UI-related issues.",
            "Created unit tests for Angular applications using Jasmine to ensure stability and code quality.",
            "Participated in code reviews, submitting pull requests via Bitbucket and reviewing peers’ submissions.",
            "Applied clean code practices and used SonarQube to maintain high code quality standards.",
            "Optimized UI components for modularity, reusability, and ease of maintenance.",
            "Contributed to UAT, BETA, and Production deployments, resolving bugs and refining features.",
            "Ensured application performance met business standards through continuous improvements.",
            "Migrated Angular application from version 16 to version 18."
        ]
    },
    {
        review: "Hadid delivered thorough and reliable performance testing for multiple Mandiri Cash Management platforms. His analytical approach, detailed reporting, and strong collaboration with technical teams helped ensure system stability and performance readiness across environments.",
        imgPath: "/images/bank-mandiri-logo.png",
        logoPath: "/images/bank-mandiri-logo.png",
        title: "Performance Test Engineer",
        date: "January 2023 – December 2023",
        location: "PT Bank Mandiri Tbk – Jakarta, Indonesia",
        responsibilities: [
            "Conducted performance testing for Mandiri Cash Management (MCM) web applications based on scenarios defined by the PO team.",
            "Executed performance tests across multiple MCM platforms, including MCM KLN Hongkong, MCM Kopra Cash, and MCM BI FAST.",
            "Collaborated with the Integrator team to ensure test scenarios were aligned with application specifications.",
            "Prepared detailed testing reports for review by the Project team and Managers.",
            "Presented test findings and recommendations to project teams and management.",
            "Created documentation for migration requirements, supporting smooth migration planning and execution.",
            "Utilized VuGen and LoadRunner for performance testing to evaluate scalability, stability, and response times.",
            "Identified bottlenecks and contributed to optimizing application performance.",
            "Assisted backend engineers in tracing and diagnosing errors identified during performance tests.",
            "Analyzed API performance to identify slow endpoints, recommending query optimizations for improved efficiency."
        ]
    }
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};