import logo from "./logo.svg";
import "./App.css";
import Translate from "./Dashboard/translate";
import NewFooter from "./Dashboard/NewFooter";
import Navbar from "./Dashboard/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatTool from "./Dashboard/CatTool";
// import { Container } from "@mui/material";
import FooterShort from "./Dashboard/FooterShort";
import Analyze from "./Dashboard/Analyze";
import ChatBot from "./components/ChatBot";
<<<<<<< HEAD
import QualityReport from "./components/QualityReport";
=======
import Manage from "./Dashboard/Manage/Manage";
>>>>>>> 62851c3ef4d241fd36f011661d819e44dd788b54

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        {/* <Container> */}
<<<<<<< HEAD
        <Routes>
          <Route path="/" Component={CatTool}></Route>
          <Route path="/analyze" Component={Analyze}></Route>
          <Route path="/translate" Component={Translate}></Route>
          <Route path="/report" element={<QualityReport />} />
        </Routes>
        <ChatBot />
=======
          <Routes>
            <Route path="/" Component={CatTool}></Route>
            <Route path="/analyze" Component={Analyze}></Route>
            <Route path="/translate" Component={Editor}></Route>
            <Route path="/manage" Component={Manage}></Route>
            {/*<Route path="/" element={<QualityReport />} /> */}
          </Routes>
          <ChatBot/>
>>>>>>> 62851c3ef4d241fd36f011661d819e44dd788b54
        {/* </Container> */}
        <NewFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
