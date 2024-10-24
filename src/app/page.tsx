import DateFormatter from "@/components/DateFormater";
import Link from "next/link";
import ProjectShowcase from "@/components/ProjectShowcase";
import projectTechData from '@/lib/projectDataTech';

const navLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/CV", label: "CV" },
];

const projectCategories = [
  {
    title: "Web Development",
    projects: [
      "Cari kursus",
      "Pudding Fest",
      "BNCC's Praetorian",
      "First Portfolio",
    ],
  },
  {
    title: "Java Programming",
    projects: ["CRUD System", "JavaFX & Database Integration"],
  },
  { title: "Team Projects", projects: [] },
  { title: "Others", projects: [] },
];

const contactMethods = [
  { label: "Mail", href: "mailto:gustaveronic@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/+6285104937022" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gustavo-hoze/" },
];

export default function Home() {
  return (      
      <div className="w-[84%] min-h-[400vh] pb-14">
        <header className="h-[9vh] flex items-end justify-between px-12">
          <div className="text-grey relative">
            <div className="text-grey fadeInLeft">Welcome, 大家 !</div>
            <span className="text-[12px] absolute -top-2 -right-16 w-[8ch] text-grey fadeInBottom">
              /dà jiā/
            </span>
          </div>
          <DateFormatter />
        </header>
        <section className="fadeInBottom h-[36vh] border-b border-outline mx-12 my-6">
          <p className="text-[32px] font-bold leading-[52px] bg-gradient-to-r from-grey to-contrast text-transparent bg-clip-text">
            Gustavo is a passionate software engineer on a mission to become a
            world-class developer. Driven by continuous learning, he leverages
            each project as an opportunity to grow his skills and expertise.
          </p>
        </section>
        <section className="px-12 fadeInTop">
          <h2 className="text-outline uppercase tracking-wide text-[10px]">
            Playground
          </h2>
          <div
            id="projectShowcase"
            className="mt-6 overflow-hidden fadeInLeft flex flex-col gap-7"
          >
            <ProjectShowcase list={projectTechData}/>
          </div>
        </section>
      </div>

  );
}
