'use client'
import React from 'react';
import Image from 'next/image';
import RArrow from '@/app/assets/Right arrow.png'
import './ProjectShowcase.css'


interface ProjectData {
  title: string;
  src: string[];
  desc: string;
  subdesc: string;
  gitLink: string;
  stacks: { src: string; alt: string }[];
}

interface ProjectList {
  list: ProjectData[];
}

const ProjectShowcase: React.FC<ProjectList> = (datas: ProjectList) => {
  return (
    <div id='projectShowcase'>
      {datas.list.map((data, index) => (
        <div key={index} className='h-[60vh] border-2 border-[#949090] p-3 rounded-[17px] mt-5 mb-10 grid items-center bg-white'>
          <div className='relative h-[100%] border border-black rounded-[10px] overflow-hidden bg-gradient-to-b from-[#777777] to-[#111111] group'>
            {/* Move stacks container inside the group element */}
            <div className='absolute z-10 h-[60vh] w-[100%] flex gap-4 flex-wrap items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
              {data.stacks.map((stack, stackIndex) => (
                <div
                  key={stackIndex}
                  className='relative opacity-0 group-hover:!opacity-100 group-hover:z-10'
                  style={{ transition: 'opacity 0.5s' }}
                >
                  <Image 
                    src={stack.src} 
                    alt={stack.alt} 
                    width={50} 
                    height={50} 
                  />
                </div>
              ))}
            </div>
            
            <div className='absolute z-1 inset-0 bg-gradient-to-b from-[#001F3F] to-[#0b5870] opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center' id='overlayPS'>
              <a href={data.gitLink} className='absolute top-7 right-7' target='blank'>
                <Image src={RArrow} alt='' width={30} height={30}></Image>
              </a>
            </div>
            
            <div className='relative p-4'>
              <div className='absolute z-5 top-6 left-6'>
                <h1 className='text-2xl text-white'>{data.title}</h1>
                <span className='text-white'>{data.desc}</span>
                <span className='text-white font-[100]'>{data.subdesc}</span>
              </div>
              <Image src={data.src[0]} alt='' width={433} height={271} className='absolute top-[400%] left-[25%] z-0'/>
              <Image src={data.src[1]} alt='' width={395} height={632} className='absolute left-[0%] top-[400%] z-0'/>
              <Image src={data.src[2]} alt='' width={450} height={282} className='absolute top-[400%] -right-[20%] z-0'/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;