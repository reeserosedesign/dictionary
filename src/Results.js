import React from "react";
import Meaning from "./Meaning";

export default function Results({ results }) {
  if (results) {
    return (
      <div className="results">
        <div className="details">
          <span className="audio col">
            {results.phonetics.map(function (audio, index) {
              if (audio.audio) {
                return (
                  <a
                    href={audio.audio}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                    className="play"
                  >
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
                  </a>
                );
              } else {
                return null;
              }
            })}
            <span>
              <h2>{results.word}</h2>
              {results.phonetics.map(function (phonetics, index) {
                if (index < 1) {
                  return (
                    <p className="green" key={index}>
                      {phonetics.text}
                    </p>
                  );
                } else {
                  return null;
                }
              })}
            </span>
          </span>
          <span className="audio col">
            {results.meanings.map(function (speech, index) {
              return (
                <button className="speech" key={index}>
                  {speech.partOfSpeech}
                </button>
              );
            })}
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
