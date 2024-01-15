import { HashLink } from "react-router-hash-link";

const YourCars = () => {
   return (
      <div className="flex h-screen flex-col items-center justify-center bg-bg-primary">
         <div className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-nav-bg p-5 text-font-primary">
            <HashLink
               to="/account"
               className="mb-4 inline-block rounded bg-bg-secondary px-4 py-2 text-lg font-bold text-font-primary transition duration-300 ease-in-out hover:opacity-50"
            >
               Powrót
            </HashLink>

            <form className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-nav-bg p-5 text-font-primary">
               <h1 className="p-10 text-3xl font-bold text-yellow-600">
                  Samochód 1 [ew. imie samochodu z API]
               </h1>
               <label
                  htmlFor="carModel"
                  className="text-m font-bold text-yellow-600"
               >
                  Marka i model samochodu:
               </label>
               # Tutaj chcemy dodać inputa, który będzie pobierał z API dane na
               temat marki i modelu samochodu
               <label
                  htmlFor="year"
                  className="text-m font-bold text-yellow-600"
               >
                  Rok produkcji:
               </label>
               # Tutaj chcemy dodać inputa, który będzie pobierał z API dane na
               temat roku produkcji samochodu
               <label
                  htmlFor="color"
                  className="text-m font-bold text-yellow-600"
               >
                  Kolor pojazdu:
               </label>
               # Tutaj chcemy dodać inputa, który będzie pobierał z API dane na
               temat koloru samochodu
               <label
                  htmlFor="registrationNumber"
                  className="text-m font-bold text-yellow-600"
               >
                  Numer rejestracyjny:
               </label>
               # Tutaj chcemy dodać inputa, który będzie pobierał z API dane na
               temat numeru rejestracyjnego samochodu
               <div className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-nav-bg p-5 text-font-primary">
                  <HashLink
                     to="/your-cars/add-car"
                     className="mb-4 inline-block rounded bg-bg-secondary p-10 px-4 py-2 text-lg font-bold text-font-primary transition duration-300 ease-in-out hover:opacity-50"
                  >
                     Dodaj samochód
                  </HashLink>
               </div>
            </form>
         </div>
      </div>
   );
};

export default YourCars;
