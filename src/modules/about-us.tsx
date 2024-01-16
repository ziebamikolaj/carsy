import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AboutUs = () => {
   const navigate = useNavigate();
   const { data: isLoggedIn } = useQuery({
      queryKey: ["authCheck"],
   });

   const handleReservation = () => {
      if (isLoggedIn) {
         navigate("/set-appointment");
         return;
      }
      toast.info("Musisz najpierw się zalogować!");
      navigate("/signin");
   };

   return (
      <div
         className="mt-20 w-full scroll-mt-12 p-6 text-lg md:grid md:grid-cols-2 md:gap-x-5"
         id="about"
      >
         <div
            className="h-72 rounded-md bg-cover bg-center bg-no-repeat md:h-full"
            style={{ backgroundImage: "url('/about-us.webp')" }}
         ></div>
         <div>
            <h2 className="mb-6 mt-4 text-4xl font-bold text-yellow-500">
               O nas
            </h2>
            <p className="leading-loose text-gray-300">
               Witamy w Carsy, zaufanej firmie zajmującej się naprawą
               samochodów! Naszym celem jest świadczenie najwyższej jakości
               usług wszystkim naszym klientom, zapewniając sprawne i bezpieczne
               działanie Twojego pojazdu na drodze. Nasz zespół wysoko
               wykwalifikowanych techników ma wieloletnie doświadczenie w branży
               motoryzacyjnej i jest wyposażony w najnowocześniejsze narzędzia i
               technologię, aby wykonać każdą naprawę lub konserwację. Rozumiemy
               znaczenie Twojego samochodu i niedogodności, jakie może
               powodować, gdy nie działa prawidłowo.
            </p>
            <button
               className="mt-8 rounded-lg bg-yellow-600 px-6 py-3 font-semibold text-black shadow-lg transition duration-300 ease-in-out hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
               onClick={handleReservation}
            >
               Zarezerwuj usługę
            </button>
         </div>
      </div>
   );
};

export default AboutUs;
