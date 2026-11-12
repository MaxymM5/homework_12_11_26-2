
function Pet({ name, type, breed, age, color, image }) {
  return (
    <div>
      <h2>Мій домашній улюбленець</h2>

      <p><b>Ім'я:</b> {name}</p>
      <p><b>Тварина:</b> {type}</p>
      <p><b>Порода:</b> {breed}</p>
      <p><b>Вік:</b> {age}</p>
      <p><b>Забарвлення:</b> {color}</p>

      <h3>Фотографія</h3>
      <img
        src={image}
        alt={name}
        width="300"
        style={{ display: "block" }}
      />
    </div>
  );
}

export default Pet;
