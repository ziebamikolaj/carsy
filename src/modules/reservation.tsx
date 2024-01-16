import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Reservation = () => {
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
         className="w-screen scroll-mt-16 text-lg md:-ml-36 md:-mr-36 md:text-3xl"
         id="reservation"
      >
         <div
            className="relative w-full cursor-pointer rounded-md bg-cover bg-center bg-no-repeat hover:brightness-110 hover:transition hover:duration-500 hover:ease-in-out"
            style={{ backgroundImage: "url('/reservation-section.webp')" }}
            onClick={handleReservation}
         >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h2 className="relative mb-6 py-12 text-center font-abril text-5xl tracking-wider md:py-24">
               ZAREZERWUJ WIZYTĘ
            </h2>
         </div>
      </div>
   );
};

export default Reservation;
