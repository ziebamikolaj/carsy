import { useQuery } from "@tanstack/react-query";
import { HashLink } from "react-router-hash-link";

const Account = () => {
   const { data: user } = useQuery<string>({
      queryKey: ["authCheck"],
   });

   return (
      <div className="flex h-screen flex-col items-center justify-center bg-bg-primary">
         <h2 className="mb-6 mt-4 text-center text-6xl font-bold text-yellow-600">
            Witaj {user}!
         </h2>

         <div className="flex flex-col gap-4 text-center font-bold text-font-primary">
            <HashLink
               to="/set-appointment"
               className="rounded bg-nav-bg px-4 py-2 text-3xl text-font-primary transition duration-300 ease-in-out hover:opacity-50"
            >
               Umów wizytę
            </HashLink>
            <HashLink
               to="/your-cars"
               className="rounded bg-nav-bg p-4 py-2 text-3xl text-font-primary transition duration-300 ease-in-out hover:opacity-50"
            >
               Twoje samochody
            </HashLink>
            <HashLink
               to="/history"
               className="rounded bg-nav-bg px-4 py-2 text-3xl text-font-primary transition duration-300 ease-in-out hover:opacity-50"
            >
               Twoja historia
            </HashLink>
         </div>
      </div>
   );
};
export default Account;
