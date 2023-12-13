import "./index.css";
import menuIcon from "/menu-icon.svg";
import { useState } from "react";

const menuItems = [
   { href: "#about", text: "O nas" },
   { href: "#timetable", text: "Godziny otwarcia" },
   { href: "#reservation", text: "Rezerwacja" },
   { href: "#pricing", text: "Cennik" },
   { href: "#contact", text: "Kontakt" },
   { href: "", text: "Zaloguj" }, // yet to be implemented
];
interface NavbarProps {
   className: string;
}

const Navbar = ({ className }: NavbarProps) => {
   const [menuOpen, setMenuOpen] = useState(false);
   const toggleMenu = () => setMenuOpen(menuOpen => !menuOpen);
   return (
      <div className={className}>
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
                  <a
                     href={item.href}
                     className="transition duration-300 hover:text-yellow-200"
                     onClick={toggleMenu}
                  >
                     {item.text}
                  </a>
               </li>
            ))}
         </ul>{" "}
      </div>
   );
};

export default Navbar;
