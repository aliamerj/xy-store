import {MenuItem} from "@mui/material";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import {
  AppBarStyle,
  Center,
  Left,
  Right,
  Wrapper,
} from "../../../styles/header.style/Navbar.style";

import { useState } from "react";
import CartDrawer from "../cart/cartBody/cartFeatures/CartDrawer";
import Cart from "../cart/cartBody/Cart";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div>
      <AppBarStyle>
        <Wrapper>
          <Left>
            <Logo />
          </Left>
          <Center>
            <SearchBox />
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Cart cartState={{ showDrawer: [showDrawer, setShowDrawer] }} />
            </MenuItem>
          </Right>
        </Wrapper>
      </AppBarStyle>
      <CartDrawer cartState={{ showDrawer: [showDrawer, setShowDrawer] }} />
    </div>
  );
};
export default Navbar;
