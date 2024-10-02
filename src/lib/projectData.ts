import Fig1 from "@/app/assets/Fig1.webp";
import Fig2 from "@/app/assets/Fig2.webp";
import Fig3 from "@/app/assets/Fig3.webp";
import Fig4 from "@/app/assets/Fig4.webp";
import Fig5 from "@/app/assets/Fig5.webp";
import Fig6 from "@/app/assets/Fig6.webp";
import Fig7 from "@/app/assets/Fig1.webp";
import MySQL from "@/app/assets/MySQL.webp";
import Next from "@/app/assets/Next.webp";
import Postman from "@/app/assets/Postman.webp";
import Prisma from "@/app/assets/Prisma.webp";
import Shadcn from "@/app/assets/Shadcn.webp";
import Tailwind from "@/app/assets/Tailwind.webp";
import TypeScript from "@/app/assets/TypeScript.webp";
import Jquery from "@/app/assets/Jquery.webp";
import Bootstrap from "@/app/assets/Bootstrap.webp";
import HTML from "@/app/assets/HTML.webp";
import CSS from "@/app/assets/CSS.webp";
import JavaScript from "@/app/assets/JavaScript.webp";
import Firebase from "@/app/assets/Firebase.webp";
import Git from "@/app/assets/Git.webp";

export const projectData = [
  { 
    src: Fig1.src, 
    title: "Project 1", 
    stacks: [
      { src: Postman.src, alt: "Postman" },
      { src: MySQL.src, alt: "MySQL" },
      { src: TypeScript.src, alt: "TypeScript" },
      { src: Next.src, alt: "Next.js" },
      { src: Tailwind.src, alt: "Tailwind CSS" },
      { src: Prisma.src, alt: "Prisma" },
      { src: Shadcn.src, alt: "Shadcn UI" }
    ]
  },
  { 
    src: Fig2.src, 
    title: "Project 2", 
    stacks: [
      { src: HTML.src, alt: "HTML" },
      { src: CSS.src, alt: "CSS" },
      { src: Jquery.src, alt: "jQuery" },
      { src: JavaScript.src, alt: "JavaScript" },
      { src: Bootstrap.src, alt: "Bootstrap" }
    ]
  },
  { 
    src: Fig3.src, 
    title: "Project 3", 
    stacks: [
      { src: HTML.src, alt: "HTML" },
      { src: CSS.src, alt: "CSS" },
      { src: Jquery.src, alt: "jQuery" },
      { src: JavaScript.src, alt: "JavaScript" },
      { src: Bootstrap.src, alt: "Bootstrap" },
      { src: Git.src, alt: "Git" },
      { src: Firebase.src, alt: "Firebase" }
    ]
  },
  { 
    src: Fig4.src, 
    title: "Project 4", 
    stacks: [
      { src: HTML.src, alt: "HTML" },
      { src: CSS.src, alt: "CSS" },
      { src: JavaScript.src, alt: "JavaScript" }
    ]
  },
  { src: Fig5.src, title: "Project 5", stacks: [] },
  { src: Fig6.src, title: "Project 6", stacks: [] },
  { src: Fig7.src, title: "Project 7", stacks: [] },
];