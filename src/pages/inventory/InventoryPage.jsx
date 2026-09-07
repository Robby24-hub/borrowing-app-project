import Controls from "./Controls";
import ItemCard from "./ItemCard";

export default function InventoryPage() {
  const inventoryItems = [
    {
      id: 1,
      name: "Nintendo Switch",
      category: "Electronics",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-28",
      image: "/images/nintendo-switch.png",
    },
    {
      id: 2,
      name: "Calculus Book",
      category: "Books",
      status: "Borrowed",
      borrower: "John Smith",
      dueDate: "2026-09-03",
      dateAdded: "2026-08-27",
      image: "/images/calculus-book.png",
    },
    {
      id: 3,
      name: "USB Keyboard",
      category: "Electronics",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-26",
      image: "/images/usb-keyboard.png",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      category: "Electronics",
      status: "Overdue",
      borrower: "Maria Santos",
      dueDate: "2026-08-22",
      dateAdded: "2026-08-25",
      image: "/images/wireless-mouse.png",
    },
    {
      id: 5,
      name: "HDMI Cable",
      category: "Accessories",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-24",
      image: "/images/hdmi-cable.png",
    },
    {
      id: 6,
      name: "Projector",
      category: "Electronics",
      status: "Borrowed",
      borrower: "Alex Cruz",
      dueDate: "2026-09-05",
      dateAdded: "2026-08-23",
      image: "/images/projector.png",
    },
    {
      id: 7,
      name: "Scientific Calculator",
      category: "School Supplies",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-22",
      image: "/images/calculator.png",
    },
    {
      id: 8,
      name: "Laptop",
      category: "Electronics",
      status: "Borrowed",
      borrower: "Sarah Reyes",
      dueDate: "2026-09-02",
      dateAdded: "2026-08-21",
      image: "/images/laptop.png",
    },
    {
      id: 9,
      name: "JavaScript Book",
      category: "Books",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-20",
      image: "/images/javascript-book.png",
    },
    {
      id: 10,
      name: "Extension Cord",
      category: "Accessories",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-19",
      image: "/images/extension-cord.png",
    },
    {
      id: 11,
      name: "Web Development Book",
      category: "Books",
      status: "Borrowed",
      borrower: "Michael Tan",
      dueDate: "2026-09-06",
      dateAdded: "2026-08-18",
      image: "/images/web-development-book.png",
    },
    {
      id: 12,
      name: "USB Flash Drive",
      category: "Storage",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-17",
      image: "/images/usb-flash-drive.png",
    },
    {
      id: 13,
      name: "Computer Mouse Pad",
      category: "Accessories",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-16",
      image: "/images/mouse-pad.png",
    },
    {
      id: 14,
      name: "Arduino Uno",
      category: "Electronics",
      status: "Borrowed",
      borrower: "Daniel Garcia",
      dueDate: "2026-09-04",
      dateAdded: "2026-08-15",
      image: "/images/arduino.png",
    },
    {
      id: 15,
      name: "Soldering Iron",
      category: "Tools",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-14",
      image: "/images/soldering-iron.png",
    },
    {
      id: 16,
      name: "VGA Cable",
      category: "Accessories",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-13",
      image: "/images/vga-cable.png",
    },
    {
      id: 17,
      name: "Physics Textbook",
      category: "Books",
      status: "Borrowed",
      borrower: "Kevin Lopez",
      dueDate: "2026-09-07",
      dateAdded: "2026-08-12",
      image: "/images/physics-book.png",
    },
    {
      id: 18,
      name: "Webcam",
      category: "Electronics",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-11",
      image: "/images/webcam.png",
    },
    {
      id: 19,
      name: "Ethernet Cable",
      category: "Accessories",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-10",
      image: "/images/ethernet-cable.png",
    },
    {
      id: 20,
      name: "Tablet",
      category: "Electronics",
      status: "Overdue",
      borrower: "Jessica Lim",
      dueDate: "2026-08-27",
      dateAdded: "2026-08-09",
      image: "/images/tablet.png",
    },
  ];

  return (
    <div>
      <div className="mb-4">
        <h1 className="font-display text-2xl font-medium">Inventory</h1>
        <p className="text-ink/60">Manage all your items.</p>
      </div>

      <Controls />

      <div>
        <h2 className="text-sm text-ink/50 mb-3">
          {inventoryItems.length} items
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {inventoryItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
