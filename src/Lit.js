import React from "react";
import Person from "./Person";

const List = ({ people, setPeople, setRemovedItem }) => {
  // console.log(people[1].name);
  // if (people.length === 0) {
  //   return <h1>empty list</h1>;
  // }
  return (
    <>
      {people.map((person) => {
        const { id, name, birthday } = person;
        return (
          <Person
            key={id}
            person={person}
            setPeople={setPeople}
            people={people}
            setRemovedItem={setRemovedItem}
          />
        );
      })}
    </>
  );
};

export default List;
