import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Home from './components/Home/Home';
import Container from '@mui/material/Container';
import Welcome from './components/Welcome';
import  {getProducts, getUsers} from './api/api';
import {User} from './shared/shareddtypes';
import './App.css';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Fragments/Footer';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <h1>Productos = {getProducts.length}</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Cart" render={() => <Cart/>}/>
        <Route  path="/Details" render={() => <Details/>}/>
      </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;