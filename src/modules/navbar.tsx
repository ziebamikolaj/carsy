import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "/carsy-logo.webp";
import menuIcon from "/menu-icon.svg";
import { useQuery } from "@tanstack/react-query";

const menuItemsNotLogged = [
   { href: "/#about", text: "O nas" },
   { href: "/#timetable", text: "Godziny otwarcia" },
   { href: "/#reservation", text: "Rezerwacja" },
   { href: "/#pricing", text: "Cennik" },
   { href: "/#contact", text: "Kontakt" },
   { href: "/signin", text: "Zaloguj" },
   { href: "/signup", text: "Zarejestruj" },
];

const menuItemsLogged = [
   { href: "/#about", text: "O nas" },
   { href: "/#timetable", text: "Godziny otwarcia" },
   { href: "/#reservation", text: "Rezerwacja" },
   { href: "/#pricing", text: "Cennik" },
   { href: "/#contact", text: "Kontakt" },
   { href: "/account", text: "Konto" },
   { href: "/signout", text: "Wyloguj" },
];

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const toggleMenu = () => setMenuOpen(prevState => !prevState);

   const { data: isLoggedIn } = useQuery({
      queryKey: ["authCheck"],
      queryFn: async () => {
         const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/check`, {
            credentials: "include",
         });
         const resText = await res.text();
         if (res.ok) {
            return resText;
         } else {
            return false;
         }
      },
   });

   const menuItems = isLoggedIn ? menuItemsLogged : menuItemsNotLogged;

   return (
      <div
         className={`fixed z-50 flex ${
            menuOpen ? "h-full" : "h-auto"
         } w-full scroll-mt-12 items-center justify-center bg-nav-bg pt-16 text-font-primary md:h-auto md:pt-2`}
      >
         <HashLink to="/#home">
            <img
               src={logo}
               alt="Carsy logo"
               className="h-18 fixed left-0 top-0 ml-0.5 mt-1 w-64 md:static md:mt-0"
               onClick={() => setMenuOpen(false)}
            />
         </HashLink>
         <img
            src={menuIcon}
            alt="menu icon"
            className="fixed right-8 top-4 h-8 w-8 cursor-pointer md:mt-0 md:hidden"
            onClick={toggleMenu}
         />
         <ul
            className={`flex flex-col items-center justify-center gap-4 p-2 ${
               menuOpen ? "flex" : "hidden"
            }
               md:mr-6 md:flex md:h-full md:w-5/6 md:flex-row md:flex-nowrap md:justify-end md:gap-0 md:p-0 md:text-xl`}
         >
            {menuItems.map((item, index) => (
               <li key={index} className="md:ml-4">
                  <HashLink
                     to={item.href}
                     className="transition duration-300 hover:text-yellow-200"
                     onClick={() => setMenuOpen(false)}
                  >
                     {item.text}
                  </HashLink>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Navbar;
