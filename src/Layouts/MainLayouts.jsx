import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";

function MainLayouts() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default MainLayouts;
