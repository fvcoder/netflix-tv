import { useLayoutEffect, useState } from "react";

export function useWindowSize(): { x: number; y: number } {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useLayoutEffect(() => {
    function updateSize(): void {
      setX(window.innerWidth);
      setY(window.innerHeight);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { x, y };
}
