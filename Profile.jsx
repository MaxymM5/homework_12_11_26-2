
function Profile({ name, phone, email, city, experience, skills }) {
  return (
    <div>
      <h2>Персональна сторінка</h2>

      <p><b>ПІБ:</b> {name}</p>
      <p><b>Телефон:</b> {phone}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Місто проживання:</b> {city}</p>
      <p><b>Досвід роботи:</b> {experience}</p>
      <p><b>Навички:</b> {skills}</p>
    </div>
  );
}

export default Profile;
