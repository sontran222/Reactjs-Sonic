import React, { Component } from "react";
import "./TopPhim.scss";
import VerticalImg0 from "view/Component/Card/VerticalImg0";

class TopPhim extends Component {
  render() {
    return (
      <div className="secondSesionRight">
        <div className="TitleTopPhim">Top phim bộ</div>
        <div className="listFilm">
          {this.props.films.map((item, index) => {
            return (
              <>
                <VerticalImg0 item={item}></VerticalImg0>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopPhim;
