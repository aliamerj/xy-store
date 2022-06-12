import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { blue } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { SIGN_OUT } from "../../../../store/auth.store/authSlice";

const AccountUesr = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleGoToSettingAccount = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    setAnchorEl(null);
    dispatch(SIGN_OUT());
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Avatar sx={{ bgcolor: blue[300] }}>N</Avatar>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleGoToSettingAccount}>My Account</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </Menu>
    </>
  );
};

export default AccountUesr;
