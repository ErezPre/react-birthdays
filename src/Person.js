import React from "react";

const person = ({ person, setPeople, people }) => {
  const { id, name, birthday } = person;
  return (
    <h1>
      {name} {birthday}
      <button
        onClick={() => {
          setPeople(people.filter((person) => person.id !== id));
        }}
      >
        remove
      </button>
    </h1>
  );
};

export default person;
