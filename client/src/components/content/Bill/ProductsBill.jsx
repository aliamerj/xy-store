import { Divider, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../../../store/cart.store/cartSlice";
import CartRemoveItems from "../../header/cart/cartBody/cartFeatures/CartRemoveItems";
import { Add, Remove } from "@mui/icons-material";
import {
  DetailsStyle,
  HrStyle,
  ImageStyle,
  InfoStyle,
  PriceDetailSizeStyle,
  ProductAmountContainerStyle,
  ProductAmountStyle,
  ProductColorStyle,
  ProductDetailStyle,
  ProductIdStyle,
  ProductNameStyle,
  ProductPriceStyle,
  ProductSizeSizeStyle,
  ProductStyle,
} from "../../../styles/content.style/Bill.style/productBill.style";
import { Fragment } from "react";
const ProductsBill = () => {
  const dispatch = useDispatch();
  let displayButton = false;

  const getCartItems = useSelector((state) => state.entities.cart.cartItems);
  const handleDecreaseQuantity = (item) => {
    if (item.cartQuantity === 1) {
      displayButton = true;
      return;
    }
    dispatch(REMOVE_FROM_CART(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(ADD_TO_CART(item));
  };
  return (
    <InfoStyle>
      {getCartItems.map((product) => (
        <Fragment key={product.id}>
          <ProductStyle>
            <ProductDetailStyle>
              <CartRemoveItems product={product} />
              <ImageStyle
                src={
                  product.image.url +
                  "?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                }
              />
              <DetailsStyle>
                <ProductNameStyle>
                  <b>Product:</b> {product.name}
                </ProductNameStyle>
                <ProductIdStyle>
                  <b>ID:</b> {product.id}
                </ProductIdStyle>
                <ProductColorStyle colorItem="black" />
                <ProductSizeSizeStyle>
                  <b>Size:</b> 37.5
                </ProductSizeSizeStyle>
              </DetailsStyle>
            </ProductDetailStyle>

            <PriceDetailSizeStyle>
              <ProductAmountContainerStyle>
                <IconButton
                  aria-label="increase Quantity"
                  onClick={() => handleIncreaseQuantity(product)}
                >
                  <Add />
                </IconButton>
                <ProductAmountStyle>{product.cartQuantity}</ProductAmountStyle>
                <IconButton
                  aria-label="Decrease Quantity"
                  onClick={() => handleDecreaseQuantity(product)}
                  disabled={displayButton}
                >
                  <Remove />
                </IconButton>
              </ProductAmountContainerStyle>
              <ProductPriceStyle>
                ${product.price.formatted * product.cartQuantity}
              </ProductPriceStyle>
            </PriceDetailSizeStyle>
          </ProductStyle>
          <Divider />
          <HrStyle />
        </Fragment>
      ))}
    </InfoStyle>
  );
};

export default ProductsBill;
