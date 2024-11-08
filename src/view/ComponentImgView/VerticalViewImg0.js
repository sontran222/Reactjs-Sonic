import React, { Component } from "react";
import "./VerticalViewImg0.scss";
class VerticalViewImg0 extends Component {
  render() {
    return (
      <div className="filmVertical0">
        <div className="leftfilmVertical0">
          <img src={this.props.linkImg} alt="" className="ImageFilm0" />
        </div>
        <div className="rightfilmVertical0">
          <div className="title0">
            <p>{this.props.title}</p>
          </div>

          <span className="TotalEpisode0">{this.props.episode}</span>
          <span className="TotalEpisode0">{this.props.quality}</span>
        </div>
      </div>
    );
  }
}

export default VerticalViewImg0;
