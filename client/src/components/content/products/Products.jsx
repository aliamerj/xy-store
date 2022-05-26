import { Grid, Container } from "@mui/material";
import Product from "./product";
const Products = ({ products, isLoading }) => {
  return (
    <Container sx={{ py: 5, minHeight: "100vh" }}>
      <Grid container spacing={3} minHeight="50px">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} isLoading={isLoading} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Products;
