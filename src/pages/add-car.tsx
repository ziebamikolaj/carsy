import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const AddCar = () => {
   const [formValues, setFormValues] = useState({
      carModel: "",
      year: "",
      color: "",
      registrationNumber: "",
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

   const handleSubmit = async () => {
      // API request logic here...
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
                  htmlFor="carModel"
                  className="text-sm font-bold text-yellow-600"
               >
                  Marka i model samochodu:
               </label>
               <input
                  type="text"
                  id="carModel"
                  name="carModel"
                  value={formValues.carModel}
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
                  type="text"
                  id="year"
                  name="year"
                  value={formValues.year}
                  onChange={handleChange}
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               />

               <label
                  htmlFor="color"
                  className="text-sm font-bold text-yellow-600"
               >
                  Kolor pojazdu:
               </label>
               <input
                  type="text"
                  id="color"
                  name="color"
                  value={formValues.color}
                  onChange={handleChange}
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               />

               <label
                  htmlFor="registrationNumber"
                  className="text-sm font-bold text-yellow-600"
               >
                  Numer rejestracyjny:
               </label>
               <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  value={formValues.registrationNumber}
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
