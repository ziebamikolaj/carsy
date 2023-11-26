const AboutUs: React.FC<{ className?: string }> = ({ className }) => {
   const bodyContent =
      "Witamy w Carsy, zaufanej firmie zajmującej się naprawą samochodów! Naszym celem jest świadczenie najwyższej jakości usług wszystkim naszym klientom, zapewniając sprawne i bezpieczne działanie Twojego pojazdu na drodze. Nasz zespół wysoko wykwalifikowanych techników ma wieloletnie doświadczenie w branży motoryzacyjnej i jest wyposażony w najnowocześniejsze narzędzia i technologię, aby wykonać każdą naprawę lub konserwację. Rozumiemy znaczenie Twojego samochodu i niedogodności, jakie może powodować, gdy nie działa prawidłowo.";

   return (
      <div className={className}>
         <div
            className="h-80 w-80 flex-1 bg-cover"
            style={{ backgroundImage: "url('/about-us.webp')" }}
         ></div>
         <h2 className="mb-6 mt-4 text-4xl font-bold text-yellow-500 ">
            O nas
         </h2>
         <p className="leading-loose text-gray-300">{bodyContent}</p>
         <button className="mt-8 rounded-lg bg-yellow-600 px-6 py-3 font-semibold text-black shadow-lg transition duration-300 ease-in-out hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
            Zarezerwuj usługę
         </button>
      </div>
   );
};

export default AboutUs;
