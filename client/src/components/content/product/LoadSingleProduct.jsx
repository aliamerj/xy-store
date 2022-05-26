import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { commerce } from "../../../lib/Commerce";
import SingleProduct from "./SingleProduct";
import { Box, CircularProgress } from "@mui/material";
const LoadSingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      await commerce.products
        .list()
        .then(({ data }) => data.find((product) => product.id === productId))
        .then((product) =>
          product ? setProduct(product) : setProduct("NOT FOUND")
        )
        .then(() => setIsLoading(true))
        .catch(<h1>404</h1>);
    };
    fetchProduct();
  }, [productId]);
  // <SingleProduct product={product} isLoading={isLoading} />

  return (
    <>
      {product === "NOT FOUND" ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2.5%",
            marginBottom: "30%",
          }}
        >
          <h1>404</h1>
        </Box>
      ) : isLoading ? (
        <SingleProduct product={product} isLoading={isLoading} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2.5%",
            marginBottom: "30%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default LoadSingleProduct;
