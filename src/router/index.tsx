import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { discoverMovie } from "../lib/discover.movie";
import { MovieSmall } from "../lib/base";
import { TitleList } from "../feactures/titleList/titlelist";

// import yt from "youtube-suggest";
export default function IndexPage(): JSX.Element {
  const [title, setTitle] = useState<MovieSmall>();
  const [discover, setDiscover] = useState<MovieSmall[]>();

  useEffect(() => {
    discoverMovie()
      .then((r) => {
        setDiscover(r.results);
        r.results.forEach((x, i) => {
          if (i === 0) {
            setTitle({
              id: x.id,
              title: x.title,
              overview: x.overview,
              poster_path: x.poster_path,
              backdrop_path: x.backdrop_path,
            });
          }
        });
      })
      .catch(console.log);
  }, []);

  return (
    <>
      {title != null && (
        <div
          className="aspect-[12/5] bg-cover relative z-0 transition-colors duration-300 ease-in delay-75"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${title.backdrop_path})`,
          }}
        >
          <div
            className="absolute w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,133,235,0) 75%, rgba(0,0,0,1) 100%)",
            }}
          />
          <div
            className="absolute w-full h-full"
            style={{
              background:
                "linear-gradient(254deg, rgba(5, 133, 235, 0) 29%, rgb(0, 0, 0) 93%)",
            }}
          />

          <div className="absolute w-full z-10 pl-[8vw] flex gap-4 flex-col justify-center h-3/4 transition-all duration-300">
            <h1 className="text-4xl">{title.title}</h1>
            <p className="w-2/5 text-base">{title.overview}</p>
            <div className="flex gap-2 items-center">
              <button className="bg-white text-black pl-6 pr-7 py-2 rounded select-none relative flex items-center gap-2 cursor-pointer z-0">
                <PlayIcon className="w-5 h-5" />
                <span className="text-md leading-none font-semibold">Play</span>
              </button>
              <button className="bg-[#6d6d6e]/70 text-white pl-6 pr-7 py-2 rounded select-none relative flex items-center gap-2 cursor-pointer z-0">
                <InformationCircleIcon className="w-5 h-5" />
                <span className="text-md leading-none font-semibold">
                  More Info
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="absolute pl-[8vw] -mt-28 w-full">
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
        <TitleList title={discover ?? []} />
      </div>
    </>
  );
}
