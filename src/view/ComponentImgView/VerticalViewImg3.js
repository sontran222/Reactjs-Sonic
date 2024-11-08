import React, { Component } from "react";
import "./VerticalViewImg3.scss";

class ComponentFilmView3 extends Component {
  render() {
    return (
      <div className="filmVertical3">
        <span className="TotalEpisode3">Tập</span>
        <img src={this.props.linkImg} alt="" className="ImageFilm3" />
        <div className="title3">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default ComponentFilmView3;
