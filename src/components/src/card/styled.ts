import styled from "styled-components";

const Card = styled.div`
  position: relative;
  margin: 15px 25px;
  width: 250px;
  height: 400px;
  border: 2px solid #8ac858;
  border-radius: 15px;
  word-break: break-word;
  cursor: grab;
`;

const Img = styled.img`
  width: inherit;
  height: inherit;
  border-radius: 13px;

  ${Card}:hover & {
    display: none;
  }

  #clone: focus {
    display: none;
  }
`;

const Description = styled.div`
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

const Id = styled.div`
  display: none;
`;

export const Styled = { Img, Card, Description, Id };
