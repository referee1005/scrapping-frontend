import logo from "./logo.svg";
import "./App.css";
import Editor from './Dashboard/Editor';
import Footer from './Dashboard/Footer';
import NewFooter from './Dashboard/NewFooter';
import Navbar from './Dashboard/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatTool from "./Dashboard/CatTool";
// import { Container } from "@mui/material";
import FooterShort from "./Dashboard/FooterShort";
import Analyze from "./Dashboard/Analyze";
import ChatBot from "./components/ChatBot";
<<<<<<< HEAD
import QualityReport from "./components/QualityReport";
=======
>>>>>>> 1b0520cbf83c3790df163cfb9846ae461e1fd3af

function App() { 
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        {/* <Container> */}
          <Routes>
            <Route path="/" Component={CatTool}></Route>
            <Route path="/analyze" Component={Analyze}></Route>
            <Route path="/translate" Component={Editor}></Route>
            {/*<Route path="/" element={<QualityReport />} /> */}
          </Routes>
          <ChatBot/>
        {/* </Container> */}
        <NewFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;

