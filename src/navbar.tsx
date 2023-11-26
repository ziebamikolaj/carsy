import "./index.css";
import menuIcon from "/menu-icon.svg";
import React from "react";
const Navbar: React.FC<{ className?: string }> = ({ className }) => {
   const menuItems = [
      { href: "/about", text: "O nas" },
      { href: "/opening-times", text: "Godziny otwarcia" },
      { href: "/reservation", text: "Rezerwacja" },
      { href: "/pricing", text: "Cennik" },
      { href: "/contact", text: "Kontakt" },
      { href: "/login", text: "Zaloguj" },
   ];
   const [menuOpen, setMenuOpen] = React.useState(false);
   const toggleMenu = () => setMenuOpen(!menuOpen);
   return (
      <div className={className}>
         <div className="my-4 flex items-center justify-center pt-16 md:pt-0">
            <img
               src="/carsy-logo.webp"
               alt="Carsy logo"
               className="h-18 fixed left-5 top-0 mt-6 w-72 md:static "
            />
            <img
               src={menuIcon}
               alt="menu icon"
               className="fixed right-0 top-0 ml-8 mr-8 mt-8 h-12 w-12 cursor-pointer md:hidden"
               onClick={toggleMenu}
            />
            <ul
               className={`flex h-screen flex-col items-center justify-center gap-4 p-2 ${
                  menuOpen ? "flex" : "hidden"
               } md:mr-6 md:flex md:h-full md:w-5/6 md:flex-row md:flex-nowrap md:justify-end md:gap-0 md:p-0 md:text-xl`}
            >
               {menuItems.map((item, index) => (
                  <li key={index} className="md:ml-4">
                     <a
                        href={item.href}
                        className="text-white transition duration-300 hover:text-yellow-200"
                     >
                        {item.text}
                     </a>
                  </li>
               ))}
            </ul>{" "}
         </div>
      </div>
   );
};

export default Navbar;
