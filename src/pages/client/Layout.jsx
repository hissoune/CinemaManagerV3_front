import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function Layout() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
