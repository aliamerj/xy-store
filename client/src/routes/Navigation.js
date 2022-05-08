import { Outlet } from "react-router-dom";
import Navbar from "../components/header/headerPage/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Navigation;
