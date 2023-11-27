interface ContactProps {
   className: string;
}
const Contact = ({ className }: ContactProps) => {
   return (
      <div className={className} id="contact">
         <div
            className="h-72 w-full rounded-md bg-cover bg-top bg-no-repeat md:col-span-2 md:h-full"
            style={{ backgroundImage: "url('/contact.webp')" }}
         ></div>
         <div className="mt-8 text-gray-300">
            <h2 className="mb-6 text-4xl font-bold text-yellow-500">kontakt</h2>
            <p className="leading-loose">
               W Carsy staramy się zapewnić naszym klientom najlepsze usługi
               naprawy samochodów w przystępnych cenach. Aby umówić się na
               wizytę wystarczy wejść na naszą stronę internetową i kliknąć
               przycisk "Zarezerwuj wizytę". Spowoduje to przejście do naszego
               systemu rezerwacji online, w którym możesz wybrać preferowaną
               datę i godzinę naprawy samochodu. Jeśli masz jakiekolwiek pytania
               dotyczące naszych usług lub chciałbyś zapytać o konkretną
               naprawę, możesz łatwo skontaktować się z nami za pośrednictwem
               naszej strony internetowej.
            </p>
            <p className="mt-4">Warszawska 17 Katowice, 40-009</p>
            <p>
               <a href="tel:48793697347" className="underline">
                  +48 793 697 347
               </a>
            </p>
         </div>
      </div>
   );
};

export default Contact;
