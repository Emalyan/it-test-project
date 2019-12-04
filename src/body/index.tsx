import React, { FunctionComponent } from "react";
import { Styled } from "./styled";

export const Body: FunctionComponent = (props) => {
  return <Styled.Body>{props.children}</Styled.Body>;
};
