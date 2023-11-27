interface PricelistProps {
   className: string;
}

interface PricelistItem {
   name: string;
   description: string;
   price: string;
}
// this will be replaced with data from the api
const pricelist: PricelistItem[] = [
   {
      name: "Wymiana oleju",
      description:
         "Wymiana oleju to niezbędna czynność konserwacyjna pojaz du, która polega na spuszczeniu starego oleju i zastąpieniu go świeżym, aby zapewnić płynną pracę silnika.",
      price: "450zł",
   },
   {
      name: "Przegląd i naprawa hamulców",
      description:
         "Przegląd i naprawa hamulców ma kluczowe znaczenie dla zapewnienia bezpieczeństwa i prawidłowego funkcjonowania układu hamulcowego pojazdu.",
      price: "1500zł",
   },
   {
      name: "Rotacja i ustawienie opon",
      description:
         "Rotacja i ustawienie opon to ważne procedury konserwacyjne, które pomagają zapewnić równomierne zużycie opon oraz poprawiają prowadzenie i bezpieczeństwo pojazdu.",
      price: "800zł",
   },
   {
      name: "Diagnostyka silnika",
      description:
         "Diagnostyka silnika to proces identyfikacji i analizy potencjalnych problemów i usterek w silniku pojazdu przy użyciu specjalistycznych narzędzi i oprogramowania.",
      price: "1500zł",
   },
   {
      name: "Skrzynia biegów",
      description:
         "Serwis skrzyni biegów to niezbędna procedura konserwacyjna, która pomaga zapewnić płynne i wydajne działanie układu przeniesienia napędu pojazdu.",
      price: "450zł",
   },
   {
      name: "Doładowanie klimatyzacji",
      description:
         "Napełnianie klimatyzacji to proces uzupełniania poziomu czynnika chłodniczego w układzie klimatyzacji w celu przywrócenia jego wydajności chłodzenia.",
      price: "450zł",
   },
   {
      name: "Wymiana baterii",
      description:
         "Wymiana baterii to proces usunięcia starej baterii i zainstalowania nowej w urządzeniu.",
      price: "600zł",
   },
   {
      name: "Płukanie płynów (płyn chłodzący, hamulcowy, wspomaganie kierownicy)",
      description:
         "Płukanie płynu to kluczowe zadanie konserwacyjne, które polega na całkowitym usunięciu starego płynu i zastąpieniu go nowym, aby zapewnić optymalną wydajność i przedłużyć żywotność układów chłodzenia, hamulcowego lub wspomagania kierownicy pojazdu.",
      price: "700zł",
   },
];
const displayPricelist = (pricelist: PricelistItem[]) => {
   return (
      <ul className="grid text-white md:grid-cols-2">
         {pricelist.map((item, index) => (
            <li
               key={index}
               className={`mt-1 border-b border-white md:mx-5 ${
                  index >= pricelist.length - 2 ? "md:border-black" : ""
               }`}
            >
               <div className="mt-1 font-bold">{item.name}</div>
               <div className="py-2 text-sm">{item.description}</div>
               <div className="text-xl text-yellow-500">{item.price}</div>
            </li>
         ))}
      </ul>
   );
};

const Pricelist = ({ className }: PricelistProps) => {
   return (
      <div className={className} id="pricing">
         <div>
            <h2 className="mb-6 text-4xl font-bold text-yellow-500">Cennik</h2>
            {displayPricelist(pricelist)}
         </div>
      </div>
   );
};

export default Pricelist;
