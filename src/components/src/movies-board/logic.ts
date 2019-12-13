import { CardPosition } from "../card";

interface SwapElements {
  timePassed: number;
  firstElement: HTMLElement;
  secondElement: HTMLElement;
  orderFirstElement: number;
  orderSecondElement: number;
}

export const savePosition = () => {
  const board = document.getElementById("movies-board");
  if (board != null) {
    const cardsPosition: CardPosition[] = [];
    board.childNodes.forEach((item: ChildNode) => {
      const card = item as HTMLElement;
      const cardPosition: CardPosition = {
        id: card.id,
        order: +card.style.order
      };
      cardsPosition.push(cardPosition);
    });

    const jsonData = JSON.stringify(cardsPosition);
    sessionStorage.setItem("cardsPositions", jsonData);
  }
};

export const swapElements = (
  firstElement: HTMLElement,
  secondElement: HTMLElement
) => {
  let start = Date.now();
  const timer = setInterval(() => {
    const orderFirstElement = firstElement.style.order;
    const orderSecondElement = secondElement.style.order;
    let timePassed = Date.now() - start;

    if (timePassed >= 100) {
      firstElement.style.order = orderSecondElement;
      secondElement.style.order = orderFirstElement;
      secondElement.style.transform = "";
      firstElement.style.transform = "";
      clearInterval(timer);
      return;
    }

    const data: SwapElements = {
      timePassed,
      firstElement,
      secondElement,
      orderFirstElement: +orderFirstElement,
      orderSecondElement: +orderSecondElement
    };

    swapAnimation(data);
  }, 5);
};

const swapAnimation = (props: SwapElements) => {
  if (props.orderFirstElement > props.orderSecondElement + 1) {
    props.firstElement.style.transform = `translateY(-${props.timePassed *
      2.5}px)`;
    props.secondElement.style.transform = `translateY(${props.timePassed *
      2.5}px)`;
  } else if (props.orderFirstElement + 1 < props.orderSecondElement) {
    props.firstElement.style.transform = `translateY(${props.timePassed *
      2.5}px)`;
    props.secondElement.style.transform = `translateY(-${props.timePassed *
      2.5}px)`;
  } else if (+props.orderFirstElement > +props.orderSecondElement) {
    props.firstElement.style.transform = `translateX(-${props.timePassed *
      2}px)`;
    props.secondElement.style.transform = `translateX(${props.timePassed *
      2}px)`;
  } else if (+props.orderFirstElement < +props.orderSecondElement) {
    props.firstElement.style.transform = `translateX(${props.timePassed *
      2}px)`;
    props.secondElement.style.transform = `translateX(-${props.timePassed *
      2}px)`;
  }
};
