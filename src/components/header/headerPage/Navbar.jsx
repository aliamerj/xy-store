import { AppBar, Toolbar, Typography } from "@mui/material";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import {
  AppBarStyle,
  TitleStyle,
  GrowStyle,
} from "../../../styles/header.style/Navbar.style";

import { useState } from "react";
import CartDrawer from "../cart/cartBody/cartFeatures/CartDrawer";
import Cart from "../cart/cartBody/Cart";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div>
      <AppBar position="relative" color="inherit">
        <AppBarStyle>
          <Toolbar>
            <Typography component={"span"} color="inherit">
              <TitleStyle>
                <Logo />
              </TitleStyle>
            </Typography>
            <SearchBox />
            <GrowStyle />
            <Cart cartState={{ showDrawer: [showDrawer, setShowDrawer] }} />
          </Toolbar>
        </AppBarStyle>
      </AppBar>
      <CartDrawer cartState={{ showDrawer: [showDrawer, setShowDrawer] }} />
    </div>
  );
};
export default Navbar;
