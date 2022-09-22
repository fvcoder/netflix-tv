import { getApiUrl, Movie } from "./base";

export interface discoverMovieRes {
  total_results: number;
  total_pages: number;
  page: number;
  results: Movie[];
}

export async function discoverMovie(): Promise<discoverMovieRes> {
  return await fetch(getApiUrl({ path: "discover/movie" })).then(
    async (s) => await s.json()
  );
}
