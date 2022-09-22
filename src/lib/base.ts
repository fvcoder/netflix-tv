import { apiKey } from "../env";

interface getApiUrlProps {
  path: string;
  lang?: string;
}

export function getApiUrl({ path, lang }: getApiUrlProps): string {
  const Lang = lang ?? "en_EN";
  return `https://api.themoviedb.org/3/${path}?api_key=${apiKey}&lang=${Lang}`;
}

// Other interfaces
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  adult: boolean;
  overview: string;
}

export type MovieSmall = Pick<
  Movie,
  "id" | "title" | "overview" | "poster_path" | "backdrop_path"
>;
