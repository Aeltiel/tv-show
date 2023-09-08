import { Search as SearchIcon } from "react-bootstrap-icons";

function SearchBar({ onSubmit }) {
  function submit(event) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      onSubmit(event.target.value);
    }
  }
  return (
    <>
      <SearchIcon size={27} className="search__icon" />
      <input
        onKeyUp={submit}
        className="search__Input"
        type="text"
        placeholder="Search a tv show you may like"
      />
    </>
  );
}
export default SearchBar;
