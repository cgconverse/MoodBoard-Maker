import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './components/NavBar';
import SidePanel from './components/SidePanel';
import MoodBoard from './components/MoodBoard/MoodBoard';

function App() {
  return (
    <div className="pt-5">
      <header className="App-header">
        <NavBar />
      </header>
      {/* <SidePanel /> */}
      <MoodBoard />
    </div>
  );
}

export default App;
