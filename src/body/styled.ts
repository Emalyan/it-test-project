import styled from "styled-components";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../constants";

const Body = styled.main`
  overflow: auto;
  position: fixed;
  height: calc(100% - (${FOOTER_HEIGHT} + ${HEADER_HEIGHT}));
  background-color: #f4f4f4;
`;

export const Styled = { Body };
