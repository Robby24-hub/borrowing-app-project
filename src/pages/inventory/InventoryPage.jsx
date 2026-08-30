import Controls from "./Controls";

export default function InventoryPage() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Inventory</h1>
        <p>Manage all your items.</p>
      </div>
      <Controls />
      <div>
        <h1 className="text-xl font-semibold">42 items</h1>
      </div>
    </div>
  );
}
