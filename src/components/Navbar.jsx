import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BearImg from "./ProjectImages/BearImg.webp";
import LogoImg from "./ProjectImages/Logo.gif"; // Import the logo image

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF size={20} color="#F7F9F2" />,
      name: "Facebook",
    },
    { id: 2, icon: <FaTwitter size={20} color="#F7F9F2" />, name: "Twitter" },
    {
      id: 3,
      icon: <FaLinkedinIn size={20} color="#F7F9F2" />,
      name: "LinkedIn",
    },
    {
      id: 4,
      icon: <FaInstagram size={20} color="#F7F9F2" />,
      name: "Instagram",
    },
  ];

  return (
    <main style={{ marginTop: "2rem" }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{
              opacity: 0,
              width: "0vw",
              height: "0vh",
              borderRadius: "70%",
            }}
            animate={{
              opacity: 1,
              width: "97vw",
              height: "90vh",
              borderRadius: "1rem",
              padding: "10px",
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ duration: 0.80, ease: "easeOut" }}
            className="nav-main"
            style={{
              backgroundColor: "#3C3D37",
              color: "#F7F9F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between ",
              top: "5vh",
              right: "3vh",
              zIndex: "10",
              position: "absolute",
            }}
          >
            {/* Navigation Links */}
            <div className="NavLinks">
              <ul
                className="flex flex-col gap-4 text-xl"
                style={{ display: "flex", gap: "3rem", marginLeft: "5rem" }}
              >
                <li>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="second-section">
              <div
                className=""
                style={{ maxWidth: "25vw", width: "100%", minWidth: "15vw" }}
              >
                <img src={BearImg} alt="Random Visual" />
              </div>

              {/* Social Links Section */}
              <div
                className="social-links flex gap-4 mt-4"
                style={{
                  marginLeft: "5rem",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                  marginTop: "2rem",
                }}
              >
                {socialLinks.map((link) => (
                  <div key={link.id} className="social-icon-container">
                    <div
                      style={{
                        border: "1px solid #F7F9F2",
                        cursor: "pointer",
                        borderRadius: "50%",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      className="icon-circle"
                    >
                      {link.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar Trigger */}
      <nav className="z-50 flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="logo-container">
          <Link to="/">
            <img
              src={LogoImg}
              alt="Logo"
              style={{ width: "50px", marginLeft :  '1rem'}} // Set desired size
            />
          </Link>
        </div>

        {/* Burger Menu */}
        <div
          style={{ backgroundColor: "#B6FFA1" }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={toggleMenu}
          className={`bg-white z-50 flex items-center rounded-full gap-4 px-1 py-1 transition-all duration-500 ${
            isOpen ? "w-16 h-16" : "w-auto"
          }`}
        >
          {/* Burger Menu Icon */}
          <div className="flex z-50 w-10 items-center justify-end cursor-pointer">
            <div className="flex flex-col w-6 gap-[6px]">
              <div
                className={`h-[2px] w-full bg-black duration-300 origin-center ${
                  isOpen ? "rotate-[45deg] translate-y-1 " : ""
                }`}
              ></div>
              <div
                className={`h-[2px] w-full bg-black duration-300 origin-center ${
                  isOpen ? "-rotate-[45deg] -translate-y-1 " : ""
                }`}
              ></div>
            </div>
          </div>

          {/* Menu Text and Icon */}
          {!isOpen && (
            <div className="flex z-50 items-center justify-between gap-2 transition-all duration-500 ease-in-out">
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${
                  isHover ? "max-w-[100px]" : "max-w-0"
                }`}
              >
                <h3
                  className={`font-semibold text-base transition-opacity duration-500 ${
                    isHover ? "opacity-100 delay-200" : "opacity-0"
                  }`}
                >
                  MENU
                </h3>
              </div>

              {/* Animated Hand Icon */}
              <div className="bg-[#3ADD8A] rounded-full z-50 cursor-pointer overflow-hidden">
                <motion.img
                  animate={{ rotate: [0, 0, -40, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 2,
                    duration: 1,
                    ease: "linear",
                  }}
                  style={{ originX: 1 }}
                  src="https://www.bikebear.com.my/wp-content/uploads/2022/10/Mask-Group-34014.png"
                  alt="hand"
                  className="w-16 translate-y-10 z-50"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
