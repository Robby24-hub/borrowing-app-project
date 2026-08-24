export default function DataSummary() {
  const summaryData = [
    {
      id: 1,
      image: "/images/boxes-blue.png",
      title: "Total Items",
      value: 248,
      description: "Items registered",
    },
    {
      id: 2,
      image: "/images/hand-helping-yellow.png",
      title: "Borrowed",
      value: 57,
      description: "Currently borrowed",
    },
    {
      id: 3,
      image: "/images/list-check-green.png",
      title: "Available",
      value: 191,
      description: "Ready to borrow",
    },
    {
      id: 4,
      image: "/images/clock-alert-red.png",
      title: "Overdue",
      value: 8,
      description: "Past due date",
    },
  ];

  return (
    <div className="grid grid-cols-4 my-5">
      {summaryData.map((boxItem) => {
        return (
          <div
            key={boxItem.id}
            className={`border-2 p-4 rounded-lg w-70 flex flex-row
                ${boxItem.title === "Total Items" && "border-[#386aed] bg-[#386aed]/15"}
                ${boxItem.title === "Borrowed" && "border-[#facb4e] bg-[#facb4e]/15"}
                ${boxItem.title === "Available" && "border-[#47e79f] bg-[#47e79f]/15"}
                ${boxItem.title === "Overdue" && "border-[#f15368] bg-[#f15368]/15"}`}
          >
            <img className="aspect-square mr-3 w-15 h-15" src={boxItem.image} />
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
