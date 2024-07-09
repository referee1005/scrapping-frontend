import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Dashboard/Navbar";
import CatTool from "./Dashboard/CatTool";
import Editor from "./Dashboard/Editor";
import Analyze from "./Dashboard/Analyze";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import FooterShort from "./Dashboard/FooterShort";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" Component={CatTool}></Route>
            <Route path="/analyze" Component={Analyze}></Route>
            <Route path="/translate" Component={Editor}></Route>
          </Routes>
        </Container>
        <FooterShort />
      </BrowserRouter>
    </div>
  );
}

export default App;
