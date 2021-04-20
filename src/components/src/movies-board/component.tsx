import React from "react";
import { observer } from "mobx-react";

import { Card } from "../card";
import { MovieInstance } from "../../../store/movie-board-store";
import { useStore } from "../../../store/use-store";

import { Styled } from "./styled";

export const MoviesBoard = observer(() => {
  const movies = useStore();
  return (
    <Styled.MoviesBoard id="movies-board">
      {movies.movies.map((item: MovieInstance) => {
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
            order={item.order}
          />
        );
      })}
    </Styled.MoviesBoard>
  );
});
