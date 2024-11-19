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
  gotoPage = (data) => {
    this.props.navigate("/phim", {
      state: data,
    });
  };
  render() {
    return (
      <div
        className="filmHorizontal"
        onClick={() => this.gotoPage(this.props.linkImg)}
      >
        <span className="TotalEpisode">Tập</span>
        <img src={this.props.linkImg} alt="" className="ImageFilm" />
        <div className="title">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(HorizontalImg);
