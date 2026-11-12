
function Movie({ title, director, year, studio, genre, poster }) {
  return (
    <div>
      <h2>{title}</h2>
      <p><b>Режисер:</b> {director}</p>
      <p><b>Рік випуску:</b> {year}</p>
      <p><b>Кіностудія:</b> {studio}</p>
      <p><b>Жанр:</b> {genre}</p>

      <h3>Афіша фільму</h3>
      <img
        src={poster}
        alt={title}
        width="300"
        style={{ display: "block" }}
      />
    </div>
  );
}

export default Movie;
