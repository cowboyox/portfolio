import { useEffect, useState } from 'react';

function useScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollToTop);

    return function cleanup() {
      window.removeEventListener('scroll', scrollToTop);
    };
  });

  const scrollToTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', scrollToTop);
  }

  return { showScroll, backToTop };
}

export default useScrollToTop;
