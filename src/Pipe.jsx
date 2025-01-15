import { useState } from 'react';
import './Pipe.css';
import { FaPerson } from "react-icons/fa6";
import { GiPerson } from "react-icons/gi";

const Pipe = ({result}) => {
  const [fillLevel, setFillLevel] = useState(0);

  const handleIncrease = () => {
    if (fillLevel < 100) {
      setFillLevel(fillLevel + 10);
    }
  };
  
  return (
<div className='containerAllPipe'>
<div className='number-contianer'>
<span className='numbers under'>13</span>
<span className='numbers normal'>18.5</span>
<span className='numbers over'>25</span>
<span className='numbers last'>38</span>
</div>

  <div style={{display:'flex'}}>
  <GiPerson color='white' size={'25px'} style={{marginTop:'5px'}}/>
    <div className="pipe-container" onClick={handleIncrease}>
        <span className='sp1'>Skinny</span>
        <span className='sp2'>Normal</span>
        <span className='sp3'>Overweight</span>
      <div className="pipe" style={{position:'absolute', top:'-26px',transition: 'all 0.5s' , left:`${((result-14)/(24)) * 100}%`}}>&darr;</div>
    </div>
  <FaPerson color='white' size={'25px'} style={{marginTop:'5px'}}/>

  </div>

</div>
  );
};

export default Pipe;
