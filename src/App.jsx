import { BrowserRouter,Route,Routes } from "react-router-dom";
import SnsLogin from "./pages/MainLogin/SnsLogin/SnsLogin";
import Login from "./pages/MainLogin/Login/Login";
import Signup from "./pages/MainLogin/Signup/Signup";
import ProfileSet from "./pages/MainLogin/ProfileSet/ProfileSet";
import MainLogo from "./pages/MainLogo/MainLogo";
import Detail from "./pages/Community/Detail/Detail";
import DetailComments from "./pages/Community/DetailComments/DetailComments"
import Upload from "./pages/Community/Upload/Upload.jsx"
import Search from "./pages/Community/Search/Search.jsx"
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/MainLogo" element={<MainLogo />} />
        <Route path="/SnsLogin" element={<SnsLogin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ProfileSet" element={<ProfileSet />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/DetailComments" element={<DetailComments />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
