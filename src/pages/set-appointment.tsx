import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const SetAppointment = () => {
   const [formValues, setFormValues] = useState({
      phoneNumber: "",
      date: "",
      time: "",
      carModel: "",
      issueDescription: "",
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
                  type="text"
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
                  type="text"
                  id="time"
                  name="time"
                  value={formValues.time}
                  onChange={handleChange}
                  className="rounded bg-input-dark px-3 py-2 leading-tight text-font-primary focus:outline-none focus:ring-2 focus:ring-nav-bg"
               />

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
                  htmlFor="issueDescription"
                  className="text-sm font-bold text-yellow-600"
               >
                  Krótki opis usterki:
               </label>
               <input
                  type="text"
                  id="issueDescription"
                  name="issueDescription"
                  value={formValues.issueDescription}
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
