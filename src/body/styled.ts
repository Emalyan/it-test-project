import styled from "styled-components";

import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../constants";

const Body = styled.main`
  overflow: auto;
  position: fixed;
  height: calc(100% - (${FOOTER_HEIGHT}px + ${HEADER_HEIGHT}px));
  background-color: #f4f4f4;
`;

export const Styled = { Body };
