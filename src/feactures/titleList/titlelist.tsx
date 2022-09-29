import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { MovieSmall } from "../../lib/base";
import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { DialogContent } from "../dialog/dialog";
import { TitleExpand } from "../title/title.expand";

export interface TitleListProps {
  title: MovieSmall[];
  name: string;
}

export function TitleList({ title, name }: TitleListProps): JSX.Element {
  const [page, setPage] = useState(0);
  const items = title.slice(0, 8 - title.length);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const base = window.innerWidth * 0.21 * 4;
    if (ref.current != null) {
      const pages = Math.round(ref.current.scrollWidth / base) - 1;
      if (page > pages) setPage(0);
      if (page < 0) setPage(pages);
      ref.current.scroll({
        behavior: "smooth",
        left: page * base,
      });
    }
  }, [page]);

  return (
    <Dialog.Root>
      <div className="mb-4">
        <header className="flex justify-between py-4 pr-4 select-none">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[#e5e5e5] leading-none">
              {name}
            </h1>
            <Dialog.Trigger asChild>
              <small className="text-blue-400 flex items-center gap-1 opacity-50 hover:opacity-90 focus:opacity-90 active:opacity-100 transition-all duration-300">
                View All <ChevronRightIcon className="w-3 h-3" />
              </small>
            </Dialog.Trigger>
          </div>
          <div>
            <button
              className="rounded-full inline-block mr-2"
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              className="rounded-full inline-block"
              onClick={() => setPage(page + 1)}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </header>
        <div className="relative">
          <div
            ref={ref}
            className="flex items-center gap-[1vw] h-full pr-4 overflow-x-auto scroll-hidden"
          >
            {items?.map((x, i) => (
              <TitleExpand data={x} key={`title-discover-${i}`} />
            ))}
          </div>
        </div>
        <DialogContent>
          <h1 className="text-2xl">Title section</h1>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {title?.map((x, i) => (
              <div
                className="w-full flex-shrink-0 flex-grow-0 flex"
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
        </DialogContent>
      </div>
    </Dialog.Root>
  );
}
