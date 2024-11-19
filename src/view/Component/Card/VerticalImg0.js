import React, { Component } from "react";
import "./VerticalImg0.scss";
import { useNavigate } from "react-router-dom";
function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate();
    <Component {...props} navigate={navigate} />;
  };
}
class VerticalImg0 extends Component {
  goToPage = (data) => {
    this.props.navigate("/phim", {
      state: data,
    });
  };
  render() {
    return (
      <div
        className="filmVertical0"
        onClick={() => this.goToPage(this.props.linkImg)}
      >
        <div className="leftfilmVertical0">
          <img src={this.props.linkImg} alt="" className="ImageFilm0" />
        </div>
        <div className="rightfilmVertical0">
          <div className="title0">
            <p>{this.props.title}</p>
          </div>
          <span className="TotalEpisode0">{this.props.episode}</span>
          <span className="TotalEpisode0">{this.props.quality}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(VerticalImg0);
