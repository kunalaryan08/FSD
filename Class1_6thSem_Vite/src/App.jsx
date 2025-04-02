import { useState } from "react";

import Book from "./Book";

function App() {
  

  
  const person = {
    title: "Hard Thing",
    author: "Robin",
    isbn: 84788,
    price: 788,
  };

  return (
    <>
      
      <Book data={person} />
    </>
  );
}
export default App