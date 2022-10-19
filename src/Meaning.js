import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning({ meaning }) {
  return (
    <div className="card">
      <div className="definition">
        <h3>{meaning.partOfSpeech}</h3>
        <h4>{meaning.definitions[0].definition}</h4>
        <p className="example">{meaning.definitions[0].example}</p>
        {meaning.definitions.map(function (definition, index) {
          if (index > 0 && index < 2) {
            return (
              <div key={index}>
                <br />
                <p>{definition.definition}</p>
                <p className="example">{definition.example}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
        <Synonyms data={meaning.synonyms} />
      </div>
    </div>
  );
}
