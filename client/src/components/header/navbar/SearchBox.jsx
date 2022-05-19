import SearchIcon from "@mui/icons-material/Search";
import {
  SearchBoxStyle,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../../styles/Navbar.style/SearchBox.style";

const SearchBox = () => {
  return (
    <>
      <SearchBoxStyle>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </SearchBoxStyle>
    </>
  );
};
export default SearchBox;
