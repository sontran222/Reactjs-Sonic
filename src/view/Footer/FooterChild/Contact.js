import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div className="column">
        <p>Trợ giúp</p>
        <Link to="">Hỏi đáp</Link>
        <Link to="">Liên hệ</Link>
        <Link to="">Tin tức</Link>
      </div>
    );
  }
}

export default Contact;
