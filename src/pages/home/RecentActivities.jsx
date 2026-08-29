import dayjs from "dayjs";

export default function RecentActivities() {
  const recentActivities = [
    {
      id: crypto.randomUUID,
      item: "Nintendo Switch",
      action: "Borrowed",
      person: "John",
      date: "2026-08-23T09:15:00",
    },
    {
      id: crypto.randomUUID,
      item: "Canon EOS Camera",
      action: "Returned",
      person: "Maria",
      date: "2026-08-23T11:40:00",
    },
    {
      id: crypto.randomUUID,
      item: "Projector",
      action: "Borrowed",
      person: "Alex",
      date: "2026-08-22T13:25:00",
    },
    {
      id: crypto.randomUUID,
      item: "MacBook Air",
      action: "Returned",
      person: "Sarah",
      date: "2026-08-22T15:50:00",
    },
    {
      id: crypto.randomUUID,
      item: "Wireless Microphone",
      action: "Borrowed",
      person: "David",
      date: "2026-08-21T10:05:00",
    },
  ];
  return (
    <div>
      <h1 className="text-xl font-semibold mb-2 ">Recent Activity</h1>
      <div className="bg-white border-2 border-primaryBlue rounded-lg overflow-hidden w-fit shadow-xl mb-5">
        <div className="bg-grayishWhite trow-recent-act">
          <p className="tdata tdataHead">Item</p>
          <p className="tdata tdataHead">Action</p>
          <p className="tdata tdataHead">Person</p>
          <p className="tdata tdataHead">Due Date</p>
          <p className="tdata tdataHeadx"></p>
        </div>
        {recentActivities.map((activity) => {
          return (
            <div className="trow-recent-act" key={activity.id}>
              <p className="tdata">{activity.item}</p>
              <p className="tdata">{activity.action}</p>
              <p className="tdata">{activity.person}</p>
              <p className="tdata">
                {dayjs(activity.date).format("MMM D, YYYY | h:mm A")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
