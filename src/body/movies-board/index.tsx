import React, { useState, useEffect } from "react";
import { Styled } from "./styled";
import { Cards } from "./components/cards";
import { MovieCard } from "./interfaces";

const initialValue: MovieCard[] = [];

export const MoviesBoard = () => {
  const [movies, setMovies] = useState(initialValue);

  useEffect(() => {
    getMovies(setMovies);
  }, []);

  return (
    <Styled.MoviesBoard>
      <Cards cards={movies} />
    </Styled.MoviesBoard>
  );
};

const getMovies = async (setItems: (result: MovieCard[]) => void) => {
  const response = await fetch(
    "https://kinoafisha.herokuapp.com/api/kinoafisha_load"
  );
  const data = await response.json();
  setItems(data.result);
};
