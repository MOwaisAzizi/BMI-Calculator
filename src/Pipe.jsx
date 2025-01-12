import React, { useState } from 'react';
import './Pipe.css';

const Pipe = ({result}) => {
  const [fillLevel, setFillLevel] = useState(0);

  const handleIncrease = () => {
    if (fillLevel < 100) {
      setFillLevel(fillLevel + 10);
    }
  };

  console.log(((result-15)/(38-15)) * 100);
  
  return (
<div>
<div className='number-contianer'>
<span className='numbers under'>15</span>
<span className='numbers normal'>17</span>
<span className='numbers over'>23</span>
<span className='numbers last'>38</span>
</div>

    <div className="pipe-container" onClick={handleIncrease}>
        <span className='sp1'>Underweight</span>
        <span className='sp2'>Normal</span>
        <span className='sp3'>Overweight</span>
      <div className="pipe" style={{position:'absolute', top:'-10px', left:`${((result-15)/(23)) * 100}%`}}>l</div>
    </div>
</div>
  );
};

export default Pipe;
