import React, { DragEvent } from "react";

import { GreenButton } from "../buttons";
import { Description } from "./card-description";
import { UPLOAD_MOVIES_IMAGE_DOMEN } from "../../../constants";
import { savePosition, swapElements } from "../movies-board";
import {
  createClone,
  setClonePosition,
  getActors,
  getImageUrl,
  addStyles,
  resetStyles
} from "./logic";
import { useStore } from "../../../store/use-store";

import { Movie } from "./interfaces";

import { Styled } from "./styled";

export const Card = (props: Movie) => {
  const movies = useStore();
  const actors = getActors(props.actors);
  const imageUrl = getImageUrl(props.image);

  const onDragEnter = (event: DragEvent) => {
    const target = event.target as HTMLElement;
    const card = target.parentNode as HTMLElement;
    if (+card.id && movies.targetCardId !== "") {
      const transferCard = document.getElementById(movies.targetCardId);
      if (transferCard && card !== transferCard) {
        swapElements(card, transferCard);
      }
    }
  };

  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
  };

  const onDragStart = (event: DragEvent) => {
    const card = event.target as HTMLElement;
    const clone = createClone(card) as HTMLElement;
    if (card.parentNode) {
      card.parentNode.appendChild(clone);
    }
    setClonePosition(clone, event);

    addStyles(card);
    movies.setTargetCardId(card.id);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("data", card.id);

    const emptyBlock = document.createElement("div");
    event.dataTransfer.setDragImage(emptyBlock, 0, 0);
  };

  const onDrag = (event: DragEvent) => {
    const clone = document.getElementById("clone");
    if (clone !== null) {
      setClonePosition(clone, event);
    }
  };

  const onDragEnd = (event: DragEvent) => {
    const card = event.target as HTMLElement;
    resetStyles(card);
    const clone = document.getElementById("clone");
    const board = document.getElementById("movies-board");
    if (board !== null && clone !== null) {
      board.removeChild(clone);
    }
    savePosition();
  };

  return (
    <Styled.Card
      id={props.id}
      draggable={true}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      onDrag={onDrag}
      style={{ order: props.order }}
    >
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
