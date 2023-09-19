import searchIcon from "../images/search-alt.svg";

const SearchIcon = () => {
  return (
    <div>
      <img
        src={searchIcon}
        alt=""
        style={{
          height: "20px",
          width: "20px",
          color: "lightgray",
        }}
      />
    </div>
  );
};

export default SearchIcon;
