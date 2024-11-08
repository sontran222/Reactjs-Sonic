import React, { Component } from "react";
import "./HorizontalViewImg.scss";
class ComponentFilmViewShort extends Component {
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

export default ComponentFilmViewShort;
