const Card = ({ movies }) => {
  console.log(movies);
  return (
    <section className="card">
      <div className="card-list">
        {!movies.Poster ? "Image not available" : <img src={movies.Poster} alt="" />}
      </div>
      <div className="title">{movies.Title}</div>
    </section>
  );
};
export default Card;
