import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header({ scrollToSection = {} }) {
  const [isOpen, setIsOpen] = useState(false);

  // safely call functions if they exist
  const handleClick = (section) => {
    if (scrollToSection[section]) {
      scrollToSection[section]();
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#AB6969] opacity-80 p-2 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex justify-evenly items-center">
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <img src='src/assets/vecte.png' className='h-[50px] w-[100px]' alt="logo" />
          <h1 className='text-[25px]'>Ethiopian Calendar</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex bg-[#D9D9D9] text-[#0E008E] py-2 px-5 rounded-md space-x-6">
          <li className="hover:text-black cursor-pointer" onClick={() => handleClick('home')}>Home</li>
          <li className="hover:text-black cursor-pointer" onClick={() => handleClick('history')}>History</li>
          <li className="hover:text-black cursor-pointer" onClick={() => handleClick('calendar')}>Calendar</li>
          <li className="hover:text-black cursor-pointer" onClick={() => handleClick('historynew')}>Learn</li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#0E008E]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#D9D9D9] text-[#0E008E] space-y-4 p-4">
          <li onClick={() => handleClick('home')}>Home</li>
          <li onClick={() => handleClick('history')}>History</li>
          <li onClick={() => handleClick('calendar')}>Calendar</li>
          <li onClick={() => handleClick('historynew')}>Find lost days</li>
          <li onClick={() => handleClick('learn')}>Learn</li>
        </ul>
      )}
    </nav>
  );
}
