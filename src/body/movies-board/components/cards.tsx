import React from "react";
import { Card } from "./card";
import { MoviesCards } from "../interfaces";

export const Cards = (cards: MoviesCards) => {
  return (
    <>
      {cards.cards.map(item => {
        return (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            countries={item.countries}
            actors={item.actors}
            vote={item.vote}
            count_vote={item.count_vote}
          />
        );
      })}
    </>
  );
};
