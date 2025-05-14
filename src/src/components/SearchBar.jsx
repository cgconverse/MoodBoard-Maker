import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';




function SearchBar({ onSearchResults }) {
  const [query, setQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const fetchImages = async () => {
    const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
    );
    const data = await res.json();
    console.log("Fetched images:", data.results);
    onSearchResults(data.results); // Send results to parent
  };

  return (
    <div >
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        onClick={() => setIsSearchVisible(!isSearchVisible)}
        style={{ cursor: 'pointer' }}
        size="xl"
        className="clearfix"
      />
      {isSearchVisible && (
        <Form className="search-box" inline>
          <Form.Control
            type="search"
            placeholder="Search"
            // className="me-2"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="outline-success" onClick={fetchImages}>
            Search
          </Button>
        </Form>
      )}
    </div>
  );
}

export default SearchBar;