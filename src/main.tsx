import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar.tsx";
import AboutUs from "./about-us.tsx";
import "./index.css";
import Service from "./service.tsx";
import Timetable from "./timetable.tsx";
import Reservation from "./reservation.tsx";
import Pricelist from "./price-list.tsx";
import Contact from "./contact.tsx";

const App = () => (
   <React.StrictMode>
      <div className="bg-bg-primary text-font-primary flex w-full flex-wrap justify-center md:pl-36 md:pr-36">
         <Navbar className="fixed z-50 flex w-full scroll-mt-12 items-center justify-center bg-nav-bg pt-16 md:-ml-36 md:-mr-36 md:pt-2" />
         <AboutUs className="mt-20 w-full scroll-mt-12 p-6 text-lg md:grid md:grid-cols-2 md:gap-x-5" />
         <Service className="scroll-mt-12 p-6 text-lg md:grid md:grid-cols-2 md:gap-x-12" />
         <Timetable className="w-full scroll-mt-12 p-6 text-lg md:text-2xl"></Timetable>
         <Reservation className="w-screen scroll-mt-16 text-lg md:-ml-36 md:-mr-36 md:text-3xl"></Reservation>
         <Pricelist className="w-full scroll-mt-12 p-6"></Pricelist>
         <Contact className="w-full scroll-mt-12 p-6 md:grid md:grid-cols-3 md:gap-x-5"></Contact>
      </div>
   </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
export default App;
