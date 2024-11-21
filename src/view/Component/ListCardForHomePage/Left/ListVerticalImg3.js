import React, { Component } from "react";
import VerticalImg3 from "../../Card/VerticalImg3";
import "./ListVerticalImg3.scss";
class ListVerticalImg3 extends Component {
  render() {
    return (
      <div className="secondSessionLeft">
        <div className="listFilm">
          {this.props.films.map((item, index) => {
            return (
              <>
                <VerticalImg3 item={item}></VerticalImg3>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListVerticalImg3;
