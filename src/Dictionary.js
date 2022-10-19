import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js";
import Footer from "./Footer.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey = `563492ad6f91700001000001fb33a7838fb84cbab8dc05c4ee735667`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
    axios
      .get(pexelsApiUrl, { headers: { Authorization: pexelsApiKey } })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <img
        src="https://appstickers-cdn.appadvice.com/1439768744/829014812/ef9e83fc73609dd7840bf876bf598352-1.gif"
        alt="owl"
        className="hero-image"
      />
      <h1>this is a dictionary.</h1>
      <div className="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#71836E"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="expand your vocabulary"
            autoComplete="off"
            autoFocus={false}
            onChange={handleKeywordChange}
          />
        </form>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
      <Footer />
    </div>
  );
}
