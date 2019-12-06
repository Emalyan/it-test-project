import styled from "styled-components";

const Button = styled.button`
  min-width: 120px;
  height: 30px;
  border-radius: 7px;
  font-weight: 700;
  cursor: pointer;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border: none;
  background: rgb(138, 200, 88)
    linear-gradient(rgb(138, 200, 88), rgb(60, 200, 88));
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0),
    inset 0 1px 2px rgba(0, 0, 0, 0), inset 0 0 0 60px rgba(255, 255, 0, 0);

  &:hover {
    background-color: #59f23a;
    box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0),
      inset 0 1px 2px rgba(0, 0, 0, 0), inset 0 0 0 60px rgba(255, 255, 0, 0.5);
  }

  &:focus {
    outline: none;
  }

  &:active {
    padding: 6px 8px 6px;
    border-color: rgba(177, 159, 0, 1);
    box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1),
      inset 0 1px 2px rgba(0, 0, 0, 0.3),
      inset 0 0 0 60px rgba(255, 255, 0, 0.45);
  }
`;

export const Styled = { Button };
