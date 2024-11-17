import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import "./Introduce.scss";
function withRouter(Component) {
  return (props) => {
    const location = useLocation();
    return <Component {...props} location={location}></Component>;
  };
}
class Introduce extends Component {
  render() {
    const data = this.props.location.state;
    return (
      <div className="containerIntroduce">
        <div>
          <img
            className="mainMovie"
            src="https://phimmoichillz.cc/storage/images/jeong-nyeon-ngoi-sao-vut-sang/jeong-nyeon-ngoi-sao-vut-sang-poster.jpg"
            alt=""
          />
          <div className="titleIntroduce">Ai Oán Trong Vườn Xuân</div>
          <div className="originNameIntroduce">Spring Garden (2024)</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Introduce);
