import { Search as SearchIcon } from "react-bootstrap-icons";

function SearchBar() {
  return (
    <>
      <SearchIcon size={27} className="search__icon" />
      <input
        className="search__Input"
        type="text"
        placeholder="Search a tv show you may like"
      />
    </>
  );
}
export default SearchBar;
