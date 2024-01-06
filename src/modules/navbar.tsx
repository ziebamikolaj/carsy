import { Link } from "react-router-dom";
import menuIcon from "/menu-icon.svg";
import { useState } from "react";

const menuItems = [
   { href: "/#about", text: "O nas" },
   { href: "/#timetable", text: "Godziny otwarcia" },
   { href: "/#reservation", text: "Rezerwacja" },
   { href: "/#pricing", text: "Cennik" },
   { href: "/#contact", text: "Kontakt" },
   { href: "/login", text: "Zaloguj" }, // yet to be implemented
];

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const toggleMenu = () => setMenuOpen(menuOpen => !menuOpen);
   return (
      <div className="fixed z-50 flex w-full scroll-mt-12 items-center justify-center bg-nav-bg pt-16 text-font-primary md:pt-2">
         <img
            src="/carsy-logo.webp"
            alt="Carsy logo"
            className="h-18 fixed left-0 top-0 ml-0.5 mt-1 w-64 md:static md:mt-0 "
         />
         <img
            src={menuIcon}
            alt="menu icon"
            className="fixed right-8 top-4 h-8 w-8 cursor-pointer md:mt-0 md:hidden"
            onClick={toggleMenu}
         />
         <ul
            className={`flex h-screen flex-col items-center justify-center gap-4 p-2 ${
               menuOpen ? "flex" : "hidden"
            } md:mr-6 md:flex md:h-full md:w-5/6 md:flex-row md:flex-nowrap md:justify-end md:gap-0 md:p-0 md:text-xl`}
         >
            {menuItems.map((item, index) => (
               <li key={index} className="md:ml-4">
                  <Link
                     to={item.href}
                     className="transition duration-300 hover:text-yellow-200"
                     onClick={toggleMenu}
                  >
                     {item.text}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Navbar;
