import {
  ButtonStyle,
  ContainerStyle,
  ImageStyle,
  InfoStyle,
  TitleStyle,
} from "../../../styles/content.style/categories.style/CategoryItem.style";

const CategoryItem = ({ item }) => {
  return (
    <ContainerStyle>
      <ImageStyle src={item.img} />
      <InfoStyle>
        <TitleStyle>{item.title}</TitleStyle>
        <ButtonStyle>SHOP NOW</ButtonStyle>
      </InfoStyle>
    </ContainerStyle>
  );
};

export default CategoryItem;
