import DateFormater from '@/components/DateFormater'
import React from 'react'
import UnderDevelopment from '@/components/UnderDevelopment'

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
        <br />
        <div className='px-12'>
          <hr />
        </div>
        <div className='h-[50vh] overflow-hidden'>
          {/* <ImageCarousel></ImageCarousel>
           */}
           <UnderDevelopment/>
        </div>
        </div>
  )
}

export default page