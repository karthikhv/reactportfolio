import React, { useEffect, useCallback, useMemo } from 'react';
import confetti from 'canvas-confetti';

const ConfettiComponent = () => {
  const count = 200;
  
  const defaults = useMemo(() => ({
    origin: { y: 0.7 }
  }), []); // Empty dependency array because 'defaults' doesn't depend on any props or state

  const fire = useCallback((particleRatio, opts) => {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }, [defaults]);

  useEffect(() => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [fire]);

  return (
    <div>
    
    </div>
  );
};

export default ConfettiComponent;
