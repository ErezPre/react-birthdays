// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";
import List from "./List";
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

          const dateNewFormatArray = date.current.value.split("-");
          const dateNewFormat = `${parseInt(dateNewFormatArray[2])}/${parseInt(
            dateNewFormatArray[1]
          )}/${parseInt(dateNewFormatArray[0])}`;

          const birthday = {
            id: new Date().getTime(),
            name: name.current.value,
            birthday: dateNewFormat,
          };

          if (birthday.name && birthday.birthday !== `NaN/NaN/NaN`) {
            setPeople([...people, birthday]);
            name.current.value = "";
            date.current.value = "";
          } else {
            console.log("ereeor");
          }
        }}
      >
        <label htmlFor="name"></label>
        <input type="text" name="name" ref={name} />
        <label htmlFor="date"></label>
        <input type="date" name="date" ref={date} />
        <button type="submit">add birthday</button>
      </form>
      <br />

      <List people={people} setPeople={setPeople} people={people} />
      <button onClick={() => setPeople([])}>clear all</button>
    </>
  );
}

export default App;
