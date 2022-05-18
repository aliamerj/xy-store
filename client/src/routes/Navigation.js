import { Outlet } from "react-router-dom";
import Navbar from "../components/header/navbar/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Navigation;
