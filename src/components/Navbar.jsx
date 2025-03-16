import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  return (
    <div className="flex gap-5 sm:gap-10 text-xl text-neutral-200 flex-wrap text-center w-full items-end max-sm:text-lg">
      <Link to={'/ai'} className="max-sm:w-full">AI</Link>
      <Link to={'/health'} className="max-sm:w-full">Health</Link>
      <Link to={'/technology'} className="max-sm:w-full">Technology</Link>
      <Link to={'/other'} className="max-sm:w-full">Other</Link>
      <Link to={'/about'} className="max-sm:w-full">About</Link>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-400 ">
      <nav className=" py-4 container p-2 lg:px-24 mx-auto flex justify-between items-center relative">
        <div>
          <h1 className="text-white text-3xl sm:text-4xl font-bold uppercase">
            <Link to={'/'}>useful</Link>
          </h1>
        </div>
        <div className="max-sm:hidden">
          <Nav />
        </div>
        {isOpen && (
          <div onClick={() => setIsOpen(!isOpen)} className="sm:hidden absolute top-17 left-0 right-0 bg-blue-400 flex py-4 pb-5">
            <Nav />
          </div>
        )}
        <div onClick={() => setIsOpen(!isOpen)} className="hidden invert-100 cursor-pointer max-sm:block">
          {!isOpen && <div className="w-8 h-8"><img src="./menu.png" alt="Open menu" /></div>}
          {isOpen && <div className="w-8 h-8"><img src="./close (1).png" alt="Close menu" /></div>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
