import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";

// interface HabitDayProps {
//   completed: number;
// }

export function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 border-2 rounded-lg bg-zinc-900 border-zinc-800" />
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] rounded-2xl bg-zinc-900 flex flex-col p-6">
           <span className="font-semibold text-zinc-400">Segunda-feira</span>
           <span className="mt-1 text-3xl font-extrabold leading-tight">17/10</span>

           <ProgressBar />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
