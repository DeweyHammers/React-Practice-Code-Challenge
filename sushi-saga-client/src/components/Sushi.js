import React, { Component } from "react";

class Sushi extends Component {
  handleEaten = () => {
    this.props.handleBuySushi(this.props.sushi);
  };

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.handleEaten}>
          {this.props.sushi.eaten ? null : (
            <img
              src={this.props.sushi.img_url}
              alt={this.props.sushi.name}
              width="100%"
            />
          )}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
