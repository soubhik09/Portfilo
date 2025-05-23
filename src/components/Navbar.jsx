import React, { useState } from "react";
import logo from "../assets/logo.png"
import { NAVIGATION_LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
            <div className="flex justify-between gap-6">
                <a href="#">
                    <img src={logo} width={75} alt="logo" className="scale-120"/>
                </a>
           
                <ul className="flex items-center gap-4">
                    {NAVIGATION_LINKS.map((item, index)=>(
                        <li key={index}>
                            <a className="text-sm hover:text-yellow-400" href={item.href} onClick={(e)=>handleLinkClick(e, item.href)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden bg-black/20">
            <div className="flex items-center justify-between h-[70px]">
                <div>
                    <a href="#">
                        <img src={logo} width={20} alt="logo" className="m-12 scale-500"/>
                    </a>
                </div>
                <div className="flex items-center">
                    <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (<FaTimes className="m-4 h-6 w-5"/>) : (<FaBars className="m-4 h-6 w-5"/>)}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (<ul className="ml-4 mt-4 flex flex-col gap-4">
                {NAVIGATION_LINKS.map((item,index)=>(
                    <li key={index}>
                        <a className="block w-full text-md font-semibold pb-5" href={item.href} onClick={(e)=>handleLinkClick(e,item.href)}>{item.label}</a>
                    </li>
                ))}
            </ul>)}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
