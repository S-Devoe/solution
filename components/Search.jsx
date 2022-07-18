import { useState } from "react";

const Search = ({ setSearchValue, fetchMovies}) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(value)
  };
  console.log(value);

  return (
    <section>
      <div className="search">
        <p>Search</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter movie title and click enter"
            // onClick={handleSubmit}
            required
          />
        </form>
      </div>
    </section>
  );
};
export default Search;
