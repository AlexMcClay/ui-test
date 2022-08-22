import logo from './svg/logo.svg';
import './css/App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { ButtonGroup, Button } from '@mui/material';

// ROUTES
import SCTradeTerminal from './pages/SCTradeTerminal/SCTradeTerminal';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/sc-trade-terminal' element={<SCTradeTerminal />} />
      </Routes>
    </BrowserRouter>
  );
}


const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonGroup  variant="contained" aria-label="outlined primary button group">
            <Button>
                <Link to={"/sc-trade-terminal"}>
                    SC Trade Terminal
                </Link>
            </Button>
            <Button>
                <Link to={"/"}>
                	Home
                </Link>
            </Button>
            <Button>
                <Link to={"/"}>
                    Home
                </Link>
            </Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
