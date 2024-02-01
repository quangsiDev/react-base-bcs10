import React, { Component } from "react";

// sử dụng hình ảnh nằm trong folder public => dẫn url từ html
export default class Ex_Car extends Component {
  state = {
    color: "red",
  };
  hanldeChangeColor = (color) => this.setState({ color: color });

  render() {
    let url = `./imageSrc/CarBasic/products/${this.state.color}-car.jpg`;
    return (
      <div className="container">
        <img
          style={{
            width: "40%",
          }}
          src={url}
          alt=""
        />
        <button onClick={() => this.hanldeChangeColor("red")} className="btn-danger">
          Red
        </button>
        <button onClick={() => this.hanldeChangeColor("black")} className="btn-dark">
          Black
        </button>
        <button onClick={() => this.hanldeChangeColor("silver")} className="btn-secondary">
          Silver
        </button>
      </div>
    );
  }
}
