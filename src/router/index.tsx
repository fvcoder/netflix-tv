import {
  PlayIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { discoverMovie } from "../lib/discover.movie";
import { MovieSmall } from "../lib/base";

// import yt from "youtube-suggest";

export interface TitleListProps {
  title: MovieSmall[];
}

function TitleList({ title }: TitleListProps): JSX.Element {
  return (
    <section className="mb-4">
      <header className="flex justify-between py-4 pr-4">
        <h1 className="text-xl font-bold text-[#e5e5e5] leading-none">
          Title section
        </h1>
        <div>
          <button className="rounded-full inline-block mr-2">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button className="rounded-full inline-block">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </header>
      <div className="relative">
        <div className="flex items-center gap-4 h-full overflow-x-auto scroll-hidden">
          {title?.map((x, i) => (
            <div
              className="w-[300px] flex-shrink-0 flex-grow-0 flex"
              key={`title-discover-${i}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${x.backdrop_path}`}
                alt={x.title}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      </div>
    </>
  );
}
