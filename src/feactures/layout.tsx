import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/navbar";

export function Layout(): JSX.Element {
  return (
    <div className="relative w-full">
      <Navbar />
      <div className="pl-[8vw]">
        <Outlet />
      </div>
    </div>
  );
}
