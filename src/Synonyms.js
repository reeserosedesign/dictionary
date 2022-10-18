import React from "react";

export default function Synonyms({ data }) {
  function newSearch(event) {
    event.preventDefault();
  }

  if (data.length > 0) {
    return (
      <div>
        <br />
        <h5>synonyms</h5>
        <ul>
          {data.map(function (synonym, index) {
            if (index === 0) {
              return (
                <li key={index}>
                  <a href="/" onClick={newSearch}>
                    {synonym}
                  </a>
                </li>
              );
            }
            if (index < 6) {
              return (
                <li key={index}>
                  ,{" "}
                  <a href="/" onClick={newSearch}>
                    {synonym}
                  </a>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
