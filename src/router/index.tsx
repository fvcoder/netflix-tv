import { useEffect } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

// import yt from "youtube-suggest";

export default function IndexPage(): JSX.Element {
  useEffect(() => {
    /*
    yt("kit", { locale: "es" })
      .then((s) => console.log(s))
      .catch(console.log);
    */
  }, []);
  return (
    <>
      <div
        className="aspect-[12/5] bg-cover relative z-0"
        style={{
          backgroundImage:
            "url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/ajztm40qDPqMONaSJhQ2PaNe2Xd.jpg)",
          backgroundColor:
            "linear-gradient(180deg, rgba(5,133,235,0) 82%, rgba(0,0,0,1) 100%)",
        }}
      >
        <div
          className="absolute w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,133,235,0) 75%, rgba(0,0,0,1) 100%)",
          }}
        />
        <div className="absolute w-full z-10 pl-[8vw] flex gap-4 flex-col justify-center h-3/4">
          <h1 className="text-4xl">Star Wars: Andor</h1>
          <p className="w-2/5 text-base">
            The tale of the burgeoning rebellion against the Empire and how
            people and planets became involved. In an era filled with danger,
            deception and intrigue, Cassian Andor embarks on the path that is
            destined to turn him into a rebel hero.
          </p>
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
      <div className="pl-[8vw]">content</div>
    </>
  );
}
