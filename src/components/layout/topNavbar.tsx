"use client";

import { useState } from "react";
import Link from "next/link";




const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentNav, setCurrentNav] = useState('home');   
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClickNav = (nav:string) => {
    setCurrentNav(nav);
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-bg backdrop-blur-md border border-gray-200 bg-webkit">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
         
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
             
              <Link
                href="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-[#F7F2FF] hover:text-[#852DFE] ${currentNav === "about"? "bg-[#F7F2FF]": ""}`}
                onClick={(_e) => onClickNav("about")}
              >
                এবাউট

              </Link>
              <Link
                href="/blog"
                className={`px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-[#F7F2FF] hover:text-[#852DFE] ${currentNav === "contact"? "bg-[#F7F2FF]": ""}`}
                onClick={(_e) => onClickNav("contact")}
              >
                ব্লগ 
              </Link>
           
            </div>
          </div>
          
        
       
        </div>
      </div>

    
    </nav>
  );
};

export default TopNavbar;
