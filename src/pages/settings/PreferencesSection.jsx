import { useState } from "react";
import SegmentedControl from "./SegmentedControl";
import Toggle from "./Toggle";

export default function PreferencesSection() {
  const [sortBy, setSortBy] = useState("Recently added");
  const [defaultView, setDefaultView] = useState("Grid");
  const [dateFormat, setDateFormat] = useState("MMM D, YYYY");
  const [confirmDelete, setConfirmDelete] = useState(true);

  return (
    <div>
      <h2 className="font-display text-lg font-medium mb-1">Preferences</h2>
      <p className="text-sm text-ink/50 mb-6">
        Set your defaults for browsing your inventory.
      </p>

      <div className="flex flex-col gap-5 max-w-md">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">
            Default item sorting
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-line rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:border-ledger transition-colors"
          >
            <option>Recently added</option>
            <option>Name (A–Z)</option>
            <option>Due date</option>
            <option>Category</option>
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Date format</span>
          <select
            value={dateFormat}
            onChange={(e) => setDateFormat(e.target.value)}
            className="border border-line rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:border-ledger transition-colors"
          >
            <option value="MMM D, YYYY">Sep 8, 2026</option>
            <option value="MM/DD/YYYY">09/08/2026</option>
            <option value="DD/MM/YYYY">08/09/2026</option>
            <option value="YYYY-MM-DD">2026-09-08</option>
          </select>
        </label>

        <div className="flex items-center justify-between py-2">
          <span className="text-xs font-medium text-ink/60">Default view</span>
          <SegmentedControl
            options={["Grid", "List"]}
            value={defaultView}
            onChange={setDefaultView}
          />
        </div>

        <Toggle
          label="Confirm before deleting"
          description="Ask for confirmation when removing an item"
          checked={confirmDelete}
          onChange={setConfirmDelete}
        />
      </div>
    </div>
  );
}
