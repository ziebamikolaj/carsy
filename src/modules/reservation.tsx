const Reservation = () => {
   const handleReservation = () => {
      // Add logic for handling reservation here
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
               zarezerwuj wizytę
            </h2>
         </div>
      </div>
   );
};

export default Reservation;
