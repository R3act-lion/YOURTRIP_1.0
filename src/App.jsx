import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./pages/MyProfile/MyProfile";
import YourProfile from "./pages/YourProfile/YourProfile";
import FollowList from "./pages/FollowList/FollowList";
import Edit from "./pages/Edit/Edit";
import AddCuration from "./pages/AddCuration/AddCuration";
import SearchPlace from "./pages/SearchPlace/SearchPlace";

import Home from "./pages/Home/Home";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    background-color: #CCCCCC;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  #root {
    width: 390px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: black;
    border: none;
  }

  button {
    border: none;
    background-color: white;
    padding: 0;
  }
`

function App() {
  const you = true;
  // myprofile yourprofile 구분하기 위한 변수 

  return (
    <BrowserRouter>

      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={you ? <YourProfile you={you} /> : <MyProfile you={you} />}
        />
        <Route path="/follow" element={<FollowList />} />
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/profile/addcuration" element={<AddCuration />} />
        <Route
          path="/profile/addcuration/searchplace"
          element={<SearchPlace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;