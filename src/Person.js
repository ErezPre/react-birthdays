import React from "react";

const Person = ({ person, setPeople, people, setRemovedItem }) => {
  const { id, name, birthday } = person;
  return (
    <>
      <h1>
        {name} {birthday}
        <button
          className="btn"
          onClick={() => {
            setPeople(people.filter((person) => person.id !== id));
            setRemovedItem(true);
          }}
        >
          remove
        </button>
      </h1>
    </>
  );
};

export default Person;
