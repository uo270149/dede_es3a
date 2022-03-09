import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Home from './components/Home';
import Container from '@mui/material/Container';
import Welcome from './components/Welcome';
import  {getUsers} from './api/api';
import {User} from './shared/shareddtypes';
import './App.css';
import Details from './components/Details';

function App(): JSX.Element {
  return (
    <>
        <Details/>
    </>
  );
}

export default App;