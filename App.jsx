
import { Component } from "react";
import Movie from "./Movie";
import Profile from "./Profile";
import Clock from "./Clock";
import Pet from "./Pet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "movie" };
  }

  render() {
    return (
      <div>
        <h1>Модуль 5. Функціональні компоненти</h1>

        <button onClick={() => this.setState({ page: "movie" })}>
          Улюблений фільм
        </button>

        <button onClick={() => this.setState({ page: "profile" })}>
          Персональна сторінка
        </button>

        <button onClick={() => this.setState({ page: "clock" })}>
          Поточний час
        </button>

        <button onClick={() => this.setState({ page: "pet" })}>
          Домашній улюбленець
        </button>

        <hr />

        {this.state.page === "movie" && <Movie
          title="Інтерстеллар"
          director="Крістофер Нолан"
          year="2014"
          studio="Paramount Pictures"
          genre="Наукова фантастика"
          poster="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        />}

        {this.state.page === "profile" && <Profile
          name="Механічев Максим Павлович"
          phone="+380 00 000 0000"
          email="example@gmail.com"
          city="Вінниця"
          experience="Початківець"
          skills="HTML, CSS, JavaScript, React"
        />}

        {this.state.page === "clock" && <Clock
          title="Поточний час"
          city="Вінниця"
        />}

        {this.state.page === "pet" && <Pet
          name="Бім"
          type="Собака"
          breed="Німецька вівчарка"
          age="3 роки"
          color="Світла жовта"
          image="https://images.unsplash.com/photo-1552053831-71594a27632d?w=500"
        />}
      </div>
    );
  }
}

export default App;
