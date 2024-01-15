import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

type Car = {
   id: string;
   make: string;
   model: string;
   year: number;
   vin: string;
};
interface serviceTypeItem {
   serviceTypeID: number;
   name: string;
   price: number;
}

const SetAppointment = () => {
   const [formValues, setFormValues] = useState({
      phoneNumber: "",
      date: "",
      time: "",
      carModel: "",
      issueDescription: "",
   });

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

   const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

   useEffect(() => {
      const areAllFieldsFilled = Object.values(formValues).every(
         field => field.trim() !== ""
      );
      setIsSubmitEnabled(areAllFieldsFilled);
   }, [formValues]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormValues(prevState => ({
         ...prevState,
         [name]: value,
      }));
   };
   const { data: priceList } = useQuery<serviceTypeItem[]>({
      queryKey: ["priceList"],
      queryFn: async () => {
         const res = await fetch(
            `${import.meta.env.VITE_API_URL}/servicetype/all`,
            {
               credentials: "include",
            }
         );
         return res.json() as Promise<serviceTypeItem[]>;
      },
   });
   const handleSubmit = async () => {
      // API request logic here...
   };

   return (
      <div className="flex h-screen flex-col items-center justify-center bg-bg-primary">
         <div className="flex flex-col items-center justify-center rounded-xl bg-nav-bg p-5 text-font-primary">
            <HashLink
               to="/account"
               className="mb-4 inline-block rounded bg-bg-secondary px-4 py-2 text-lg font-bold text-font-primary transition duration-300 ease-in-out hover:opacity-50"
            >
               Powrót
            </HashLink>

            <form className="grid gap-4">
               <label
                  htmlFor="phoneNumber"
                  className="text-sm font-bold text-yellow-600"
               >
                  Numer telefonu:
               </label>
               <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               />

               <label
                  htmlFor="date"
                  className="text-sm font-bold text-yellow-600"
               >
                  Data:
               </label>
               <input
                  type="date"
                  id="date"
                  name="date"
                  value={formValues.date}
                  onChange={handleChange}
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               />

               <label
                  htmlFor="time"
                  className="text-sm font-bold text-yellow-600"
               >
                  Godzina:
               </label>
               <input
                  type="time"
                  id="time"
                  name="time"
                  min="7"
                  max="17"
                  value={formValues.time}
                  onChange={handleChange}
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               />

               <label
                  htmlFor="carModel"
                  className="text-sm font-bold text-yellow-600"
               >
                  Samochód:
               </label>
               <select
                  id="carModel"
                  name="carModel"
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               >
                  {myCars?.length === 0 ? (
                     <option value="addCar">
                        <HashLink
                           to={"/your-cars/add-car"}
                           className="text-font-primary"
                        >
                           Add a car!
                        </HashLink>
                     </option>
                  ) : (
                     myCars?.map(car => (
                        <option key={car.id} value={car.id}>
                           {car.make} {car.model} {car.year}r.
                        </option>
                     ))
                  )}
               </select>

               <label
                  htmlFor="issueDescription"
                  className="text-sm font-bold text-yellow-600"
               >
                  Serwis:
               </label>
               <select
                  id="issueDescription"
                  name="issueDescription"
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               >
                  {priceList?.map(service => (
                     <option key={service.name} value={service.serviceTypeID}>
                        {service.name} - {service.price}zł
                     </option>
                  ))}
               </select>

               <div className="group relative">
                  <button
                     type="submit"
                     disabled={!isSubmitEnabled}
                     className={`mt-4 w-full rounded bg-bg-primary px-4 py-2 text-lg font-bold text-font-primary transition duration-300 ease-in-out hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-nav-bg hover:opacity-50${
                        isSubmitEnabled ? "" : "cursor-not-allowed opacity-50"
                     }`}
                     onClick={e => {
                        e.preventDefault();
                        handleSubmit();
                     }}
                  >
                     Umów Wizytę
                  </button>

                  {!isSubmitEnabled && (
                     <div className="absolute -bottom-14 hidden rounded-md bg-black px-3 py-1 text-sm text-white group-hover:block">
                        Proszę wypełnić wszystkie pola
                     </div>
                  )}
               </div>
            </form>
         </div>
      </div>
   );
};

export default SetAppointment;
