import React, { Component } from "react";
import axios from "axios";
import "./HomePage.scss";

import SapChieu from "view/Component/SapChieu/SapChieu";
import TopPhim from "view/Component/TopPhim/TopPhim";
import ListVerticalImg3 from "view/Component/ListCardForHomePage/ListVerticalImg3";
import ListHorizontalImg from "view/Component/ListCardForHomePage/ListHorizontalImg";
import ListVerticalImg2 from "view/Component/ListCardForHomePage/ListVerticalImg2";

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    let res = await axios.get(
      "https://phimapi.com/v1/api/danh-sach/phim-le?limit=12"
    );
    this.setState({
      films: res && res.data ? res.data.data.items : [],
    });
  }

  render() {
    return (
      <div className="homePageContainer">
        <ListVerticalImg2></ListVerticalImg2>
        <div className="sessionLeftAndRight">
          <div className="sessionLeft">
            <ListHorizontalImg films={this.state.films}></ListHorizontalImg>
            <ListVerticalImg3 films={this.state.films}></ListVerticalImg3>
            <ListVerticalImg3 films={this.state.films}></ListVerticalImg3>
            <ListHorizontalImg films={this.state.films}></ListHorizontalImg>
          </div>
          <div className="sessionRight">
            <SapChieu></SapChieu>
            <TopPhim></TopPhim>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
