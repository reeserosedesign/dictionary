import React from "react";

export default function Photos({ photos }) {
  if (photos) {
    return (
      <div className="results">
        <div className="photos card">
          <div className="row">
            {photos.map(function (photo, index) {
              if (index < 6) {
                return (
                  <div className="col-6">
                    <a href={photo.src.original}>
                      <img
                        src={photo.src.landscape}
                        key={index}
                        alt={photos.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
