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
  const [addedItem, setAddedItem] = useState(false);

  const addedBirthdaySuccessfully = () => {
    setTimeout(() => {
      setAddedItem(false);
    }, 3000);
    return "added birthday successfully";
  };
  const [removedItem, setRemovedItem] = React.useState(false);
  const removedBirthdaySuccessfully = () => {
    setTimeout(() => {
      setRemovedItem(false);
    }, 3000);
    return "removed birthday successfully";
  };
  const [clearedAll, setClearedAll] = React.useState(false);

  return (
    <>
      <h1>{addedItem && addedBirthdaySuccessfully()}</h1>
      <h1>{removedItem && removedBirthdaySuccessfully()}</h1>
      <h1 className="title">birthdays list:</h1>
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
            setAddedItem(true);
          } else {
            console.log("ereeor");
          }
        }}
      >
        <label htmlFor="name"></label>
        <input type="text" name="name" ref={name} />
        <label htmlFor="date"></label>
        <input type="date" name="date" ref={date} />

        <button className="btn" type="submit">
          add birthday
        </button>
      </form>
      <br />

      <List
        people={people}
        setPeople={setPeople}
        people={people}
        setRemovedItem={setRemovedItem}
      />
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        clear all
      </button>
    </>
  );
}

export default App;
