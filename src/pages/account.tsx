import { SetStateAction, useState } from "react";
import UmowWizytePage from "./set-appointment";
import DodajSamochodPage from "./add-car";
import TwojaHistoriaPage from "./history";
import { Link, useHistory } from "react-router-dom";

const Account = () => {
   const history = useHistory();

   const handleNavigateToAppointment = () => {
      history.push("/set-appointment");
   };
   const [currentPage, setCurrentPage] = useState("");

   const navigateTo = (page: SetStateAction<string>) => {
      setCurrentPage(page);
   };

   const renderPage = () => {
      switch (currentPage) {
         case "umow-wizyte":
            return <UmowWizytePage />;
         case "dodaj-samochod":
            return <DodajSamochodPage />;
         case "twoja-historia":
            return <TwojaHistoriaPage />;
         default:
            return (
               <div
                  style={{
                     backgroundImage: "url('/account-bg.jpg')",
                     padding: "20px", // Dodaj padding dla przycisków
                  }}
                  className="text-upper flex min-h-screen flex-col items-center justify-center bg-bg-primary"
               >
                  <h2 className="mb-6 mt-4 text-6xl font-bold text-yellow-600">
                     Witaj użytkowniku!
                  </h2>

                  <div className="flex flex-col gap-4">
                     {" "}
                     {/* Dodaj większy odstęp między przyciskami */}
                     <button
                        onClick={() => navigateTo("umow-wizyte")}
                        className="rounded bg-red-950 px-4 py-2 text-4xl font-bold text-white text-yellow-600 hover:bg-yellow-600 hover:text-red-950"
                     >
                        Umów wizytę
                     </button>
                     <button
                        onClick={() => navigateTo("dodaj-samochod")}
                        className="rounded bg-red-950 px-4 py-2 text-4xl font-bold text-white text-yellow-600 hover:bg-yellow-600 hover:text-red-950"
                     >
                        Dodaj samochód
                     </button>
                     <button
                        onClick={() => navigateTo("twoja-historia")}
                        className="rounded bg-red-950 px-4 py-2 text-4xl font-bold text-white text-yellow-600 hover:bg-yellow-600 hover:text-red-950"
                     >
                        Twoja historia
                     </button>
                  </div>
               </div>
            );
      }
   };

   return renderPage();
};

export default Account;
