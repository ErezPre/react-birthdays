// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";
import List from "./list";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h1>birthdays list:</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
        }}
      >
        <input type="text" />
        <button type="submit">add birthday</button>
      </form>
      <br />

      <List people={people} />
      <button onClick={() => setPeople([])}>clear all</button>
    </>
  );
}

export default App;
