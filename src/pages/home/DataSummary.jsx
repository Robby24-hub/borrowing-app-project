import {
  BoxesIcon,
  ClockAlertIcon,
  HandHelpingIcon,
  ListCheckIcon,
} from "lucide-react";

export default function DataSummary() {
  const summaryData = [
    {
      id: 1,
      image: BoxesIcon,
      title: "Total Items",
      value: 248,
      description: "Items registered",
    },
    {
      id: 2,
      image: HandHelpingIcon,
      title: "Borrowed",
      value: 57,
      description: "Currently borrowed",
    },
    {
      id: 3,
      image: ListCheckIcon,
      title: "Available",
      value: 191,
      description: "Ready to borrow",
    },
    {
      id: 4,
      image: ClockAlertIcon,
      title: "Overdue",
      value: 5,
      description: "Past due date",
    },
  ];

  return (
    <div className="grid grid-cols-4 my-5 gap-4">
      {summaryData.map((boxItem) => {
        const Icon = boxItem.image;

        return (
          <div
            key={boxItem.id}
            className={`shadow-xl border-2 p-4 rounded-lg flex flex-row
                ${boxItem.title === "Total Items" && "border-primaryBlue bg-primaryBlue/15"}
                ${boxItem.title === "Borrowed" && "border-[#facb4e] bg-[#facb4e]/15"}
                ${boxItem.title === "Available" && "border-[#47e79f] bg-[#47e79f]/15"}
                ${boxItem.title === "Overdue" && "border-[#f15368] bg-[#f15368]/15"}`}
          >
            <Icon
              className={`aspect-square mr-3 w-15 h-15
              ${boxItem.title === "Total Items" && "text-primaryBlue"}
              ${boxItem.title === "Borrowed" && "text-[#facb4e]"}
              ${boxItem.title === "Available" && "text-[#47e79f]"}
              ${boxItem.title === "Overdue" && "text-[#f15368]"}
              `}
            />
            <div>
              <h1 className="text-xl font-semibold">{boxItem.title}</h1>
              <p className="text-3xl font-bold">{boxItem.value}</p>
              <p>{boxItem.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
