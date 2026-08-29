export default function InventoryPage() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Hello, Robby!</h1>
        <p>This is what's happening with your inventory.</p>
      </div>
      <div className="mb-5">
        <h1 className="text-xl font-semibold mb-2">Quick Actions</h1>
        <div className="shadow-xl flex flex-row justify-between border-2 border-primaryBlue rounded-lg w-fit px-3 py-5">
          <button className="quick-action-button">+ Add Item</button>
          <button className="quick-action-button">+ Add Person</button>
          <button className="quick-action-button">+ Lend Item</button>
        </div>
      </div>
    </div>
  );
}
