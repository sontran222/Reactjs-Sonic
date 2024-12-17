import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./VerticalImg2.scss";

function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate}></Component>;
  };
}

class ComponentFilmView2 extends Component {
  goToPage = (slug) => {
    this.props.navigate(`/phim/${slug}`, {
      state: slug,
    });
  };
  render() {
    const linkImg = "https://phimimg.com/" + this.props.item.poster_url;
    const title = this.props.item.name;
    return (
      <div
        className="filmVertical2"
        onClick={() => this.goToPage(this.props.item.slug)}
      >
        <span className="TotalEpisode2">Tập</span>
        <img src={linkImg} alt="" className="ImageFilm2" />
        <div className="title2">
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(ComponentFilmView2);
