import React, { useContext } from "react";
import entryinfo from '../Entryinfo';
import page1Info from '../Page2Info';
import DarkModeContext from "../DarkModeContext";

function Page2() {

  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`px-10 py-6 sm:px-16 sm:py-6 md:px-20 md:py-8 lg:px-28 lg:py-10 xl:px-48 xl:py-12 ${isDarkMode ? "text-[#F0F8FF]" : "text-[#212529]"} ${isDarkMode ? "bg-[#212529]" : "bg-[#F0F8FF]"}`} >
      <h1 className="font-bold  text-lg sm:text-xl sm:pb-3 md:text-2xl md:pb-4 lg:text-3xl lg:pb-4 xl:text-5xl">{entryinfo[1].title}</h1>
      <div className='flex flex-col sm:flex-row'>
      <p className='
      text-[0.7rem] pb-4
      sm:text-[0.55rem] sm:pr-[1.5rem] sm:pb-6
      md:text-[0.65rem] md:pr-[2rem] md:pb-6
      lg:text-[0.8rem] lg:pr-[2.5rem] lg:pb-6
      xl:text-base xl:pt-10 xl:pr-[3.2rem] xl:pb-6'>
      In today's rapidly evolving digital landscape, businesses face unprecedented challenges and opportunities. To thrive in this dynamic environment, organizations must make bold choices that transcend conventional thinking and propel them towards market-changing ideas. This requires a strategic shift towards digital-focused strategies that leverage technology, innovation, and agility to drive meaningful impact and secure a competitive edge. Embracing digital-focused strategies enables businesses to navigate the complexities of the modern marketplace with confidence and resilience. It empowers organizations to unlock new opportunities, reimagine traditional business models, and redefine industry standards. By harnessing the transformative power of digital technologies, businesses can not only adapt to change but also lead it, positioning themselves as pioneers in their respective fields.
      </p>
      <img className=" pb-4 w-auto h-1/3 sm:h-auto sm:w-1/2 " src={entryinfo[1].imgURL} alt="AI and RPA"  />
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

export default Page2;