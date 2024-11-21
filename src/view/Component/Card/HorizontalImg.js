import React, { Component } from "react";
import "./HorizontalImg.scss";
import { useNavigate } from "react-router-dom";
function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}
class HorizontalImg extends Component {
  gotoPage = (slug) => {
    this.props.navigate(`/phim/${slug}`, {
      state: slug,
    });
  };

  render() {
    const linkImg = "https://phimimg.com/" + this.props.item.thumb_url;
    const title = this.props.item.name;
    return (
      <div
        className="filmHorizontal"
        onClick={() => this.gotoPage(this.props.item.slug)}
      >
        <span className="TotalEpisode">Tập</span>
        <img src={linkImg} alt="" className="ImageFilm" />
        <div className="title">
          <p>{title}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(HorizontalImg);
