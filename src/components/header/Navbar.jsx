import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import {
  AppBarStyle,
  TitleStyle,
  GrowStyle,
} from "../../styles/header.style/Navbar.style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const getNumberOfItems = useSelector(state => state.entities.card.cardTotalQuantity)

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
            <IconButton aria-label="show cart item" color="inherit">
              <Badge badgeContent={getNumberOfItems} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBarStyle>
      </AppBar>
    </div>
  );
};
export default Navbar;
