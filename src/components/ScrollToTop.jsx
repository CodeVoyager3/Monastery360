import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the modern standard for scrolling to top
    // "window.scrollTo" can also be used
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Optional: "smooth" for animation, or "instant" for immediate
    });
  }, [pathname]); // Rerun this effect whenever the pathname changes

  return null; // This component doesn't render anything itself
}

export default ScrollToTop;