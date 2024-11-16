import React, { Component } from "react";
import HorizontalImg from "../Card/HorizontalImg";
import "./ListHorizontalImg.scss";
class ListHorizontalImg extends Component {
  render() {
    return (
      <div className="firstSessionLeft">
        <div>Phim chiếu rạp mới</div>
        <div className="listFilm">
          {this.props.films.map((item, index) => {
            const linkImg = "https://phimimg.com/" + item.thumb_url;
            const title = item.name;
            return (
              <>
                <HorizontalImg linkImg={linkImg} title={title}></HorizontalImg>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListHorizontalImg;
