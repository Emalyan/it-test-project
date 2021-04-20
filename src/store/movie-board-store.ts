import { types, flow, Instance } from "mobx-state-tree";
import { MOVIES_API_URL } from "../constants";
import { CardPosition } from "../components";

const Movie = types.model("Movie", {
  id: types.string,
  name: types.string,
  image: types.string,
  countries: types.string,
  vote: types.string,
  count_vote: types.string,
  actors: types.string,
  order: types.number
});

export const Movies = types
  .model("Movies", {
    targetCardId: "",
    movies: types.array(Movie)
  })
  .actions(self => {
    const setTargetCardId = (id: string) => {
      self.targetCardId = id;
    };

    const loadMovies = flow(function* setMovies() {
      const savedPosition = sessionStorage.getItem("cardsPositions");
      const movies = yield getMovies();
      if (savedPosition) {
        const data: CardPosition[] = JSON.parse(savedPosition);
        movies.forEach((element: MovieInstance) => {
          const savedMovie = data.find(item => item.id === element.id);
          if (savedMovie) {
            element.order = savedMovie.order;
          }
        });
      }
      self.movies = movies;
    });

    return { setTargetCardId, loadMovies };
  })
  .actions(self => ({
    afterCreate() {
      self.loadMovies();
    }
  }));

const getMovies = async () => {
  const response = await fetch(MOVIES_API_URL);
  const data = await response.json();
  data.result.forEach((element: MovieInstance, index: number) => {
    element.order = index + 1;
  });

  return data.result;
};

export interface MoviesInstance extends Instance<typeof Movies> {}
export interface MovieInstance extends Instance<typeof Movie> {}
