import React from "react";

export default function Meaning({ meaning }) {
  if (meaning.definitions[0].example) {
    return (
      <div className="card">
        <div className="definition">
          <h3>{meaning.partOfSpeech}</h3>
          <h4>{meaning.definitions[0].definition}</h4>
        </div>
        <div className="example">
          <p>ex. "{meaning.definitions[0].example}"</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="definition">
          <h3>{meaning.partOfSpeech}</h3>
          <h4>{meaning.definitions[0].definition}</h4>
        </div>
      </div>
    );
  }
}
