import React, { useState } from "react";
import logo from '../images/Logo.png'
import { Menu, X } from "lucide-react";
import Button from "./button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-tr from-lime-300 to-lime-100 via-green-600pt-7 py-3  shadow-md gap-x fixed top-0 z-50 w-full">
      <div className="flex px-4 md:px-0 justify-between md:justify-evenly items-center">
            <div className="">
                <img src={logo} alt='logo' className="w-40" />
            </div>
            {/* Hamburger Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 text-green-950 cursor-pointer">
                <motion.li 
                whileHover={{ scale: 1.1, color: "green" }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="hover:text-green-700 border-">Personal Loan</motion.li>
                <motion.li 
                whileHover={{ scale: 1.1, color: "green" }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="hover:text-green-700">One Card</motion.li>
                <motion.li 
                whileHover={{ scale: 1.1, color: "green" }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="hover:text-green-700">Savings</motion.li>
                <motion.li 
                whileHover={{ scale: 1.1, color: "green" }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="hover:text-green-700">Checking</motion.li>
                <motion.li 
                whileHover={{ scale: 1.1, color: "green" }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="hover:text-green-700">Help</motion.li>
            </ul>

            <motion.div 
            whileHover={{ scale: 1.05, backgroundColor: "", color: "white" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="hidden md:flex">
                <Button
                variant='outline'
                size="medium"
                className="py-2 px-6 text-green-950 rounded-xl border-green-500"
                >Sign In</Button>
            </motion.div>
        </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center">
            <ul className="mt-4 flex flex-col gap-4 md:hidden items-center font-semibold">
                <li className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Personal Loan</li>
                <li className="hover:text-gray-200" onClick={() => setIsOpen(false)}>One Card</li>
                <li className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Savings</li>
                <li className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Checking</li>
                <li className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Help</li>
            </ul>
            <Button
            variant='outline'
            size="medium"
            className="py-2 px-6 rounded-xl border-green-900 mt-3"
            onClick={() => setIsOpen(false)}
            >Sign In</Button>
        </div>
        
        
      )}
    </nav>
  );
};

export default Navbar;
