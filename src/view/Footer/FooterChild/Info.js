import React, { Component } from "react";
import { Link } from "react-router-dom";

class Info extends Component {
  render() {
    return (
      <div className="column">
        <p>Thông tin</p>
        <Link to="">Điều khoản sử dụng</Link>
        <Link to="">Chính sách riêng tư</Link>
        <Link to="">Khiếu nại bản quyền</Link>
      </div>
    );
  }
}

export default Info;
