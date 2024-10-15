import DateFormatter from "@/components/DateFormater";
import Link from "next/link";
import ProjectShowcase from "@/components/ProjectShowcase";
import projectTechData from "@/lib/projectDataTech";

const navLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
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
    <main className="min-h-screen w-full bg-white flex">
      <aside className="fadeInLeft w-[16%] h-screen border-r border-outline sticky top-0 left-0">
        <div className="h-[27%] px-8 pt-6 border-b border-outline">
          <div className="flex flex-col items-start gap-2 h-[80%] text-black">
            <Link
              href="/"
              className="font-[900] text-[23px] w-[90px] h-[51.92px] bg-greyBox flex items-center justify-center text-black p-2"
            >
              何泽
            </Link>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <nav className="h-[36%] pl-8 border-b border-outline flex flex-col justify-center">
          <div className="flex flex-col items-start gap-2 h-[80%]">
            {projectCategories.map((category) => (
              <div key={category.title} className="flex flex-col gap-1">
                <span className="text-outline uppercase tracking-wide text-[10px]">
                  {category.title}
                </span>
                {category.projects.map((project) => (
                  <Link
                    key={project}
                    href="#"
                    className="text-grey capitalize text-[10px]"
                  >
                    {project}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </nav>
        <div className="h-[37%] pl-8 pt-4">
          <span className="text-outline uppercase tracking-wide text-[10px]">
            Contact
          </span>
          {contactMethods.map((method) => (
            <Link
              key={method.label}
              href={method.href}
              className="block text-grey capitalize tracking-wide text-[10px] mt-1"
              target="blank"
            >
              {method.label}
            </Link>
          ))}
        </div>
      </aside>
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
    </main>
  );
}
