import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // apelam linkul API
      .then(response => response.json()) // preluam raspunsulde la acel API si il convertim in json
      .then(users => this.setState({ monsters: users })); //adaugam in array ul nostru MONSTERS datele din JSON
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // Destructoring
    const { monsters, searchField } = this.state; //ne aduce variabilele monsters si searchfield si le aduce in state-ul objectului setandu le in constante
    // const monster = this.state.monsters;
    // cont searchField = this.state.searchField;

    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) // verifica daca valoarea din searchField exista in monsters.name;
    );

    return (
      <div className="App">
        <h1> Monsters Rodotex</h1>
        <SearchBox
          placeholder="search monsters.."
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
