import React, { useEffect, useState } from "react";
import Form from "./Form";
import Form1 from "./Form1";
import Form2 from "./Form2";

export default function FormHandler() {
  const [pageNumber, setPageNumber] = useState(0);
  //   const []

  return (
    <div>
      {pageNumber == 0 && (
        <Form pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
      {pageNumber == 1 && (
        <Form1 pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
      {pageNumber == 2 && (
        <Form2 pageNumber={pageNumber} setPageNumber={setPageNumber} />
      )}
    </div>
  );
}
