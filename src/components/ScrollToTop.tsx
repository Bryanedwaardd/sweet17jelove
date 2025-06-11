import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollStep = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollStep);
        window.scrollTo(0, currentPosition - currentPosition / 10);
      }
    };
    scrollStep();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
