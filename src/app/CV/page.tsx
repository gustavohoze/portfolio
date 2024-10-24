import DateFormater from '@/components/DateFormater'
import React from 'react'
import Image from 'next/image'
import CV from '@/app/assets/CV.png'
import { DownloadIcon } from 'lucide-react'

const page = () => {
  return (
   <div className="w-[84%] min-h-[100vh] pb-14 flex flex-col">
    <header className="h-[9vh] flex items-end justify-between px-12">
          <div className="text-grey relative">
            <div className="text-grey fadeInLeft">Welcome, 大家 !</div>
            <span className="text-[12px] absolute -top-2 -right-16 w-[8ch] text-grey fadeInBottom">
              /dà jiā/
            </span>
          </div>
          <DateFormater />
        </header>
    <div className='flex justify-evenly items-center mt-14'>
    <div className='w-[40%] h-[82vh] border-4 border-grey overflow-hidden flex items-center'>
        <Image src={CV} alt='CV_2024' objectFit='cover' objectPosition='left bottom'></Image>
    </div>
    <div className='w-[50%] h-[82vh] flex flex-col items-center justify-center py-4'>

    
    <div className='w-[100%] h-[52vh] rounded-md flex flex-col items-center pt-4 justify-center border-2 border-greyBox mb-4'>
    <div className="mb-6 p-0 flex flex-col">
        <h3 className="text-3xl font-bold mb-2 bg-gradient-to-b from-grey to-contrast text-transparent bg-clip-text">Hey There!</h3>
        <h3 className="text-xl  font-semibold mb-4 bg-gradient-to-b from-grey to-contrast text-transparent bg-clip-text"> I'm currently</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800">
            🎓 Computer Science Student at BINUS
          </p>
          <p className="text-green-800 mt-2">
            📍 Seeking Full-stack Development Opportunities
          </p>
        </div>
      </div>

       <div className="mb-6 pl-4">
        <h3 className="text-lg font-semibold mb-4">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'Tailwind', 'HTML', 'JS', 'SQL', 'TypeScript'].map((skill) => (
            <span 
              key={skill}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    

    </div>
    <div className="w-full flex items-center justify-center mt-4">
      <a 
        href="/assets/CV_GustavoHozeErcolesea.pdf" 
        download="CV_GustavoHozeErcolesea.pdf" 
        className="flex justify-center w-full"
      >
        <button 
          className="w-full max-w-md bg-gray-700 py-2 rounded-md flex items-center justify-center gap-4 hover:bg-gray-500 transition-colors"
        >
          <DownloadIcon size={20} color="white" />
          <span className="text-white">Download CV</span>
        </button>
      </a>
    </div>


    </div>
    </div>
   </div>
  )
}

export default page