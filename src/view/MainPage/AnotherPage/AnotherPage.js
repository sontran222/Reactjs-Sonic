import React, { Component } from "react";
import "./AnotherPage.scss";

import VerticalImg3 from "view/Component/Card/VerticalImg3";
import { useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import axios from "axios";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import SkeletonImg from "view/Material_UI/SkeletonUI/SkeletonImg";
import SapChieu from "view/Component/ListCardForHomePage/Right/ListVerticalImg1/SapChieu";
import TopPhim from "view/Component/ListCardForHomePage/Right/ListVerticalImg0/TopPhim";
import SelectValue from "view/Material_UI/SelectUI/SelectValue";

function withUserLocation(WrappedComponent) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
      <WrappedComponent {...props} location={location} navigate={navigate} />
    );
  };
}
class AnotherPage extends Component {
  state = {
    currentPage: 1,
    listFilms: [],
    selectedFilter: "",
    isLoading: true,
  };
  handleChange = (event, value) => {
    this.setState({
      currentPage: value,
    });
    this.props.navigate(
      `${this.props.location.pathname}?page=${value}&limit=20`
    );
    //Phương thức thay đổi đường dẫn không ảnh hưởng đến web
    // window.history.pushState({}, "", `?page=${value}`);
  };

  getCacheKey = () => {
    //key của cache sẽ được đưa vào đây
    return `films-${this.props.data.type}-page-${this.state.currentPage}-filter-${this.state.selectedFilter}`;
  };

  fetchFilms = async () => {
    this.setState({
      isLoading: true,
    });
    //nếu chuyển trang mà thấy có cacheKey thì gọi bên trong cache ra
    const cacheKey = this.getCacheKey();
    const cachedData = sessionStorage.getItem(cacheKey);
    if (cachedData) {
      this.setState({
        listFilms: JSON.parse(cachedData),
        isLoading: false,
      });
    } else {
      let res = await axios.get(
        "https://phimapi.com/v1/api/danh-sach/" +
          this.props.data.type +
          `?limit=20&page=${this.state.currentPage}`,
        {
          params: {
            page: this.state.currentPage,
            limit: 20, //dùng để giới hạn
            filter: this.state.selectedFilter, //nhận giá trị từ dropdown, ví dụ chọn trong thể loại phim viễn tưởng,.. Đây là bộ lọc
          },
        }
      );

      this.setState({
        listFilms: res && res.data ? res.data.data.items : [],
        isLoading: false,
      });
      //lưu trữ vào cache
      sessionStorage.setItem(cacheKey, JSON.stringify(res.data.data.items));
    }
  };
  //lifecycle cho phép cập nhật lần đầu tiên
  async componentDidMount() {
    this.fetchFilms();
  }

  //lifecycle cho phép cập nhật lại
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.data.type !== this.props.data.type ||
      prevState.currentPage !== this.state.currentPage ||
      prevState.selectedFilter !== this.state.selectedFilter
    ) {
      this.fetchFilms();
    }
  }
  render() {
    return (
      <div className="ContainerAnotherPage">
        <div className="LeftAnotherPage">
          <div>
            <p className="titleFilmChosen">Danh sách phim ...</p>
            <SelectValue></SelectValue>
            <SelectValue></SelectValue>
            <SelectValue></SelectValue>
            <SelectValue></SelectValue>
            <SelectValue></SelectValue>

            <button className="filterBtn">Lọc phim</button>
          </div>
          <div className="containerImg">
            {this.state.isLoading
              ? Array.from(new Array(20)).map((_, index) => (
                  <SkeletonImg className="custom-skeleton" />
                ))
              : this.state.listFilms.map((item, index) => {
                  return <VerticalImg3 item={item}></VerticalImg3>;
                })}
          </div>
          <div className="pageNumber">
            <Pagination
              count={20}
              color="primary"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="RightAnotherPage">
          <SapChieu></SapChieu>
          <TopPhim films={this.state.listFilms}></TopPhim>
        </div>
      </div>
    );
  }
}

export default withUserLocation(AnotherPage);
