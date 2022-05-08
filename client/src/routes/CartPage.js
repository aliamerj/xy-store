import { Container, Grid, Card, Box, CardActions } from "@mui/material";
import { useSelector } from "react-redux";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import QuantityControler from "../components/header/cart/cartBody/cartFeatures/QuantityControler";
import CartRemoveItems from "../components/header/cart/cartBody/cartFeatures/CartRemoveItems";
import Bill from "../components/content/cart/Bill";

const CartPage = () => {
  const getCartItems = useSelector((state) => state.entities.cart.cartItems);
  return (
    <>
      <Container sx={{ py: 10 }} maxWidth="lg">
        <Bill />
        <Grid
          container
          spacing={2}
          direction="column"
          width="40%"
          marginRight="auto"
        >
          {getCartItems.map((product) => (
            <Card
              key={product.id}
              sx={{
                display: "flex",
                marginY: 1,
              }}
              component="div"
            >
              <CardActions
                disableSpacing
                sx={{
                  marginBottom: "auto",
                  display: "flex",
                  justifyContent: "flex-end",
                  justifyItems: "flex-end",
                }}
              >
                <CartRemoveItems product={product} />
              </CardActions>
              <CardMedia
                component="img"
                sx={{
                  width: 150,
                  display: { xs: "none", sm: "block" },
                  maxWidth: { xs: 150, md: 150 },
                  marginInlineStart: 2,
                }}
                image={product.image.url}
                alt={product.name}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{ justifyContent: "flex-start" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ marginY: "auto" }}
                >
                  {product.price.formatted_with_symbol}x{product.cartQuantity}
                </Typography>
                <Typography variant="body1" color="Highlight" gutterBottom>
                  ${product.price.formatted * product.cartQuantity}
                </Typography>
              </CardContent>
              <Box sx={{ marginY: "auto" }}>
                <QuantityControler
                  item={product}
                  display={"column"}
                  marginLeft={2}
                />
              </Box>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CartPage;
