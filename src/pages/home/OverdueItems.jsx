import dayjs from "dayjs";
import { ClockAlertIcon, UserRoundIcon } from "lucide-react";

export default function OverdueItems() {
  const overdueItems = [
    {
      id: crypto.randomUUID(),
      item: "Stapler",
      image: "/images/stapler.png",
      borrower: "John",
      dueDate: "2026-08-18",
    },
    {
      id: crypto.randomUUID(),
      item: "Laptop",
      image: "/images/laptop.png",
      borrower: "Maria",
      dueDate: "2026-08-17",
    },
    {
      id: crypto.randomUUID(),
      item: "Projector",
      image: "/images/projector.png",
      borrower: "Alex",
      dueDate: "2026-08-15",
    },
    {
      id: crypto.randomUUID(),
      item: "Wireless mouse",
      image: "/images/wireless-mouse.png",
      borrower: "Sarah",
      dueDate: "2026-08-14",
    },
    {
      id: crypto.randomUUID(),
      item: "HDMI cable",
      image: "/images/hdmi-cable.png",
      borrower: "Michael",
      dueDate: "2026-08-12",
    },
  ];

  return (
    <div className="mb-10">
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="font-display text-lg font-medium">Needs attention</h2>
        <span className="text-xs text-ink/50">
          {overdueItems.length} overdue
        </span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1">
        {overdueItems.map((item, i) => {
          const daysLate = dayjs().diff(dayjs(item.dueDate), "day");

          return (
            <div
              key={item.id}
              className="overdue-ticket shrink-0 w-64 flex bg-white border border-rust/30 rounded-lg overflow-hidden shadow-sm"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className="w-20 shrink-0 bg-cover bg-center bg-rust/5"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="border-l border-dashed border-rust/30 flex-1 p-3 flex flex-col justify-between">
                <div>
                  <p className="font-display font-medium leading-tight">
                    {item.item}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-ink/60 mt-1.5">
                    <UserRoundIcon className="w-3.5 h-3.5" />
                    {item.borrower}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-ink/60 mt-1">
                    <ClockAlertIcon className="w-3.5 h-3.5" />
                    <span className="font-mono">
                      {dayjs(item.dueDate).format("MMM D")}
                    </span>
                  </div>
                </div>
                <p className="text-xs font-medium text-rust mt-2">
                  {daysLate} {daysLate === 1 ? "day" : "days"} late
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
