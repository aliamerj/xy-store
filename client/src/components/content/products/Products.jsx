import { Grid, Container } from "@mui/material";
import Product from "./product";
const Products = ({ products, isLoading }) => {
  return (
    <main>
      <Container sx={{ py: 5 }} maxWidth="lg">
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} isLoading={isLoading} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};
export default Products;
