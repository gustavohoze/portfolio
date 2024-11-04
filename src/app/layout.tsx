import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Link from "next/link";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: '100'
});

const navLinks = [
  { href: "/About", label: "About" },
  { href: "/ProjectsPage", label: "Projects" },
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





export const metadata: Metadata = {
  title: "Portfolio 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="64x64" />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
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
        {children}

    </main>
      </body>
    </html>
  );
}
