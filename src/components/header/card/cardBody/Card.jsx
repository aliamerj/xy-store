import { useSelector } from "react-redux";
import { Badge, IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

const Card = ({cardState}) => {
    const {showDrawer: [showDrawer, setShowDrawer]} = {showDrawer: useState(0),...(cardState || {})};

  const getNumberOfItems = useSelector(
    (state) => state.entities.card.cardTotalQuantity
  );
  
  return (
    <IconButton
      aria-label="show cart item"
      color="inherit"
      onClick={() => setShowDrawer(true)}
    >
      <Badge badgeContent={getNumberOfItems} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default Card;
