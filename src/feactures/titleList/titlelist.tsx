import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { MovieSmall } from "../../lib/base";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

export interface TitleListProps {
  title: MovieSmall[];
}

export function TitleList({ title }: TitleListProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const { x } = useWindowSize();
  useEffect(() => {
    console.log(x);
  }, [x]);

  useEffect(() => {
    if (ref.current != null) {
      // ref.current.onscroll = (e) => console.log(e);
      ref.current.addEventListener("resize", cardsOnResize);

      function cardsOnResize(e: Event): void {
        console.log(ref.current?.offsetWidth, ref.current?.scrollWidth);
      }

      return () => {
        ref.current?.removeEventListener("resize", cardsOnResize);
      };
    }
  }, [ref]);

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
      <AnimatePresence>
        <div className="relative">
          <motion.div
            ref={ref}
            className="flex items-center gap-4 h-full overflow-x-auto scroll-hiddens"
          >
            {title?.map((x, i) => (
              <motion.div
                className="w-[300px] flex-shrink-0 flex-grow-0 flex"
                key={`title-discover-${i}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${x.backdrop_path}`}
                  alt={x.title}
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatePresence>
    </section>
  );
}
