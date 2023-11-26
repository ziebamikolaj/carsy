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
         <div className="my-4 flex items-center justify-center">
            <img
               src="/carsy-logo.webp"
               alt="Carsy logo"
               className="h-18 w-72"
            />
            <img
               src={menuIcon}
               alt="menu icon"
               className="ml-8 mr-8 h-12 w-12 cursor-pointer md:hidden"
               onClick={toggleMenu}
            />
         </div>

         <ul
            className={`flex h-screen flex-col items-center justify-center gap-4 p-2 md:h-full ${
               menuOpen ? "flex" : "hidden"
            } md:mr-6 md:flex md:flex-row md:justify-end md:gap-0 md:p-0 md:text-xl`}
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
         </ul>
      </div>
   );
};

export default Navbar;
