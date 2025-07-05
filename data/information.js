import { FaGithub,  FaLinkedin, FaFacebookSquare, FaInstagram, FaEnvelope,} from 'react-icons/fa'

const titles = [
    'Frontend Developer',
    'UI/UX Specialist',
    'Game Developer',
];

const info = {
    name: 'Iñigo Manuel Antonio Lacson',
    address: ' Binagonan Rizal, Philippines 1940',
    title: 'Frontend Developer',
    motto: 'good things are better taken in the less you notice',
}

const socialLinks = [
    { 
        link : 'https://github.com/inigolacson',
        icon: FaGithub
    },
    { 
        link:'https://www.linkedin.com/in/i%C3%B1igo-lacson-150351310/',
        icon: FaLinkedin
    },
    { 
        link:'https://mail.google.com/mail/?view=cm&fs=1&to=inigolacson01@gmail.com&su=Hello%20from%20your%20portfolio&body=I%20saw%20your%20site%20and%20wanted%20to%20reach%20out!',
        icon: FaEnvelope
    },
    { 
        link: 'https://www.facebook.com/InigoLacsonT/',
        icon:   FaFacebookSquare
    },
    { 
        link:   'https://www.instagram.com/inigolacson/',
        icon:   FaInstagram
    },
]


const cookInfo = [
    {
        title: 'alon website',
        description: 'a front-end implementation of an electric bike e-commerce site based on my own UI/UX design.',
    },
    {
        title: 'running diary app',
        description: 'a full-stack running diary app to log and track personal runs.',
    },
    {
        title: 'youtube channel',
        description: 'a collection of head-level, emotionally narrated videos that explore human introspection and storytelling.',
    },
    {
        title: 'salary meter app',
        description: 'an app that calculates how many days of work are needed to afford specific items based on monthly wage input.',
    }
]

const experienceInfo = [
    {
        company: 'Zynnapse Corporation',
        description: 'completed a comprehensive internship as a front end intern, gaining fundamental skills in modern front-end development and ui/ux design.',
        date: 'february 2025 - may 2025',
    },
    
]

const projectInfo = [
    {
        title: 'alon mock up design',
        date: 'april 2025 - may 2025',  
        description: 'applied fundamental ui/ux design principles and best practices to independently design and develop the complete user interface for a conceptual electric e-bike platform in Adobe xd.',
        
    },
    {
        title: 'yapak',
        date: 'june 2024 - may 2025',
        description: 'led the development of a game that promotes environmental awareness   using godot engine and gdscript. implemented game mechanics, user interface, and core gameplay systems.',
        
    },
]

const educationInfo = [
    {
        name: 'polytechnic university of the philippines',
        course: 'bachelor of science in information technology',
        date: '2021 - present'
    },
    {
        name: 'rizal national science high school',
        course: 'science, technology, engineering & mathematics',
        date: '2019 - 2021'
    }
]

const socialInfo = [
    {

    },
]

export default info;
export { titles , cookInfo, educationInfo, experienceInfo, projectInfo, socialLinks };