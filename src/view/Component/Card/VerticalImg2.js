import React, { Component } from "react";
import "./VerticalImg2.scss";
import { useNavigate } from "react-router-dom";
function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate}></Component>;
  };
}
class ComponentFilmView2 extends Component {
  goToPage = (data) => {
    this.props.navigate("/phim", {
      state: data,
    });
  };
  render() {
    return (
      <div className="filmVertical2">
        <span className="TotalEpisode2">Tập</span>
        <img src={this.props.linkImg} alt="" className="ImageFilm2" />
        <div className="title2">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ComponentFilmView2);
