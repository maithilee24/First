import React from 'react';
import entryinfo from '../Entryinfo';
import page1Info from '../Page4Info';

function Page4() {
  return (
    <div className='px-10 py-6 sm:px-16 sm:py-6 md:px-20 md:py-8 lg:px-28 lg:py-10 xl:px-48 xl:py-12 bg-[#F0F8FF]' >
      <h1 className="font-bold  text-lg sm:text-xl sm:pb-3 md:text-2xl md:pb-4 lg:text-3xl lg:pb-4 xl:text-5xl">{entryinfo[3].title}</h1>
      <div className='flex flex-col sm:flex-row'>
      <p className='
      text-[0.7rem] pb-4
      sm:text-[0.55rem] sm:pr-[1.5rem] sm:pb-6
      md:text-[0.65rem] md:pr-[2rem] md:pb-6
      lg:text-[0.8rem] lg:pr-[2.5rem] lg:pb-6
      xl:text-base xl:pt-10 xl:pr-[3.2rem] xl:pb-6'>
      In today's digital era, businesses are confronted with the imperative to innovate, adapt, and thrive in a landscape characterized by constant change and disruption. In this dynamic environment, cloud computing has emerged as a foundational pillar, empowering organizations to navigate complexity, unlock new possibilities, and drive sustainable growth. By embracing a cloud-first approach, businesses can leverage the inherent scalability, flexibility, and efficiency of cloud technologies to revolutionize their operations and achieve strategic objectives. The shift towards a cloud-first mindset represents more than just a technological transition; it embodies a fundamental shift in organizational mindset and strategy. It signifies a commitment to harnessing the transformative power of cloud computing to drive innovation, enhance agility, and optimize performance across all facets of business operations.
      </p>
      <img className=" pb-4 w-auto h-1/3 sm:h-auto sm:w-1/2 " src={entryinfo[3].imgURL} alt="AI and RPA"  />
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

export default Page4;