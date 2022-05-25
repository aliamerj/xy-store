import { useEffect, useState } from "react";
import { commerce } from "../../lib/Commerce";
import Products from "./products/Products";
const Contents = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    await commerce.products
      .list()
      .then(({ data }) => setProducts(data))
      .then(() => setIsLoading(true));
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <>
      <Products products={products} isLoading={isLoading} />
    </>
  );
};

export default Contents;
