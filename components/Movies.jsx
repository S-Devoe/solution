import { useEffect, useState } from "react";
import Search from "./Search";
import Card from "./Card";
const Movies = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [found, setFound] = useState("False");
  const [category, setCategory] = useState(false);

  const fetchMovies = async (movieName) => {
    fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=98e2c3ee`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.Response === "False") {
          setFound(data.Response);
          // console.log(data)
        } else {
          setFound("True");
          setMovieList(data.Search);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const setMovie = (e) => {
    setMovieTitle(e.target.value);
  };

  const getMovieList = (e) => {
    if (e.key === "Enter") {
      fetchMovies(movieTitle);
    }
  };
  console.log(movieList);

  //   useEffect(() => {
  //     fetchMovies();
  //   }, []);

  return (
    <section className="movies">
      <Search
        value={movieTitle}
        onKeyPress={getMovieList}
        onChange={setMovie}
      />

      <div className="container">
        {found === "False" ? (
          <div>Enter a valid movie name</div>
        ) : (
          <div className="list">
            <div className="content">
              <h2>Movies</h2>
              <div className="overflow">
                {movieList.map(
                  (mov, index) =>
                    mov.Type === "movie" && (
                      <div className="row">
                        <Card
                          key={index}
                          movies={mov.Type === "movie" && mov}
                        />{" "}
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="content">
              <h2>Series</h2>
              <div className="overflow">
                {movieList.map(
                  (mov, index) =>
                    mov.Type === "series" && (
                      <div className="row">
                        <Card
                          key={index}
                          movies={mov.Type === "series" && mov}
                        />
                        {setCategory(true)}
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Movies;
