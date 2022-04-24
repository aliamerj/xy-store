import { useEffect, useState } from "react";
import { commerce } from "../../lib/Commerce";
import Products from "./products/Products";
const Contents = () => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCard(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (
    <>
      <Products products={products} />
    </>
  );
};

export default Contents;
