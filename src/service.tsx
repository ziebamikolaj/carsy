const Service: React.FC<{ className?: string }> = ({ className }) => {
   const header = "Serwis";
   const caption =
      "Witamy w Carsy, miejscu, w którym znajdziesz wszystkie naprawy samochodowe! ";
   const bodyContent =
      "Rozumiemy, jak ważne jest posiadanie niezawodnego i dobrze utrzymanego pojazdu, dlatego nasz zespół doświadczonych techników dokłada wszelkich starań, aby świadczyć usługi na najwyższym poziomie, dzięki którym Twój samochód będzie działał sprawnie. W Carsy oferujemy szeroki zakres usług, aby zaspokoić wszystkie potrzeby związane z naprawą samochodu. Oferujemy pomoc od podstawowych wymian oleju i rotacji opon po skomplikowane naprawy silnika i diagnostykę.";
   const listContent = [
      "Wymiana oleju",
      "Wymiany hamulców",
      "Regulacja silnika",
      "Rotacja opon",
      "płukanie płynu przekładni",
   ];
   return (
      <div className={className}>
         <div
            className="hidden h-full flex-1 bg-cover"
            style={{ backgroundImage: "url('/about-us.webp')" }}
            onClick={() => location.assign("/")}
         ></div>

         <h2 className="mb-6 w-1/4 text-4xl font-bold text-yellow-500">
            {header}
         </h2>
         <h3 className="mb-6 text-2xl font-bold text-white">{caption}</h3>
         <p className="leading-loose text-gray-300">{bodyContent}</p>
         <ul className="list-inside list-disc">
            {listContent.map((item, index) => (
               <li key={index} className="text-gray-300">
                  {item}
               </li>
            ))}
         </ul>
         <div
            className="mt-2 h-80 w-80 flex-1 bg-cover "
            style={{ backgroundImage: "url('/service-img.webp')" }}
         ></div>
      </div>
   );
};

export default Service;
