import { FaGithub,  FaLinkedin, FaFacebookSquare, FaInstagram, FaEnvelope, FaYoutube, FaDownload} from 'react-icons/fa';
import { SiAdobe } from 'react-icons/si';

const titles = [
    'Frontend Developer',
    'UI/UX Specialist',
    'Game Developer',
];

const info = {
    name: 'Iñigo Manuel Antonio Lacson',
    address: ' Binagonan Rizal, Philippines 1940',
    title: 'Frontend Developer',
    motto: 'just making apps',
}

const socialLinks = [
    { 
        link: 'https://github.com/inigolacson',
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
        icon:  FaFacebookSquare
    },
    { 
        link:  'https://www.instagram.com/inigolacson/',
        icon:  FaInstagram
    },
    {
        link: 'https://www.youtube.com/@inigolacson',
        icon: FaYoutube
    }
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
        company: 'zynnapse corporation',
        description: 'completed internship as a front end intern, gaining skills in front-end development and ui/ux design.',
        date: 'february 2025 - may 2025',
    },
    
]

const projectInfo = [
    {
        title: 'alon mock up design',
        date: 'april 2025 - may 2025',  
        description: 'a conceptual electric e-bike platform made with adobe xd.',
        icon: SiAdobe,
        link: 'https://xd.adobe.com/view/150b8f18-e8dd-4711-99d9-b2a99b3a2248-4058/?fullscreen'
        
    },
    {
        title: 'yapak',
        date: 'june 2024 - may 2025',
        description: 'a game that promotes environmental awareness, made with godot engine.',
        icon: FaDownload,
        link: 'https://pup-a2ip.itch.io/yapak'
    },
    {
        title: 'senna mist stacks calculator',
        date: 'july 2025',
        description: 'an app that calculates senna mist stacks from the hit game league of legends',
        icon: FaGithub,
        link: 'https://github.com/inigolacson/lol-stacks-calc'
    }
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

const emailLink = {
    link: 'https://drive.google.com/uc?export=download&id=1D1J4GT2GOfT21UPofweNmniNKpM4ol_G'
}

export default info;
export { titles , cookInfo, educationInfo, experienceInfo, projectInfo, socialLinks, emailLink };