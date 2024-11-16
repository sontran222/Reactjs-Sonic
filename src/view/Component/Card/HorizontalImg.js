import React, { Component } from "react";
import "./HorizontalImg.scss";
class HorizontalImg extends Component {
  render() {
    return (
      <div className="filmHorizontal">
        <span className="TotalEpisode">Tập</span>
        <img src={this.props.linkImg} alt="" className="ImageFilm" />
        <div className="title">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default HorizontalImg;
