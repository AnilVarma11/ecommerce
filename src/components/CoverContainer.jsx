import React from 'react';
import watch from '../img/watch1.jpg';
import mobile from '../img/mobile1.png';
import '../styles/Cover.css';

const CoverContainer = () => {
    return (
        <div className='cover'>
            <div className='cover1'>
              <img src={watch} alt="watch" />
            </div>
            <div className='cover2'>
               <img src={mobile} alt="mobile" />
            </div>
        </div>
    );
}

export default CoverContainer;
