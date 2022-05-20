import styled from "styled-components";
import { ContainerStyle } from "../../../styles/content.style/categories.style/categories.style";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <ContainerStyle>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </ContainerStyle>
  );
};

export default Categories;
