import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import DashBoardDetails from "./components/DashBoardDetails";
import UpcomingDetails from "./components/UpcomingDetails";
function App() {
  return (
    <div className=" md:overflow-x-hidden flex  font-poppins">
      <div>
        <SideBar />
      </div>
      <div className="">
        <NavBar />
        <div className="flex md:flex md:flex-col">
          <DashBoardDetails />
          <div className=" ml-16">
            <UpcomingDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
