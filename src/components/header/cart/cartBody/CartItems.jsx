import {
  List,
  ListItem,
  Typography,
  Divider,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartRemoveItems from "./cartFeatures/CartRemoveItems";
import QuantityControler from "./cartFeatures/QuantityControler";

const CartItems = () => {
  const getCartItems = useSelector((state) => state.entities.cart.cartItems);

  return (
    <List>
      {getCartItems.map((item) => (
        <Fragment key={item.id}>
          <CardActions disableSpacing>
            <CartRemoveItems product={item} />
          </CardActions>
          <ListItem disablePadding>
            <Card
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardActionArea component="a" href="#">
                <CardMedia
                  component="img"
                  sx={{
                    width: 90,
                    display: { xs: "none", sm: "block" },
                    maxWidth: { xs: 90, md: 90 },
                    marginInlineStart: 2,
                  }}
                  image={item.image.url}
                  alt={item.name}
                />
              </CardActionArea>
              <CardContent>
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                >
                  {item.price.formatted_with_symbol}x{item.cartQuantity}
                </Typography>
                <Typography variant="body1" color="Highlight" gutterBottom>
                  ${item.price.formatted * item.cartQuantity}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
          <QuantityControler item={item} display={"row"} marginTop={1} />

          <Divider
            variant="fullWidth"
            component="li"
            sx={{ bgcolor: "GrayText" }}
          />
        </Fragment>
      ))}
    </List>
  );
};
export default CartItems;
