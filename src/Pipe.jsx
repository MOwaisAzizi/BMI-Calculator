
import React, { useState } from 'react';
import './Pipe.css'; // فایل CSS برای استایل

const Pipe = () => {
  const [fillLevel, setFillLevel] = useState(0); // مقدار پر شدن لوله

  const handleIncrease = () => {
    if (fillLevel < 100) {
        console.log('clicld');
        
      setFillLevel(fillLevel + 10); // افزایش مقدار پر شدن
    }
  };

  return (
    <div className="pipe-container" onClick={handleIncrease}>
      <div className="pipe" style={{ width: `${fillLevel}%` }} />
    </div>
  );
};

export default Pipe;
