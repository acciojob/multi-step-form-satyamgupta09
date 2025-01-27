import React from "react";
export default function Form2({ pageNumber, setPageNumber }) {
  return (
    <div id="step3">
      <input
        type="number"
        id="card_info"
        maxLength="12"
        placeholder="Credit Card Number"
      />
      <input type="text" id="expiry_date" placeholder="Expiry Date" />
      <button
        onClick={() => setPageNumber((prevPageNumber) => prevPageNumber - 1)}
      >
        Previous
      </button>
      <button>Submit</button>
    </div>
  );
}
