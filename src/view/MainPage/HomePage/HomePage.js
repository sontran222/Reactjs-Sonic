import React, { Component } from "react";
import axios from "axios";
import "./HomePage.scss";

import ListVerticalImg3 from "view/Component/ListCardForHomePage/Left/ListVerticalImg3";
import ListHorizontalImg from "view/Component/ListCardForHomePage/Left/ListHorizontalImg";
import SapChieu from "view/Component/ListCardForHomePage/Right/ListVerticalImg1/SapChieu";
import TopPhim from "view/Component/ListCardForHomePage/Right/ListVerticalImg0/TopPhim";
import ListVerticalImg2 from "view/Component/ListCardForHomePage/Left/ListVerticalImg2";

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    try {
      let res = await axios.get(
        "https://phimapi.com/v1/api/danh-sach/phim-le?limit=12"
      );
      this.setState({
        films: res && res.data ? res.data.data.items : [],
      });
    } catch (error) {
      this.setState({ films: [] });
    }
  }

  render() {
    return (
      <div className="homePageContainer">
        <div className="labelMovieHomePage">Phim mới cập nhật</div>
        <ListVerticalImg2 films={this.state.films}></ListVerticalImg2>
        <div className="sessionLeftAndRight">
          <div className="sessionLeft">
            <div className="labelMovieHomePage">Phim chiếu rạp mới</div>
            <ListHorizontalImg films={this.state.films}></ListHorizontalImg>
            <div className="labelMovieHomePage">Phim lẻ mới</div>
            <ListVerticalImg3 films={this.state.films}></ListVerticalImg3>
            <div className="labelMovieHomePage">Phim bộ mới</div>
            <ListVerticalImg3 films={this.state.films}></ListVerticalImg3>
            <div className="labelMovieHomePage">Phim hoạt hình mới</div>
            <ListHorizontalImg films={this.state.films}></ListHorizontalImg>
          </div>
          <div className="sessionRight">
            <SapChieu films={this.state.films}></SapChieu>
            <TopPhim films={this.state.films}></TopPhim>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
