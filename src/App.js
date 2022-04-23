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
    return "birthday added";
  };
  const [removedItem, setRemovedItem] = React.useState(false);
  const removedBirthdaySuccessfully = () => {
    let timeout = setTimeout(() => {
      setRemovedItem(false);
    }, 3000);
    return "birthday removed";
  };
  const [clearedAll, setClearedAll] = React.useState(false);
  //
  return (
    <>
      <main className="container">
        <h1 className="title">birthdays list</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const dateNewFormatArray = date.current.value.split("-");
            const dateNewFormat = `${parseInt(
              dateNewFormatArray[2]
            )}/${parseInt(dateNewFormatArray[1])}/${parseInt(
              dateNewFormatArray[0]
            )}`;

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
          <label className="form-label formElement" htmlFor="name">
            name:
          </label>
          <input className="formElement" type="text" name="name" ref={name} />
          <label className="form-label formElement" htmlFor="date">
            date:
          </label>
          <input className="formElement" type="date" name="date" ref={date} />

          <button className="btn-add btn" type="submit">
            add birthday
          </button>
        </form>
        {/* <div className="filler">&</div> */}
        <h1 className={addedItem ? "alert alert-positive" : ""}>
          {addedItem && addedBirthdaySuccessfully()}
        </h1>
        <h1 className={removedItem ? "alert alert-negative" : ""}>
          {removedItem && removedBirthdaySuccessfully()}
        </h1>

        <List
          people={people}
          setPeople={setPeople}
          setRemovedItem={setRemovedItem}
        />
        <button
          className="btn btn-clear"
          onClick={() => {
            setPeople([]);
          }}
        >
          clear all
        </button>
      </main>
    </>
  );
}

export default App;
