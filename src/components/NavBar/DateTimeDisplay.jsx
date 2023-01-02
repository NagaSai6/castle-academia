import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='navbar_counter_value' style={{color : "#FBB034"}}>{value}</p>
      <span className='navbar_counter_type' style={{color : "#FBB034"}}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;