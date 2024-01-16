import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { HashLink } from "react-router-hash-link";
import { format } from "date-fns";
import { toast } from "react-toastify";

type CarHistory = {
   serviceID: number;
   car: Car;
   date: string;
   serviceType: ServiceType;
};

type Car = {
   id: number;
   make: string;
   model: string;
   year: number;
   vin: string;
};

type ServiceType = {
   id: number;
   name: string;
   price: number;
};

const History = () => {
   const [showFullHistory, setShowFullHistory] = useState(false);
   const queryClient = useQueryClient();
   const { data: carHistory, isLoading } = useQuery<CarHistory[]>({
      queryKey: ["carHistory"],
      queryFn: async () => {
         const res = await fetch(
            `${import.meta.env.VITE_API_URL}/carhistory/all`,
            {
               credentials: "include",
               headers: {
                  "Content-Type": "application/json",
               },
            }
         );
         return res.json();
      },
   });

   if (isLoading) {
      return <div>Loading...</div>;
   }
   const historyToDisplay = showFullHistory
      ? carHistory
      : carHistory?.slice(-5);

   const deleteAppointment = async (id: number) => {
      const res = await fetch(
         `${import.meta.env.VITE_API_URL}/carhistory/appointment/delete/${id}`,
         {
            method: "DELETE",
            credentials: "include",
         }
      );
      if (!res.ok) {
         throw new Error(await res.text());
      }
      return await res.text();
   };
   const handleDeleteAppointment = async (id: number) => {
      toast.promise(deleteAppointment(id), {
         pending: "Usuwanie wizyty...",
         success: {
            render() {
               queryClient.invalidateQueries({ queryKey: ["carHistory"] });
               return "Wizyta usunięta pomyślnie!";
            },
         },
         error: "Usuwanie wizyty nie powiodło się. Proszę spróbować ponownie.",
      });
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

            <div className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-nav-bg p-5 text-font-primary">
               <h1 className="p-10 text-3xl font-bold text-yellow-600">
                  Twoje wizyty
               </h1>
               <ul className="custom-scrollbar max-h-96 overflow-y-auto px-4">
                  {historyToDisplay?.map((historyItem, index) => (
                     <li key={index} className="mb-4">
                        <div>
                           {" "}
                           <div className="inline-block w-1/2 text-lg font-bold text-yellow-600">
                              Data:{" "}
                           </div>
                           <div className="inline-block w-1/2 text-right text-font-primary">
                              {format(new Date(historyItem.date), "yyyy-MM-dd")}
                           </div>
                        </div>
                        <div>
                           <div className="inline-block w-1/2 text-lg font-bold text-yellow-600">
                              Samochód:{" "}
                           </div>
                           <div className="inline-block w-1/2 text-right text-font-primary">
                              {historyItem.car.make} {historyItem.car.model} (
                              {historyItem.car.year})
                           </div>
                        </div>
                        <div>
                           {" "}
                           <div className="inline-block w-1/4 align-top text-lg font-bold text-yellow-600">
                              Usługa:{" "}
                           </div>
                           <div className="inline-block w-3/4 text-right text-font-primary">
                              {historyItem.serviceType?.name ||
                                 "Brak informacji"}{" "}
                              - {historyItem.serviceType?.price || "Brak ceny"}{" "}
                              zł
                           </div>
                        </div>{" "}
                        <div className="-mt-5 flex w-full items-end justify-end">
                           <img
                              src="/bin.png"
                              alt="Delete"
                              onClick={() =>
                                 handleDeleteAppointment(historyItem.serviceID)
                              }
                              className="mt-4 w-8 cursor-pointer"
                           />
                        </div>
                     </li>
                  ))}
               </ul>
               <button
                  className="mt-4 rounded bg-bg-secondary px-4 py-2 text-lg font-bold text-font-primary transition duration-300 ease-in-out hover:opacity-50"
                  onClick={() => setShowFullHistory(!showFullHistory)}
               >
                  {showFullHistory ? "Pokaż mniej" : "Pobierz pełną historię"}
               </button>
            </div>
         </div>
      </div>
   );
};

export default History;
