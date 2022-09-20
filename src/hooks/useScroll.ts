import { useEffect, useState } from "react";

interface useScrollReturn {
  x: number;
  y: number;
}

export function useScroll(): useScrollReturn {
  const [y, setY] = useState(window.scrollY);
  const [x, setX] = useState(window.scrollX);

  useEffect(() => {
    function onScroll(e: Event): void {
      setY(window.scrollY);
      setX(window.scrollX);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { x, y };
}
