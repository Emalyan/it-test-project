export interface MovieCard {
  id: string;
  name: string;
  image: string;
  countries: string;
  vote: string;
  count_vote: string;
  actors: string;
}

export interface MoviesCards {
  cards: MovieCard[];
}
