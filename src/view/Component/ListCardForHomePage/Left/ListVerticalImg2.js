import React, { Component } from "react";
import VerticalImg2 from "view/Component/Card/VerticalImg2";
import "./ListVerticalImg2.scss";
class ListVerticalImg2 extends Component {
  render() {
    return (
      <div className="NewFilm">
        <div className="titleList2">Phim mới cập nhật</div>
        <div className="listNewFilm">
          <VerticalImg2></VerticalImg2>;<VerticalImg2></VerticalImg2>;
          <VerticalImg2></VerticalImg2>;<VerticalImg2></VerticalImg2>;
          <VerticalImg2></VerticalImg2>;<VerticalImg2></VerticalImg2>;
          <VerticalImg2></VerticalImg2>;<VerticalImg2></VerticalImg2>;
          <VerticalImg2></VerticalImg2>;<VerticalImg2></VerticalImg2>;
        </div>
      </div>
    );
  }
}

export default ListVerticalImg2;
