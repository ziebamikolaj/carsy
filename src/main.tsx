import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar.tsx";
import AboutUs from "./about-us.tsx";
import "./index.css";
import Service from "./service.tsx";

const App = () => (
   <React.StrictMode>
      <div className="flex flex-wrap justify-center bg-black">
         <Navbar className="fixed w-full bg-nav-bg" />
         <AboutUs className="mt-24 p-12 text-lg md:grid md:grid-cols-2 md:gap-x-5" />
         <Service className="p-12 text-lg md:grid md:grid-cols-2 md:gap-x-12" />
      </div>
   </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
export default App;
