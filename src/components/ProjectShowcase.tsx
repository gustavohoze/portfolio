'use client'
import React from 'react';
import Image from 'next/image';

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
          <a href={data.gitLink} target='blank' className='relative h-[100%] border border-black rounded-[10px] overflow-hidden bg-gradient-to-b from-[#777777] to-[#111111] group'>
            <div className='absolute z-10 inset-0 bg-gradient-to-b from-[#001F3F] to-[#0b5870] opacity-0 transition-opacity duration-500 group-hover:opacity-90 flex items-center justify-center'>
              <div className='flex gap-4 flex-wrap justify-center opacity-100'>
                {data.stacks.map((stack, stackIndex) => (
                  <Image key={stackIndex} src={stack.src} alt={stack.alt} width={50} height={50} />
                ))}
              </div>
            </div>
            <div className='relative p-4'>
              <div className='absolute z-16 top-6 left-6'>
                <h1 className='text-2xl text-white'>{data.title}</h1>
                <span className='text-white'>{data.desc}</span><span className='text-white font-[100]'>{data.subdesc}</span>
              </div>
                <Image src={data.src[0]} alt='' width={433} height={271} className='absolute top-[400%] left-[25%]'/>
                <Image src={data.src[1]} alt='' width={395} height={632} className='absolute left-[0%] top-[400%] z-1'/>
                <Image src={data.src[2]} alt='' width={450} height={282} className='absolute top-[400%] -right-[20%] z-1'/>

            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;