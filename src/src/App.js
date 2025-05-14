import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import MoodBoard from './components/MoodBoard/MoodBoard';

function App() {
  const [images, setImages] = useState([]);
  return (
    <div className="pt-5">
      <NavBar onSearchResults={setImages}/>
      <MoodBoard images={images} />
    </div>
  );
}

export default App;
