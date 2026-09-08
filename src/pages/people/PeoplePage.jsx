import { PlusIcon } from "lucide-react";
import PeopleSummary from "./PeopleSummary";
import PeopleControls from "./PeopleControls";
import PersonCard from "./PersonCard";
import PeopleEmptyState from "./PeopleEmptyState";

export default function PeoplePage() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      itemsOut: 1,
      overdueCount: 0,
      lastItem: "Nintendo Switch",
      lastActivity: "2026-09-02",
    },
    {
      id: 2,
      name: "Maria Santos",
      itemsOut: 1,
      overdueCount: 0,
      lastItem: "Calculus Book",
      lastActivity: "2026-08-30",
    },
    {
      id: 3,
      name: "Kevin Lopez",
      itemsOut: 1,
      overdueCount: 1,
      lastItem: "Wireless Mouse",
      lastActivity: "2026-08-20",
    },
    {
      id: 4,
      name: "Daniel Garcia",
      itemsOut: 1,
      overdueCount: 0,
      lastItem: "JavaScript Book",
      lastActivity: "2026-08-25",
    },
    {
      id: 5,
      name: "Sarah Reyes",
      itemsOut: 0,
      overdueCount: 0,
      lastItem: "Arduino Uno",
      lastActivity: "2026-08-19",
    },
    {
      id: 6,
      name: "Michael Tan",
      itemsOut: 0,
      overdueCount: 0,
      lastItem: "Scientific Calculator",
      lastActivity: "2026-08-11",
    },
    {
      id: 7,
      name: "Jessica Lim",
      itemsOut: 1,
      overdueCount: 1,
      lastItem: "Tablet",
      lastActivity: "2026-08-09",
    },
  ];

  return (
    <div>
      <div className="mb-4 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-display text-2xl font-medium">People</h1>
          <p className="text-ink/60">Everyone you've lent items to.</p>
        </div>
        <button className="quick-action-button">
          <PlusIcon className="w-4 h-4" /> Add person
        </button>
      </div>

      <PeopleSummary people={people} />
      <PeopleControls />

      {people.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      ) : (
        <PeopleEmptyState />
      )}
    </div>
  );
}
