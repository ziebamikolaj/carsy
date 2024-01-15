import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { toast } from "react-toastify";

const AddCar = () => {
   const [formValues, setFormValues] = useState({
      id: 0,
      make: "",
      model: "",
      year: "",
      vin: "",
   });

   const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

   useEffect(() => {
      const areAllFieldsFilled = Object.values(formValues).every(
         field => field.toString().trim() !== ""
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

   const addCar = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/cars/add`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
         body: JSON.stringify(formValues),
      });
      if (!res.ok) {
         throw new Error(await res.text());
      }
      return await res.text();
   };
   const handleSubmit = async () => {
      toast.promise(addCar(), {
         pending: "Dodawanie samochodu...",
         success: {
            render() {
               return "Samochód dodany pomyślnie!";
            },
         },
         error: "Dodawanie samochodu nie powiodło się. Proszę spróbować ponownie.",
      });
   };

   return (
      <div className="flex h-screen flex-col items-center justify-center bg-bg-primary">
         <div className="flex flex-col items-center justify-center rounded-xl bg-nav-bg p-5 text-font-primary">
            <HashLink
               to="/your-cars"
               className="mb-4 inline-block rounded bg-bg-secondary px-4 py-2 text-lg font-bold text-font-primary transition duration-300 ease-in-out hover:opacity-50"
            >
               Powrót
            </HashLink>
            <form className="grid gap-4">
               <label
                  htmlFor="make"
                  className="text-sm font-bold text-yellow-600"
               >
                  Marka:
               </label>
               <input
                  type="text"
                  id="make"
                  name="make"
                  value={formValues.make}
                  onChange={handleChange}
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               />
               <label
                  htmlFor="color"
                  className="text-sm font-bold text-yellow-600"
               >
                  Model:
               </label>
               <input
                  type="text"
                  id="model"
                  name="model"
                  value={formValues.model}
                  onChange={handleChange}
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               />

               <label
                  htmlFor="year"
                  className="text-sm font-bold text-yellow-600"
               >
                  Rok produkcji:
               </label>
               <input
                  type="number"
                  id="year"
                  name="year"
                  value={formValues.year}
                  onChange={handleChange}
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               />
               <label
                  htmlFor="vin"
                  className="text-sm font-bold text-yellow-600"
               >
                  VIN:
               </label>
               <input
                  type="text"
                  id="vin"
                  name="vin"
                  value={formValues.vin}
                  onChange={handleChange}
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               />

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
                     Dodaj samochód
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

export default AddCar;
