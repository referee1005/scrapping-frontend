import './App.css';
import './SideBarTabs.css';
import Navbar from './Dashboard/Navbar';
import CatTool from './Dashboard/CatTool';
import logo from "./logo.svg";
import "./App.css";
import Editor from './Dashboard/Editor';
import Footer from './Dashboard/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CatTool/>
      {/* <Editor/>
      <Footer/> */}
</div>
  );
}

export default App;
