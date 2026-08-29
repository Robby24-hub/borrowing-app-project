import dayjs from "dayjs";
import { ClockAlertIcon, UserRoundIcon } from "lucide-react";

export default function OverdueItems() {
  const overdueItems = [
    {
      id: crypto.randomUUID,
      item: "Stapler",
      image: "/images/stapler.png",
      borrower: "John",
      dueDate: "2026-08-18",
      status: "OVERDUE",
    },
    {
      id: crypto.randomUUID,
      item: "Laptop",
      image: "/images/laptop.png",
      borrower: "Maria",
      dueDate: "2026-08-17",
      status: "OVERDUE",
    },
    {
      id: crypto.randomUUID,
      item: "Projector",
      image: "/images/projector.png",
      borrower: "Alex",
      dueDate: "2026-08-15",
      status: "OVERDUE",
    },
    {
      id: crypto.randomUUID,
      item: "Wireless Mouse",
      borrower: "Sarah",
      image: "/images/wireless-mouse.png",
      dueDate: "2026-08-14",
      status: "OVERDUE",
    },
    {
      id: crypto.randomUUID,
      item: "HDMI Cable",
      image: "/images/hdmi-cable.png",
      borrower: "Michael",
      dueDate: "2026-08-12",
      status: "OVERDUE",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-2">Overdue Items</h1>
      <div className="w-full grid gap-5 grid-cols-5 mb-5">
        {overdueItems.map((item) => {
          return (
            <div
              className="border border-primaryBlue flex flex-col items-center p-4 rounded-2xl shadow-xl "
              key={item.id}
            >
              <div
                className="bg-cover bg-center overflow-hidden aspect-square w-30 border my-5"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <p className="font-semibold text-xl mb-2">{item.item}</p>
              <div className="flex flex-row">
                <UserRoundIcon className="w-5 mx-2" />
                <p className="">{item.borrower}</p>
              </div>
              <div className="flex flex-row">
                <ClockAlertIcon className="w-5 mx-2" />
                <p className="">{dayjs(item.dueDate).format("MMM D, YYYY")}</p>
              </div>
              <p className="text-[#f15368] font-semibold">{item.status}</p>
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
}
