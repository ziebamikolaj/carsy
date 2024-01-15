import { useQuery } from "@tanstack/react-query";
import { HashLink } from "react-router-hash-link";
import { toast } from "react-toastify";

type Car = {
   id: string;
   make: string;
   model: string;
   year: number;
   vin: string;
};

const YourCars = () => {
   const { data: myCars } = useQuery<Car[]>({
      queryKey: ["myCars"],
      queryFn: async () => {
         const res = await fetch(
            `${import.meta.env.VITE_API_URL}/cars/mycars`,
            {
               credentials: "include",
            }
         );
         return res.json() as Promise<Car[]>;
      },
   });

   const deleteCar = async (id: string) => {
      const res = await fetch(
         `${import.meta.env.VITE_API_URL}/cars/deletemycar/${id}`,
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

   const handleDeleteCar = async (id: string) => {
      toast.promise(deleteCar(id), {
         pending: "Usuwanie samochodu...",
         success: {
            render() {
               return "Samochód usunięty pomyślnie!";
            },
         },
         error: "Usuwanie samochodu nie powiodło się. Proszę spróbować ponownie.",
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

            <form className="col-span-1 flex flex-col rounded-xl bg-nav-bg p-5 text-font-primary">
               <h1 className="p-10 text-3xl font-bold text-yellow-600">
                  Twoje samochody
               </h1>
               {myCars?.length === 0 && (
                  <label
                     htmlFor="carModel"
                     className="text-m font-bold text-yellow-600"
                  >
                     Nie masz jeszcze żadnych samochodów
                  </label>
               )}

               {myCars != undefined && myCars?.length > 0 && (
                  <ol className="custom-scrollbar mt-2 max-h-64 w-full list-decimal overflow-y-auto px-5">
                     {myCars.map((car, index) => (
                        <li
                           key={index}
                           className="mt-4 text-lg font-bold text-yellow-600"
                        >
                           <div>
                              <div className="inline-block w-1/2">Marka:</div>
                              <div className="inline-block w-1/2 text-right text-font-primary">
                                 {car.make}
                              </div>
                           </div>
                           <div>
                              <div className="inline-block w-1/2">Model:</div>
                              <div className="inline-block w-1/2 text-right text-font-primary">
                                 {car.model}
                              </div>
                           </div>
                           <div>
                              <div className="inline-block w-1/2">Rocznik:</div>
                              <div className="inline-block w-1/2 text-right text-font-primary">
                                 {car.year}
                              </div>
                           </div>
                           <div>
                              <div className="inline-block w-1/2">VIN:</div>
                              <div className="inline-block w-1/2 text-right text-font-primary">
                                 {car.vin}
                              </div>
                           </div>
                           <img
                              src="/bin.png"
                              alt="Delete"
                              onClick={() => handleDeleteCar(car.id)}
                              className="mt-4 w-12  cursor-pointer"
                           />
                        </li>
                     ))}
                  </ol>
               )}

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
