import { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import CardItems from "../CardItems";
import CardHeader from "../../cardHeader/CardHeader";

const CardDrawer = ({ cardState }) => {
  const {
    showDrawer: [showDrawer, setShowDrawer],
  } = { showDrawer: useState(false), ...(cardState || {}) };
  return (
    <div>
      <SwipeableDrawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        onOpen={() => true}
        role="presentation"
      >
        <CardHeader />
        <CardItems />
      </SwipeableDrawer>
    </div>
  );
};

export default CardDrawer;
