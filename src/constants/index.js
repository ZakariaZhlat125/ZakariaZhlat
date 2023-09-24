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
    Django,
    firebase,
    Drf,
    laravel,
    vue,
    nuxt,
    python,
    php,
    boostrap,
    linux,
    Next,
    mongodb,
    git,
    figma,
    docker,
    company,
    ModrenBank, NeedJob, SocialApp, hotil,codetrip, ehealtcare,
    threejs,
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
        title: "React and Vue Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Laravel and Django",
        icon: creator,
    },
];

const technologies = [

    {
        name: "JavaScript",
        icon: javascript,
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
        name: "Django",
        icon: Django,
    },
    {
        name: "php & Laravel",
        icon: laravel,
    },
    {
        name: "git",
        icon: git,
    },

    {
        name: "Python",
        icon: python,
    },
    {
        name: "php",
        icon: php,
    },
    {
        name: "Django rest framework",
        icon: Drf,
    },
    {
        name: "Next ",
        icon: Next,
    },
    {
        name: "Vue",
        icon: vue,
    },
    {
        name: "Nuxt",
        icon: nuxt,
    },

];

const experiences = [
    {
        title: "Vue Js Developer Using Nuxt3",
        company_name: "Future Solutions",
        icon: company,
        iconBg: "#383E56",
        date: "1/8/2023 - At Now",
        points: [
            "I was responsible for developing and maintaining web applications using the Nuxt 3 framework.",
            " My key responsibilities included designing and implementing user interfaces, developing and integrating APIs, and ensuring the performance, scalability, and security of the applications.",
            "I possess expertise in JavaScript, HTML, CSS, and various front-end development libraries and frameworks.",
        ],
    },
    {
        title: "Developer and Trainer - Project Code Trip,",
        company_name: " Jci Latakia",
        icon: company,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developer and Trainer for the 'Project Code Trip' at JCI Latakia, I played a pivotal role in the successful creation and implementation of this innovative initiative.",
            " This project was developed using Laravel, a powerful PHP framework known for its versatility and scalability.",
        ],
    },
    {
        title: "React Developer",
        company_name: "Nine",
        icon: company,
        iconBg: "#383E56",
        date: "1/2/2023 — 1/8/2023",
        points: [
            "I was responsible for developing and maintaining web applications using the React framework.",
            " My key responsibilities included designing and implementing user interfaces, developing and integrating APIs, and ensuring the performance, scalability, and security of the applications.",
            "I possess expertise in JavaScript, HTML, CSS, and various front-end development libraries and frameworks, including React, Next, Redux, and Bootstrap and Tailwind CSS .",
            " Additionally, I have experience in using various development tools such as Git, Webpack, and Babel."
        ],
    },
    {
        title: "Django Freelancer",
        company_name: "Freelancer",
        icon: company,
        iconBg: "#383E56",
        date: "1/10/2020 — 30/12/2023",
        points: [
            "have worked on multiple web development projects using the Django framework.",
            " My responsibilities included building and maintaining web applications, creating and managing databases, and implementing front-end designs.",
            "I have expertise in creating RESTful APIs, integrating third-party services, and implementing security measures such as user authentication and authorization. Additionally, I have experience in deploying Django applications to various hosting platforms, including Heroku .",
            "Throughout my work as a Django freelancer, I have demonstrated strong problem-solving skills, attention to detail, and the ability to work independently as well as part of a team."
        ],
    },
    {
        title: "TRAINER ICDL",
        company_name: "MOSAIC HUMAN RELIEF AND DEVELOPMENT",
        icon: company,
        iconBg: "#383E56",
        date: "1/10/2019 — 30/9/2020",
        points: [
            "Supervised the activities of the Assembly Centre",
            "Provided computer training to beneficiaries"
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
        name: " Need job project",
        description:
            "An open source online job portable using Django Using this project, you can search for jobs if you are a researcher and you can post job opportunities and the system proposes job opportunities similar to those you searched for and send notifications of job opportunities similar to the skills you added to your profile",
        tags: [
            {
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: NeedJob,
        source_code_link: "https://github.com/ZakariaZhlat125/NeedJobProject",
    },
    {
        name: " Code Trip",
        description:
            "Code Trip Project is an advanced project management solution designed to streamline organizational workflows and enhance project tracking. It offers comprehensive tools to monitor project progress, assess completion rates, and provides a wide array of additional features for improved project management efficiency",
        tags: [
            {
                name: "Laravel ",
                color: "blue-text-gradient",
            },
            {
                name: "Blade",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: codetrip,
        source_code_link: "#",
    },
    {
        name: " E-healtcare",
        description:
            "An eHealthcare system for booking doctor appointments is a digital platform designed to streamline and enhance the process of scheduling medical appointments with healthcare providers.",
        tags: [
            {
                name: "Django",
                color: "blue-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: ehealtcare,
        source_code_link: "https://github.com/ZakariaZhlat125/e-Healthcare",
    },
    {
        name: "Home back ModernBack",
        description:
            "Home back ModernBack using React and Tailwind js",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: ModrenBank,
        source_code_link: "https://github.com/ZakariaZhlat125/modrenBank",
    },

    {
        name: "Hotel",
        description:
            "An Hotil App Project using vite react js you can see rooms and details this room and Search to Find the room that suits you",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            // {
            //     name: "tailwind",
            //     color: "pink-text-gradient",
            // },
        ],
        image: hotil,
        source_code_link: "https://github.com/ZakariaZhlat125/Hotel",
    },
    {
        name: "Social-App",
        description:
            "Socialmedia Project using vite react js",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "vite js",
                color: "pink-text-gradient",
            },
        ],
        image: SocialApp,
        source_code_link: "https://github.com/ZakariaZhlat125/Social-App",
    },

    
    
];

export { services, technologies, experiences, testimonials, projects };