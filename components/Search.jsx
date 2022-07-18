const Search = ({value, onChange, onKeyPress}) => {
  return (
    <section>
      <div className="search">
        <p>Search</p>
        <input
          type="text"
          value={value}
          onKeyPress={onKeyPress}
          onChange={onChange}
          placeholder="Enter movie title and click enter"
          required
        />
      </div>
    </section>
  );
}
export default Search