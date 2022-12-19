import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  return (
    <BrowserRouter>

      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;