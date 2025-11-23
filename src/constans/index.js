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
        name: "Endo Kersandona",
        mentions: "Endo Kersandona (LinkedIn)",
        review:
            "I had the pleasure of working with Hadid on Kopra by Mandiri project, and I couldn't be more impressed with their technical skills and dedication. His ability to translate complex requirements into efficient code is exceptional. Hadid consistently goes above and beyond, demonstrating a strong commitment to delivering high quality results on time.\n" +
            "What truly stands out is his proactive approach to problem solving and collaboration. He is always open to feedback and has a knack for turning challenges into opportunities for innovation. I highly recommend Hadid for any team looking for a talented and reliable developer.",
        imgPath: "/images/man.png",
    },
    {
        name: "Arif Firmansyah",
        mentions: "Arif Firmansyah (LinkedIn)",
        review:
            "Hadid demonstrates exceptional determination and energy in driving projects to completion. His focus on developing front-end logic and UI, analyzing problems, and tackling them with innovative solutions showcases his excellence as a frontend developer. Combined with his outstanding technical skills, Hadid has been instrumental in successfully delivering projects. Thank you, Hadid, for your dedication and impact!",
        imgPath: "/images/man.png",
    },
    {
        name: "Muhammad Hamdi Sukriyandi",
        mentions: "Muhammad Hamdi Sukriyandi (LinkedIn)",
        review:
            "Hadid is highly recommended, i'd like to work with him again, he always does his work very well. he can learn and adapt quickly with new frontend programming language.",
        imgPath: "/images/man.png",
    },
    {
        name: "Otto Tirtayasa Akbar",
        mentions: "Otto Tirtayasa Akbar (LinkedIn)",
        review:
            "I had the pleasure of working with him for 10 months at Bank Mandiri, where he excelled as a Frontend Developer specializing in Angular. He has an exceptional ability to create responsive, functional, and visually appealing user interfaces. He is detail-oriented, quick to understand project requirements, and adept at solving technical challenges with elegant solutions. Working with him has always been a seamless experience, thanks to his excellent communication skills. If you are looking for a reliable and talented Frontend Developer, I highly recommend him.",
        imgPath: "/images/man.png",
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