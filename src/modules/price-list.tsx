import { useQuery } from "@tanstack/react-query";

interface PricelistItem {
   name: string;
   price: number;
}

const displayPricelist = (pricelist: PricelistItem[]) => {
   return (
      <ul className="grid md:grid-cols-2">
         {pricelist.map((item, index) => (
            <li
               key={index}
               className={`mt-1 border-b border-white md:mx-5 ${
                  index >= pricelist.length - 2 ? "md:border-black" : ""
               }`}
            >
               <div className="mt-1 font-bold">{item.name}</div>
               <div className="text-xl text-yellow-500">{item.price}zł</div>
            </li>
         ))}
      </ul>
   );
};

const Pricelist = () => {
   const { data: priceList } = useQuery<PricelistItem[]>({
      queryKey: ["priceList"],
      queryFn: async () => {
         const res = await fetch(
            `${import.meta.env.VITE_API_URL}/servicetype/all`,
            {
               credentials: "include",
            }
         );
         return res.json() as Promise<PricelistItem[]>;
      },
   });

   return (
      <div className="w-full scroll-mt-12 p-6" id="pricing">
         <div>
            <h2 className="mb-6 text-4xl font-bold text-yellow-500">Cennik</h2>
            {priceList != undefined &&
               displayPricelist(priceList.splice(0, 10))}
         </div>
      </div>
   );
};

export default Pricelist;
