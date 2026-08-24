import accountActionsImg from "/images/account-down-actions.png";

export default function Header() {
  return (
    <div className="fixed bg-primaryBlue flex items-center flex-row justify-between w-full px-10 py-3 h-19 text-white">
      <div className="">
        <h1 className="cursor-pointer font-bold text-3xl">
          <span className="text-dark">JusReturnIt</span>
          <span className="text-white">.com</span>
        </h1>
        <h2>Borrowing Web App by Robby</h2>
      </div>

      <div className="flex flex-row items-center gap-20 text-lg">
        <div className="cursor-pointer">
          <h1>Notifications</h1>
        </div>
        <div className="flex flex-row cursor-pointer">
          <h1>Robby</h1>
          <button>
            <img className="aspect-square w-5 mx-5 " src={accountActionsImg} />
          </button>
        </div>
      </div>
    </div>
  );
}
