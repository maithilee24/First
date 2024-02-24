import React from 'react';
import entryinfo from '../Entryinfo';
import page1Info from '../Page3Info';

function Page3() {
  return (
    <div className='px-10 py-6 sm:px-16 sm:py-6 md:px-20 md:py-8 lg:px-28 lg:py-10 xl:px-48 xl:py-12 bg-[#F0F8FF]' >
      <h1 className="font-bold  text-lg sm:text-xl sm:pb-3 md:text-2xl md:pb-4 lg:text-3xl lg:pb-4 xl:text-5xl">{entryinfo[2].title}</h1>
      <div className='flex flex-col sm:flex-row'>
      <p className='
      text-[0.7rem] pb-4
      sm:text-[0.55rem] sm:pr-[1.5rem] sm:pb-6
      md:text-[0.65rem] md:pr-[2rem] md:pb-6
      lg:text-[0.8rem] lg:pr-[2.5rem] lg:pb-6
      xl:text-base xl:pt-10 xl:pr-[3.2rem] xl:pb-6'>
      In the ever-evolving landscape of software development, the need for organizations to innovate with speed has become increasingly paramount. As technology advances and consumer expectations evolve, businesses face mounting pressure to deliver software solutions that not only meet the ever-heightening demands of customers but also align closely with overarching business goals. This imperative drives a fundamental shift in how organizations approach software development, necessitating a departure from traditional methodologies towards a more agile, adaptive, and customer-centric approach. At the heart of this paradigm shift lies the recognition that innovation, speed, and quality are inextricably linked.
      </p>
      <img className=" pb-4 w-auto h-1/3 sm:h-auto sm:w-1/2 " src={entryinfo[2].imgURL} alt="AI and RPA"  />
      </div>
      {page1Info.map(info =>(
        <ol  className=" text-[0.7rem] sm:text-[0.55rem] md:text-[0.65rem] lg:text-[0.8rem] xl:text-base">
        <li className=' font-medium'> {info.key}. {info.title}
          <p className=' font-normal pb-4 '>{info.content}</p>
        </li>
      </ol>
      ))}
    </div>
  );
}

export default Page3;