import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Navbarsocial from "./component/Navbar/Navbarsocial";
import Principal from "./component/about-us/Principal";
import About_us from "./component/about_us/About_us";
import Footer from "./component/footer/Footer";
import Difference from "./component/what-different/Difference";

function App() {
  return (
    <div className="App">
     <Navbarsocial/>
    <Navbar/>
    <Home/>
    <About_us/>
    <Difference/>
    <Principal/>
    <Footer/>
    </div>
  );
}

export default App;
