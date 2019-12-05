import { Route, Switch } from "react-router";
import React from "react";

import { Body } from "./body";
import { Header } from "./header";
import { Footer } from "./footer";
import { MoviesBoard } from "./components";

import { GlobalStyle } from "./globalStyled";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body>
        <AppRouter />
      </Body>
      <Footer />
    </>
  );
};

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/gallery">
        <MoviesBoard />
      </Route>
    </Switch>
  );
};
