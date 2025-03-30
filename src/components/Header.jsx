import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Navigate } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const RedirectToHome = () => {
    return <Navigate to="src/components/Home.jsx" />;
  };

  return (
    <nav className="bg-[#AB6969]  opacity-80  p-4">
      <div className="max-w-7xl mx-auto flex justify-evenly items-center">
        {/* Logo */}
        <div className='flex flex-row justify-center items-center'>
          <img src='src/assets/vecte.png' className='h-[50px] w-[100px]'></img>
           <h1 className='text-[25px]'>Ethiopian Calendar</h1> 
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex   text-[#0E008E] bg-[#D9D9D9] text-[#0E008E]mt-3 py-2 px-5 rounded-md space-x-6">
          <li className="hover:text-black"><a  onClick={RedirectToHome} href="#">Home</a></li>
          <li className="hover:text-black"><a href="#">History</a></li>
          <li className="hover:text-black"><a href="#">Calendar</a></li>
          <li className="hover:text-black"><a href="#">Find lost days</a></li>
          <li className="hover:text-black"><a href="#">Learn</a></li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-[#0E008E]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#D9D9D9] text-[#0E008E] space-y-4 p-4">
          <li className="hover:text-black"><a href="#">Home</a></li>
          <li className="hover:text-black"><a href="#">History</a></li>
          <li className="hover:text-black"><a href="#">Calendar</a></li>
          <li className="hover:text-black"><a href="#">Find lost days</a></li>
          <li className="hover:text-black"><a href="#">Learn</a></li>
        </ul>
      )}
    </nav>
  );
}
