import logo from "./logo.svg";
import "./App.css";
import Editor from './Dashboard/Editor';
import Footer from './Dashboard/Footer';
import NewFooter from './Dashboard/NewFooter';
import Navbar from './Dashboard/Navbar'
import CatTool from "./Dashboard/CatTool";

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      {/* <CatTool/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={CatTool}></Route>
          <Route path="/translate" Component={Editor}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Editor/>
      <Footer/> */}
</div>
  );
}

export default App;
