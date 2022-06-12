import React from "react";
import { useState, useEffect } from "react";
import CartDrawer from "../cart/cartBody/cartFeatures/CartDrawer";
import Cart from "../cart/cartBody/CartIcon";
import { DashboardStyle } from "../../../styles/Navbar.style/dashbord.style";
import Account from "./Account";
import AccountUesr from "../../userLoggedIn/header.user/navBar/Account.uesr";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const currentUser = useSelector((state) => state.entities.auth.currentUser);

  return (
    <>
      <DashboardStyle>
        <Cart cartState={{ showDrawer: [showDrawer, setShowDrawer] }} />
        {currentUser === "login successed" ? <AccountUesr /> : <Account />}
      </DashboardStyle>
      <CartDrawer cartState={{ showDrawer: [showDrawer, setShowDrawer] }} />
    </>
  );
};

export default Dashboard;
