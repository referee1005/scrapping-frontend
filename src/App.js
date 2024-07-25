import logo from "./logo.svg";
import "./App.css";
import Translate from "./Dashboard/translate";
import NewFooter from "./Dashboard/NewFooter";
import Navbar from "./Dashboard/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatTool from "./Dashboard/CatTool";
// import { Container } from "@mui/material";
import FooterShort from "./Dashboard/FooterShort";
import GoogleSearch from "./Dashboard/GoogleSearch";
import YellowPage from "./Dashboard/YellowPage";
import ChatBot from "./components/ChatBot";
import QualityReport from "./components/QualityReport";
import Manage from "./Dashboard/Manage/Manage";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <BrowserRouter>
        {/* <Container> */}
        <Routes>
          <Route path="/" Component={CatTool}></Route>
          <Route path="/search_google" Component={GoogleSearch}></Route>
          <Route path="/yellow_page" Component={YellowPage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
