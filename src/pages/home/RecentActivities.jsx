import dayjs from "dayjs";

export default function RecentActivities() {
  const recentActivities = [
    {
      id: crypto.randomUUID(),
      item: "Nintendo Switch",
      action: "Borrowed",
      person: "John",
      date: "2026-08-23T09:15:00",
    },
    {
      id: crypto.randomUUID(),
      item: "Canon EOS Camera",
      action: "Returned",
      person: "Maria",
      date: "2026-08-23T11:40:00",
    },
    {
      id: crypto.randomUUID(),
      item: "Projector",
      action: "Borrowed",
      person: "Alex",
      date: "2026-08-22T13:25:00",
    },
    {
      id: crypto.randomUUID(),
      item: "MacBook Air",
      action: "Returned",
      person: "Sarah",
      date: "2026-08-22T15:50:00",
    },
    {
      id: crypto.randomUUID(),
      item: "Wireless microphone",
      action: "Borrowed",
      person: "David",
      date: "2026-08-21T10:05:00",
    },
  ];

  return (
    <div>
      <h2 className="font-display text-lg font-medium mb-3">Recent activity</h2>
      <div className="border border-line rounded-md overflow-hidden">
        <div className="grid grid-cols-4 bg-paper text-xs text-ink/50 border-b border-line">
          <p className="p-3">Item</p>
          <p className="p-3">Action</p>
          <p className="p-3">Person</p>
          <p className="p-3">When</p>
        </div>
        {recentActivities.map((activity, i) => (
          <div
            key={activity.id}
            className={`grid grid-cols-4 items-center text-sm ${
              i !== recentActivities.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <p className="p-3 font-medium">{activity.item}</p>
            <p className="p-3">
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  activity.action === "Borrowed"
                    ? "bg-ochre/10 text-ochre"
                    : "bg-moss/10 text-moss"
                }`}
              >
                {activity.action}
              </span>
            </p>
            <p className="p-3 text-ink/70">{activity.person}</p>
            <p className="p-3 font-mono text-xs text-ink/60">
              {dayjs(activity.date).format("MMM D, h:mm A")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
