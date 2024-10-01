import Carousel from "@/components/Carousel";
import DateFormater from "@/components/DateFormater";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white flex">
      <div
        id="home-sidebar"
        className="fadeInLeft w-[16%] h-screen border-r-[1px] border-outline sticky top-0 left-0 "
      >
        <div
          id="home-first-sidebar-content"
          className="h-[27%] px-8 pt-6 border-b-[1px] border-outline"
        >
          <div
            id="content"
            className="flex flex-col items-start gap-2 w-auto h-[80%] text-black"
          >
            <span className="font-[900] text-[23px] w-[90px] h-[51.92px] bg-greyBox flex items-center justify-center text-black">
              <a href="/" className="font-[900] text-[23px] p-2">
                何泽
              </a>
            </span>
            <a href="/">About</a>
            <a href="/">Projects</a>
            <a href="/">CV</a>
          </div>
        </div>
        <div
          id="home-second-sidebar-content"
          className="h-[36%] pl-8 border-b-[1px] border-outline flex flex-col justify-center"
        >
          <div
            id="content"
            className="flex flex-col items-start gap-2 w-auto h-[80%]"
          >
            <div className="flex flex-col gap-1">
              <a
                href=""
                className="text-outline uppercase tracking-wide text-[10px]"
              >
                Web Development
              </a>
              <a href="" className="text-grey capitalize text-[10px]">
                API Integration
              </a>
              <a href="" className="text-grey capitalize text-[10px]">
                Pudding Fest
              </a>
              <a href="" className="text-grey capitalize text-[10px]">
                BNCC&apos;s Praetorian
              </a>
              <a href="" className="text-grey capitalize text-[10px]">
                First Portfolio
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <a
                href=""
                className="text-outline uppercase tracking-wide text-[10px]"
              >
                Java Programming
              </a>
              <a href="" className="text-grey capitalize text-[10px]">
                CRUD System
              </a>
              <a href="" className="text-grey capitalize text-[10px]">
                JavaFX & Database Integration
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <a
                href=""
                className="text-outline uppercase tracking-wide text-[10px]"
              >
                Team Projects
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <a
                href=""
                className="text-outline uppercase tracking-wide text-[10px]"
              >
                Others
              </a>
            </div>
          </div>
        </div>
        <div id="home-third-sidebar-content" className="h-[37%] pl-8">
          <div className="flex flex-col gap-1 pt-4">
            <a
              href=""
              className="text-outline uppercase tracking-wide text-[10px]"
            >
              Contact
            </a>
            <a
              href=""
              className="text-grey capitalize tracking-wide text-[10px]"
            >
              Mail
            </a>
            <a
              href=""
              className="text-grey capitalize tracking-wide text-[10px]"
            >
              Whatsapp
            </a>
            <a
              href=""
              className="text-grey capitalize tracking-wide text-[10px]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div id="home-main" className="w-[84%]">
        <div
          id="home-first-main-content"
          className="h-[9vh] flex items-end justify-between px-12"
        >
          <div className="text-grey relative ">
            <div className="text-grey fadeInLeft">Welcome, 大家 !</div>
            <span className="text-[12px] absolute -top-2 -right-16 w-[8ch] text-grey fadeInBottom">
              /dà jiā/
            </span>
          </div>
          <DateFormater />
        </div>
        <div id="home-second-main-content" className="fadeInBottom h-[36vh] border-b-[1px] border-outline mx-12 my-6">
          <p className=" text-[32px] font-bold leading-[52px] bg-gradient-to-r from-grey to-contrast text-transparent bg-clip-text inline-block">
            Gustavo is a passionate software engineer on a mission to become a
            world-class developer. Driven by continuous learning, he leverages
            each project as an opportunity to grow his skills and expertise.
          </p>
        </div>
        <div id="home-third-main-content" className="px-12 h-[200vh] fadeInTop">
        <a
                href=""
                className=" text-outline uppercase tracking-wide text-[10px] "
              >
                Playground
              </a>
        <div id="projectShowcaseCarousel" className="mt-6 overflow-hidden fadeInLeft">
          <Carousel />
        </div>
        </div>
      </div>
    </main>
  );
}
