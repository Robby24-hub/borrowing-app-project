import "./App.css";
import Header from "./components/Hearder";
import SideBar from "./components/sidebar/SideBar";
import ContentArea from "./components/ContentArea";

function App() {
  return (
    <div className="text-white h-screen flex flex-col">
      <Header />
      <div className="flex flex-row w-full grow">
        <SideBar />
        <ContentArea />
      </div>
    </div>
  );
}

export default App;
