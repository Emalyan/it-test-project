import styled from "styled-components";

const Card = styled.div`
  position: relative;
  margin: 15px 25px;
  width: 250px;
  height: 400px;
  border: 2px solid #8ac858;
  border-radius: 15px;
  word-break: break-word;
`;

const Img = styled.img`
  width: inherit;
  height: 100%;
  border-radius: 13px;

  ${Card}:hover & {
    display: none;
  }
`;

const MovieDescription = styled.div`
  display: none;
  padding: 10px;

  ${Card}:hover & {
    display: block;
  }

  div {
    padding: 2px 0;
  }

  ul {
    margin: 5px 0;
  }

  h3 {
    margin: 0;
  }
`;

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
    padding: calc(0.25em + 1px) 0.5em calc(0.25em - 1px);
    border-color: rgba(177, 159, 0, 1);
    box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1),
      inset 0 1px 2px rgba(0, 0, 0, 0.3),
      inset 0 0 0 60px rgba(255, 255, 0, 0.45);
  }
`;

export const Styled = { Img, Card, MovieDescription, Button };
