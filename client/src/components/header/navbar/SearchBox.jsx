import { Search } from "@mui/icons-material";
import {
  InputSearchBoxStyle,
  SearchBoxStyle,
} from "../../../styles/header.style/Navbar.style/SearchBox.style";

const SearchBox = () => {
  return (
    <>
      <SearchBoxStyle>
        <Search />
        <InputSearchBoxStyle />
      </SearchBoxStyle>
    </>
  );
};
export default SearchBox;
