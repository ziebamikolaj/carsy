interface TimetableItem {
   [key: string]: string;
}

const timetable: TimetableItem[] = [
   { Poniedziałek: "7:00 - 17.00" },
   { Wtorek: "7:00 - 17.00"  },
   { Środa: "7:00 - 17.00"  },
   { Czwartek: "7:00 - 17.00"  },
   { Piątek: "7:00 - 17.00"  },
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

const Timetable = () => {
   return (
      <div
         className="w-full scroll-mt-12 p-6 text-lg md:text-2xl"
         id="timetable"
      >
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
