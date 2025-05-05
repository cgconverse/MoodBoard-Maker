import React, { useState } from 'react';
import ImageTile from './ImageTile';



function SidePanel() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchImages = async () => {
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`);
    const data = await res.json();
    setResults(data.results);
  };

  return (
    <div className="side-panel">
      <input
        type="text"
        placeholder="Search Unsplash"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    
      <button onClick={fetchImages}>Search</button>
      <div className="image-results">
        {results.map((img) => (
          <ImageTile key={img.id} src={img.urls.thumb} alt={img.alt_description} />
        ))
        };
      </div>
    </div>
  )
};

export default SidePanel;