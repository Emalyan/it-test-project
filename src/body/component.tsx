import React, { FunctionComponent } from "react";

import { Styled } from "./styled";

export const Body: FunctionComponent = props => {
  return <Styled.Body id="main">{props.children}</Styled.Body>;
};
