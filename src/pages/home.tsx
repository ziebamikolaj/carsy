import AboutUs from "../modules/about-us";
import "./index.css";
import Service from "../modules/service";
import Timetable from "../modules/timetable";
import Reservation from "../modules/reservation";
import Pricelist from "../modules/price-list";
import Contact from "../modules/contact";

const Home = () => (
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
);
export default Home;
