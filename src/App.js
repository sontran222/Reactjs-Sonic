import HomePage from "./view/MainPage/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./view/Component/Nav/Nav";
import Footer from "view/Footer/FooterParent/Footer";

import "./App.scss";

import AnotherPage from "view/MainPage/AnotherPage/AnotherPage";
import Introduce from "view/MainPage/IntroducePage/Introduce";

function App() {
  const pageData = {
    "/phim-le": { title: "Phim Lẻ", type: "phim-le" },
    "/phim-bo": { title: "Phim Bộ", type: "phim-bo" },
    "/hoat-hinh": { title: "Hoạt Hình", type: "hoat-hinh" },
    "/tv-shows": { title: "TV Shows", type: "tv-shows" },
  };
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Nav></Nav>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route
              path="/phim-le"
              exact
              element={<AnotherPage data={pageData["/phim-le"]} />}
            />
            <Route
              path="/phim-bo"
              exact
              element={<AnotherPage data={pageData["/phim-bo"]} />}
            />
            <Route
              path="/hoat-hinh"
              exact
              element={<AnotherPage data={pageData["/hoat-hinh"]} />}
            />
            <Route
              path="/tv-shows"
              exact
              element={<AnotherPage data={pageData["/tv-shows"]} />}
            />

            <Route path="/phim" exact element={<Introduce />} />
          </Routes>
        </header>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
