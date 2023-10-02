import React, { useEffect } from 'react';
import './Cursor.css';

const AnimCursor = () => {
  const cursorRef = React.useRef(null);

  useEffect(() => {
    const onMouseMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${event.pageY}px`;
        cursorRef.current.style.left = `${event.pageX}px`;
      }
      createSparkle(event.pageX, event.pageY);
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const createSparkle = (x, y) => {
    const sparkle = document.createElement('div');
    sparkle.style.top = `${y}px`;
    sparkle.style.left = `${x}px`;
    sparkle.style.transform = `translate(-50%, -50%) translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
    sparkle.className = 'sparkle';
    document.body.appendChild(sparkle);

    // Remove after animation
    sparkle.addEventListener('animationend', () => {
      sparkle.remove();
    });
  };

  return <div className="cursor" ref={cursorRef}></div>;
}

export default AnimCursor;
