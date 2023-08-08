import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Principal from "./component/about-us/Principal";
import About_us from "./component/about_us/About_us";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About_us/>
    <Principal/>
    </div>
  );
}

export default App;
