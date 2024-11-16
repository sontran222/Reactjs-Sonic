import React, { Component } from "react";
import VerticalImg3 from "../Card/VerticalImg3";
import "./ListVerticalImg3.scss";
class ListVerticalImg3 extends Component {
  render() {
    return (
      <div className="secondSessionLeft">
        <div>phim lẻ mới</div>
        <div className="listFilm">
          {this.props.films.map((item, index) => {
            const linkImg = "https://phimimg.com/" + item.poster_url;
            const title = item.name;
            return (
              <>
                <VerticalImg3 linkImg={linkImg} title={title}></VerticalImg3>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListVerticalImg3;
