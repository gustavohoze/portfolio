'use client'
import React from 'react';
import Image from 'next/image';
import RArrow from '@/app/assets/Right arrow.png'


interface ProjectData {
  title: string;
  src: string;
  desc: string;
  subdesc: string;
  gitLink: string;
  stacks: { src: string; alt: string }[];
  fromColor: string;
  toColor: string;
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
            <div className='absolute z-10 h-[60vh] w-[100%] flex gap-4 flex-wrap items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
            <div className='flex flex-wrap gap-4 justify-center items-center w-full h-full bg-black/40'>
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
              <a href={data.gitLink} className='absolute top-7 right-7 z-10' target='blank'>
                <Image src={RArrow} alt='' width={30} height={30}></Image>
              </a>
              <div className='absolute top-6 left-6 z-10'>
                <h1 className='text-2xl text-white'>{data.title}</h1>
                <span className='text-white'>{data.desc}</span>
                <span className='text-white font-[100]'>{data.subdesc}</span>
              </div>
            </div>
            
            <div 
  className='absolute z-1 inset-0 opacity-0 group-hover:opacity-100' 
  style={{ 
    transition: 'opacity 0.5s',
    background: `linear-gradient(to bottom, ${data.fromColor}, ${data.toColor || '#0b5870'})`
  }}
>
              
            </div>
            
            <div className='relative p-4'>
             <div className='absolute z-5 top-6 left-6 '>
                <h1 className='text-2xl text-white'>{data.title}</h1>
                <span className='text-white'>{data.desc}</span>
                <span className='text-white font-[100]'>{data.subdesc}</span>
              </div>
              <Image src={data.src[0]} alt='' width={700} height={400} className='absolute right-[11%] top-[500%] z-0 rounded-lg border-8 border-grey/10 transition-all duration-500 group-hover:top-[350%] group-hover:border-0'/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;