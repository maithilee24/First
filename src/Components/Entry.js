import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DarkModeContext from "../DarkModeContext";

function Entry(props){

    const { isDarkMode } = useContext(DarkModeContext);
    

    return (
        <div className={`flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row ${isDarkMode ? "text-white" : "text-black"}`}>
            <div className="flex flex-col sm:w-1/2 sm:h-1/4 sm:pr-8 md:pr-14 lg:pr-20 xl:pr-24">
            <div className="pb-2">
            <h2 className="font-thin sm:pt-4 text-[1.6rem]
                    sm:text-2xl sm:pb-2 sm:pr-20
                    md:text-3xl md:pb-4 md:pr-16
                    lg:text-5xl lg:pb-6 lg:pr-12 lg:pt-4
                    xl:text-[3.5rem] xl:pb-8 xl:pr-10 xl:pt-8">
                    {props.title}</h2>
            </div>
                <div className=" block pb-3 sm:hidden md:hidden lg:hidden xl:hidden">
                    <img src={props.img} className="max-h-[12rem]"  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="pb-4">
                    <p className="font-medium text-[0.6rem]
                    sm:text-[0.6rem] sm:pb-2 
                    md:text-[0.7rem] md:pb-4
                    lg:text-[1rem] lg:pb-6  
                    xl:text-lg xl:pb-8">
                    {props.content}</p>
                </div>
                <Link to={props.link}>
                <div className="flex flex-row items-center">
                <p className={`font-bold ${isDarkMode ? "text-white" : "sm:text-black"} ${isDarkMode ? "" : "text-blue-700"} pr-2 text-xs sm:text-xs md:text-[0.8rem] lg:text-[1.1rem] xl:text-[1.4rem]`}>
                {props.linkContent}
                </p>
                <img className="ml-2 my-2 w-2 h-1
                    sm:w-4 sm:h-2 
                    md:w-6 md:h-2 
                    lg:w-8 lg:h-[0.6rem] 
                    xl:w-12 xl:h-[0.7rem]" src="images/BlackArrow.svg"/>
                </div>
                </Link>
            </div>
            <div className=" hidden sm:block md:block lg:block xl:block
            w-1/2 ">
                <img src={props.img} className=" sm:h-auto sm:max-h-[16rem] md:max-h-[18rem] lg:max-h-[20rem] xl:max-h-[22rem]"  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        </div>
    );
}

export default Entry;