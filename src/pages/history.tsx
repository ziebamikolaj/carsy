import { HashLink } from "react-router-hash-link";

const History = () => {
   const handleSubmit = async () => {
      // API request logic here...
   };

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
                  Ostatnie naprawy
               </h1>
               <label
                  htmlFor="carModel"
                  className="text-m font-bold text-yellow-600"
               >
                  [Data]:
               </label>
               # opis usterki - koszt
               <label
                  htmlFor="carModel"
                  className="text-m font-bold text-yellow-600"
               >
                  [Data]:
               </label>
               # opis usterki - koszt
               <label
                  htmlFor="carModel"
                  className="text-m font-bold text-yellow-600"
               >
                  [Data]:
               </label>
               # opis usterki - koszt
               <label
                  htmlFor="carModel"
                  className="text-m font-bold text-yellow-600"
               >
                  [Data]:
               </label>
               # opis usterki - koszt
               <label
                  htmlFor="carModel"
                  className="text-m font-bold text-yellow-600"
               >
                  [Data]:
               </label>
               # opis usterki - koszt
               <div className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-nav-bg p-5 text-font-primary">
                  <button className="mb-4 inline-block rounded bg-bg-secondary p-10 px-4 py-2 text-lg font-bold text-font-primary transition duration-300 ease-in-out hover:opacity-50">
                     Pobierz pełną historię
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default History;
