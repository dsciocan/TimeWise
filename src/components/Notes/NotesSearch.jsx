const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="type to search..." />
    </div>
  );
};

export default Search;
