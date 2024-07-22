import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
