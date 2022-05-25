import { AddShoppingCart } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../../store/cart.store/cartSlice";

const Product = ({ product, isLoading }) => {
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(ADD_TO_CART(product));
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {isLoading ? (
        <CardMedia
          component="img"
          image={product.image.url}
          alt={product.name}
          height="300"
        />
      ) : (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={210}
          height={300}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        {isLoading ? (
          <>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </>
        ) : (
          <>
            <Skeleton
              animation="wave"
              width="80%"
              height={40}
              style={{ marginBottom: 6 }}
            />
          </>
        )}
      </CardContent>
      <CardActions disableSpacing>
        {isLoading ? (
          <IconButton
            aria-label="add to cart"
            onClick={() => handleAddProduct(product)}
          >
            <AddShoppingCart />
          </IconButton>
        ) : (
          <Skeleton
            animation="wave"
            width="80%"
            height={40}
            style={{ marginBottom: 6 }}
          />
        )}
      </CardActions>
    </Card>
  );
};

export default Product;
