import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './components/NavBar';
import SidePanel from './components/SidePanel';
import MoodBoard from './components/MoodBoard/MoodBoard';

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <NavBar />
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
      {/* <SidePanel /> */}
      <MoodBoard />
    </div>
  );
}

export default App;
