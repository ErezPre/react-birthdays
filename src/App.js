// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";
import List from "./list";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const date1 = new Date();
  console.log(new Date().getTime());
  console.log(
    `${date1.getDate()}/${date1.getMonth() + 1}/${date1.getFullYear()}`
  );
  const name = useRef(null);
  const date = useRef(null);
  return (
    <>
      <h1>birthdays list:</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(name.current.value);
          console.log(date.current.value);
          console.log("submit");

          const dateNewFormatArray = date.current.value.split("-");
          const dateNewFormat = `${parseInt(dateNewFormatArray[2])}/${parseInt(
            dateNewFormatArray[1]
          )}/${parseInt(dateNewFormatArray[0])}`;

          const birthday = {
            id: new Date().getTime(),
            name: name.current.value,
            birthday: dateNewFormat,
          };
          console.log(birthday);
          setPeople([...people, birthday]);
        }}
      >
        <label htmlFor="name"></label>
        <input type="text" name="name" ref={name} />
        <label htmlFor="date"></label>
        <input type="date" name="date" ref={date} />
        <button type="submit">add birthday</button>
      </form>
      <br />

      <List people={people} />
      <button onClick={() => setPeople([])}>clear all</button>
    </>
  );
}

export default App;
