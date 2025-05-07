import Chatio from "../assets/chatApp.png"
import Bookstore from "../assets/bookstore.png"
import Furniro from "../assets/Furniro.png"
import PaintApp from "../assets/paintApp.png"
import ToDeskTop from "../assets/ToDeskTop.png"
import WeatherApp from "../assets/weatherApp.png"

import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Award", href: "#award" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    title: "Chat App",
    subtitle:
      "A full-stack real-time chat application built with React, Node.js, MongoDB, and Socket.io, featuring user authentication and responsive design.",
    image: Chatio,
    link: "https://chat-app-i3hj.onrender.com"
  },
  {
    title: "Bookstore Web App",
    subtitle:
      "A basic CRUD web application built with the MERN stack to demonstrate MongoDB, Express, React, and Node.js integration.",
    image: Bookstore,
    link: "https://bookstore-mern-1-x5ae.onrender.com"
  },
  {
    title: "Furniro - Furniture Store Web App",
    subtitle: "A static furniture store website built using HTML, CSS, and JavaScript, showcasing product layouts and design without responsive features.",
    image: Furniro,
    link: "https://furniro-theta-eight.vercel.app/"
  },
  {
    title: "Paint Web App",
    subtitle:
      "A creative browser-based drawing tool crafted with HTML, CSS, and JavaScript — enabling users to unleash their imagination with custom colors, brush styles, and interactive canvas features.",
    image: PaintApp,
    link: "https://paint-web-app-three.vercel.app/"
  },
  {
    title: "ToDeskTop",
    subtitle:
      "A responsive single-page website built with HTML, Tailwind CSS, and light JavaScript — showcasing smooth marquee animations and clean, modern UI transitions.",
    image: ToDeskTop,
    link: "https://to-desktop-jade.vercel.app/"
  },
  {
    title: "Weather Web App",
    subtitle:
      "A visually rich, responsive weather application built with HTML, CSS, and JavaScript — fetches live weather data via API and displays temperature, country flags, and dynamic location images within a modern grid layout.",
    image: WeatherApp,
    link: "https://weather-app-with-image.vercel.app/"
  },
];

export const EDUCATION = [
  {
    institute: "Abacus Institute of Engineering & Management",
    period: "Oct 2021 – July 2024",
    degree: "B.Tech in Mechanical Engineering",
    percentage: "74.14%",
    location: "Mogra, Hooghly",
  },
  {
    institute: "Ramakrishna Mission Shilpapitha",
    period: "Mar 2019 – Oct 2021",
    degree: "Diploma in Mechanical Engineering",
    percentage: "86.8%",
    location: "Belgharia, Kolkata",
  },
  {
    institute: "Anandanagar A.C Roy High School",
    period: "2019",
    degree: "Higher Secondary",
    percentage: "79.80%",
    location: "Singur, Hooghly",
  },
  {
    institute: "Anandanagar A.C Roy High School",
    period: "2017",
    degree: "Secondary Examination",
    percentage: "68%",
    location: "Singur, Hooghly",
  },
]

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/soubhik.pramanik.92/",
    Icon: FaFacebook,
  },
  {
    href: "https://discord.gg/tpc2PNb9Ec",
    Icon: FaDiscord,
  },
  {
    href: "https://www.instagram.com/soubhik_09/",
    Icon: FaInstagram,
  },
  {
    href: "https://x.com/SoubhikPra15",
    Icon: FaXTwitter,
  },
  {
    href: "https://github.com/soubhik09",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/soubhik-pramanik-95a812203",
    Icon: FaLinkedin,
  },
];