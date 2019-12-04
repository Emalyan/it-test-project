import React from "react";
import { Styled } from "./styled";
import { MovieCard } from "../interfaces";

export const Card = (card: MovieCard) => {
  const actors = getActors(card.actors);
  return (
    <Styled.Card>
      <Styled.Img src={`https://kinoafisha.ua${card.image}`} />
      <Styled.MovieDescription>
        <h3>{card.name}</h3>
        <div>{card.countries}</div>
        <div>{card.count_vote}</div>
        <div>{`Рейтинг ${card.vote}`}</div>
        {actors[0] !== "" && (
          <>
            <div>Актеры:</div>
            <ul>
              {actors.map(item => {
                return <li>{item}</li>;
              })}
            </ul>
          </>
        )}
        <Styled.Button>Button</Styled.Button>
      </Styled.MovieDescription>
    </Styled.Card>
  );
};

const getActors = (actors: string) => {
  const regExp = /<[^>]+>/g;
  const actorList = actors.replace(regExp, "");
  return actorList.split(", ");
};
