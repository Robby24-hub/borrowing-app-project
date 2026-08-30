import dayjs from "dayjs";
import Controls from "./Controls";

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
      image: "/images/nintendo-switch.jpg",
    },
    {
      id: 2,
      name: "Calculus Book",
      category: "Books",
      status: "Borrowed",
      borrower: "John Smith",
      dueDate: "2026-09-03",
      dateAdded: "2026-08-27",
      image: "/images/calculus-book.jpg",
    },
    {
      id: 3,
      name: "USB Keyboard",
      category: "Electronics",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-26",
      image: "/images/usb-keyboard.jpg",
    },
    {
      id: 4,
      name: "Wireless Mouse",
      category: "Electronics",
      status: "Borrowed",
      borrower: "Maria Santos",
      dueDate: "2026-09-01",
      dateAdded: "2026-08-25",
      image: "/images/wireless-mouse.jpg",
    },
    {
      id: 5,
      name: "HDMI Cable",
      category: "Accessories",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-24",
      image: "/images/hdmi-cable.jpg",
    },
    {
      id: 6,
      name: "Projector",
      category: "Electronics",
      status: "Borrowed",
      borrower: "Alex Cruz",
      dueDate: "2026-09-05",
      dateAdded: "2026-08-23",
      image: "/images/projector.jpg",
    },
    {
      id: 7,
      name: "Scientific Calculator",
      category: "School Supplies",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-22",
      image: "/images/calculator.jpg",
    },
    {
      id: 8,
      name: "Laptop",
      category: "Electronics",
      status: "Borrowed",
      borrower: "Sarah Reyes",
      dueDate: "2026-09-02",
      dateAdded: "2026-08-21",
      image: "/images/laptop.jpg",
    },
    {
      id: 9,
      name: "JavaScript Book",
      category: "Books",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-20",
      image: "/images/javascript-book.jpg",
    },
    {
      id: 10,
      name: "Extension Cord",
      category: "Accessories",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-19",
      image: "/images/extension-cord.jpg",
    },
    {
      id: 11,
      name: "Web Development Book",
      category: "Books",
      status: "Borrowed",
      borrower: "Michael Tan",
      dueDate: "2026-09-06",
      dateAdded: "2026-08-18",
      image: "/images/web-development-book.jpg",
    },
    {
      id: 12,
      name: "USB Flash Drive",
      category: "Storage",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-17",
      image: "/images/usb-flash-drive.jpg",
    },
    {
      id: 13,
      name: "Computer Mouse Pad",
      category: "Accessories",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-16",
      image: "/images/mouse-pad.jpg",
    },
    {
      id: 14,
      name: "Arduino Uno",
      category: "Electronics",
      status: "Borrowed",
      borrower: "Daniel Garcia",
      dueDate: "2026-09-04",
      dateAdded: "2026-08-15",
      image: "/images/arduino.jpg",
    },
    {
      id: 15,
      name: "Soldering Iron",
      category: "Tools",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-14",
      image: "/images/soldering-iron.jpg",
    },
    {
      id: 16,
      name: "VGA Cable",
      category: "Accessories",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-13",
      image: "/images/vga-cable.jpg",
    },
    {
      id: 17,
      name: "Physics Textbook",
      category: "Books",
      status: "Borrowed",
      borrower: "Kevin Lopez",
      dueDate: "2026-09-07",
      dateAdded: "2026-08-12",
      image: "/images/physics-book.jpg",
    },
    {
      id: 18,
      name: "Webcam",
      category: "Electronics",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-11",
      image: "/images/webcam.jpg",
    },
    {
      id: 19,
      name: "Ethernet Cable",
      category: "Accessories",
      status: "Available",
      borrower: null,
      dueDate: null,
      dateAdded: "2026-08-10",
      image: "/images/ethernet-cable.jpg",
    },
    {
      id: 20,
      name: "Tablet",
      category: "Electronics",
      status: "Overdue",
      borrower: "Jessica Lim",
      dueDate: "2026-08-27",
      dateAdded: "2026-08-09",
      image: "/images/tablet.jpg",
    },
  ];

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Inventory</h1>
        <p>Manage all your items.</p>
      </div>
      <Controls />
      <div>
        <h1 className="text-xl font-semibold">42 items</h1>
        <div className="bg-white w-full border-2 border-primaryBlue rounded-lg overflow-hidden shadow-xl mb-5">
          <div className="bg-grayishWhite trow-inventory">
            <p className="tdata tdataHead">Item</p>
            <p className="tdata tdataHead">Category</p>
            <p className="tdata tdataHead">Status</p>
            <p className="tdata tdataHead">Borrower</p>
            <p className="tdata tdataHead">Due Date</p>
            <p className="tdata tdataHead">Date Added</p>
          </div>
          {inventoryItems.map((inventoryItem) => {
            return (
              <div className="trow-inventory" key={inventoryItem.id}>
                <div className="flex flex-row items-center justify-start">
                  <div
                    className="aspect-square w-5 border bg-center bg-cover"
                    style={{ backgroundImage: `url(${inventoryItem.image})` }}
                  ></div>
                  <p className="tdata ml-2">{inventoryItem.name}</p>
                </div>
                <p className="tdata">{inventoryItem.category}</p>
                <p
                  className={`tdata font-semibold
                    ${inventoryItem.status === "Available" && "text-availableGreen"}
                    ${inventoryItem.status === "Borrowed" && "text-borrowedYellow"}
                    ${inventoryItem.status === "Overdue" && "text-overdueRed"}
                  `}
                >
                  {inventoryItem.status}
                </p>
                <p className="tdata">
                  {inventoryItem.borrower ? inventoryItem.borrower : "---"}
                </p>
                <p className="tdata">
                  {inventoryItem.dueDate
                    ? dayjs(inventoryItem.dueDate).format("MMM D, YYYY")
                    : "---"}
                </p>
                <p className="tdata">
                  {dayjs(inventoryItem.dateAdded).format("MMM D, YYYY")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
