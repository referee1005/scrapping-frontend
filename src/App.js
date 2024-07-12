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
import QualityReport from "./components/QualityReport";

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
            <Route path="/report" element={<QualityReport />} />
          </Routes>
         {/* <ChatBot/> */}
>>>>>>> fb3f4836bc87fc3ab6d83204e7680c1c046597bd
        {/* </Container> */}
        <NewFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
