import Ceo from "@/public/ceo.svg";
import Cto from "@/public/cto.svg";
import Fe from "@/public/fe.svg";
import Ai from "@/public/ai.svg";
import UiUx from "@/public/uiux.svg";
import Be from "@/public/Be.svg";
import MobileDev from "@/public/mobileDev.svg";
import Linkedin from "@/public/linkedin.svg";
import Cv from "@/public/cv.svg";

import Temantrip from "@/public/Temantrip.png";
import Dakasakti from "@/public/Dakasakti.svg";
import AsOne from "@/public/AsOne.png";
import Sembako from "@/public/Sembako.svg";
import Doofit from "@/public/Doofit.png";

import Web from "@/public/web.svg";
import Web3 from "@/public/web3.svg";
import Mobile from "@/public/mobile.svg";
import EtherScan from "@/public/EtherScan.png";

export const nav = [
  {
    title: "Home",
    to: "home",
  },
  {
    title: "Portofolio",
    to: "portofolio",
  },
  {
    title: "Service",
    to: "service",
  },
  {
    title: "About",
    to: "about",
  },
];

export const portofolio = [
  {
    image: Dakasakti,
    title: "Dakasakti",
    tech: "UI/UX Design",
    tech2: "Web Development",
  },
  {
    image: Temantrip,
    title: "Temantrip",
    tech: "UI/UX Design",
    tech2: "Web Development",
  },
  {
    image: Doofit,
    title: "Doofit",
    tech: "UI/UX Design",
    tech2: "Mobile Development",
  },
  {
    image: AsOne,
    title: "As One",
    tech: "UI/UX Design",
    tech2: "Mobile Development",
  },
  {
    image: Sembako,
    title: "Sembako Bintang",
    tech: "UI/UX Design",
    tech2: "Mobile Development",
  },
  {
    image: EtherScan,
    title: "EtherScan",
    tech: "UI/UX",
    tech2: "Web Development",
  },
];

export const team = [
  {
    role: "Chief Executive Officer",
    name: "Tatiana",
    desc: "Founder Kitakerjaremote",
    link: "https://www.linkedin.com/in/tatianalisdasari/",
    image: Ceo,
    logo: Linkedin,
  },
  {
    role: "Chief technology Officer",
    name: "Bona Wibowo",
    desc: "Technical Consultant atto.id & Kriya",
    link: "https://debora-tech.vercel.app",
    image: Cto,
    logo: "",
  },
  {
    role: "Web3 & Fullstack Engineer",
    name: "I Putu Saputra",
    desc: "Front End Enginer at Pintu",
    link: "https://docs.google.com/document/d/1ObsKUBEyRmLtFApS9E1Gn-rCxdXWu7kZZW00i3pZOYk/edit?usp=sharing",
    image: Fe,
    logo: Cv,
  },
  {
    role: "UI/UX Designer",
    name: "Raam Pujangga",
    desc: "UI UX pegipegi",
    link: "https://debora-tech.vercel.app",
    image: UiUx,
    logo: Cv,
  },
  {
    role: "ML/Web3/Smart Contract Engineer",
    name: "Amajid Sinar",
    desc: "AI Engineer at Nodeflux",
    link: "https://docs.google.com/document/d/1R0-GRtS0lYAaeqWcj1FVPlk2pwi1Uh6l6_CexY0d2ks/edit?usp=sharing",
    image: Ai,
    logo: Cv,
  },
  {
    role: "Back End Developer",
    name: "Mahmuda Karima",
    desc: "Back End Developer",
    link: "https://google.com",
    image: Be,
    logo: "",
  },
  {
    role: "Mobile Developer",
    name: "Dandy",
    desc: "Mobile Developer",
    link: "https://google.com",
    image: MobileDev,
    logo: "",
  },
];

export const service = [
  {
    image: Web,
    title: "Web Development",
    desc: "We build user-friendly and visually appelealing websites that help drive bussines growth",
  },
  {
    image: Web3,
    title: "Web3",
    desc: "Transform your business with our Web3 solutions, designed for the new decentralzed world.",
  },
  {
    image: Mobile,
    title: "Mobile App Development",
    desc: "We create mobile apps that engage customers and enchange user experience.",
  },
  // {
  //   image: AiIcon,
  //   title: "Articial Intilegence",
  //   desc: "We offer cutting-edge AI solutions that enable businesses to leverage the power of articial intilegence for intilegence decision-making",
  // },
  // {
  //   image: Crypto,
  //   title: "Token Crypto",
  //   desc: "We offer compherensive token crypto services that empower bussinesses to leverage the potential of blockchain decision-making",
  // },
  // {
  //   image: Analytic,
  //   title: "Analytic Dashboard",
  //   desc: "We offer visually appealing and effective analytics dashboard that helps bussinesses track and measure key performance",
  // },
];
