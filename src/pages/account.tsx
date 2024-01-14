import { HashLink } from "react-router-hash-link";

const Account = () => {
   return (
      <div className="flex h-screen flex-col items-center justify-center bg-bg-primary">
         <h2 className="mb-6 mt-4 text-center text-6xl font-bold text-yellow-600">
            Witaj użytkowniku!
         </h2>

         <div className="flex flex-col gap-4 text-center font-bold text-font-primary">
            <HashLink
               to="/set-appointment"
               className="rounded bg-nav-bg px-4 py-2 text-3xl"
            >
               Umów wizytę
            </HashLink>
            <HashLink
               to="/add-car"
               className="rounded bg-nav-bg p-4 py-2 text-3xl"
            >
               Dodaj samochód
            </HashLink>
            <HashLink
               to="/history"
               className="rounded bg-nav-bg px-4 py-2 text-3xl"
            >
               Twoja historia
            </HashLink>
         </div>
      </div>
   );
};
export default Account;
