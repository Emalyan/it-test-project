import React, { useState, useEffect } from "react";

import { Movie, Card } from "../card";
import { MOVIES_API_URL } from "../../../constants";

import { Styled } from "./styled";

const initialValue: Movie[] = [];

export const MoviesBoard = () => {
  const [movies, setMovies] = useState(initialValue);

  useEffect(() => {
    getMovies(setMovies);
  }, []);

  return (
    <Styled.MoviesBoard>
      {movies.map(item => {
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
    </Styled.MoviesBoard>
  );
};

const getMovies = async (setItems: (result: Movie[]) => void) => {
  const response = await fetch(MOVIES_API_URL);
  const data = await response.json();
  setItems(data.result);
};
