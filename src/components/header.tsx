import React from "react";
import Link from "next/link";
import { RiQuillPenAiLine } from "react-icons/ri";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex flex-row items-center title-font font-medium text-gray-900 mb-4 md:mb-0">
            <Link href={"/#"} className="flex items-center space-x-2">
              <RiQuillPenAiLine className="text-3xl text-blue-950 mt-1" />
              <span className="text-3xl text-blue-950 font-bold">
                Studio Blog
              </span>
            </Link>
          </div>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/"}
              className="mr-5 hover:text-gray-900 relative text-black transition-all duration-400 
         after:content-[''] after:absolute after:left-0 after:bottom-[-5px] 
         after:h-[3px] after:w-full after:bg-violet-700 after:scale-0 
         after:origin-left after:transition-transform after:duration-400 
         hover:after:scale-100"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="mr-5 hover:text-gray-900 relative text-black transition-all duration-400 
         after:content-[''] after:absolute after:left-0 after:bottom-[-5px] 
         after:h-[3px] after:w-full after:bg-violet-700 after:scale-0 
         after:origin-left after:transition-transform after:duration-400 
         hover:after:scale-100"
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="mr-5 hover:text-gray-900 relative text-black transition-all duration-400 
         after:content-[''] after:absolute after:left-0 after:bottom-[-5px] 
         after:h-[3px] after:w-full after:bg-violet-700 after:scale-0 
         after:origin-left after:transition-transform after:duration-400 
         hover:after:scale-100"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
