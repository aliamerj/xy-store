import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_CARD } from "../../../../store/card.store/cardSlice";

const CardRemoveItems = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <IconButton
        onClick={() => dispatch(REMOVE_FROM_CARD(product))}
        aria-label="remove from cart"
      >
        <CloseIcon />
      </IconButton>
    </>
  );
};
export default CardRemoveItems;
