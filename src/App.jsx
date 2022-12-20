import reset from "styled-reset";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./pages/MyProfile/MyProfile";
import YourProfile from "./pages/YourProfile/YourProfile";
import FollowList from "./pages/FollowList/FollowList";
import Edit from "./pages/Edit/Edit";
import AddCuration from "./pages/AddCuration/AddCuration";
import SearchPlace from "./pages/SearchPlace/SearchPlace";

import SnsLogin from "./pages/MainLogin/SnsLogin/SnsLogin";
import Login from "./pages/MainLogin/Login/Login";
import Signup from "./pages/MainLogin/Signup/Signup";
import ProfileSet from "./pages/MainLogin/ProfileSet/ProfileSet";
import MainLogo from "./pages/MainLogo/MainLogo";
import Detail from "./pages/Community/Detail/Detail";
import DetailComments from "./pages/Community/DetailComments/DetailComments"
import Upload from "./pages/Community/Upload/Upload.jsx"
import Search from "./pages/Community/Search/Search.jsx"

import Home from "./pages/Home/Home";
import Today from "./pages/Location/Today/Today"
import Place from "./pages/Location/Place/Place"
import Thema from "./pages/Location/Today/TodayTheme/Thema"
import PlaceList from "./pages/Location/PlaceList/PlaceList";
import LocationDetail from "./pages/Location/Detail/LocationDetail";
import Restaurant from "./pages/Location/Restaurant/Restaurant";
import { theme } from "./theme";

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
    <>
    <ThemeProvider theme={theme} >
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MainLogo" element={<MainLogo />} />
        <Route path="/SnsLogin" element={<SnsLogin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ProfileSet" element={<ProfileSet />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/DetailComments" element={<DetailComments />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Search" element={<Search />} />
        <Route path='/today' element={<Today></Today>} />
        <Route path='/today/thema' element={<Thema></Thema>} /> 
        <Route path='/place' element={<Place></Place>} />
        <Route path="/placeList" element={<PlaceList></PlaceList>} />
        <Route path='/locationDetail' element={<LocationDetail></LocationDetail>} />
        <Route path='/restaurant' element={<Restaurant></Restaurant>} />

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
        </ThemeProvider>
      </>
  );
}
export default App;