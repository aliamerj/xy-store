import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import Logo from "../header/navbar/Logo";
import {
  CenterStyle,
  ContactItemStyle,
  ContainerStyle,
  DescriptionStyle,
  LeftStyle,
  ListItemStyle,
  ListStyle,
  PaymentStyle,
  RightStyle,
  SocialContainerStyle,
  SocialIconStyle,
  TitleStyle,
} from "../../styles/footer.style/footer.style";

const Footer = () => {
  return (
    <ContainerStyle>
      <LeftStyle>
        <Logo />
        <DescriptionStyle>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </DescriptionStyle>
        <SocialContainerStyle>
          <SocialIconStyle coloritem="#3B5999">
            <Facebook />
          </SocialIconStyle>
          <SocialIconStyle coloritem="#E4405F">
            <Instagram />
          </SocialIconStyle>
          <SocialIconStyle coloritem="#55ACEE">
            <Twitter />
          </SocialIconStyle>
          <SocialIconStyle coloritem="#E60023">
            <Pinterest />
          </SocialIconStyle>
        </SocialContainerStyle>
      </LeftStyle>
      <CenterStyle>
        <TitleStyle>Useful Links</TitleStyle>
        <ListStyle>
          <ListItemStyle>Home</ListItemStyle>
          <ListItemStyle>Cart</ListItemStyle>
          <ListItemStyle>Man Fashion</ListItemStyle>
          <ListItemStyle>Woman Fashion</ListItemStyle>
          <ListItemStyle>Accessories</ListItemStyle>
          <ListItemStyle>My Account</ListItemStyle>
          <ListItemStyle>Order Tracking</ListItemStyle>
          <ListItemStyle>Wishlist</ListItemStyle>
          <ListItemStyle>Wishlist</ListItemStyle>
          <ListItemStyle>Terms</ListItemStyle>
        </ListStyle>
      </CenterStyle>
      <RightStyle>
        <TitleStyle>Contact</TitleStyle>
        <ContactItemStyle>
          <Room style={{ marginRight: "10px" }} /> new York
        </ContactItemStyle>
        <ContactItemStyle>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItemStyle>
        <ContactItemStyle>
          <MailOutline style={{ marginRight: "10px" }} /> aliamer19ali@gmail.com
        </ContactItemStyle>
        <PaymentStyle src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </RightStyle>
    </ContainerStyle>
  );
};

export default Footer;
