import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaEnvelope,
  FaYoutube,
  FaDownload,
} from "react-icons/fa";
import { SiAdobe } from "react-icons/si";

const titles = [
  "Frontend Developer",
  "UI/UX Designer",
  "Game Developer",
  "Graphic Designer",
];

const info = {
  name: "Iñigo Manuel Antonio Lacson",
  address: " Binagonan Rizal, Philippines 1940",
  title: "Frontend Developer",
  motto: "just making apps",
};

const socialLinks = [
  {
    link: "https://github.com/inigolacson",
    icon: FaGithub,
  },
  {
    link: "https://www.linkedin.com/in/i%C3%B1igo-lacson-150351310/",
    icon: FaLinkedin,
  },
  {
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=inigolacson01@gmail.com&su=Hello%20from%20your%20portfolio&body=I%20saw%20your%20site%20and%20wanted%20to%20reach%20out!",
    icon: FaEnvelope,
  },
  {
    link: "https://www.facebook.com/InigoLacsonT/",
    icon: FaFacebookSquare,
  },
  {
    link: "https://www.instagram.com/inigolacson/",
    icon: FaInstagram,
  },
  {
    link: "https://www.youtube.com/@inigolacson",
    icon: FaYoutube,
  },
];

const cookInfo = [
  {
    title: "alon website",
    description:
      "a front-end implementation of an electric bike e-commerce site based on my own UI/UX design.",
  },
  {
    title: "running diary app",
    description:
      "a full-stack running diary app to log and track personal runs.",
  },
  {
    title: "youtube channel",
    description:
      "a collection of head-level, emotionally narrated videos that explore human introspection and storytelling.",
  },
  {
    title: "afforda",
    description:
      "an app that calculates how many days of work are needed to afford specific items based on monthly wage input.",
  },
];

const experienceInfo = [
  {
    company: "zynappse corporation",
    description:
      "completed internship as a front end intern, gaining skills in front-end development and ui/ux design.",
    date: "february 2025 - may 2025",
  },
];

const projectInfo = [
  {
    title: "alon mock up design",
    date: "april 2025 - may 2025",
    description: "a conceptual electric e-bike platform made with adobe xd.",
    icon: SiAdobe,
    link: "https://xd.adobe.com/view/150b8f18-e8dd-4711-99d9-b2a99b3a2248-4058/?fullscreen",
  },
  {
    title: "yapak",
    date: "june 2024 - may 2025",
    description:
      "a game that promotes environmental awareness, made with godot engine.",
    icon: FaDownload,
    link: "https://pup-a2ip.itch.io/yapak",
  },
  {
    title: "senna mist stacks calculator",
    date: "july 2025",
    description:
      "an app that calculates senna mist stacks from the hit game league of legends",
    icon: FaGithub,
    link: "https://github.com/inigolacson/lol-stacks-calc",
  },
];

const educationInfo = [
  {
    name: "polytechnic university of the philippines",
    course:
      "bachelor of science in information technology - Magna Cum Laude - GWA: 1.26",
    date: "2021 - 2025",
  },
  {
    name: "rizal national science high school",
    course: "science, technology, engineering & mathematics",
    date: "2019 - 2021",
  },
];

const emailLink = {
  link: "https://drive.google.com/uc?export=download&id=1D1J4GT2GOfT21UPofweNmniNKpM4ol_G",
};

const graphicsImages = [
  {
    src: "/photos/photo1.webp",
    alt: "Photo 1",
    title: "wingardium leviosa | photo manipulation | product photography",
    description:
      "A close-up shot of a mug, appearing to hold a galaxy or stardust, with light spilling out and illuminating its surroundings. The image evokes a sense of wonder and cosmic beauty..",
  },
  {
    src: "/photos/photo2.webp",
    alt: "Photo 2",
    title: "preserved in stillness | photo manipulation | product photography",
    description:
      "A dark, atmospheric scene featuring a full moon casting a soft glow on what appears to be a bottle or container, surrounded by an ethereal mist or smoke. The image suggests a mysterious narrative..",
  },
  {
    src: "/photos/photo3.webp",
    alt: "Photo 3",
    title: "capture the lens | photo Manipulation | product Photography",
    description:
      "A minimalist and sophisticated product shot of a dark, cylindrical container, likely for cosmetics or a similar luxury item, resting on a reflective surface with subtle lighting.",
  },
  {
    src: "/photos/photo4.webp",
    alt: "Photo 4",
    title: "neon in the city | photo manipulation | product photography",
    description:
      "A vibrant and futuristic cityscape scene, characterized by striking neon lights and angular architecture, creating a dynamic and modern urban aesthetic..",
  },
  {
    src: "/photos/photo5.webp",
    alt: "Photo 5",
    title: "for you | photo manipulation | product photography",
    description:
      "A soft-focus, intimate shot of a hand gently holding a bouquet of white or light-colored flowers, conveying a sense of tenderness and natural beauty..",
  },
  {
    src: "/photos/design3.webp",
    alt: "Design 1",
    title: "let's goto outbox menu | graphic design",
    description:
      "A digital artwork showcasing a detailed menu board for a food establishment, featuring various dishes, prices, and promotional offers with a clean and organized layout..",
  },
  {
    src: "/photos/design4.webp",
    alt: "Design 2",
    title: "outbox wings menu | graphic design",
    description:
      "A striking and impactful menu design for OUTBOX UNLTD highlighting a variety of food items, particularly chicken, with clear pricing and a visually appealing layout.",
  },
  {
    src: "/photos/design5.webp",
    alt: "Design 3",
    title: "outbox wings menu | graphic design",
    description:
      "A clean and modern promotional material for a food delivery service, featuring food items, contact information, and a clear call to action, designed for effective communication.",
  },
  {
    src: "/photos/design1.webp",
    alt: "Design 4",
    title: "outbox wings promo | graphic design",
    description:
      "A promotional advertisement for OUTBOX UNLTD showcasing delicious-looking chicken wings with a rich sauce, emphasizing the EXPERIENCE CHICKEN WINGS AT ITS FINEST message in a bold and appetizing manner..",
  },
  {
    src: "/photos/design2.webp",
    alt: "Design 5",
    title: "outbox wings promo | graphic design",
    description:
      " A mockup design for Outbox Unltd merchandise, possibly a banner or packaging, featuring their logo and taglines, suggesting brand visibility and product presentation.",
  },
  {
    src: "/photos/design6.png",
    alt: "Design 6",
    title: "lets goto outbox logo | graphic design",
    description:
      "A playful and inviting logo design, LET'S GO TO OUTBOX UNLTD, likely for branding or promotional use, encouraging engagement with the brand.",
  },
  {
    src: "/photos/design7.png",
    alt: "Design 7",
    title: "outbox wings unltd logo | graphic design",
    description:
      "A clear and concise logo mark for OUTBOX UNLTD, ideal for general branding purposes, easily recognizable and versatile for various applications.",
  },
];

export default info;
export {
  titles,
  cookInfo,
  educationInfo,
  experienceInfo,
  projectInfo,
  socialLinks,
  emailLink,
  graphicsImages,
};
