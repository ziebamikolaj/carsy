import React from "react";
import AboutUs from "../modules/about-us.tsx";
import "./index.css";
import Service from "../modules/service.tsx";
import Timetable from "../modules/timetable.tsx";
import Reservation from "../modules/reservation.tsx";
import Pricelist from "../modules/price-list.tsx";
import Contact from "../modules/contact.tsx";

const Home = () => (
   <React.StrictMode>
      <div
         className="flex w-full flex-wrap justify-center bg-bg-primary text-font-primary md:pl-36 md:pr-36"
         id="home"
      >
         <AboutUs />
         <Service />
         <Timetable />
         <Reservation />
         <Pricelist />
         <Contact />
      </div>
   </React.StrictMode>
);
export default Home;
