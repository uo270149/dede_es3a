import Home from './components/Home/Home';
import './App.css';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Fragments/Footer';
import { Product } from './shared/shareddtypes';
import { useState } from 'react';
import { SessionProvider } from '@inrupt/solid-ui-react';
import FormLogIn from './components/Login/FormLogIn';
import ProfileViewer from './components/Login/ProfileViewer';
import LoginUsrPsswd from './components/Login/LoginUsrPsswd';
import Register from './components/Login/Register';
import GastosEnvio from './components/POD/GastosEnvio';
import Nav from './components/Fragments/Nav';
import Us from './components/Developers/Us';
import ListRequests from './components/Requests/ListRequests';
import ErrorPod from './components/Login/ErrorPod';


let productos:Array<Product>= new Array<Product>();
function App(): JSX.Element {

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  return (
    <SessionProvider sessionId="logIn">
      <Router>
      <Nav/>
      <Routes>
        <Route  path={"/"} element={<Home/>} />
        <Route  path="/Cart" element={<Cart/>}/>
        <Route  path="/Details" element={<Details/>}/>
        <Route  path="/LoginUsrPsswd" element={<LoginUsrPsswd/>}/>
        <Route  path="/Register" element={<Register/>}/>
        <Route  path="/FormLogIn" element={<FormLogIn/>}/>
        <Route  path="/GastosEnvio" element={<GastosEnvio/>}/>
        <Route  path="/ProfileViewer" element={<ProfileViewer/>}/>
        <Route  path="/ListRequests" element={<ListRequests/>}/>
        <Route  path="/ErrorPod"  element={<ErrorPod/>}/>
        <Route  path="/Us" element={<Us/>}/>
        </Routes>
        <Footer/>
      </Router>
      </SessionProvider>
  );
}
export default App;