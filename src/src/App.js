import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import MoodBoard from './components/MoodBoard/MoodBoard';

function App() {
  const [images, setImages] = useState([]);
  // const gradientStyle = {
  //   backgroundColor: 'linear-gradient(to right, #D1C6F3, #E9BCAC)',
  //   backgroundRepeat: 'no-repeat',
  // };
  return (
    <div id="root" className="gradient-body">
      <NavBar onSearchResults={setImages}/>
      <MoodBoard images={images} />
    </div>
  );
}

export default App;
