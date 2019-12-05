import React from "react";

import { GreenButton } from "../buttons";
import { Description } from "./card-description";
import { UPLOAD_MOVIES_IMAGE_DOMEN } from "../../../constants";

import { Styled } from "./styled";

export interface Movie {
  id: string;
  name: string;
  image: string;
  countries: string;
  vote: string;
  count_vote: string;
  actors: string;
}

export const Card = (props: Movie) => {
  const actors = getActors(props.actors);
  const imageUrl = getImageUrl(props.image);
  return (
    <Styled.Card>
      <Styled.Img src={`${UPLOAD_MOVIES_IMAGE_DOMEN}${imageUrl}`} />
      <Styled.Description>
        <Description
          name={props.name}
          countries={props.countries}
          count_vote={props.count_vote}
          vote={props.vote}
          actors={actors}
        />
        <GreenButton text="hello" />
      </Styled.Description>
    </Styled.Card>
  );
};

const getActors = (actors: string) => {
  const regExp = /<[^>]+>/g;
  const actorList = actors.replace(regExp, "");
  return actorList.split(", ");
};

const getImageUrl = (url: string) => {
  return url.replace("sm_", "");
};
