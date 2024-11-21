import React, { Component } from "react";
import "./VerticalImg0.scss";
import { useNavigate } from "react-router-dom";
function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
class VerticalImg0 extends Component {
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
        className="filmVertical0"
        onClick={() => this.goToPage(this.props.item.slug)}
      >
        <div className="leftfilmVertical0">
          <img src={linkImg} alt="" className="ImageFilm0" />
        </div>
        <div className="rightfilmVertical0">
          <div className="title0">
            <p>{title}</p>
          </div>
          <span className="TotalEpisode0">Tập 1</span>
          <span className="TotalEpisode0"></span>
        </div>
      </div>
    );
  }
}

export default withRouter(VerticalImg0);
