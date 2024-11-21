import React, { Component } from "react";
import "./WatchPage.scss";
import Button from "@mui/material/Button";
import TopPhim from "view/Component/ListCardForHomePage/Right/ListVerticalImg0/TopPhim";
import axios from "axios";
import ListVerticalImg2 from "view/Component/ListCardForHomePage/Left/ListVerticalImg2";

class WatchPage extends Component {
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
      <div className="watchPageContainer">
        <div className="leftAndRightWatchPage">
          <div className="leftWatchPage">
            <div className="video-container">
              <iframe
                src="https://player.phimapi.com/player/?url=https://s4.phim1280.tv/20241120/7XcgWtVv/index.m3u8"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Responsive Video Player"
              ></iframe>
            </div>
          </div>
          <div className="rightWatchPage">
            <div className="chooseEpisodeWatchPage">Chọn tập</div>
            <div className="borderWatchPageEpisode">
              <ul className="watchPageEpisode">
                <li className="SelectedEpisode">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="watchPageBottom">
          <div className="watchPageLeftBottom">
            <div className="titleMovie">
              <span>Tên phim |</span> <span>Tập 1</span>
            </div>
            <div className="changeServer">
              <span>Đổi server: </span>
              <span>
                <Button variant="contained">Server 1</Button>
              </span>
              <span>
                <Button variant="outlined">Server 2</Button>
              </span>
            </div>
            <div className="watchPageDescription">
              <span>Miêu tả:</span>{" "}
              <span>
                {" "}
                “Đại Lý Tự Thiếu Khanh Du” là bộ phim phá án huyền ảo cổ trang
                đạo diễn bởi Vương Uy (“Thượng Thực”), diễn viên chính Đinh Vũ
                Hề (“Trần Thiên Thiên Trong Lời Đồn”), Châu Kỳ (“Tiểu Hoan Hỉ”),
                Ngụy Triết Minh (“Hạ Tiên Sinh Lưu Luyến Không Quên”), Đinh Gia
                Văn (“Thanh Bình Lạc”). Bộ phim cải biên từ tác phẩm phá án cổ
                phong “Đại Lý Tự Nhật Chí” của tác giả manga RC, kể về câu
                chuyện Đại Lý Tự thiếu khanh Lý Bỉnh thần bí mới nhận chức dẫn
                dắt mọi người trong Đại Lý Tự, khám phá những vụ án kinh hồn bạt
                vía, mạo hiểm, bảo vệ chính nghĩa trong lòng. Câu chuyện diễn ra
                ở Thần Đô dưới triều đại nữ hoàng thống trị. Trong một dạ tiệc
                cung Đường, Lý Bính (do Đinh Vũ Hề thủ vai) được nữ hoàng trọng
                dụng và bổ nhiệm làm Đại Lý Tự Thiếu Khanh. Trong Đại Lý Tự, có
                Trần Thập (do Châu Kỳ thủ vai), Vương Thất (do Phùng Mãn thủ
                vai), A Lý Ba Ba (do Ngoại Nhithủ vai), Thôi Bội (do Đinh Gia
                Văn thủ vai) và Tôn Báo (do Trương Dịch Thông thủ vai), dưới sự
                dẫn dắt của Thiếu Khanh mới nhậm chức Lý Bính - mọi người cùng
                nhau xuyên qua mê cung, đấu tranh chống lại số phận, tìm và bảo
                vệ công đạo. Bộ phim này sẽ được phát sóng trực tuyến trên iQIYI
                Quốc tế(iq.com).
              </span>
            </div>
            <div className="watchPageNominate">
              <div className="titleNominateWatchPage">Đề xuất cho bạn</div>
              <ListVerticalImg2></ListVerticalImg2>
            </div>
            <div className="commentWatchPage">
              <div className="commentTitleWatchPage">Bình luận</div>
            </div>
          </div>
          <div className="watchPageRightBottom">
            <TopPhim films={this.state.films}></TopPhim>
          </div>
        </div>
      </div>
    );
  }
}

export default WatchPage;
