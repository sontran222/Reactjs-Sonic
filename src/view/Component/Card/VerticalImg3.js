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
  gotoPage = (slug) => {
    this.props.navigate(`/phim/${slug}`, {
      state: slug,
    });
  };
  render() {
    const linkImg = "https://phimimg.com/" + this.props.item.poster_url;
    const title = this.props.item.name;
    return (
      <div
        className="filmVertical3"
        onClick={() => this.gotoPage(this.props.item.slug)}
      >
        <span className="TotalEpisode3">Tập</span>
        <img src={linkImg} alt="" className="ImageFilm3" />
        <div className="title3">
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

export default withNavigate(ComponentFilmView3);
