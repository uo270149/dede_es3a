import Home from './components/Home/Home';
import './App.css';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Fragments/Footer';
import { Product } from './shared/shareddtypes';
import Login_v2 from './components/Login/Login_v2'
import Requests from './components/Requests/Requests'

let productos= new Array<Product>();
function App(): JSX.Element {
  return (
    <>
      <Router>
      <Routes>
        <Route  path={"/"} element={<Home/>} />
        <Route  path="/Cart" element={<Cart/>}/>
        <Route  path="/Details" element={<Details/>}/>
        <Route  path="/Login_v2" element={<Login_v2/>}/>
        <Route  path="/Requests" element={<Requests/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;