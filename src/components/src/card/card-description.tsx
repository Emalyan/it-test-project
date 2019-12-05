import React from "react";

interface Description {
  name: string;
  countries: string;
  count_vote: string;
  vote: string;
  actors: string[];
}

export const Description = (props: Description) => {
  return (
    <>
      <h3>{props.name}</h3>
      <div>{props.countries}</div>
      <div>{props.count_vote}</div>
      <div>{`Рейтинг ${props.vote}`}</div>
      {props.actors[0] !== "" && (
        <>
          <div>Актеры:</div>
          <ul>
            {props.actors.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
};
