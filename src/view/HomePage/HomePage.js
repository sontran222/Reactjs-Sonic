import React, { Component } from "react";
import axios from "axios";
import HorizontalViewImg from "view/ComponentImgView/HorizontalViewImg";
import VerticalViewImg3 from "view/ComponentImgView/VerticalViewImg3";
import VerticalViewImg2 from "view/ComponentImgView/VerticalViewImg2";
import VerticalViewImg0 from "view/ComponentImgView/VerticalViewImg0";
import VerticalViewImg1 from "view/ComponentImgView/VerticalViewImg1";

import "./HomePage.scss";

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
        <div className="NewFilm">
          <p>Phim mới cập nhật</p>
          <div className="listNewFilm">
            {this.state.films.map((item, index) => {
              const linkImg = "https://phimimg.com/" + item.poster_url;
              return (
                <>
                  <VerticalViewImg2 linkImg={linkImg}></VerticalViewImg2>;
                </>
              );
            })}
          </div>
        </div>
        <div className="sessionLeftAndRight">
          <div className="sessionLeft">
            <div className="firstSessionLeft">
              <div>Phim chiếu rạp mới</div>
              <div className="listFilm">
                {this.state.films.map((item, index) => {
                  const linkImg = "https://phimimg.com/" + item.thumb_url;
                  const title = item.name;
                  return (
                    <>
                      <HorizontalViewImg
                        linkImg={linkImg}
                        title={title}
                      ></HorizontalViewImg>
                      {console.log(this.state.films)}
                    </>
                  );
                })}
              </div>
            </div>
            <div className="secondSessionLeft">
              <div>phim bộ mới</div>
              <div className="listFilm">
                {this.state.films.map((item, index) => {
                  const linkImg = "https://phimimg.com/" + item.poster_url;
                  const title = item.name;
                  return (
                    <>
                      <VerticalViewImg3
                        linkImg={linkImg}
                        title={title}
                      ></VerticalViewImg3>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="secondSessionLeft">
              <div>phim lẻ mới</div>
              <div className="listFilm">
                {this.state.films.map((item, index) => {
                  const linkImg = "https://phimimg.com/" + item.poster_url;
                  const title = item.name;
                  return (
                    <>
                      <VerticalViewImg3
                        linkImg={linkImg}
                        title={title}
                      ></VerticalViewImg3>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="firstSessionLeft">
              <div>Phim chiếu rạp mới</div>
              <div className="listFilm">
                {this.state.films.map((item, index) => {
                  const linkImg = "https://phimimg.com/" + item.thumb_url;
                  const title = item.name;
                  return (
                    <>
                      <HorizontalViewImg
                        linkImg={linkImg}
                        title={title}
                      ></HorizontalViewImg>
                      {console.log(this.state.films)}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="sessionRight">
            <div className="firstSessionRight">
              <div>Sắp chiếu</div>
              <div className="listFilm">
                <VerticalViewImg1 title="Ứng Viên Tổng Thống Kamala Harris"></VerticalViewImg1>
                <VerticalViewImg1></VerticalViewImg1>
                <VerticalViewImg1></VerticalViewImg1>
                <VerticalViewImg1></VerticalViewImg1>
                <VerticalViewImg1></VerticalViewImg1>
                <VerticalViewImg1></VerticalViewImg1>
              </div>
            </div>
            <div className="secondSesionRight">
              <div>Top phim bộ</div>
              <div className="listFilm">
                <VerticalViewImg0></VerticalViewImg0>
                <VerticalViewImg0></VerticalViewImg0>
                <VerticalViewImg0></VerticalViewImg0>
                <VerticalViewImg0></VerticalViewImg0>
                <VerticalViewImg0></VerticalViewImg0>
                <VerticalViewImg0></VerticalViewImg0>
                <VerticalViewImg0></VerticalViewImg0>
                <VerticalViewImg0></VerticalViewImg0>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
