import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import '../App.css';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 850) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 cursor-pointer animate-fadeIn transition-opacity ${
        showScroll ? 'opacity-70' : 'opacity-0'
      }`}
      onClick={scrollTop}
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#888',
        display: showScroll ? 'flex' : 'none',
      }}
    >
      <FaArrowCircleUp
        style={{
          width: '100%',
          height: '100%',
          color: '#fff',
        }}
      />
    </div>
  );
};

export default ScrollArrow;
