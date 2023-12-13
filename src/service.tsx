const listContent = [
   "Wymiana oleju",
   "Wymiany hamulców",
   "Regulacja silnika",
   "Rotacja opon",
   "płukanie płynu przekładni",
];
interface serviceProps {
   className: string;
}
const Service = ({ className }: serviceProps) => {
   return (
      <div className={className}>
         <div>
            <h2 className="mb-6 text-4xl font-bold text-yellow-500">Serwis</h2>
            <h3 className="mb-6 text-2xl font-bold">
               Witamy w Carsy, miejscu, w którym znajdziesz wszystkie naprawy
               samochodowe!
            </h3>
            <p className="leading-loose text-gray-300">
               Rozumiemy, jak ważne jest posiadanie niezawodnego i dobrze
               utrzymanego pojazdu, dlatego nasz zespół doświadczonych techników
               dokłada wszelkich starań, aby świadczyć usługi na najwyższym
               poziomie, dzięki którym Twój samochód będzie działał sprawnie. W
               Carsy oferujemy szeroki zakres usług, aby zaspokoić wszystkie
               potrzeby związane z naprawą samochodu. Oferujemy pomoc od
               podstawowych wymian oleju i rotacji opon po skomplikowane naprawy
               silnika i diagnostykę.
            </p>
            <ul className="list-inside list-disc">
               {listContent.map((item, index) => (
                  <li key={index} className="text-gray-300">
                     {item}
                  </li>
               ))}
            </ul>
         </div>
         <div
            className="mt-4 h-72 rounded-md bg-cover bg-center bg-no-repeat md:h-full"
            style={{ backgroundImage: "url('/service-img.webp')" }}
         ></div>
      </div>
   );
};

export default Service;
