import DataSummary from "./DataSummary";
import OverdueItems from "./OverdueItems";
import QuickActions from "./QuickActions";

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

      <div>
        <h1>Recent Activity</h1>
        <div>
          <p>Nintendo Switch</p>
          <p>Borrowed</p>
          <p>John</p>
          <p>Monday, 8/23/2026</p>
        </div>
        <div>
          <p>Nintendo Switch</p>
          <p>Borrowed</p>
          <p>John</p>
          <p>Monday, 8/23/2026</p>
        </div>
        <div>
          <p>Nintendo Switch</p>
          <p>Borrowed</p>
          <p>John</p>
          <p>Monday, 8/23/2026</p>
        </div>
        <div>
          <p>Nintendo Switch</p>
          <p>Borrowed</p>
          <p>John</p>
          <p>Monday, 8/23/2026</p>
        </div>
        <div>
          <p>Nintendo Switch</p>
          <p>Borrowed</p>
          <p>John</p>
          <p>Monday, 8/23/2026</p>
        </div>
      </div>
    </div>
  );
}
