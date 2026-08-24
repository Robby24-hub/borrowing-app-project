import DataSummary from "./DataSummary";
import OverdueItems from "./OverdueItems";
import QuickActions from "./QuickActions";
import RecentActivities from "./RecentActivities";

export default function HomePage() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Hello, Robby!</h1>
        <p>This is what's happening with your inventory.</p>
      </div>
      <DataSummary />

      <QuickActions />
      <OverdueItems />

      <RecentActivities />
    </div>
  );
}
