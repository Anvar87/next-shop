import React, { useRef } from 'react';
import { IMaskInput } from 'react-imask';

import './input.css';

const Input = ({ mask, placeholder = ''}) => {
  const ref = useRef(null);
  const inputRef = useRef(null);

  return (
    <div className='input-block'>
      <IMaskInput
        className='input-mask'
        mask={mask}
        unmask={true}
        ref={ref}
        inputRef={inputRef}
        onAccept={
          (value, mask) => console.log(value)
        }
        placeholder={placeholder}
      />
    </div>
  )
};

export default Input;