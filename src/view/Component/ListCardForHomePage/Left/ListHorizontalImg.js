import React, { Component } from "react";
import HorizontalImg from "../../Card/HorizontalImg";
import "./ListHorizontalImg.scss";
class ListHorizontalImg extends Component {
  render() {
    return (
      <div className="firstSessionLeft">
        <div className="listFilm">
          {this.props.films.map((item, index) => {
            return (
              <>
                <HorizontalImg item={item}></HorizontalImg>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListHorizontalImg;
