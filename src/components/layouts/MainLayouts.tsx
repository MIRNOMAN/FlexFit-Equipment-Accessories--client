import { Outlet } from "react-router-dom";
import Navbar from "../../share/Navbar";
import Footer from "../../share/Footer";

const MainLayouts = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
