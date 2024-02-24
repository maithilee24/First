import React, { useState } from "react";
import Entry from "./Entry";
import entryinfo from "../Entryinfo"; 

function Home() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className="m-0 min-h-screen pt-6 pr-10 pl-10 
    sm:pt-4 sm:px-12 md:px-14 
    lg:px-20 lg:pt-6 
    xl:px-52 xl:pt-7" style={{
      backgroundColor: isNightMode ? 'rgb(33, 37, 41)' : 'rgb(240, 248, 255)',
      color: isNightMode ? 'white' : 'rgb(33, 37, 41)',
    }}>
      <div>
        <h4 className="font-bold pb-3
         sm:pl-4 lg:pb-8
          xl:pb-8 xl:pl-8 lg:pl-6 text-xs 
          sm:text-sm md:text-base lg:text-xl xl:text-2xl">Lets Collaborate</h4>
      </div>
      {entryinfo.map(entry => (
        <Entry
          key={entry.key}
          title={entry.title}
          content={entry.content}
          img={entry.imgURL}
          linkContent={entry.linkContent}
          link={entry.link}
          isNightMode={isNightMode}
        />
      ))}
      <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-10">
        <button className="bg-stone-950 px-1 py-1 text-[0.6rem] w-28 h-[1.7rem]
         sm:px-1 sm:py-1 sm:w-28 sm:h-8 sm:text-[0.6rem] 
         md:px-[0.4rem] md:py-[0.4rem] md:w-36 md:h-8 md:text-[0.7rem]
        lg:px-1 lg:py-1 lg:w-[11rem] lg:h-10 lg:text-base 
        xl:px-2 xl:py-2 xl:w-56 xl:h-12 xl:text-[1.2rem] button-transition" 
        onClick={toggleNightMode} style={{
          backgroundColor: isNightMode ? 'white' : 'rgb(33, 37, 41)',
          color: isNightMode ? 'rgb(33, 37, 41)' : 'white',
          border: '1px solid white',
        }}>Toggle Night mode</button>
      </div>
    </div>
  );
}

export default Home;