import React from "react";
import Entry from "./Entry";
import entryinfo from "../Entryinfo";
import { useDarkMode } from "../DarkModeContext";

function Home() {
  
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`m-0 min-h-screen pt-6 pr-10 pl-10 
      sm:pt-4 sm:px-12 md:px-14 
      lg:px-20 lg:pt-6 
      xl:px-52 xl:pt-7   
      ${isDarkMode ? "text-[#F0F8FF]" : "text-[#212529]"} ${isDarkMode ? "bg-[#212529]" : "bg-[#F0F8FF]"} transition-colors duration-300 ease-in-out delay-10`}>
      <div>
        <h4 className="font-bold pb-3
         sm:pl-4 lg:pb-8
          xl:pb-8 xl:pl-8 lg:pl-6 text-xs 
          sm:text-sm md:text-base lg:text-xl xl:text-2xl hover:scale-105 hover:opacity-50 transition-all duration-500 hover:cursor-pointer">Lets Collaborate</h4>
      </div>
      {entryinfo.map(entry => (
        <Entry className="dark:text-white"
          key={entry.key}
          title={entry.title}
          content={entry.content}
          img={entry.imgURL}
          linkContent={entry.linkContent}
          link={entry.link}
          isNightMode={isDarkMode}
        />
      ))}
      <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-10">
        <button className={` px-1 py-1 text-[0.6rem] w-28 h-[1.7rem]
         sm:px-1 sm:py-1 sm:w-28 sm:h-8 sm:text-[0.6rem] 
         md:px-[0.4rem] md:py-[0.4rem] md:w-36 md:h-8 md:text-[0.7rem]
        lg:px-1 lg:py-1 lg:w-[11rem] lg:h-10 lg:text-base 
        xl:px-2 xl:py-2 xl:w-56 xl:h-12 xl:text-[1.2rem] ${isDarkMode ? "text-[#212529]" : "text-[#F0F8FF]"} ${isDarkMode ? "bg-[#F0F8FF]" : "bg-[#212529]"}`}
        onClick={toggleDarkMode} >Toggle Night mode</button>
      </div>
    </div>
  );
}

export default Home;