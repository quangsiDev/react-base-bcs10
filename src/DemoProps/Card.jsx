import React, { Component } from "react";

export default class Card extends Component {
  render() {
    // this.props ~ nhận data từ component cha truyền vào dưới dạng object
    console.log(this.props);
    return (
      <div className="card text-left">
        <img className="card-img-top w-25" src={this.props.imgSrc} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.titleCard}</h4>
          <p className="display-2">{this.props.username}</p>
          <button onClick={this.props.handleClick} className="btn-warning">
            Change name
          </button>
        </div>
      </div>
    );
  }
}
// state ở đâu, setState tại đó
