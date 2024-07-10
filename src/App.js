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
          </Routes>
        {/* </Container> */}
        <NewFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
