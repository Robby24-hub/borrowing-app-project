export default function QuickActions() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-2">Quick Actions</h1>
      <div className="flex flex-row justify-between border-2 border-primaryBlue rounded-lg w-fit px-3 py-5">
        <button className="quick-action-button">+ Add Item</button>
        <button className="quick-action-button">+ Add Person</button>
        <button className="quick-action-button">+ Lend Item</button>
      </div>
    </div>
  );
}
