import React, { Fragment, Component } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends Component {
  state = {
    showStart: 0,
    showEnd: 4,
  };

  renderSushi = () => {
    const show = this.props.sushis.slice(
      this.state.showStart,
      this.state.showEnd
    );
    return show.map((sushi) => (
      <Sushi
        key={sushi.id}
        sushi={sushi}
        handleBuySushi={this.props.handleBuySushi}
        canEat={this.props.canEat}
      />
    ));
  };

  handleshowMoreSushi = () => {
    this.setState({
      showStart: (this.state.showStart += 4),
      showEnd: (this.state.showEnd += 4),
    });
  };

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushi()}
          <MoreButton handleshowMoreSushi={this.handleshowMoreSushi} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;
