import styles from "../styles";
import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed w-full bg-blue-500 z-10 shadow-lg py-2 border-b-[1px] ">
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxwidth} max-w-[2520px] mx-auto py-10px my-10px xl:px-20 md:px-10 sm:px-2 px-4`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/">
              <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
            </a>

            {/* Navigation Links */}
            <ul className="list-none flex justify-end items-center sm:flex hidden">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-white"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Icon */}
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain sm:hidden"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          {/* Mobile Menu */}
          {toggle && (
            <div className="p-6 bg-blue-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar sm:hidden">
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false); // Close the mobile menu after clicking a link
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
