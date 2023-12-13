interface TimetableProps {
   className: string;
}

interface TimetableItem {
   [key: string]: string;
}

const timetable: TimetableItem[] = [
   { Poniedziałek: "7:00 - 17.30" },
   { Wtorek: "7:00 - 17.30" },
   { Środa: "7:00 - 17.30" },
   { Czwartek: "7:00 - 16.30" },
   { Piątek: "7:00 - 13:00" },
];
const displayTimetable = (timetable: TimetableItem[]) => {
   return (
      <ul>
         {timetable.map((item, index) => (
            <li key={index} className="mt-1 flex border-b border-white">
               <div className="w-1/2">{Object.keys(item)[0]}</div>
               <div className="w-1/2 text-right">{Object.values(item)[0]}</div>
            </li>
         ))}
      </ul>
   );
};

const Timetable = ({ className }: TimetableProps) => {
   return (
      <div className={className} id="timetable">
         <div>
            <h2 className="mb-6 text-4xl font-bold text-yellow-500">
               Godziny otwarcia
            </h2>

            <ul>{displayTimetable(timetable)}</ul>
         </div>
      </div>
   );
};

export default Timetable;
