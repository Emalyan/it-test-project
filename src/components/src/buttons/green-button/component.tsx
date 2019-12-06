import React from "react";

import { Styled } from "./styled";

export const GreenButton = (props: { text: string }) => {
  return <Styled.Button>{props.text}</Styled.Button>;
};
