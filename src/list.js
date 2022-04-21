import React from "react";

const list = ({ people }) => {
  // console.log(people[1].name);
  // if (people.length === 0) {
  //   return <h1>empty list</h1>;
  // }
  return (
    <>
      {people.map((person) => {
        const { id, name, birthday } = person;
        return (
          <h1 key={id}>
            {name} {birthday}
          </h1>
        );
      })}
    </>
  );
};

export default list;
