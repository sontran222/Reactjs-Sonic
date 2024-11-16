import React, { Component } from "react";
import { useLocation } from "react-router-dom";

function withRouter(Component) {
  return (props) => {
    const location = useLocation();
    return <Component {...props} location={location}></Component>;
  };
}
class LoginPage extends Component {
  render() {
    console.log(this.props.location.state);
    const data = this.props.location.state || {};
    return (
      <div>
        <>This is login Page</>
        <>{data.data}</>
        <>{data.message}</>
      </div>
    );
  }
}

export default withRouter(LoginPage);
