import { PlusIcon } from "lucide-react";
import BorrowSummary from "./BorrowSummary";
import BorrowControls from "./BorrowControls";
import BorrowItemCard from "./BorrowItemCard";
import EmptyState from "./EmptyState";

export default function BorrowPage() {
  const lentItems = [
    {
      id: 1,
      name: "Nintendo Switch",
      category: "Electronics",
      borrower: "John Doe",
      lentDate: "2026-09-02",
      dueDate: "2026-09-10",
      returnedDate: null,
      status: "Active",
    },
    {
      id: 2,
      name: "Calculus Book",
      category: "Books",
      borrower: "Maria Santos",
      lentDate: "2026-08-30",
      dueDate: "2026-09-09",
      returnedDate: null,
      status: "Due Soon",
    },
    {
      id: 3,
      name: "Wireless Mouse",
      category: "Electronics",
      borrower: "Kevin Lopez",
      lentDate: "2026-08-20",
      dueDate: "2026-08-30",
      returnedDate: null,
      status: "Overdue",
    },
    {
      id: 4,
      name: "JavaScript Book",
      category: "Books",
      borrower: "Daniel Garcia",
      lentDate: "2026-08-25",
      dueDate: "2026-09-15",
      returnedDate: null,
      status: "Active",
    },
    {
      id: 5,
      name: "Arduino Uno",
      category: "Electronics",
      borrower: "Sarah Reyes",
      lentDate: "2026-08-10",
      dueDate: "2026-08-20",
      returnedDate: "2026-08-19",
      status: "Returned",
    },
    {
      id: 6,
      name: "Scientific Calculator",
      category: "School Supplies",
      borrower: "Michael Tan",
      lentDate: "2026-08-05",
      dueDate: "2026-08-12",
      returnedDate: "2026-08-11",
      status: "Returned",
    },
  ];

  return (
    <div>
      <div className="mb-4 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-display text-2xl font-medium">Borrowing</h1>
          <p className="text-ink/60">
            Keep track of items you've lent and when they're due.
          </p>
        </div>
        <button className="quick-action-button">
          <PlusIcon className="w-4 h-4" /> Lend to someone
        </button>
      </div>

      <BorrowSummary />
      <BorrowControls />

      {lentItems.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {lentItems.map((item) => (
            <BorrowItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
