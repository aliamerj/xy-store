import { AppBar, Toolbar, Typography } from "@mui/material";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import {
  AppBarStyle,
  TitleStyle,
  GrowStyle,
} from "../../../styles/header.style/Navbar.style";

import { useState } from "react";
import CardDrawer from "../card/cardBody/cardFeatures/CardDrawer";
import Card from "../card/cardBody/Card";

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
            <Card cardState={{ showDrawer: [showDrawer, setShowDrawer] }} />
          </Toolbar>
        </AppBarStyle>
      </AppBar>
      <CardDrawer cardState={{ showDrawer: [showDrawer, setShowDrawer] }} />
    </div>
  );
};
export default Navbar;
