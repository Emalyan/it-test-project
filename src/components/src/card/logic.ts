import { HEADER_HEIGHT } from "../../../constants";

export const createClone = (item: HTMLElement) => {
  const clone = item.cloneNode(true) as HTMLElement;
  clone.style.position = "absolute";
  clone.style.pointerEvents = "none";
  clone.setAttribute("id", "clone");
  return clone;
};

export const setClonePosition = (item: HTMLElement, event: React.DragEvent<Element>) => {
  const main = document.getElementById("main");
  if (main != null) {
    item.style.left = event.pageX - item.offsetWidth / 2 + "px";
    item.style.top =
      event.pageY + main.scrollTop - item.offsetHeight + HEADER_HEIGHT + "px";
  }
};

export const getActors = (actors: string) => {
  const regExp = /<[^>]+>/g;
  const actorList = actors.replace(regExp, "");
  return actorList.split(", ");
};

export const getImageUrl = (url: string) => {
  return url.replace("sm_", "");
};

export const addStyles = (item: HTMLElement) => {
  changeCardsStyles(item, "0.5", "block", "none");
};

export const resetStyles = (item: HTMLElement) => {
  changeCardsStyles(item);
};

export const changeCardsStyles = (
  item: HTMLElement,
  opacity: string = "",
  imgDisplay: string = "",
  descriptionDisplay: string = ""
) => {
  item.style.opacity = opacity;
  document
    .querySelectorAll('div[draggable="true"]')
    .forEach((item: Element) => {
      if (item.firstChild != null && item.lastChild !== null) {
        const img = item.firstChild as HTMLElement;
        const description = item.lastChild as HTMLElement;
        img.style.display = imgDisplay;
        description.style.display = descriptionDisplay;
      }
    });
};
