import React from "react";

export default function Form({ pageNumber, setPageNumber }) {
  return (
    <div>
      <form>
        <input type="text" id="first_name" placeholder="First Name" />
        <input type="text" id="last_name" placeholder="Last Name" />
        <button
          onClick={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)}
        >
          Next
        </button>
      </form>
    </div>
  );
}
