import { useAppSelector } from "../Hooks/useRedux";
import { Genre } from "../Services/Interfaces/Interfaces";

export const useFindGenreById = (givenIds: number[]): string => {
  const { genres } = useAppSelector((state) => state.genres);
  let genreString = "";
  for (let i = 0; i < genres.length; i++) {
    for (let j = 0; j < givenIds.length; j++) {
      const genre = genres[i];
      const id = givenIds[j];
      if (genre.id === id) {
        genreString = genreString.concat(` ${genre.name},`);
      }
    }
  }
  if (genreString.endsWith(",")) {
    genreString = genreString.slice(0, -1);
    genreString = `${genreString}.`;
  }
  return genreString;
};
