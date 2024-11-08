import React, { Component } from "react";
import "./VerticalViewImg2.scss";

class ComponentFilmView2 extends Component {
  render() {
    return (
      <div className="filmVertical2">
        <span className="TotalEpisode2">Tập</span>
        <img src={this.props.linkImg} alt="" className="ImageFilm2" />
        <div className="title2">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default ComponentFilmView2;
