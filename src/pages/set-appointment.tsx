import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

const UmowWizytePage = () => {
   const [formValues, setFormValues] = useState({
      numerTelefonu: "",
      data: "",
      godzina: "",
      markaSamochodu: "",
      opisUsterki: "",
   });

   const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

   const handleChange = e => {
      const { name, value } = e.target;
      setFormValues({
         ...formValues,
         [name]: value,
      });

      // Sprawdzanie, czy wszystkie pola są wypełnione
      const areAllFieldsFilled = Object.values(formValues).every(
         field => field.trim() !== ""
      );
      setIsSubmitEnabled(areAllFieldsFilled);
   };

   const handleSubmit = async e => {
      e.preventDefault();

      // Wysyłanie danych do API
      try {
         const response = await fetch("URL_DO_TWOJEGO_API", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
         });

         if (response.ok) {
            console.log("Wizyta umówiona!");
            // Dodaj kod obsługi, jeśli wysłanie danych powiodło się
         } else {
            console.error("Błąd podczas umawiania wizyty");
            // Dodaj kod obsługi, jeśli wysłanie danych nie powiodło się
         }
      } catch (error) {
         console.error("Błąd podczas wysyłania zapytania API:", error);
         // Dodaj kod obsługi błędu połączenia
      }
   };

   return (
      <div
         className="relative flex min-h-screen items-center justify-center"
         style={{
            backgroundColor: "black",
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
      >
         <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="left-0 top-0 mb-7 ml-0 mt-5">
               <Link
                  to="/account"
                  className="rounded-full bg-yellow-700 px-4 py-2 text-lg font-bold text-white hover:bg-white hover:text-yellow-700 focus:outline-none"
               >
                  Powrót
               </Link>
            </div>
            <div className="mb-4">
               <label
                  htmlFor="numerTelefonu"
                  className="mb-2 block text-sm font-bold text-yellow-700"
               >
                  Numer telefonu:
               </label>
               <input
                  type="text"
                  id="numerTelefonu"
                  name="numerTelefonu"
                  value={formValues.numerTelefonu}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
               />
            </div>

            <div className="mb-4">
               <label
                  htmlFor="data"
                  className="mb-2 block text-sm font-bold text-yellow-700"
               >
                  Data:
               </label>
               <input
                  type="text"
                  id="data"
                  name="data"
                  value={formValues.data}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
               />
            </div>

            <div className="mb-4">
               <label
                  htmlFor="godzina"
                  className="mb-2 block text-sm font-bold text-yellow-700"
               >
                  Godzina:
               </label>
               <input
                  type="text"
                  id="godzina"
                  name="godzina"
                  value={formValues.godzina}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
               />
            </div>

            <div className="mb-4">
               <label
                  htmlFor="markaSamochodu"
                  className="mb-2 block text-sm font-bold text-yellow-700"
               >
                  Marka i model samochodu:
               </label>
               <input
                  type="text"
                  id="markaSamochodu"
                  name="markaSamochodu"
                  value={formValues.markaSamochodu}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
               />
            </div>

            <div className="mb-4">
               <label
                  htmlFor="opisUsterki"
                  className="mb-2 block text-sm font-bold text-yellow-700"
               >
                  Krótki opis usterki:
               </label>
               <input
                  type="text"
                  id="opisUsterki"
                  name="opisUsterki"
                  value={formValues.opisUsterki}
                  onChange={handleChange}
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
               />
            </div>

            <div className="mb-4 text-center">
               <button
                  type="submit"
                  disabled={!isSubmitEnabled}
                  className={`rounded-full bg-yellow-700 px-4 py-2 text-lg font-bold text-white hover:bg-white hover:text-yellow-700 focus:outline-none ${
                     isSubmitEnabled ? "" : "cursor-not-allowed opacity-50"
                  }`}
               >
                  Umów Wizytę
               </button>
            </div>
         </form>
      </div>
   );
};

export default UmowWizytePage;
