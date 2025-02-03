import React from "react";

export default function Form1({ pageNumber, setPageNumber }) {
  return (
    <div id="step2">
      <input type="text" id="model" placeholder="Model" />
      <input type="number" id="car_price" placeholder="Price" />
      // <button
      //   onClick={() => setPageNumber((prevPageNumber) => prevPageNumber - 1)}
      // >
      //   Previous
      // </button>
      // <button
      //   onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)}
      // >
      //   Next
      // </button>
    <button
  onClick={(e) => {
    e.preventDefault(); // Prevent form submission
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }}
>
  Previous
</button>
<button
  onClick={(e) => {
    e.preventDefault(); // Prevent form submission
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }}
>
  Next
</button>

    </div>
  );
}
