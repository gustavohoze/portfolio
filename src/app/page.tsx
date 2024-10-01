export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div id="home-sidebar" className="w-[16%] h-screen border-r-[1px] border-outline">
        <div id="home-first-sidebar-content" className="h-[27%] px-8 pt-6 border-b-[1px] border-outline">
          <div id="content" className="flex flex-col items-start gap-2 w-auto h-[80%]">
            <span className="font-[900] text-[23px] w-[90px] h-[51.92px] bg-greyBox flex items-center justify-center"><a href="/" className="font-[900] text-[23px] p-2">何泽</a></span>
            <a href="/">About</a>
            <a href="/">Projects</a>
            <a href="/">CV</a>
          </div>
        </div>
        <div id="home-second-sidebar-content" className="h-[36%] pl-8 border-b-[1px] border-outline flex flex-col justify-center">
          <div id="content" className="flex flex-col items-start gap-2 w-auto h-[80%]">
            <div className="flex flex-col gap-1">
              <a href="" className="text-outline uppercase tracking-wide text-[10px]">Web Development</a>
              <a href="" className="text-grey capitalize tracking-wide text-[10px]">API Integration</a>
              <a  href="" className="text-grey capitalize tracking-wide text-[10px]">Pudding Fest</a>
              <a href="" className="text-grey capitalize tracking-wide text-[10px]">BNCC&apos;s Praetorian</a>
              <a href="" className="text-grey capitalize tracking-wide text-[10px]">First Portfolio</a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="" className="text-outline uppercase tracking-wide text-[10px]">Java Programming</a>
              <a href="" className="text-grey capitalize tracking-wide text-[10px]">CRUD System</a>
              <a  href="" className="text-grey capitalize tracking-wide text-[10px]">JavaFX & Database Integration</a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="" className="text-outline uppercase tracking-wide text-[10px]">Team Projects</a>
            </div>
            <div className="flex flex-col gap-1">
              <a href="" className="text-outline uppercase tracking-wide text-[10px]">Others</a>
            </div>

            </div>
          </div>
        <div id="home-third-sidebar-content" className="h-[37%] pl-8">
        <div className="flex flex-col gap-1 pt-4">
              <a href="" className="text-outline uppercase tracking-wide text-[10px]">Contact</a>
              <a href="" className="text-grey capitalize tracking-wide text-[10px]">Mail</a>
              <a  href="" className="text-grey capitalize tracking-wide text-[10px]">Whatsapp</a>
              <a  href="" className="text-grey capitalize tracking-wide text-[10px]">LinkedIn</a>
            </div>
        </div>

      </div>
    </main>
  );
}
