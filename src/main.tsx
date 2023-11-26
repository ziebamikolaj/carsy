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
         <AboutUs className="mx-0 mt-24 gap-x-5 p-12 text-lg md:grid md:grid-cols-2" />
         <Service className="gap-x-12 p-12 text-lg md:grid md:grid-cols-2" />
      </div>
   </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
export default App;
