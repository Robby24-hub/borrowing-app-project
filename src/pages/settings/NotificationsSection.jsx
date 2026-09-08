import { useState } from "react";
import Toggle from "./Toggle";

export default function NotificationsSection() {
  const [dueDateReminders, setDueDateReminders] = useState(true);
  const [overdueReminders, setOverdueReminders] = useState(true);
  const [returnNotifications, setReturnNotifications] = useState(false);

  return (
    <div>
      <h2 className="font-display text-lg font-medium mb-1">Notifications</h2>
      <p className="text-sm text-ink/50 mb-6">
        Choose what you want to be reminded about.
      </p>

      <div className="max-w-md">
        <Toggle
          label="Due date reminders"
          description="Get notified before an item is due back"
          checked={dueDateReminders}
          onChange={setDueDateReminders}
        />
        <Toggle
          label="Overdue item reminders"
          description="Get notified when an item passes its due date"
          checked={overdueReminders}
          onChange={setOverdueReminders}
        />
        <Toggle
          label="Return notifications"
          description="Get notified when a borrower returns an item"
          checked={returnNotifications}
          onChange={setReturnNotifications}
        />
      </div>
    </div>
  );
}
