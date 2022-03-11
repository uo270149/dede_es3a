import Home from './components/Home/Home';
import './App.css';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Fragments/Footer';

function App(): JSX.Element {
  return (
    <>
      <Router>
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