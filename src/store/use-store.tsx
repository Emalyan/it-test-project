import { Movies, MoviesInstance } from "./movie-board-store";
import React, { FunctionComponent, useContext } from "react";
import { useLocalStore } from "mobx-react";

export const storeContext = React.createContext<MoviesInstance | null>(null);

const createStore = () => Movies.create({});

export const StoreProvider: FunctionComponent = props => {
  const store = useLocalStore(createStore);
  return (
    <storeContext.Provider value={store}>
      {props.children}
    </storeContext.Provider>
  );
};

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error("Error");
  }
  return store;
};
