import { AppBar, Toolbar } from "@mui/material";
import Dashboard from "./Dashboard";
import Logo from "./Logo";

import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <>
      <AppBar color="inherit" position="sticky">
        <Toolbar>
          <Logo />
          <SearchBox />
          <Dashboard />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
