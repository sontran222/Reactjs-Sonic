import React, { Component } from "react";
import VerticalImg2 from "view/Component/Card/VerticalImg2";
import "./ListVerticalImg2.scss";
class ListVerticalImg2 extends Component {
  render() {
    return (
      <div className="NewFilm">
        <div className="listNewFilm">
          {this.props.films.map((item, index) => {
            return (
              <>
                <VerticalImg2 item={item}></VerticalImg2>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListVerticalImg2;
