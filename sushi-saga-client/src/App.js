import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    money: 100,
    plates: [],
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        json.map((sushi) => {
          this.setState({
            sushis: [...this.state.sushis, { ...sushi, eaten: false }],
          });
        });
      });
  }

  handleBuySushi = (sushi) => {
    if (sushi.price <= this.state.money) {
      this.setState({ money: (this.state.money -= sushi.price) });
      this.setState({ plates: [...this.state.plates, 1] });
      sushi.eaten = true;
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          handleBuySushi={this.handleBuySushi}
          sushis={this.state.sushis}
          canEat={this.state.canEat}
        />
        <Table plates={this.state.plates} money={this.state.money} />
      </div>
    );
  }
}

export default App;
