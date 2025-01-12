import React, { useState } from 'react';
import './Pipe.css';

const Pipe = () => {
  const [fillLevel, setFillLevel] = useState(0); 

  const handleIncrease = () => {
    if (fillLevel < 100) {
      setFillLevel(fillLevel + 10);
    }
  };

  return (
    <div className="pipe-container" onClick={handleIncrease}>
      {/* <div className="pipe" style={{ width: `${fillLevel}%`}} > */}
        <span className='sp1'></span>
        <span className='sp2'></span>
        <span className='sp3'></span>
      {/* </div> */}

      <div className="pipe" style={{position:'absolute', top:'-5px', left: `${fillLevel}%`}}>l</div>
   
    </div>
  );
};

export default Pipe;
