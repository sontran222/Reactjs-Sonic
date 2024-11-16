import React, { Component } from "react";
import { useLocation } from "react-router-dom";
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
      <div>
        <>This is Page Introduce</>
        <>{data.data}</>
      </div>
    );
  }
}

export default withRouter(Introduce);
