import React from "react";
import { Header } from "./header/index";
import { Footer } from "./footer/index";
import { Body } from "./body/index";
import { GlobalStyle } from "./globalStyled";
import { MoviesBoard } from "./body/movies-board/index";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body>
        <MoviesBoard />
      </Body>
      <Footer />
    </>
  );
};
