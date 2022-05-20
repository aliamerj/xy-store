import { Card, Box, CardActions, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  BottomStyle,
  ButtonStyle,
  ContainerStyle,
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
  SummaryItemPriceStyle,
  SummaryItemStyle,
  SummaryItemTextStyle,
  SummaryStyle,
  SummaryTitleStyle,
  TitleStyle,
  TopButtonStyle,
  TopStyle,
  TopTextsStyle,
  TopTextStyle,
  WrapperStyle,
} from "../../../styles/content.style/Cart.style/bill.style";

const Bill = () => {
  const getCartItems = useSelector(
    (state) => state.entities.cart.cartTotalAmount
  );
  const nav = useNavigate();
  return (
    <ContainerStyle>
      <WrapperStyle>
        <TitleStyle>YOUR BAG</TitleStyle>
        <TopStyle>
          <TopButtonStyle>CONTINUE SHOPPING</TopButtonStyle>
          <TopTextsStyle>
            <TopTextsStyle>Shopping Bag(2)</TopTextsStyle>
            <TopTextStyle>Your Wishlist (0)</TopTextStyle>
          </TopTextsStyle>
          <TopButtonStyle type="filled">CHECKOUT NOW</TopButtonStyle>
        </TopStyle>

        <BottomStyle>
          <InfoStyle>
            <ProductStyle>
              <ProductDetailStyle>
                <ImageStyle src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <DetailsStyle>
                  <ProductNameStyle>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductNameStyle>
                  <ProductIdStyle>
                    <b>ID:</b> 93813718293
                  </ProductIdStyle>
                  <ProductColorStyle colorItem="black" />
                  <ProductSizeSizeStyle>
                    <b>Size:</b> 37.5
                  </ProductSizeSizeStyle>
                </DetailsStyle>
              </ProductDetailStyle>
              <PriceDetailSizeStyle>
                <ProductAmountContainerStyle>
                  <Add />
                  <ProductAmountStyle>2</ProductAmountStyle>
                  <Remove />
                </ProductAmountContainerStyle>
                <ProductPriceStyle>$ 30</ProductPriceStyle>
              </PriceDetailSizeStyle>
            </ProductStyle>
            <HrStyle />
            <ProductStyle>
              <ProductDetailStyle>
                <ImageStyle src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <DetailsStyle>
                  <ProductNameStyle>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductNameStyle>
                  <ProductIdStyle>
                    <b>ID:</b> 93813718293
                  </ProductIdStyle>
                  <ProductColorStyle colorItem="gray" />
                  <ProductSizeSizeStyle>
                    <b>Size:</b> M
                  </ProductSizeSizeStyle>
                </DetailsStyle>
              </ProductDetailStyle>
              <PriceDetailSizeStyle>
                <ProductAmountContainerStyle>
                  <Add />
                  <ProductAmountStyle>1</ProductAmountStyle>
                  <Remove />
                </ProductAmountContainerStyle>
                <ProductPriceStyle>$ 20</ProductPriceStyle>
              </PriceDetailSizeStyle>
            </ProductStyle>
          </InfoStyle>
          <SummaryStyle>
            <SummaryTitleStyle>ORDER SUMMARY</SummaryTitleStyle>
            <SummaryItemStyle>
              <SummaryItemTextStyle>Subtotal</SummaryItemTextStyle>
              <SummaryItemPriceStyle>$ 80</SummaryItemPriceStyle>
            </SummaryItemStyle>
            <SummaryItemStyle>
              <SummaryItemTextStyle>Estimated Shipping</SummaryItemTextStyle>
              <SummaryItemPriceStyle>$ 5.90</SummaryItemPriceStyle>
            </SummaryItemStyle>
            <SummaryItemStyle>
              <SummaryItemTextStyle>Shipping Discount</SummaryItemTextStyle>
              <SummaryItemPriceStyle>$ -5.90</SummaryItemPriceStyle>
            </SummaryItemStyle>
            <SummaryItemStyle type="total">
              <SummaryItemTextStyle>Total</SummaryItemTextStyle>
              <SummaryItemPriceStyle>$ 80</SummaryItemPriceStyle>
            </SummaryItemStyle>
            <ButtonStyle>CHECKOUT NOW</ButtonStyle>
          </SummaryStyle>
        </BottomStyle>
      </WrapperStyle>
    </ContainerStyle>
  );
};
export default Bill;
{
  /* <Box display="flex" justifyContent="flex-end" marginY="auto">
<Card sx={{ display: "inline", minWidth: 350 }}>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    Total:_ _ _ ${getCartItems}
  </Typography>
  <CardActions>
    <Button onClick={() => nav("/checkout")} variant="contained">
      Checkout{" "}
    </Button>
  </CardActions>
</Card>
</Box> */
}
