import React, { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Introduce.scss";

import NotStartedIcon from "@mui/icons-material/NotStarted";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Rate from "view/Material_UI/Rating/Rate";
import ListVerticalImg2 from "view/Component/ListCardForHomePage/Left/ListVerticalImg2";
function withRouter(Component) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
      <Component {...props} location={location} navigate={navigate}></Component>
    );
  };
}

class Introduce extends Component {
  state = {
    selectedEpisode: null,
  };
  gotoPage = (episode) => {
    this.props.navigate(`${episode}`);
  };

  chooseEpisode = (episode) => {
    this.setState({
      selectedEpisode: episode,
    });
    this.gotoPage(episode);
  };
  render() {
    return (
      <div className="containerIntroduce">
        <div className="introduceImg">
          <img
            className="mainMovie"
            src="https://phimimg.com/upload/vod/20241119-1/77a1361df6966129f9978990c45b90cf.jpg"
            alt=""
          />
          <div className="blur"></div>
          <div className="introduceText">
            <div className="titleIntroduce">Ai Oán Trong Vườn Xuân</div>
            <div className="originNameIntroduce">Spring Garden (2024)</div>
            <div className="introduceInfo">
              <span>2022</span>
              <span>
                <Button
                  variant="outlined"
                  color="white"
                  sx={{
                    borderRadius: "50px",
                    fontSize: "0.75rem",
                    lineHeight: "0.5",
                    minWidth: "auto",
                  }}
                >
                  Trọn bộ
                </Button>
              </span>
              <span>25 phút/tập</span>
              <div className="introduceVisibility">
                <span>
                  <VisibilityIcon sx={{ fontSize: "1rem" }}></VisibilityIcon>
                </span>
                <span>4000</span>
              </div>
            </div>
            <div className="introduceDecription">
              Triệu Giáp Đệ, người thừa kế của tập đoàn kinh tế khổng lồ phương
              Bắc “Jinhai Industry”, đến Haicheng để bắt đầu cuộc sống đại học
              của mình. Triệu Giáp Đệ không thể đồng ý với những hành động xấu
              của cha mình từ khi còn nhỏ, anh luôn có một mối quan hệ cứng nhắc
              và không nhận tiền của cha mình, và sống một cuộc sống nghèo khổ.
              Ở Haicheng, “Thế hệ thứ hai chống lại người giàu” không điển hình
              này đã trải qua cuộc sống đại học, trải qua tình yêu và hoàn thành
              quá trình trưởng thành của một người đàn ông sau tất cả các loại
              trải nghiệm.Cùng lúc đó, cuộc tranh giành quyền lực của gia đình
              giàu có dần trở nên gay gắt, hàng loạt thế lực ngầm khiến Triệu
              Giáp Đệ rơi vào tâm điểm của vòng xoáy. Với niềm tin rằng “con
              người phải kiên trì để đạt được thành công”, cậu bé Zhao Jiadi đã
              tha thứ cho cha mình. Trong đấu trường này, Triệu Giáp Đệ đã một
              tay chuộc lại gia đình bình thường mà anh hằng mong ước.
            </div>
            <div className="introduceDirector">
              Đạo diễn: <span>Zhenghua Chen</span>
            </div>
            <div className="introduceCategory">
              Thể loại: <span>Tình Cảm, Tâm Lý, Gia Đình</span>
            </div>
            <div className="introduceActor">
              Diễn viên:{" "}
              <span>
                He Peng, Yang Xing, Zhuojun Yao, Ma Yi, Wang Ziyun, Tan Xiaofan
              </span>
            </div>
            <div className="mediaIntroduce">
              <span>
                <Button variant="contained" startIcon={<NotStartedIcon />}>
                  Xem phim
                </Button>
              </span>
              <div className="Rating">
                <span>
                  <Rate></Rate>
                </span>
                <span>(9.0 sao/5 đánh giá)</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="introduceEpisodeContainer">
            <div className="introduceLableEpisode">Danh sách phim</div>
            <ul className="introduceEpisode">
              <li onClick={() => this.chooseEpisode(1)}>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
            </ul>
          </div>
          <div className="ContainerintroducePropose">
            <div className="introduceLabelPropose">Đề xuất cho bạn</div>
            <ListVerticalImg2></ListVerticalImg2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Introduce);
