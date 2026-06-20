import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFFDFB] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold text-[#7A5C4D]">
        heyitshakira.web
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#" className="hover:text-pink-600">Home</a>
          <a href="#" className="hover:text-pink-600">Features</a>
          <a href="#" className="hover:text-pink-600">How It Works</a>

          <button className="bg-pink-600 text-white px-5 py-2 rounded-full">
            Create Story
          </button>
        </div>

        {/* Mobile Button */}
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl text-[#7A5C4D]"
        >
        {isOpen ? <HiX /> : <GiHamburgerMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col px-4 py-4 space-y-4">

            <a href="#" className="hover:text-pink-600">
              Home
            </a>

            <a href="#" className="hover:text-pink-600">
              Features
            </a>

            <a href="#" className="hover:text-pink-600">
              How It Works
            </a>

            <button className="bg-pink-600 text-white py-3 rounded-full">
              Create Story
            </button>

          </div>

        </div>
      )}
    </nav>
  );
}