import React, { Component } from "react";
import "./VerticalImg1.scss";
import { useNavigate } from "react-router-dom";
function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate}></Component>;
  };
}
class VerticalImg1 extends Component {
  goToPage = (data) => {
    this.props.navigate("/phim", {
      state: data,
    });
  };
  render() {
    return (
      <div
        className="filmVertical1"
        onClick={() => this.goToPage(this.props.linkImg)}
      >
        <span className="TotalEpisode1">Tập</span>
        <img src={this.props.linkImg} alt="" className="ImageFilm1" />
        <div className="title1">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(VerticalImg1);
