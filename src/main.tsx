import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar.tsx";
import AboutUs from "./about-us.tsx";
import "./index.css";
import Service from "./service.tsx";

const App = () => (
   <React.StrictMode>
      <div className="flex h-screen flex-wrap">
         <Navbar className="fixed w-full bg-nav-bg" />
         <AboutUs className="mt-24 bg-black p-12 text-lg" />
         <Service className="bg-black p-12 text-lg" />
      </div>
   </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
export default App;
