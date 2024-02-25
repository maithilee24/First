import React, { useContext } from "react";
import entryinfo from '../Entryinfo';
import page1Info from '../Page1Info';
import DarkModeContext from "../DarkModeContext";

function Page1() {

  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`px-10 py-6 sm:px-16 sm:py-6 md:px-20 md:py-8 lg:px-28 lg:py-10 xl:px-48 xl:py-12  ${isDarkMode ? "text-[#F0F8FF]" : "text-[#212529]"} ${isDarkMode ? "bg-[#212529]" : "bg-[#F0F8FF]"}`} >
      <h1 className="font-bold  text-lg sm:text-xl sm:pb-3 md:text-2xl md:pb-4 lg:text-3xl lg:pb-4 xl:text-5xl">{entryinfo[0].title}</h1>
      <div className='flex flex-col sm:flex-row'>
      <p className='
      text-[0.7rem] pb-4
      sm:text-[0.55rem] sm:pr-[1.5rem] sm:pb-6
      md:text-[0.65rem] md:pr-[2rem] md:pb-6
      lg:text-[0.8rem] lg:pr-[2.5rem] lg:pb-6
      xl:text-base xl:pt-10 xl:pr-[3.2rem] xl:pb-6'>
      The combination of AI (Artificial Intelligence) with RPA (Robotic Process Automation) heralds a new era in business process optimization. RPA, leveraging software robots to automate repetitive tasks, and AI, endowed with cognitive capabilities such as natural language processing and machine learning, converge to create a potent synergy. This partnership holds the promise of significantly enhancing business operations across diverse industries. By integrating AI and RPA technologies, organizations can future-proof their operations, driving efficiency, boosting profitability, and delivering exceptional customer experiences. This introduction sets the stage for exploring the profound impact and transformative potential of AI with RPA in reshaping the landscape of modern business processes.
      </p>
      <img className=" pb-4 w-auto h-1/3 sm:h-auto sm:w-1/2 " src={entryinfo[0].imgURL} alt="AI and RPA"  />
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

export default Page1;