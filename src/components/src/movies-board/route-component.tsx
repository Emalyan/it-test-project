import React from "react";
import { Route } from "react-router-dom";
import { StoreProvider } from "../../../store/use-store";
import { MoviesBoard } from "./component";

export const MoviesBoardRoute = () => {
  return (
    <StoreProvider>
      <Route path="/gallery" component={MoviesBoard} />
    </StoreProvider>
  );
};
