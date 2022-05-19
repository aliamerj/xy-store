import React from "react";
import { useState } from "react";
import CartDrawer from "../cart/cartBody/cartFeatures/CartDrawer";
import Cart from "../cart/cartBody/Cart";
import { DashboardStyle } from "../../../styles/Navbar.style/dashbord.style";
import Account from "./Account";
const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <DashboardStyle>
        <Cart cartState={{ showDrawer: [showDrawer, setShowDrawer] }} />
        <Account />
      </DashboardStyle>
      <CartDrawer cartState={{ showDrawer: [showDrawer, setShowDrawer] }} />
    </>
  );
};

export default Dashboard;
