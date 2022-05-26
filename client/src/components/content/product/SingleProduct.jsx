import { Add, Remove } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ContainerStyle,
  ImageStyle,
  WrapperStyle,
  ImgContainerStyle,
  InfoContainerStyle,
  TitleStyle,
  DescriptionStyle,
  PriceStyle,
  FilterContainerStyle,
  FilterStyle,
  FilterTitleStyle,
  FilterSizeStyle,
  FilterSizeOptionStyle,
  AddContainerStyle,
  AmountStyle,
  ButtonStyle,
} from "../../../styles/content.style/singleProduct.style/singleProduct.style";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../../../store/cart.store/cartSlice";
import { ButtonStyleSummary } from "../../../styles/content.style/Bill.style/summaryBill.style";
let quantity = 1;

const SingleProduct = ({ product, isLoading }) => {
  const getCartItems = useSelector((state) => state.entities.cart.cartItems);

  if (getCartItems.length > 0) {
    const productInCart = getCartItems.find((p) => p.id === product.id);
    if (productInCart) {
      quantity = productInCart.cartQuantity;
    }
  }
  const [Quantity, setQuantity] = useState(quantity);
  const dispatch = useDispatch();
  let displayButton = false;

  const handleDecreaseQuantity = (item) => {
    if (Quantity === 1) {
      displayButton = true;
      return;
    }
    setQuantity((Quantity) => Quantity - 1);
    dispatch(REMOVE_FROM_CART(item));
  };

  const handleIncreaseQuantity = (item) => {
    setQuantity((Quantity) => Quantity + 1);
  };
  const handleAddToCart = (item) => {
    for (let i = 0; i < Quantity; i++) {
      dispatch(ADD_TO_CART(item));
    }
  };
  return (
    <ContainerStyle>
      <WrapperStyle>
        <ImgContainerStyle>
          <ImageStyle src={product.image.url} />
        </ImgContainerStyle>
        <InfoContainerStyle>
          <TitleStyle>{product.name}</TitleStyle>
          <DescriptionStyle>
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="text.secondary"
            />
          </DescriptionStyle>
          <PriceStyle>${product.price.formatted * quantity}</PriceStyle>
          <FilterContainerStyle>
            <FilterStyle>
              <FilterTitleStyle>Size</FilterTitleStyle>
              <FilterSizeStyle>
                <FilterSizeOptionStyle>XS</FilterSizeOptionStyle>
                <FilterSizeOptionStyle>S</FilterSizeOptionStyle>
                <FilterSizeOptionStyle>M</FilterSizeOptionStyle>
                <FilterSizeOptionStyle>L</FilterSizeOptionStyle>
              </FilterSizeStyle>
            </FilterStyle>
          </FilterContainerStyle>
          <AddContainerStyle>
            <IconButton
              aria-label="increase Quantity"
              onClick={() => handleIncreaseQuantity(product)}
            >
              <Add />
            </IconButton>
            <AmountStyle>{Quantity}</AmountStyle>
            <IconButton
              aria-label="Decrease Quantity"
              onClick={() => handleDecreaseQuantity(product)}
              disabled={displayButton}
            >
              <Remove />
            </IconButton>
          </AddContainerStyle>
          <ButtonStyle onClick={() => handleAddToCart(product)}>
            ADD TO CART
          </ButtonStyle>
          <ButtonStyleSummary style={{ marginTop: "3%" }}>
            CHECKOUT NOW
          </ButtonStyleSummary>
        </InfoContainerStyle>
      </WrapperStyle>
    </ContainerStyle>
  );
};

export default SingleProduct;
