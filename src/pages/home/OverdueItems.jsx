export default function OverdueItems() {
  const overdueItems = [
    {
      id: crypto.randomUUID,
      item: "Stapler",
      borrower: "John",
      dueDate: "2026-08-18",
      status: "OVERDUE",
    },
    {
      id: crypto.randomUUID,
      item: "Laptop",
      borrower: "Maria",
      dueDate: "2026-08-17",
      status: "OVERDUE",
    },
    {
      id: crypto.randomUUID,
      item: "Projector",
      borrower: "Alex",
      dueDate: "2026-08-15",
      status: "OVERDUE",
    },
    {
      id: crypto.randomUUID,
      item: "Wireless Mouse",
      borrower: "Sarah",
      dueDate: "2026-08-14",
      status: "OVERDUE",
    },
    {
      id: crypto.randomUUID,
      item: "HDMI Cable",
      borrower: "Michael",
      dueDate: "2026-08-12",
      status: "OVERDUE",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-2">Overdue Items</h1>
      <div className="border-2 border-primaryBlue rounded-lg overflow-hidden w-fit shadow-xl">
        <div className="bg-grayishWhite trow ">
          <p className="tdata tdataHead">Item</p>
          <p className="tdata tdataHead">Borrower</p>
          <p className="tdata tdataHead">Due Date</p>
          <p className="tdata tdataHeadx"></p>
        </div>
        <div>
          {overdueItems.map((item) => {
            return (
              <div className="trow" key={item.id}>
                <p className="tdata">{item.item}</p>
                <p className="tdata">{item.borrower}</p>
                <p className="tdata">{item.dueDate}</p>
                <p className="tdata text-[#f15368] font-semibold">
                  {item.status}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
