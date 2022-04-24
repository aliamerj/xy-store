import { AddShoppingCart } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { ADD_TO_CARD } from "../../store/card.store/cardSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={product.image.url}
        alt={product.name}
        height="300"
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="h5">
          {product.price.formatted_with_symbol}
        </Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="text.secondary"
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to cart"
          onClick={() => dispatch(ADD_TO_CARD(product))}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
