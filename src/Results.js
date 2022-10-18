import React from "react";
import Meaning from "./Meaning";

export default function Results({ results }) {
  console.log(results);

  function getAudio(event) {
    event.preventDefault();
    alert(`The audio is ${results.phonetics[0].audio}`);
  }

  if (results) {
    return (
      <div className="results">
        <div className="details">
          <span className="audio col-6">
            <button className="play" onClick={getAudio}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-play-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
              </svg>
            </button>
            <span>
              <h2>{results.word}</h2>
              <h4 className="green">{results.phonetics[1].text}</h4>
            </span>
          </span>
          <span className="synonyms col-6">
            <h4>synonyms</h4>
            <p>
              <a href="/">
                nightfall, twilight, dusk, evening, sundown, vesper
              </a>
            </p>
            <button className="speech">
              {results.meanings[0].partOfSpeech}
            </button>
            <button className="speech">
              {results.meanings[1].partOfSpeech}
            </button>
          </span>
        </div>
        {results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
