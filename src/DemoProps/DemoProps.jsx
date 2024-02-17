import React, { Component } from "react";
import Card from "./Card";

export default class DemoProps extends Component {
  state = {
    username: "Iron man",
  };

  handleChangeName = () => {
    this.setState({
      username: this.state.username == "Supper man" ? "Iron man" : "Supper man",
    });
  };
  render() {
    let title = "User Profile";
    return (
      <div className="container">
        <h2>DemoProps</h2>
        <Card
          handleClick={this.handleChangeName}
          username={this.state.username}
          titleCard={title}
          imgSrc={
            "https://hips.hearstapps.com/hmg-prod/images/index-28-1660243826.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=1200:*"
          }
        />
      </div>
    );
  }
}
