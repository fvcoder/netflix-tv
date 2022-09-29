import { getApiUrl } from "./base";
import { discoverMovieRes } from "./discover.movie";

export async function recommendationsMovie(
  id: number | string
): Promise<discoverMovieRes> {
  return await fetch(getApiUrl({ path: `movie/${id}/recommendations` })).then(
    async (s) => await s.json()
  );
}
