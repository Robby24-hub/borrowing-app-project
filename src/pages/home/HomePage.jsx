import DataSummary from "./DataSummary";
import OverdueItems from "./OverdueItems";
import QuickActions from "./QuickActions";
import RecentActivities from "./RecentActivities";

export default function HomePage() {
  return (
    <div className="font-sans text-ink">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-medium text-ink">
          Hello, Robby
        </h1>
        <p className="text-ink/60 mt-1">
          Here's what's happening with your inventory today.
        </p>
      </div>

      <DataSummary />
      <QuickActions />
      <OverdueItems />
      <RecentActivities />
    </div>
  );
}
