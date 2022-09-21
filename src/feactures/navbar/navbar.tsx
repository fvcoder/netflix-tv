import classnames from "classnames";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  FireIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Navbar(): JSX.Element {
  return (
    <nav
      className={classnames(
        "top-0 bottom-0 left-0 h-full w-[8vw] transition-colors duration-300 bg-transparent fixed z-10"
      )}
    >
      <ul className="w-full h-full flex flex-col items-center justify-center gap-12">
        <li>
          <Link to="/search">
            <MagnifyingGlassIcon className="w-[1.5vw] h-[1.5vw]" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <HomeIcon className="w-[1.5vw] h-[1.5vw]" />
          </Link>
        </li>
        <li>
          <Link to="/trends">
            <FireIcon className="w-[1.5vw] h-[1.5vw]" />
          </Link>
        </li>
        <li>
          <Link to="/mylist">
            <PlusIcon className="w-[1.5vw] h-[1.5vw]" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
