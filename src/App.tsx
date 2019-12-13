import { Switch } from "react-router";
import React from "react";

import { Body } from "./body";
import { Header } from "./header";
import { Footer } from "./footer";
import { MoviesBoardRoute } from "./components";

import { GlobalStyle } from "./global-styled";

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
      <MoviesBoardRoute />
    </Switch>
  );
};
