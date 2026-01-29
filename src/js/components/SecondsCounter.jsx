import React from "react";

const SecondsCounter = (props) => {
  const padded = String(props.seconds).padStart(6, "0");
  const digits = padded.split(""); 

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="d-flex align-items-center bg-dark text-white p-3 rounded gap-2">

        <div className="px-3 fs-2">
          <i className="far fa-clock"></i>
        </div>

        {digits.map((d, i) => (
          <div
            key={i}
            className="bg-secondary rounded px-3 py-2 fs-2 text-center"
            style={{ minWidth: "55px" }}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondsCounter;
