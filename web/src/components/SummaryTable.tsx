import { generateRange } from "../utils/generate-range";
import { HabitDay } from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateRange();

const minimumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <div className="flex w-full">
      <div className="grid gap-3 grid-rows-7 grid-flow">
        {weekDays.map((weekDay, i) => {
          return (
            <div
              key={`${weekDay}-${i}`}
              className="flex items-center justify-center w-10 h-10 text-xl font-bold text-zinc-400"
            >
              {weekDay}
            </div>
          );
        })}
      </div>
      <div className="grid grid-flow-col gap-3 grid-rows-7">
        {summaryDates.map((date) => {
          return <HabitDay key={date.toString()} />;
        })}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 border-2 rounded-lg cursor-not-allowed bg-zinc-900 border-zinc-800 opacity-40"
              />
            );
          })}
      </div>
    </div>
  );
}
