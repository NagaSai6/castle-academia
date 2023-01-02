import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='mx-1' style={{color : "#FBB034"}}>{value}</p>
      <span style={{color : "#FBB034"}}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;