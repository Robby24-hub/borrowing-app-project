import Controls from "./Controls";

export default function InventoryPage() {
  return (
    <div>
      <div>
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">Inventory</h1>
          <p>Manage all your items.</p>
        </div>
      </div>
      <Controls />
    </div>
  );
}
