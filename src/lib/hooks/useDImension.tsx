import { useState, useEffect } from "react";

export default function useDimension() {
  const [dimension, setDimension] = useState({
    width: window ? window.innerWidth : 0,
    height: window ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimension;
}