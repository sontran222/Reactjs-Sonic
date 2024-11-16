import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./VerticalImg3.scss";

function withNavigate(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate}></Component>;
  };
}

class ComponentFilmView3 extends Component {
  gotoPage = (data) => {
    this.props.navigate("/phim", {
      state: data,
    });
  };
  render() {
    return (
      <div
        className="filmVertical3"
        onClick={() => this.gotoPage(this.props.linkImg)}
      >
        <span className="TotalEpisode3">Tập</span>
        <img src={this.props.linkImg} alt="" className="ImageFilm3" />
        <div className="title3">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default withNavigate(ComponentFilmView3);
