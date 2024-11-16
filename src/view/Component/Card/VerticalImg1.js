import React, { Component } from "react";
import "./VerticalImg1.scss";

class VerticalImg1 extends Component {
  render() {
    return (
      <div className="filmVertical1">
        <span className="TotalEpisode1">Tập</span>
        <img src={this.props.linkImg} alt="" className="ImageFilm1" />
        <div className="title1">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default VerticalImg1;
